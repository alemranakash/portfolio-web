// Banner.jsx
import React from 'react';

const Banner = () => {
  return (
    <div className="flex justify-center rounded-md mt-5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16">
      <div className="max-w-3xl mx-auto flex items-center">
        {/* Image on the left */}
        <div className="w-1/2 pr-8">
          <img
            src="https://i.ibb.co/mbhMz8q/dev.png"  // Replace with the actual URL of your image
            alt="Al Emran's Image"
            className="rounded-md object-cover w-full h-full"
          />
        </div>

        {/* Text on the right */}
        <div className="w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Al Emran</h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">MERN Stack Developer</p>
          <p className="text-sm md:text-base lg:text-lg">
            Building robust and scalable web applications with MongoDB, Express.js, React, and Node.js
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
