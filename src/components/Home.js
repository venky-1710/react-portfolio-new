// components/Home.js
import React from 'react';
import pdfFile from '../assets/VENKAT_RESUME.pdf';

import '../styles/Home.css'

function Home() {
  return (
    <section id = "home" className="section container">
      <div className="detail">
        <br /><br /><br /><br /><br /><br />
        <h1>Hi, I'm <br /><span>VenkateswaraRao</span></h1>
        <h3>Software Developer</h3>
        <p>Passionate software developer dedicated to crafting efficient, user-friendly applications and continuously expanding skills in technology and innovation.</p>
        <div className="social">
          {/* <a href="https://www.facebook.com/venky1710/" target="_blank" rel="noopener noreferrer" style={{"--socialAni": 1}}><i className="fab fa-facebook"></i></a> */}
          <a href="https://wa.me/+919010105008" target="_blank" rel="noopener noreferrer" style={{"--socialAni": 1}}><i className="fab fa-whatsapp"></i></a>
          <a href="https://www.linkedin.com/in/venky1710" target="_blank" rel="noopener noreferrer" style={{"--socialAni": 2}}><i className="fab fa-linkedin"></i></a>
          <a href="https://www.instagram.com/venky_1710/" target="_blank" rel="noopener noreferrer" style={{"--socialAni": 3}}><i className="fab fa-instagram"></i></a>
          <a href="https://github.com/venky-1710" target="_blank" rel="noopener noreferrer" style={{"--socialAni": 4}}><i className="fab fa-github"></i></a>
          <a href="https://x.com/venky_1710" target="_blank" rel="noopener noreferrer" style={{"--socialAni": 5}}><i className="fab fa-twitter"></i></a>
        </div>
        <div className="btn" onClick={() => window.open(pdfFile, '_blank')}>
          <button>Download CV</button>
        </div>
      </div>
    </section>
  );
}

export default Home;