import React, { useEffect, useState } from 'react';
import Card from '../Card';

function Search() {
  const [inputValue, setinputValue] = useState('');
  const [data, setData] = useState([]);
  const inputHandle = (e) => setinputValue(e.target.value);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    fetch(`https://api.themoviedb.org/3/search/movie?&api_key=${process.env.REACT_APP_API_KEY}&query=${!inputValue ? 'search' : inputValue}`, { signal })
      .then((res) => res.json())
      .then((results) => {
        console.log('data from api', results);
        setData(results.results);
      });

    return () => { controller.abort(); setData([]); };
  }, [inputValue]);

  return (
    <>
      <input type="text" onChange={inputHandle} value={inputValue} placeholder="Search" />
      {console.log(data)}
      {data.map((film) => <Card key={film.id} poster_path={film.poster_path} title={film.title} vote_average={film.vote_average} overview={film.overview} />)}
    </>
  );
}

export default Search;