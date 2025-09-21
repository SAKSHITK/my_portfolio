import React from "react";
import Udemy from "../assets/udemylogo.png";
import Codelab from "../assets/images.jpeg";
import Forage from "../assets/forage.jpeg";
import Simplilearn from "../assets/Simplilearn_Logo.jpg";
import HP from "../assets/hp.png";

const certs = [
  {
    img: Udemy,
    title: "Python Programming",
    desc: "Completed a Python Programming course on Udemy, learning the basics of Python syntax, data types, and control structures.",
    link: "https://www.udemy.com/certificate/UC-7714004f-fb45-4023-be54-aeda18d7816d/",
  },
  {
    img: Codelab,
    title: "Full Stack Development using React",
    desc: "Built web applications with React, Node.js, Express, and MongoDB. Gained hands-on experience in authentication, API integration, and responsive UI design.",
    link: "https://drive.google.com/file/d/17oHuBKxjAhP-jjDPZb5clZNJsnQuNe4b/view?usp=drivesdk",
  },
  {
    img: Simplilearn,
    title: "Introduction to MS Excel",
    desc: "Learned dashboard building, data cleaning, DAX functions, and interactive reports using Power BI and Excel.",
    link: "https://simpli.app.link/THhjAt02fVb",
  },
  {
    img: Forage,
    title: "Data Analytics Job Simulation",
    desc: "Completed Deloitte Australia’s Data Analytics Job Simulation via Forage, gaining hands-on experience in data analysis and visualization.",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_KkGphHCtDuNHk7ymi_1751900651867_completion_certificate.pdf",
  },
  {
    img: HP,
    title: "Data Science and Analytics",
    desc: "Completed Data Science and Analytics course via HP Life, developing skills in data interpretation, visualization, and business problem-solving.",
    link: "https://www.life-global.org/certificate/e0997d26-997a-4065-a415-7d0e50af49f6",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section" style={{padding:"20px"}}  >
      <h2 className="section-title" style={{marginTop:"-30px"}}>Certifications</h2>
      <div className="cert-grid">
        {certs.map((cert, index) => (
          <div className="cert-card"  key={index} >
            <img src={cert.img} alt={cert.title} className="cert-logo" />
            <h3>{cert.title}</h3>
            <p className="cert-desc">{cert.desc}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="view-cert-btn"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
