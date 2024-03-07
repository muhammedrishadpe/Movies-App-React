import React, { Fragment, useContext } from "react";
import { Logout } from "../Logout/Logout";
import "../Header/Header.css";

import { useAuth } from "../../context/AuthContext";
import { useDarkMode } from "../../context/DarkModeContext";

export const Header = () => {
  const { user } = useAuth();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const handleClick = () => {
    toggleDarkMode();
  };
  return (
    <div className="header-container">
      <h1>Moovis</h1>
      <div>
        <button className="darkmode"
          style={{
            width: "50px",
            background: "transparent",
            color: darkMode ? "white" : "black",
            border: "solid 2px blue",
          }}
          onClick={handleClick}
        >
          {darkMode ? "Light" : "Dark"}
        </button>
        {user && <Logout />}{" "}
      </div>
    </div>
  );
};
