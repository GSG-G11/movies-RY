import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found-container">
      <h2>Lost your way?</h2>
      <p>Sorry, we can`t find that page. You`ll find lots to explore on the home page. </p>
      <Link to="/" className="not-found-home">Reflex Home</Link>
    </div>
  );
}

export default NotFound;
