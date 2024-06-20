import React, { useState } from "react";
import "../css/ProjectsDark.css";
import allProjects from "../utils/ProjectConstants";
import ProjectDarkCard from "../darkmodecomponents/ProjectDarkCard";

const ProjectsDark = () => {
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const projectTypes = ["All Projects", "ReactJs", "NextJs", "Full Stack"];
  const [activeDiv, setActiveDiv] = useState(0);
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
      {filteredProjects.length > 0 ? (
        filteredProjects.map((project) => (
          <ProjectDarkCard key={project.title} project={project} />
        ))
      ) : (
        <h1 className="projects-main-dark">New projects coming soon.. 🤠</h1>
      )}
    </div>
  );
};

export default ProjectsDark;
