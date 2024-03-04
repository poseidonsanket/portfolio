import React from "react";
import "../css/Projects.css";
import { useTheme } from "../context/ThemeContext";
import ProjectsDark from "../darkmodecomponents/ProjectsDark";

const Projects = () => {
  const { theme } = useTheme();
  return theme == "dark" ? (
    <ProjectsDark />
  ) : (
    <div id="section4">
      <h1 className="projects-heading">Projects</h1>
      <h1 className="projects-main">New projects coming soon.. 🤠</h1>
    </div>
  );
};

export default Projects;
