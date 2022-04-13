/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  console.log('home');
  console.log(1111, process.env.REACT_APP_API_KEY);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTV, setTrendingTV] = useState([]);
  // const [showMore, setShowMore] = useState(false);
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
        console.log(results);
        setTrendingTV(results.results);
      });
    return () => { setTrendingMovies([]); setTrendingTV([]); };
  }, []);
  // const clickShow = () => {
  //   setShowMore((prev) => !prev);
  //   // showMore ? 'Show more >' : 'Show less <';
  // };
  return (
    <>
      {console.log('render')}
      <h1>Home</h1>
      <h2>Trending Movies</h2>
      {trendingMovies.slice(0, 5).map((movies) => <p key={movies.id}>{movies.title}</p>)}
      <Link to="/trendingMovies">Movies</Link>
      <h2>Trending TV Series</h2>
      {console.log('render', trendingTV)}
      {trendingTV.slice(0, 5).map((series) => <p key={series.id}>{series.name}</p>)}
      <Link to="/trendingSeries">Series</Link>
      {/* <button onClick={clickShow}>more</button> */}
    </>
  );
}

export default Home;
