// Navbar.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="logo">Logo</div>
      <button onClick={toggleMenu}>
        <div className={`menu-icon ${isOpen ? "open" : ""}`}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </button>
      <div className="menu-button" onClick={toggleMenu}></div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
          >
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
            <div className="close-button" onClick={toggleMenu}>
              &times;
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
