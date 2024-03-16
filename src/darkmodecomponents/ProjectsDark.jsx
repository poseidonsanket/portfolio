import React, { useState } from "react";
import "../css/ProjectsDark.css";

const ProjectsDark = () => {
  const projectTypes = ["All Projects", "ReactJs", "NextJs", "MERN Stack"];
  const [activeDiv, setActiveDiv] = useState(0);
  const handleDivClick = (index) => {
    setActiveDiv(index);
  };
  return (
    <div id="section4">
      <h1 className="projects-heading-dark">Projects</h1>
      <div className="projects-filter">
        {projectTypes.map((project, index) => (
          <div
            key={index}
            className={`projects-filter-div-dark ${
              activeDiv === index ? "active" : ""
            }`}
            onClick={() => handleDivClick(index)}
          >
            {project}
          </div>
        ))}
      </div>
      {/* <h1 className="projects-main-dark">New projects coming soon.. 🤠</h1> */}
    </div>
  );
};

export default ProjectsDark;
