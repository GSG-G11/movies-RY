import React, { useState } from "react";
import CardDescription from "../CardDescription";
import "./Card.css"
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

function Card({film}) {
    // console.log(film)
    const[description, setDescription] = useState(false);
    const descriptionHandle = () => setDescription(true);
    return (
      <div className="card">
          <img src={IMGPATH + film.poster_path} alt="Movie Poster" />
          <div className="info">
              <h2>{film.title}</h2>
              <i class="fa-solid fa-star"></i>
              <p className="vote-class">{film.vote_average}</p>
              <button className="btn" onClick={descriptionHandle} >Read More</button>
              {description && 
              <CardDescription detailsAfilm={film} /> 
                }
              {/* <p>{overview}</p> */}
          </div>
      </div>
    );
}

export default Card;
