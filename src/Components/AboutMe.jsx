// AboutMe.js
import React from 'react';

const AboutMe = () => {
  return (
    <section className="about-me-container mt-20 p-8 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-4 text-center">About Me</h2>
      <p className="mb-4">
        Hello! I'm <span className="text-yellow-300">Al Emran</span>, a passionate MERN stack
        developer dedicated to crafting exceptional web applications. With a creative mindset and a
        commitment to excellence, I bring ideas to life through clean and efficient code.
      </p>
      <p>
        As a seasoned developer, I specialize in MongoDB, Express.js, React, and Node.js. My focus is
        on delivering scalable, performant, and user-centric solutions. I thrive in dynamic
        environments and enjoy staying abreast of emerging technologies to continuously enhance my
        skills.
      </p>
      <p className="font-bold mt-4">Designation: MERN Stack Developer</p>
    </section>
  );
};

export default AboutMe;
