import React from "react";

// black icons from Icons8
const collegeLogo = "https://img.icons8.com/ios-filled/100/000000/graduation-cap.png"; // for B.E
const pucLogo = "https://img.icons8.com/ios-filled/100/000000/open-book.png"; // for PUC
const schoolLogo = "https://img.icons8.com/ios-filled/100/000000/school.png"; // for High School

const Education = () => {
  const education = [
    {
      college: "SDM Institute of Technology, Ujire",
      degree: "B.E in Computer Science and Engineering",
      year: "2022 – Present",
      cgpa: "CGPA: 9.07",
      description:
        "Pursuing B.E in Computer Science with a focus on Data Science and Full Stack Development. Engaged in projects including an Intelligent Dermatologist Assistant and hands-on ML applications.",
      logo: collegeLogo, 
    },
    {
      college: "Government Pre-University College, Thirthahalli",
      degree: "Class 12 (PCMB)",
      year: "2020 – 2022",
      cgpa: "Percentage: 93.33%",
      description:
        "Completed Class 12 with PCMB, gaining a solid foundation in science and mathematics. Focused on analytical thinking and problem-solving abilities.",
      logo: pucLogo,
    },
    {
      college: "Prajna Bharathi High School, Chittebailu",
      degree: "Class 10",
      year: "2019 – 2020",
      cgpa: "Percentage: 92.16%",
      description:
        "Completed Class 10 with strong academic performance. Actively participated in science exhibitions, competitions, and leadership activities.",
      logo: schoolLogo,
    },
  ];

  return (
    <section id="education" className="education-section">
      <h2 style={{marginTop:"-30px"}}>Education</h2>
      <div className="edu-list" >
        {education.map((edu, index) => (
          <div key={index} className="edu-item" >
            <div className="edu-header">
              <img src={edu.logo} alt="Logo" className="edu-logo" />
              <div>
                <h3>{edu.college}</h3>
                <p className="edu-degree">{edu.degree}</p>
              </div>
            </div>
            <p className="edu-year">{edu.year} | {edu.cgpa}</p>
            <p className="edu-desc">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
