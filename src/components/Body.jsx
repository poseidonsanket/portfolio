import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import About from "./About";
import { FaAngleUp } from "react-icons/fa";
import "../css/Body.css";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import { useTheme } from "../context/ThemeContext";
import { Toaster } from "react-hot-toast";

const Body = () => {
  const { theme } = useTheme();
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

  const buttonClassName = theme == "dark" ? "top-to-btm-dark" : "top-to-btm";
  const subbuttonClassName =
    theme == "dark"
      ? "icon-position-dark icon-style-dark"
      : "icon-position icon-style";
  return (
    <div>
      <div>
        <Hero />
        <About />
        <div className={buttonClassName}>
          {showTopBtn && (
            <FaAngleUp className={subbuttonClassName} onClick={goToTop} />
          )}
        </div>
        <Toaster position="top-center"/>
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Body;
