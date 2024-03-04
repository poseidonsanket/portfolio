import React, { useState } from "react";
import CoreLanguages from "../components/CoreLanguages";
import FrontEnd from "../components/FrontEnd";
import Database from "../components/Database";
import "../css/TechStackDark.css";

const TechStack = () => {
  const [frontEnd, setFrontEnd] = useState(false);
  const [backEnd, setBackEnd] = useState(false);
  const [database, setDatabase] = useState(false);
  const [core, setCore] = useState(false);
  return (
    <div className="tech-main">
      <h1 className="tech-heading-dark">Tech Stack</h1>
      <div className="tech-accordian-main">
        <div>
          <div className="tech-accordian-dark" onClick={() => setCore(!core)}>
            <span>Core Languages</span>
            <span style={{ fontSize: "1.7rem" }}>{core ? "-" : "+"}</span>
          </div>
          {core && <CoreLanguages style={{ backgroundColor: "white" }} />}
        </div>

        <div>
          <div
            className="tech-accordian-dark"
            onClick={() => setFrontEnd(!frontEnd)}
          >
            <span>Front-End</span>
            <span style={{ fontSize: "1.7rem" }}>{frontEnd ? "-" : "+"}</span>
          </div>
          {frontEnd && <FrontEnd />}
        </div>

        <div>
          <div
            className="tech-accordian-dark"
            onClick={() => setBackEnd(!backEnd)}
          >
            <span>Back-End & DevOps</span>
            <span style={{ fontSize: "1.7rem" }}>{backEnd ? "-" : "+"}</span>
          </div>
          {backEnd && <p style={{color: "white"}}>Still Learning 🥲</p>}
        </div>

        <div>
          <div
            className="tech-accordian-dark"
            onClick={() => setDatabase(!database)}
          >
            <span>DataBases</span>
            <span style={{ fontSize: "1.7rem" }}>{database ? "-" : "+"}</span>
          </div>
          {database && <Database />}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
