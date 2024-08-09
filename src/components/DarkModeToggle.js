// components/DarkModeToggle.js
import React from 'react';
import '../styles/DarkModeToggle.css';

function DarkModeToggle({ darkMode, toggleDarkMode }) {
  return (
    <div className="dark-mode-toggle">
      <input 
        type="checkbox" 
        id="darkbtn" 
        checked={darkMode} 
        onChange={toggleDarkMode} 
        className="hidden-checkbox"
      />
      <label htmlFor="darkbtn" className="toggle-label">
        <i className={darkMode ? "fas fa-sun" : "fas fa-moon"}></i>
      </label>
    </div>
  );
}

export default DarkModeToggle;