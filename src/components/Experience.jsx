import React from "react";
import "../css/Experience.css";
import eliteImg from "../img/elite.png";
import gfgImg from "../img/gfg.svg";
import { useTheme } from "../context/ThemeContext";
import ExperienceDark from "../darkmodecomponents/ExperienceDark";

const Experience = () => {
  const { theme } = useTheme();
  return theme == "dark" ? (
    <ExperienceDark />
  ) : (
    <div id="section3">
      <h1 className="experience-heading">Experience</h1>
      <div className="experience-main">
        <div className="experience-section-1">
          <div className="experience-elite">
            <img src={eliteImg} />
          </div>
          <div className="experience-card-stepper">
            <div className="experience-dot"></div>
            <div className="experience-line"></div>
          </div>

          <div className="experience-card-1">
            <div className="experience-card-1-s-1">
              <div className="experience-card-1-s-1-1">
                <h3>Python-Django Intern</h3>
                <a href="https://www.elitesoftwares.co.in/" target="_blank">
                  <p>Elite Softwares</p>
                </a>
              </div>
              <div className="experience-card-1-s-1-2">
                <p>Nov 2023 – Jan 2024</p>
                <p>Pune, Maharashtra</p>
              </div>
            </div>
            <div className="experience-card-1-s-2">
              Configured and managed domain name hosting for web applications.
              Contributed to WordPress development tasks, implementing new
              features and optimizations. Engaged in design and development
              activities using the Django web framework. Collaborated with
              cross-functional teams in daily stand-ups and code reviews.
            </div>
          </div>
        </div>
        <div className="experience-section-2">
          <div className="experience-gfg">
            <img src={gfgImg} />
          </div>
          <div className="experience-card-stepper">
            <div className="experience-dot"></div>
          </div>
          <div className="experience-card-2">
            <div>
              <div className="experience-card-1-s-1">
                <div className="experience-card-1-s-1-1">
                  <h3>Technical Content Writer</h3>
                  <a href="https://www.geeksforgeeks.org/" target="_blank">
                    <p>GeeksForGeeks</p>
                  </a>
                </div>
                <div className="experience-card-1-s-1-2">
                  <p>Feb 2024 – April 2024</p>
                  <p>Remote(Freelance)</p>
                </div>
              </div>
              <div className="experience-card-1-s-2">
                Authored insightful articles on PostgreSQL and MariaDB,Python.
                Crafted user-friendly tutorials catering to both beginners and
                experienced professionals, fostering a deeper understanding of
                database management and Python programming. Accumulated 20000+
                views on articles, indicating a strong impact and resonance
                within the technical community.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-view">
        <div className="mobile-img">
          <div className="experience-elite">
            <img src={eliteImg} />
          </div>
        </div>
        <div className="experience-card-1">
          <div className="experience-card-1-s-1">
            <div className="experience-card-1-s-1-1">
              <h3>Python-Django Intern</h3>
              <a href="https://www.elitesoftwares.co.in/" target="_blank">
                <p>Elite Softwares</p>
              </a>
            </div>
            <div className="experience-card-1-s-1-2">
              <p>Oct 2022 – Jan 2023</p>
              <p>Pune, Maharashtra</p>
            </div>
          </div>
          <div className="experience-card-1-s-2">
            Configured and managed domain name hosting for web applications.
            Contributed to WordPress development tasks, implementing new
            features and optimizations. Engaged in design and development
            activities using the Django web framework. Collaborated with
            cross-functional teams in daily stand-ups and code reviews.
          </div>
        </div>
        <div className="mobile-img">
          <div className="experience-gfg">
            <img src={gfgImg} />
          </div>
        </div>
        <div className="experience-card-2">
          <div>
            <div className="experience-card-1-s-1">
              <div className="experience-card-1-s-1-1">
                <h3>Technical Content Writer</h3>
                <a href="https://www.geeksforgeeks.org/" target="_blank">
                  <p>GeeksForGeeks</p>
                </a>
              </div>
              <div className="experience-card-1-s-1-2">
                <p>Jan 2024 – Present</p>
                <p>Remote(Freelance)</p>
              </div>
            </div>
            <div className="experience-card-1-s-2">
              Authored insightful articles on PostgreSQL and MariaDB,Python.
              Crafted user-friendly tutorials catering to both beginners and
              experienced professionals, fostering a deeper understanding of
              database management and Python programming. Accumulated 1000+
              views on articles, indicating a strong impact and resonance within
              the technical community.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
