import React from "react";
import laptopImage from "../assets/pricepredict.jpg";
import dataToolsImage from "../assets/datatools.jpg";
import profileImage from "../assets/profile.jpg";
import Skin from "../assets/Skin.png"; // adjust names & paths
import Gig from "../assets/gig.avif";

const projectList = [
  {
    img: Skin,
    title: "Intelligent Dermatologist Assistant",
    desc: "Intelligent Dermatologist Assistant is an AI-powered tool that analyzes skin lesions from images. It assists dermatologists in faster and more accurate diagnosis.",
    tech: ["Reactjs", "Nodejs","Flask","MongoDB"],
    link: "https://github.com/SAKSHITK/Intelligent_Dermatologist_Assistant.git",
  },
  {
    img: laptopImage,
    title: "Laptop Price Prediction",
    desc: "Developed a machine learning model to predict laptop prices based on features like RAM, processor, and brand. Built using Python, Scikit-learn, and Streamlit with a user-friendly interface.",
    tech: ["Python", "Scikit-learn", "Streamlit"],
    link: "https://github.com/SAKSHITK/Laptop_Price_Prediction.git",
  },
  {
    img: dataToolsImage,
    title: "Data Analysis Using Big Data Tools",
    desc: "Data Analysis Using Big Data Tools is a project focused on fraud detection. It analyzes large datasets to identify suspicious patterns and flag potentially fraudulent activities.",
    tech: ["HTML", "CSS", "JavaScript","Flask"],
    link: "https://github.com/SAKSHITK/DataAnalysis_BigDataTools.git",
  },
  {
    img: Gig,
    title: "Job Seaching Platform for Gig workers",
    desc: "Personal responsive portfolio website built using HTML, CSS and JavaScript showcasing my work and skills.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/SAKSHITK/Job_Searching_Platform.git",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section" >
      <h2 className="section-title" style={{ marginTop: "8px 8px" }} >My Projects</h2>
      <div className="projects-grid" >
        {projectList.map((project, index) => (
          <div className="project-card-static" key={index}>
            <div className="project-front">
              <img src={project.img} alt={project.title} />
            </div>
            <div className="project-back">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="tech-boxes">
                {project.tech.map((t, i) => (
                  <span className="tech" key={i}>
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-project-btn"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
