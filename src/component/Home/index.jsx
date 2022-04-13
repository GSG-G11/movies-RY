/* eslint-disable no-console */
import React from 'react';
import { Link } from 'react-router-dom';

function Home({ trendingMovies, trendingTV }) {
  return (
    <>
      <h1>Home</h1>
      <h2>Trending Movies</h2>
      {trendingMovies.slice(0, 5).map((movies) => <p key={movies.id}>{movies.title}</p>)}
      <Link to="/trendingMovies">Movies</Link>
      <h2>Trending TV Series</h2>
      {trendingTV.slice(0, 5).map((series) => <p key={series.id}>{series.name}</p>)}
      <Link to="/trendingSeries">Series</Link>
    </>
  );
}

export default Home;
