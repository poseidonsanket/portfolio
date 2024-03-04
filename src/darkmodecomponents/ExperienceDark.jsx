import React from "react";
import "../css/ExperienceDark.css";
import eliteImg from "../img/elite.jpeg";
import gfgImg from "../img/gfg.svg";

const Experience = () => {
  return (
    <div id="section3">
      <h1 className="experience-heading-dark">Experience</h1>
      <div className="experience-main">
        <div className="experience-section-1">
          <div className="experience-elite-dark">
            <img src={eliteImg} />
          </div>
          <div className="experience-card-stepper">
            <div className="experience-dot-dark"></div>
            <div className="experience-line-dark"></div>
          </div>

          <div className="experience-card-1-dark">
            <div className="experience-card-1-s-1-dark">
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
              Identified and resolved technical issues to ensure continuous
              application functionality. Conducted thorough testing and
              debugging procedures for high-quality, reliable code. Demonstrated
              a commitment to ongoing learning and quick adaptation to new
              technologies.
            </div>
          </div>
        </div>
        <div className="experience-section-2">
          <div className="experience-gfg-dark">
            <img src={gfgImg} />
          </div>
          <div className="experience-card-stepper">
            <div className="experience-dot-dark"></div>
          </div>
          <div className="experience-card-2-dark">
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
                views on articles, indicating a strong impact and resonance
                within the technical community.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-view">
        <div className="mobile-img">
          <div className="experience-elite-dark">
            <img src={eliteImg} />
          </div>
        </div>
        <div className="experience-card-1-dark">
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
            Used HTML,CSS,Javascript to create good quality FrontEnd for a
            website.Used Django framework to develop backend for websites.Gained
            Advance Knowlege About Domanin name and Hosting.Learned about Cloud
            Hosting,VPS Hosting,Dedicated Hosting,WordPress Hosting
          </div>
        </div>
        <div className="mobile-img">
          <div className="experience-gfg-dark">
            <img src={gfgImg} />
          </div>
        </div>
        <div className="experience-card-2-dark">
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
              Contributed and Published 5 Articles on Database Topics like
              PostgreSQL And MariaDB.OverAll Accumulated 300+ views on the
              Articles.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
