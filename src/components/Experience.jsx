import React from "react";
import "../css/Experience.css";
import eliteImg from "../img/elite.jpeg";
import gfgImg from "../img/gfg.svg";

const Experience = () => {
  return (
    <div>
      <h1 className="experience-heading">Experience</h1>
      <div className="experience-main">
        <div className="experience-img">
          <div className="experience-elite">
            <img src={eliteImg} />
          </div>
          <div className="experience-gfg">
            <img src={gfgImg} />
          </div>
        </div>
        <div className="experience-bullets">
            <div className="experience-dot"></div>
            <div className="experience-line"></div>
            <div className="experience-dot"></div>
        </div>
        <div className="experience-cards">
            <div className="experience-card-1">
                <p>Python-Django Intern</p>
            </div>
            <div className="experience-card-2">
                <p>Technical Content Writer</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
