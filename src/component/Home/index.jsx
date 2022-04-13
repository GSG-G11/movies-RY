/* eslint-disable no-console */
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home({ trendingMovies, trendingTV }) {
  return (
    <div className="container">
      <h2 className="title">Trending Movies</h2>
      {trendingMovies.slice(0, 5).map((movies) => <p key={movies.id}>{movies.title}</p>)}
      <Link to="/trendingMovies" className="go-to-certain-page">More Trending Movies</Link>
      <h2 className="title">Trending TV Shows</h2>
      {trendingTV.slice(0, 5).map((series) => <p key={series.id}>{series.name}</p>)}
      <Link to="/trendingSeries" className="go-to-certain-page">More Trending TV Shows</Link>
    </div>
  );
}

export default Home;
