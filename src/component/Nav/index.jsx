import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <p>Header Component</p>
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
      <Link to="/trendingMovies">Movies</Link>
      <Link to="/trendingSeries">Series</Link>
    </>
  );
}

export default Nav;
