import React from 'react'
import "../css/TechStack.css"

const TechStack = () => {
    const techList = ["Front-End","Back-End","Databases","DevOps"]
  return (
    <div className="tech-main">
        <h1 className="tech-heading">Tech Stack</h1>
        {techList.map((tech) => <div className="tech-accordian">tech</div>)}
    </div>
  )
}

export default TechStack