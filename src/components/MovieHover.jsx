import React from "react";
import "../components/MovieHover.css";
import fav from "../assets/heart.png";

export const MovieHover = () => {
  return (
    <div className="hover-page">
      <button>Watch</button>
      <img className="heart-img" src={fav} alt="" />
    </div>
  );
};
