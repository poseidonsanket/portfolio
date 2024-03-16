import React, { useState } from "react";
import "../css/Projects.css";
import { useTheme } from "../context/ThemeContext";
import ProjectsDark from "../darkmodecomponents/ProjectsDark";
import ProjectCard from "./ProjectCard";
import allProjects from "../utils/ProjectConstants";

const Projects = () => {
  const projectTypes = ["All Projects", "ReactJs", "NextJs", "MERN Stack"];
  const [activeDiv, setActiveDiv] = useState(0);
  const { theme } = useTheme();
  const handleDivClick = (index) => {
    setActiveDiv(index);
  };
  return theme == "dark" ? (
    <ProjectsDark />
  ) : (
    <div id="section4">
      <h1 className="projects-heading">Projects</h1>
      <div className="projects-filter">
        {projectTypes.map((project, index) => (
          <div
            key={index}
            className={`projects-filter-div ${
              activeDiv === index ? "active" : ""
            }`}
            onClick={() => handleDivClick(index)}
          >
            {project}
          </div>
        ))}
      </div>
      {allProjects.map(project => <ProjectCard project={project} />)}
      {/* <h1 className="projects-main">New projects coming soon.. 🤠</h1> */}
    </div>
  );
};

export default Projects;
