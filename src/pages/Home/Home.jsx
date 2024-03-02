import React, { useEffect, useState } from "react";
import { Logout } from "../Logout/Logout";
import "../Home/Home.css";
import { MovieHover } from "../../components/MovieHover";
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
  return (
    <div className="movies-main">
      <div className="movies-container grid-container">
        {moviesList?.map((data, index) => (
          <div
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleHover(null)}
            className="grid-item"
            key={data.id}
          >
            {hoveredIndex === index ? (
              <MovieHover />
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
