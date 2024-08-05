import React from "react";
import "../css/Hero.css";
import heroImg from "../img/hero.gif";
import { TypeAnimation } from "react-type-animation";
import { useTheme } from "../context/ThemeContext";
import HeroDark from "../darkmodecomponents/HeroDark";

const Hero = () => {
  const { theme } = useTheme();
  return theme == "dark" ? (
    <HeroDark />
  ) : (
    <div id="section1">
      <div className="hero-section-1">
        <div className="hero-text">
          <h1>MERN Full Stack Developer 👋</h1>
          <p className="sub-text">
            <TypeAnimation
              sequence={[
                "Hi, I'm Sanket Dadali. A passionate MERN Stack Developer",
                1000,
                "Hi, I'm Sanket Dadali. A passionate Technical Content Writer",
                1000,
                "Hi, I'm Sanket Dadali. A passionate Open Source Enthusiat",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </p>
          <a
            href="https://drive.google.com/file/d/1zhKIhLotIovMfQuxN6riwhj964xnG0fi/view?usp=sharing"
            target="_blank"
          >
            <div className="resume-btn">Click Me For Resume</div>
          </a>
          <div className="hero-socials">
            <a
              className="footer-linkedin"
              href="https://www.linkedin.com/in/sanket-dadali-537028241/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="tabler-icon tabler-icon-brand-linkedin"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M8 11l0 5"></path>
                <path d="M8 8l0 .01"></path>
                <path d="M12 16l0 -5"></path>
                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
              </svg>
            </a>
            <a
              className="footer-github"
              href="https://github.com/poseidonsanket"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="tabler-icon tabler-icon-brand-github"
              >
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </svg>
            </a>
          </div>
        </div>
        <img className="hero-banner" src={heroImg}></img>
      </div>
    </div>
  );
};

export default Hero;
