// Project.js
import React, { useState } from 'react';

const projects = [
  {
    imageUrl: 'https://i.ibb.co/T1KfybQ/life-bank.png',
    description: 'Project 1: Life Bank is a streamlined Blood Donation App using the MERN stack, connecting donors with recipients. It features user-friendly design, personalized experiences, and comprehensive functionality for efficient blood donation and information sharing.',
    liveSiteUrl: 'https://blood-donation-project.surge.sh/',
  },
  {
    imageUrl: 'https://i.ibb.co/yywWfRH/sarkari-blog.png',
    description: 'Project 2: This website offers a user-friendly interface with recent and top blogs, a personalized wishlist, and interactive features like a quiz game. Users can manage their blogs, engage in discussions, and discover curated content, creating an immersive online community with secure authentication and pop-up notifications.',
    liveSiteUrl: 'https://conscious-hospital.surge.sh/',
  },
  {
    imageUrl: 'https://i.ibb.co/Jp0CDSj/i-tech.png',
    description: 'Project 3: This Technology and Electronics hub provides a seamless navigation experience for tech enthusiasts, allowing them to showcase gadgets, explore brand pages, and manage shopping carts effortlessly. Prioritizing secure authentication and adaptable to various devices, the website offers easy product updates, deletions, and a user-friendly experience with features like light and dark modes and helpful error messages.',
    liveSiteUrl: 'https://brand-shop-2a470.web.app/',
  },
];

const Project = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const openLiveSite = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            <img
              src={project.imageUrl}
              alt="Project"
              className="mb-4 border-2 border-white rounded-md"
              style={{ maxWidth: '100%' }}
            />
            <p className="text-white text-lg font-semibold mb-4">
              {showFullDescription ? project.description : project.description.split(' ').slice(0, 20).join(' ')}
              {project.description.split(' ').length > 20 && (
                <button
                  className="text-black hover:underline focus:outline-none ml-2"
                  onClick={toggleDescription}
                >
                  {showFullDescription ? '...Show Less' : '...Show More'}
                </button>
              )}
            </p>
            <button
              className="bg-black text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
              onClick={() => openLiveSite(project.liveSiteUrl)}
            >
              See Live Site
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
