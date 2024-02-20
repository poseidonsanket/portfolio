import React, { useState } from "react";
import "../css/TechStack.css";

const TechStack = () => {
  const [frontEnd, setFrontEnd] = useState(false);
  const [backEnd, setBackEnd] = useState(false);
  const [database, setDatabase] = useState(false);
  const [devops, setDevops] = useState(false);
  return (
    <div className="tech-main">
      <h1 className="tech-heading">Tech Stack</h1>
      <div className="tech-accordian-main">
        <div>
          <div className="tech-accordian" onClick={()=> setFrontEnd(!frontEnd)}>
            <span>Front-End</span>
            <span style={{fontSize: "1.7rem"}}>{frontEnd?"-":"+"}</span>
          </div>
          {frontEnd && <p>Still Learning 🥲</p>}
        </div>

        <div>
          <div className="tech-accordian" onClick={()=> setBackEnd(!backEnd)}>
            <span>Back-End</span>
            <span style={{fontSize: "1.7rem"}}>{backEnd?"-":"+"}</span>
          </div>
          {backEnd && <p>Still Learning 🥲</p>}
        </div>

        <div>
          <div className="tech-accordian" onClick={()=> setDatabase(!database)}>
            <span>Databases</span>
            <span style={{fontSize: "1.7rem"}}>{database?"-":"+"}</span>
          </div>
          {database && <p>Still Learning 🥲</p>}
        </div>

        <div>
          <div className="tech-accordian" onClick={()=> setDevops(!devops)}>
            <span>DevOps</span>
            <span style={{fontSize: "1.7rem"}}>{devops?"-":"+"}</span>
          </div>
          {devops && <p style={{display: "flex", justifyContent: "center" , fontSize:"1.5rem"}}>Still Learning 🥲</p>}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
