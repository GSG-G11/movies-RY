import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <p>Header Component</p>
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
    </>
  );
}

export default Nav;
