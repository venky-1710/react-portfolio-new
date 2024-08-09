// components/About.js
import React from 'react';
import '../styles/About.css';
import venkyImage from '../assets/venky.png';

function About() {
  return (
    <section id="about" className="section container">
      <div className="about-content">
        <div className="about-left">
          <div className="about-img">
            <img src={venkyImage} alt="Venky's Portrait" className="img-w" />
          </div>
        </div>
        <div className="about-right">
          <div className="about-right-content">
            <h1 className="text-color">About Me</h1>
            <p>
              Pursued a Bachelor's degree in Computer Science with a specialization in Artificial Intelligence, reflecting a keen interest in cutting-edge technology and its transformative applications. Acquired a comprehensive understanding of AI fundamentals, machine learning algorithms, deep learning architectures, and natural language processing techniques.
              
              Engaged in hands-on projects that involved developing AI-driven solutions, honing teamwork and project management skills. Gained a solid foundation in computer science principles while immersing in the dynamic realm of AI innovation.
            </p>
            <div className="btn" onClick={() => window.open('./img/VENKAT_RESUME.pdf', '_blank')}>
              <button>Download CV</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;