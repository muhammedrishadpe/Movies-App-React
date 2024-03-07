import React from "react";
import "../footer/Footer.css";
import { useDarkMode } from "../../context/DarkModeContext";
export const Footer = () => {
  const { darkMode } = useDarkMode();
  return (
    <div
      className={
        darkMode
          ? "footer-container"
          : "footer-container footer-container-dark "
      }
    >
      <p>Questions? Call 1-844-505-2993</p>
      <div className="footer-items row">
        <div className="grid-box">
          <p>FAQ</p>
          <p>Cookie Preferences</p>
        </div>
        <div className="grid-box">
          {" "}
          <p>Help Center</p>
          <p>Corporate information</p>
        </div>
        <div className="grid-box">
          <p>Terms of Use</p>
          <p>Privact</p>
        </div>
        <div className="grid-box">
          {" "}
          <p>icons</p>
        </div>
      </div>
      <select className={darkMode ? "select-button" : "select-button-dark"}>
        <option value="English">English</option>
        <option value="German">German</option>
      </select>
    </div>
  );
};
