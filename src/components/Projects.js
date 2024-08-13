// components/Projects.js
import React, { useEffect, useRef } from 'react';
import '../styles/Projects.css';


function Projects() {
  const noteTakingAppImg = require('../assets/note-taking-app-img.jpg');
  const todoListImg = require('../assets/todos.jpg');
  const phonebookImg = require('../assets/phonebook.png');
  const stressLevelPredictionImg = require('../assets/stress level predection.png');
  const covDashboardVideo = require('../assets/cov-dashboard.mp4');
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
      }
  }, []);
  const projects = [
    {
      title: "Full-Stack Note-Taking App",
      description: "A full-stack web application that allows users to create, manage, and securely store personal notes. Built with React for the frontend and Flask for the backend, this project showcases my ability to develop end-to-end solutions.",
      image: noteTakingAppImg,
      link: "https://note-taking-app80.netlify.app/login"
    },
    {
      title: "Todo List",
      description: "Developed a dynamic Todo List application using Flask and Python. This web-based tool allows users to create, manage, and track their tasks efficiently. Key features include adding new todos, marking tasks as complete, and deleting items. The project demonstrates proficiency in backend development with Flask, frontend integration using HTML templates, and basic CRUD operations.",
      image: todoListImg,
      link: "https://todo-list-omega-sepia-49.vercel.app/"
    },
    {
      title: "PhoneBook-MERN Stack",
      description: "PhoneKeeper is a sleek and efficient contact management application built using the MERN (MongoDB, Express.js, React, Node.js) stack. This full-stack web application offers users a seamless experience for storing, retrieving, updating, and deleting contact information.",
      image: phonebookImg,
      link: "https://github.com/venky-1710/PhoneBook-MERN-Stack.git"
    },
    {
      title: "AI-Powered Stress Level Predictor",
      description: "Stress Level Predictor is an innovative web application that utilizes machine learning to predict an individual's stress level based on various personal and environmental factors. Built with Python, Flask, and scikit-learn, this tool employs a Decision Tree Classifier to analyze user inputs and provide accurate stress level assessments.",
      image: stressLevelPredictionImg,
      link: "https://github.com/venky-1710/stress-level-predection.git"
    },
    {
      title: "COVID-Dashboard",
      description: "A responsive React-based COVID-19 dashboard offering real-time data visualization. Features interactive charts and graphs for cases, recoveries, and deaths. Designed for intuitive user experience, providing easy-to-understand pandemic statistics and updates.",
      video: covDashboardVideo,
      link: "https://github.com/venky-1710/cov-dashboard.git"
    }
  ];

  return (
    <section id="projects" className="section container">
      <div className="projects-content">
        <h1 className="text-color">My Projects</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              {project.image && <img src={project.image} alt={project.title} />}
              {project.video && (
                <video width="100%" height="100%" loop muted ref={videoRef}>
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;