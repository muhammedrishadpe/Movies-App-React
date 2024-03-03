import React from "react";
import "../components/MovieHover.css";
import fav from "../assets/heart.png";

export const MovieHover = ({overview}) => {
  return (
    <div className="movie-details-container">
      <p style={{fontSize:"8px"}} className="movie-details">{overview}</p>
      <div style={{display:'flex', flexDirection:"row", justifyContent:"space-around", padding:"10px"}}className="hover-page">
      <button>Watch</button>
      <img className="heart-img" src={fav} alt="" />
    </div>
    </div>
  );
};
