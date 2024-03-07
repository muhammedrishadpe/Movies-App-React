import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MovieHover } from "../../components/MovieHover/MovieHover.jsx";
import { useDarkMode } from "../../context/DarkModeContext";
import { SearchInput } from "../../components/Search/SearchInput/SearchInput.jsx";
import { Footer } from "../footer/Footer.jsx";
import { Header } from "../Header/Header.jsx";
import "../Home/Home.css";

const API_URL = "https://api.themoviedb.org/3/discover/movie";

export const Home = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [filtermoviesList, setFilterMoviesList] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [searchInputValue, setSearchInputValue] = useState("");
  const { darkMode } = useDarkMode();

  const handleChange = (event) => {
    setSearchInputValue(event.target.value);
    const newFilteredItems = moviesList.filter((data) => {
      return data.title
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });

    setFilterMoviesList(newFilteredItems);
  };
  const handleHover = (index) => {
    setHoveredIndex(index);
  };
  const getMovies = async () => {
    const response = await axios(API_URL, {
      params: {
        api_key: "a1c453f07dc75f98d9fb4a3c4ee5abfc",
        language: "en-US",
        page: "1",
        include_adult: "false",
        query: searchInputValue,
      },
    }).catch((error) => {
      setError(error);
    });
    setMoviesList(response.data.results);
    setFilterMoviesList(response.data.results);
  };

  const clearSearch = () => {
    setSearchInputValue("");
    setFilterMoviesList(moviesList);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div
      style={{ backgroundColor: darkMode ? "black" : "white" }}
      className={"movies-main "}
    >
      <Header />
      <div className="search-container">
        <SearchInput
          searchInputValue={searchInputValue}
          handleChange={handleChange}
          clearSearch={clearSearch}
        />
      </div>
      <div className="movies-container grid-container">
        {filtermoviesList?.map((data, index) => (
          <div
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleHover(null)}
            className="grid-item"
            key={data.id}
          >
            {hoveredIndex === index ? (
              <MovieHover
                overview={data.overview}
                title={data.original_title}
              />
            ) : (
              <img
                src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
              />
            )}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};
