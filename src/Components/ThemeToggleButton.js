import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './ThemeToggleButton.css';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-switch-container" onClick={toggleTheme}>
      <span className={`switch-label ${theme === 'dark' ? 'active' : ''}`}>Dark</span>
      <div className={`switch-thumb ${theme}`} />
      <span className={`switch-label ${theme === 'light' ? 'active' : ''}`}>Light</span>
    </div>
  );
};

export default ThemeToggleButton;
