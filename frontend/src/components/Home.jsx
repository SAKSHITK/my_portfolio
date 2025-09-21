import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaFilePdf,
} from "react-icons/fa";

const Home = () => {
  // phrases to type out
  const phrases = ["Web Development", "Data Analysis"];
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // typing effect without cursor
  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeout;

    if (!deleting && charIndex <= currentPhrase.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentPhrase.slice(0, charIndex));
        setCharIndex(charIndex + 1);
      }, 100);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentPhrase.slice(0, charIndex));
        setCharIndex(charIndex - 1);
      }, 60);
    } else if (!deleting && charIndex > currentPhrase.length) {
      timeout = setTimeout(() => setDeleting(true), 1000);
    } else if (deleting && charIndex < 0) {
      setDeleting(false);
      setPhraseIndex((phraseIndex + 1) % phrases.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex]);

  return (
    <section
      className="home"
      id="home"
      style={{
        padding: "30px 20px",
        textAlign: "center",
        backgroundColor: "#0f172a",
        color: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      {/* Greeting */}
      <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>Hello, I'm</h3>
      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>Sakshi T K</h1>
      <p style={{ fontSize: "1.1rem", color: "#cbd5e1", marginBottom: "0.5rem" }}>
        An Engineering student passionate about
      </p>

      {/* Typing effect text */}
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#38bdf8",
          transition: "opacity 0.5s",
          marginBottom: "2rem",
          minHeight: "1.8rem",
        }}
      >
        {displayText}
      </h2>

      {/* Contact container */}
      <div
        style={{
          backgroundColor: "#1e293b",
          padding: "25px",
          borderRadius: "12px",
          maxWidth: "500px",
          margin: "0 auto 30px auto",
        }}
      >
        <h3 style={{ marginBottom: "15px" }}>Feel free to contact me here</h3>
        <p style={{
    fontSize: "0.9rem",
    color: "#94a3b8",
    marginBottom: "15px",
    lineHeight: "1.8" // increase spacing between lines
  }}>
          Open to exciting projects and collaborations.<br/> Let’s connect!
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "15px",
          }}
        >
          <a
            href="https://github.com/SAKSHITK"
            target="_blank"
            rel="noopener noreferrer"
            style={boxStyle}
          >
            <FaGithub size={30} color="#f8fafc" />
            <span style={{ marginTop: "6px" }}>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/sakshi-t-k-4b529b318/"
            target="_blank"
            rel="noopener noreferrer"
            style={boxStyle}
          >
            <FaLinkedin size={30} color="#f8fafc" />
            <span style={{ marginTop: "6px" }}>LinkedIn</span>
          </a>

          <a
            href="mailto:sakshitiralebailu@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={boxStyle}
          >
            <FaEnvelope size={30} color="#f8fafc" />
            <span style={{ marginTop: "6px" }}>Email</span>
          </a>

          <a
            href="https://www.instagram.com/sakshi-t_k_gowda/"
            target="_blank"
            rel="noopener noreferrer"
            style={boxStyle}
          >
            <FaInstagram size={30} color="#f8fafc" />
            <span style={{ marginTop: "6px" }}>Instagram</span>
          </a>
        </div>
      </div>

      {/* Single Resume Button */}
      <div style={{ marginTop: "30px" }}>
        <a
          href="https://drive.google.com/file/d/1QRzR0p5mUGjNTRU6XuYiD6CLpzM53d6s/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          style={resumeBtn}
        >
          <FaFilePdf size={20} /> View My Resume
        </a>
      </div>
    </section>
  );
};

// style for each contact box
const boxStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "6px",
  padding: "15px",
  backgroundColor: "#334155",
  borderRadius: "8px",
  textDecoration: "none",
  color: "#f8fafc",
  fontWeight: "bold",
  transition: "transform 0.2s, background-color 0.2s",
};

// single resume button
const resumeBtn = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  textDecoration: "none",
  color: "black",
  backgroundColor: "#38bdf8",
  padding: "12px 28px",
  borderRadius: "8px",
  fontWeight: "bold",
  fontSize: "1rem",
  transition: "background-color 0.2s",
};

export default Home;
