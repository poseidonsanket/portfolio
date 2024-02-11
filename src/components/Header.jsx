import React from "react";
import "../css/Header.css";

const Header = () => {
  return (
    <div className="header-layout">
      <h3 className="logo">Sanket.dev</h3>
      <ul className="header-list">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Resume</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Header;
