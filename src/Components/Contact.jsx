
import React from 'react';
import { FaEnvelope, FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="mt-8">
      <div className="flex justify-center space-x-4">
        <a
          href="mailto:alemeranexpert@gmail.com"
          className="contact-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="icon" />
          Email
        </a>

        <a
          href="https://www.linkedin.com/in/your-linkedin-username"
          className="contact-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon" />
          LinkedIn
        </a>

        <a
          href="https://www.facebook.com/your-facebook-username"
          className="contact-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="icon" />
          Facebook
        </a>

        <a
          href="https://github.com/your-github-username"
          className="contact-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;
