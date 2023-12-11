// Skills.js
import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaFigma, FaReact, FaNodeJs, FaDatabase, FaServer } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 size={40} /> },
    { name: 'CSS', icon: <FaCss3 size={40} /> },
    { name: 'JavaScript', icon: <FaJs size={40} /> },
    { name: 'Figma', icon: <FaFigma size={40} /> },
    { name: 'React', icon: <FaReact size={40} /> },
    { name: 'Node.js', icon: <FaNodeJs size={40} /> },
    { name: 'MongoDB', icon: <FaDatabase size={40} /> },
    { name: 'Express.js', icon: <FaServer size={40} /> },
  ];

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <div className="flex items-center justify-center mb-4">
              {skill.icon}
            </div>
            <p className="text-white text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
