import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo" style={{ width:"100",paddingTop: 16, paddingLeft: 16, paddingRight: 16 }}>Portfolio</div>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        </li>
        <li>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        </li>
        <li>
          <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
        </li>
        <li>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
        </li>
       
        <li>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
