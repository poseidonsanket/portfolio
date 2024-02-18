import React from "react";
import "../css/About.css";
import aboutImg from "../img/about.png";

const About = () => {
  return (
    <div className="about-main">
      <div className="about-title">
        <h2>About Me</h2>
      </div>
      <div className="about-info">
        <span>
          Hey there this is Sanket Dadali 👋 <br /> I am currently pursuing my
          B.E from AISSMS College of Engineering Pune. <br />I am currently
          learning MERN Stack Development.
        </span>
        <img src={aboutImg} />  
      </div>
    </div>
  );
};

export default About;
