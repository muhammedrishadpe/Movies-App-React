import React, { useContext, useEffect, useState } from "react";
import { Logout } from "../Logout/Logout";
import { MovieHover } from "../../components/MovieHover";
import {useDarkMode} from '../../context/DarkModeContext'
import "../Home/Home.css";
export const Home = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);


  const handleHover = (index) => {
    setHoveredIndex(index);
  };
  const getMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=a1c453f07dc75f98d9fb4a3c4ee5abfc&language=en-US&page=1&include_adult=false"
    )
      .then((res) => res.json())
      .then((json) => setMoviesList(json.results));
  };
  useEffect(() => {
    getMovies();
  }, []);
  const {darkMode} = useDarkMode();
  return (
    <div className= {'movies-main '}>
      <div className="movies-container grid-container">
        {moviesList?.map((data, index) => (
          <div
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleHover(null)}
            className="grid-item"
            key={data.id}
          >
            {hoveredIndex === index ? (
              <MovieHover overview={data.overview} title={data.original_title} />
            ) : (
              <img
                src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
