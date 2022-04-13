import React from 'react';

function Card({
  posterPath, title, voteAverage, overview,
}) {
  return (
    <div>
      <img src={posterPath} alt="Movie Poster" />
      <h2>{title}</h2>
      <p>{voteAverage}</p>
      <p>{overview}</p>
    </div>
  );
}

export default Card;
