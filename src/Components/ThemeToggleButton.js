import React, { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext"; 
import "./ThemeToggleButton.css"

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-switch-container" onClick={toggleTheme}>
      <span className={`switch-label ${theme === "light" ? "active" : ""}`}>Light</span>
      <div className={`switch-thumb ${theme}`}>
        {theme === "light" ? <FaSun className="icon" /> : <FaMoon className="icon" />}
      </div>
      <span className={`switch-label ${theme === "dark" ? "active" : ""}`}>Dark</span>
    </div>
  );
};

export default ThemeToggle;
