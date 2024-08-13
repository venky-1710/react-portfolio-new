import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import DarkModeToggle from './components/DarkModeToggle';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
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
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default App;