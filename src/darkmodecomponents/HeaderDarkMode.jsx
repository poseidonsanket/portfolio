import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { FaWpforms } from "react-icons/fa6";
import { VscFileCode } from "react-icons/vsc";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";
import { IoMenu } from "react-icons/io5";
import "../css/HeaderDarkMode.css";

const Header = () => {
  const [openDarkMenu, setDarkOpenMenu] = useState(null);

  const { theme, toggleTheme } = useTheme();

  const toggleDarkMenu = () => {
    console.log(openDarkMenu);
    setDarkOpenMenu((openDarkMenu) => true);
  };
  const closeMenu = () => {
    console.log(openDarkMenu );
    setDarkOpenMenu((openDarkMenu) => false);
  };

  return (
    <div id="header">
      <nav className="dark-mode">
        <h3 className="logo-dark">Sanket.dev</h3>
        <div className="hamburger-menu-main-dark">
          <div className="hamburger-menu-dark" onClick={toggleDarkMenu}>
            <IoMenu style={{ width: "3.5rem", height: "3.5rem" }} />
          </div>
          <span className="dark-mode-button-dark" onClick={toggleTheme}>
            {theme === "light" ? (
              <MdDarkMode style={{ fontSize: "2rem" }} />
            ) : (
              <CiLight style={{ fontSize: "2rem" }} />
            )}
          </span>
        </div>

        <ul className="header-list-dark-mode">
          <li>
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="section5"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li>
          <li className="dark-mode-button-dark" onClick={toggleTheme}>
            {theme === "light" ? (
              <MdDarkMode style={{ fontSize: "2rem" }} />
            ) : (
              <CiLight style={{ fontSize: "2rem" }} />
            )}
          </li>
        </ul>
      </nav>
      <div
        className={`off-screen-menu-dark ${openDarkMenu ? "open-menu-dark" : "close-menu-dark"}`}
      >
        <div className="cross-dark" onClick={closeMenu}>
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
        </div>
        <div className="mob-list">
          <ul className="off-screen-list">
            <li>
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={closeMenu}
              >
                <FaHome style={{ paddingTop: "6px" }} /> Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={closeMenu}
              >
                <FaUser style={{ paddingTop: "6px" }} /> About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={closeMenu}
              >
                <BsFillSuitcaseLgFill style={{ paddingTop: "6px" }} />{" "}
                Experience
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={closeMenu}
              >
                <VscFileCode style={{ paddingTop: "6px" }} /> Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={closeMenu}
              >
                <FaWpforms style={{ paddingTop: "6px" }} /> Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
