import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <div className="header-main-div">
      <div className="links-in-header">
        <Link to="/" className="header-title">Reflex</Link>
        <Link to="/" className="header-seconders">Home</Link>
        <Link to="/trendingMovies" className="header-seconders">Movies</Link>
        <Link to="/trendingSeries" className="header-seconders">TV Shows</Link>
        <Link to="/search" className="header-seconders">Search</Link>
      </div>
    </div>

  );
}

export default Nav;
