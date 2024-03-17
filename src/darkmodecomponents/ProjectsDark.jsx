import React, { useState } from "react";
import "../css/ProjectsDark.css";
import allProjects from "../utils/ProjectConstants";
import ProjectDarkCard from "../darkmodecomponents/ProjectDarkCard";

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
      {allProjects.map((project) => (
        <ProjectDarkCard project={project} />
      ))}
    </div>
  );
};

export default ProjectsDark;
