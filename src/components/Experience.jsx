import React from "react";
import "../css/Experience.css";
import eliteImg from "../img/elite.jpeg";
import gfgImg from "../img/gfg.svg";

const Experience = () => {
  return (
    <div id="section3">
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
            <div className="experience-card-1-s-1">
              <div className="experience-card-1-s-1-1">
                <h3>Python-Django Intern</h3>
                <a href="https://www.elitesoftwares.co.in/"><p>Elite Softwares</p></a>
              </div>
              <div className="experience-card-1-s-1-2">
                <p>Oct 2022 – Jan 2023</p>
                <p>Pune, Maharashtra</p>
              </div>
            </div>
            <div className="experience-card-1-s-2">
              Used HTML,CSS,Javascript to create good quality FrontEnd for a
              website.Used Django framework to develop backend for
              websites.Gained Advance Knowlege About Domanin name and
              Hosting.Learned about Cloud Hosting,VPS Hosting,Dedicated
              Hosting,WordPress Hosting
            </div>
          </div>
          <div className="experience-card-2">
            <div>
            <div className="experience-card-1-s-1">
              <div className="experience-card-1-s-1-1">
                <h3>Technical Content Writer</h3>
                <a href="https://www.geeksforgeeks.org/"><p>GeeksForGeeks</p></a>
              </div>
              <div className="experience-card-1-s-1-2">
                <p>Jan 2024 – Present</p>
                <p>Remote(Freelance)</p>
              </div>
            </div>
            <div className="experience-card-1-s-2">
              Contributed and Published 5 Articles on Database Topics like PostgreSQL And MariaDB.OverAll Accumulated 300+ views on the Articles.
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
