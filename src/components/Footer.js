// components/Footer.js
import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#">VENKY</a>
          </div>
          <div className="footer-links">
            <a href="#" className="active">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/venky1710" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://wa.me/+919010105008" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
            <a href="https://www.instagram.com/venky_1710/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/venky1710/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="https://github.com/venky-1710" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://x.com/venky_1710" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Venkat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;