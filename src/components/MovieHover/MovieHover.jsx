import React from "react";
import "../MovieHover/MovieHover.css";
import fav from "../../assets/heart.png";

export const MovieHover = ({overview, title}) => {
  return (
    <div className="movie-details-container">
      <div className="content-container">
     <h6>{title}</h6>
        <p style={{fontSize:"8px"}} className="movie-details">{overview}</p>
        </div>
      <div style={{display:'flex', flexDirection:"row", justifyContent:"space-between", padding:"10px"}}className="hover-page">
      <button>Watch</button>
      <img className="heart-img" src={fav} alt="" />
    </div>
    </div>
  );
};
