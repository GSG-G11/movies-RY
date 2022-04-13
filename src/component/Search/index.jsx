import React, { useEffect, useState } from 'react';
import Card from '../Card';

function Search() {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);
  const inputHandle = (e) => setInputValue(e.target.value);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    fetch(`https://api.themoviedb.org/3/search/movie?&api_key=${process.env.REACT_APP_API_KEY}&query=${!inputValue ? 'search' : inputValue}`, { signal })
      .then((res) => res.json())
      .then((results) => {
        setData(results.results);
      });

    return () => { controller.abort(); setData([]); };
  }, [inputValue]);

  return (
    <>
      <input type="text" onChange={inputHandle} value={inputValue} placeholder="Search" />
      <div className='container'>
      {data.map((film) => <Card key={film.id} film={film}/>)}
    </div>
    </>
  );
}

export default Search;
