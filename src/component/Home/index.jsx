/* eslint-disable no-console */
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card';
import './Home.css';

function Home({ trendingMovies, trendingTV }) {
  return (
    <>
    <h2 className="title">Trending Movies</h2>
    <div className="container">
      {trendingMovies.slice(0, 5).map((movies) => <Card key={movies.id} film={movies}/>)}
      </div>
      <Link to="/trendingMovies" className="go-to-certain-page">More Trending Movies</Link>
      <h2 className="title">Trending TV Shows</h2>
      <div className="container">
      {trendingTV.slice(0, 5).map((series) => <Card key={series.id} film={series}/>)}
      </div>
      <Link to="/trendingSeries" className="go-to-certain-page">More Trending TV Shows</Link>

    </>
  );
}

export default Home;
