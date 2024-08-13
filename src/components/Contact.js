// components/Contact.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

function Contact({ showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('venky_1710', 'template_18c538p', formData, 'k08r6PtKkYY0Vg7hT')
      .then(() => {
        showToast('success', 'Email sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.error('EmailJS error:', error);
        showToast('error', 'Failed to send message. Please try again.');
      });
  };

  return (
    <section id="contact" className="section container">
      <div className="contact-content">
        <h1 className="text-color">Contact Me</h1>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p><a href="mailto:venkysss47@gmail.com">venkysss47@gmail.com</a></p>
            <p>+91 9010105008</p>
            <div className="btn" onClick={() => window.open('./img/VENKAT_RESUME.pdf', '_blank')}>
              <button>Download CV</button>
            </div>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" required value={formData.message} onChange={handleChange}></textarea>
              </div>
              <div className="btn">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;