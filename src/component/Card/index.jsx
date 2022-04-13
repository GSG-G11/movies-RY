import React, { useState } from 'react';
import './Card.css';

const IMGPATH = 'https://image.tmdb.org/t/p/w1280';

function Card({ film }) {
  const [description, setDescription] = useState(false);
  const descriptionHandle = () => setDescription(!description);
  return (
    <div className="card">
      <img src={IMGPATH + film.poster_path} alt="Movie Poster" />
      <div className="info">
        <h2>{film.title || film.name}</h2>
        <p className="vote-class">{film.vote_average}</p>
        <button type="submit" className="btn" onClick={descriptionHandle}>{!description ? 'Read More' : 'Read Less'}</button>
        {description && <p>{`${film.overview.substring(0, 250)}...`}</p> }
      </div>
    </div>
  );
}

export default Card;
