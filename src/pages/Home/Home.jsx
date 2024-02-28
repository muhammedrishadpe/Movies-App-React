import React, { useEffect, useState } from "react";
import { Logout } from "../Logout/Logout";
export const Home = () => {
  const [moviesList, setMoviesList] = useState([]);
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
  console.log(moviesList);
  return (
    <div className="movies-container">
      {moviesList?.map((data) => (
        <div key={data.id}>
          <h1>{data.original_title}</h1>
          <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} />
        </div>
      ))}
      <Logout />
    </div>
  );
};
