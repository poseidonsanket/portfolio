import React, { useState } from "react";
import "../css/Header.css";


const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = () => {
    console.log(openMenu);
    setOpenMenu((openMenu) => true);
  };
  const closeMenu = () => {
    console.log(openMenu);
    setOpenMenu((openMenu) => false);
  };

  return (
    <div>
      <nav>
        <h3 className="logo">Sanket.dev</h3>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20" rx="10"></rect>
            <rect y="30" width="100" height="20" rx="10"></rect>
            <rect y="60" width="100" height="20" rx="10"></rect>
          </svg>
        </div>
        <ul className="header-list">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div
        className={`off-screen-menu ${openMenu ? "open-menu" : "close-menu"}`}
      >
        <ul className="off-screen-list">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        <span className="cross" onClick={closeMenu}>
          <svg
            className="cross"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="tabler-icon tabler-icon-x"
          >
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Header;
