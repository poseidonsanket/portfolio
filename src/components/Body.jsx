import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import About from "./About";
import { animateScroll as scroll } from "react-scroll";
import { FaAngleUp } from "react-icons/fa";
import "../css/Body.css";
import Experience from "./Experience";

const Body = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div>
        <Hero />
        <About />
        <div className="top-to-btm">
          {showTopBtn && (
            <FaAngleUp className="icon-position icon-style" onClick={goToTop} />
          )}
        </div>
        <Experience/>
      </div>
    </div>
  );
};

export default Body;
