import React from 'react';

function Card({ poster_path, title, vote_average, overview }) {
    return (
        <div>
            <img src={poster_path} alt='Image not found' />
            <h2>{title}</h2>
            <p>{vote_average}</p>
            <p>{overview}</p>
        </div>

    );
}

export default Card;