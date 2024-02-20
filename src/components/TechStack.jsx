import React from "react";
import "../css/TechStack.css";

const TechStack = () => {
  return (
    <div className="tech-main">
      <h1 className="tech-heading">Tech Stack</h1>
      <div className="tech-accordian-main">
        <div className="tech-accordian">
          <span>Front-End</span>
          <span>+</span>
        </div>

        <div className="tech-accordian">
          <span>Back-End</span>
          <span>+</span>
        </div>

        <div className="tech-accordian">
          <span>DataBases</span>
          <span>+</span>
        </div>

        <div className="tech-accordian">
          <span>DevOps</span>
          <span>+</span>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
