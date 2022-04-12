/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';

function Home() {
  console.log('home');

  console.log(1111, process.env.REACT_APP_API_KEY);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTV, setTrendingTV] = useState([]);
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    console.log('useEffect');
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`)
      .then((res) => res.json())
      .then((results) => {
        setTrendingMovies(results.results);
      });
    fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.REACT_APP_API_KEY}`)
      .then((res) => res.json())
      .then((results) => {
        setTrendingTV(results.results);
      });
    return () => { setTrendingMovies([]); setTrendingTV([]); };
  }, []);
  const clickShow = () => {
    setShowMore((prev) => !prev);
    // showMore ? 'Show more >' : 'Show less <';
  };
  return (
    <>
      {console.log('render')}
      <h1>Home</h1>
      {console.log('first render Movies', trendingMovies)}
      {console.log('first render TV shows', trendingTV)}
      {/* {trendingMovies.map((movies) => <p key={movies.id}>{movies.title}</p>)} */}
      {trendingMovies.slice(0, showMore ? trendingMovies.length : 4).map((movies) => <p key={movies.id}>{movies.title}</p>)}
      <button onClick={clickShow}>more</button>
      <p>test2</p>
    </>
  );
}

export default Home;
