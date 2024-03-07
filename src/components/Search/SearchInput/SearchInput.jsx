import React from "react";
import "../SearchInput/SearchInput.css";
import { useDarkMode } from "../../../context/DarkModeContext";
export const SearchInput = ({
  searchInputValue,
  handleChange,
  clearSearch,
}) => {
  const { darkMode } = useDarkMode();
  return (
    <div className="search-input-container">
      <input
        className={darkMode ? "search-input-darkmode" : "search-input"}
        type="text"
        value={searchInputValue}
        placeholder="Search here..."
        onChange={handleChange}
      />
      <button onClick={clearSearch}>
        <img
          width="31"
          height="31"
          style={{
            objectFit: "contain",
            filter: darkMode
              ? "invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)"
              : "none",
          }}
          src="https://logowik.com/content/uploads/images/close1437.jpg"
          alt=""
        />
      </button>
    </div>
  );
};
