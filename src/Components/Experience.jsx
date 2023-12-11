// Experience.js
import React from 'react';

const experiences = [
  {
    title: 'MERN Stack Developer',
    company: 'Life Bank',
    date: 'January 2022 - Present',
    description: 'Worked independently on various projects using the MERN stack (MongoDB, Express.js, React, Node.js). Developed full-stack web applications, implemented RESTful APIs, and integrated modern frontend frameworks.',
  },
  {
    title: 'Open Source Contributor',
    company: 'GitHub Projects',
    date: 'Ongoing',
    description: 'Contributed to various open-source projects on GitHub. Collaborated with developers worldwide, fixed bugs, implemented new features, and gained experience in version control using Git.',
  },
];

const Experience = () => {
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            <h3 className="text-white text-lg font-semibold mb-2">{experience.title}</h3>
            <p className="text-gray-300 mb-2">{experience.company}</p>
            <p className="text-gray-300 mb-2">{experience.date}</p>
            <p className="text-gray-300">{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
