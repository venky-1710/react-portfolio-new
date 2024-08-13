// components/Skills.js
import React from 'react';
import '../styles/Skills.css';

function Skills() {
  const skills = [
    { title: "Programming Languages", items: "JavaScript, Python, Java" },
    { title: "Web Development", items: "HTML, CSS, Node.js" },
    { title: "Database Management", items: "MongoDB" },
    { title: "Frameworks & Libraries", items: "Flask, Numpy" }
  ];

  return (
    <section id="skills" className="section container">
      <div className="skills-content">
        <h1 className="text-color">Skills</h1>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <h3>{skill.title}</h3>
              <p>{skill.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;