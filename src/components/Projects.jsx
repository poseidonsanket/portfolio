import React, { useState } from "react";
import "../css/Projects.css";
import { useTheme } from "../context/ThemeContext";
import ProjectsDark from "../darkmodecomponents/ProjectsDark";
import ProjectCard from "./ProjectCard";
import allProjects from "../utils/ProjectConstants";

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const projectTypes = ["All Projects", "ReactJs", "NextJs", "Full Stack"];
  const [activeDiv, setActiveDiv] = useState(0);
  const { theme } = useTheme();
  const handleDivClick = (index) => {
    setActiveDiv(index);
    if (index == 1) {
      const filProjects = allProjects.filter(
        (project) => project.type === "react"
      );
      setFilteredProjects(filProjects);
    } else if (index == 2) {
      const filProjects = allProjects.filter(
        (project) => project.type === "next"
      );
      setFilteredProjects(filProjects);
    } else if (index == 3) {
      const filProjects = allProjects.filter(
        (project) => project.type === "full"
      );
      setFilteredProjects(filProjects);
    } else {
      setFilteredProjects(allProjects);
    }
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
      {filteredProjects.length > 0 ? (
        filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))
      ) : (
        <h1 className="projects-main">New projects coming soon.. 🤠</h1>
      )}
    </div>
  );
};

export default Projects;
