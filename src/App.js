import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import DarkModeToggle from './components/DarkModeToggle';
import Home from './components/Home';
import About from './components/About';
import '@fortawesome/fontawesome-free/css/all.min.css';
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Header />
      <Home />
      <About />
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default App;