import React from "react";

const Skills = () => {
  // You can reuse this style for all skill boxes like Home contact boxes
  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "15px",
    backgroundColor: "#334155",
    borderRadius: "8px",
    textDecoration: "none",
    color: "#e5e5e5",
    fontWeight: "bold",
    transition: "transform 0.2s, background-color 0.2s",
    width: "100%", // make it responsive inside grid
    maxWidth: "180px", // optional max width
    textAlign: "center",
  };

  // Skills data
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "C", icon: "https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      ],
    },
    {
      title: "Data Science Libraries",
      skills: [
        { name: "Numpy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
        { name: "Scikit-learn", icon: "https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png" },
      ],
    },
    {
      title: "Version Control",
      skills: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      ],
    },
  ];

  return (
    <section className="skills-section" id="skills" >
      <h2 style={{marginTop:"-30px"}}>Skills</h2>
      <div className="skills-box">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-category">
            <h3>{category.title}</h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)", // always 2 per row
                gap: "15px",
                justifyContent: "center",
              }}
            >
              {category.skills.map((skill, i) => (
                <div key={i} style={boxStyle}>
                  <img src={skill.icon} alt={skill.name} style={{ width: "28px", height: "28px", marginBottom: "5px" }} />
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
