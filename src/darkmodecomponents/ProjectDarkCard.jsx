import React from "react";
import "../css/ProjectDarkCard.css";
import { FiGithub } from "react-icons/fi";
import { TbExternalLink } from "react-icons/tb";

const ProjectDarkCard = ({ project }) => {
  console.log(project);
  return (
    <div className="card-main-dark">
      <div className="card-s-1">
        <div className="card-img-1">
          <img className="card-img" src={project?.img} />
        </div>
      </div>
      <div className="card-s-2">
        <h1 className="card-heading">{project?.title}</h1>
        <p className="card-desc">{project?.desc}</p>
        <div className="card-stack">
          {project.techStack.map((tech) => (
            <div className="card-stack-1">
              {tech.logo}
              <p className="card-stack-2">{tech?.name}</p>
            </div>
          ))}
        </div>
        <div className="card-link">
          <a href={project.gitLink} target="__blank" rel="noopener noreferrer">
            <div className="card-link-1-dark">
              <p className="card-p">Code</p>
              <FiGithub className="card-git" />
            </div>
          </a>
          <a href={project.liveLink} target="__blank" rel="noopener noreferrer">
            <div className="card-link-1-dark">
              <p className="card-p">Live Demo</p>
              <TbExternalLink className="card-git" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDarkCard;
