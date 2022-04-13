import React, { useState } from 'react';
import './CardDescription.css'
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

function CardDescription({detailsAfilm}) {
    return (  
            <div className='card'>
                <img src={IMGPATH + detailsAfilm.poster_path} alt='Image not found' />
                <div className='info'>
                    <h2>{detailsAfilm.title}</h2>
                    <p className='vote-class'>{detailsAfilm.vote_average}</p>
                    <p>{detailsAfilm.overview} </p>
                    <p>original_language: {detailsAfilm.original_language}</p>
                    <span>release_date: {detailsAfilm.release_date} </span>
                    {/* <button className='btn'>back</button> */}
                </div>
            </div>
    );
}

export default CardDescription;