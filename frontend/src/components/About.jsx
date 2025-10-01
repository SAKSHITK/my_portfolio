import React from "react";
import profileImg from "../assets/profile.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="about-section"
      style={{
         paddingTop:"40px",
        marginBottom: "0px",
        padding: "30px 20px",           // same padding as Home
        textAlign: "center",            // center text
        backgroundColor: "#0f172a",     // same bg as Home
        color: "#f8fafc",               // same text color as Home             // fill height like Home
      }}
    >
      <div
        className="about-img-top"
        style={{
          paddingTop:"40px",
          marginTop: "90px",
          marginBottom: "40px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={profileImg}
          alt="Profile"
          style={{
            display: "block",
            margin: "0 auto",
            borderRadius: "50%", // round image
            width: "200px",
            height: "200px",
            objectFit: "cover",
          }}
        />
      </div>

      <h2
        className="section-title"
        style={{
          textAlign: "center",
          margin: "10px 0",
        }}
      >
        About Me
      </h2>

      <div
        className="edu-item"
        style={{
          backgroundColor: "#1e293b",      // same as education
                 // same padding
    borderRadius: "12px",            // same radius
    boxShadow: "0 4px 6px rgba(0,0,0,0.2)",  // add same shadow
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center",
    marginBottom:"0px"
        }}
      >
        <p style={{ margin: 0,  textAlign: "justify", lineHeight: "1.8"}}>
          I'm a BE Computer Science and Engineering student at SDM Institute of Technology,Ujire. I enjoy solving complex problems, creating innovative solutions, and continuously learning to stay updated with the latest advancements in Technology.
        </p>
        <p style={{ marginTop: "15px",textAlign: "justify", lineHeight: "1.8"}}>
          My goal is to gain the information and abilities necessary to build, develop, and invent software systems, use technology to address practical issues, and advance computers and related industries. Take a look at my work and feel free to contact me for exciting opportunities or collaborations!
        </p>
      </div>
    </section>
  );
};

export default About;
