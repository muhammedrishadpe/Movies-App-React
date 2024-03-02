import React from "react";
import "../footer/Footer.css";
export const Footer = () => {
  return (
    <div>
      <div className="footer-container">
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
        <div className="grid-box">     <p>icons</p></div>
     
        </div>
        <button>English</button>
      </div>
    </div>
  );
};
