// Study.js
import React from 'react';

const Study = () => {
  return (
    <section className="mt-20">
      <h1 className="text-3xl font-bold mb-6 text-center">Education</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* SSC Section */}
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <h2 className="text-white text-xl font-semibold mb-4">SSC</h2>
          <p className="text-gray-300">Passing Year: 2016</p>
          <p className="text-gray-300">Board: Dinajpur</p>
          <p className="text-gray-300">GPA: 5.00</p>
        </div>

        {/* HSC Section */}
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <h2 className="text-white text-xl font-semibold mb-4">HSC</h2>
          <p className="text-gray-300">Passing Year: 2018</p>
          <p className="text-gray-300">Board: Dinajpur</p>
          <p className="text-gray-300">GPA: 4.58</p>
        </div>

        {/* BSC Section */}
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <h2 className="text-white text-xl font-semibold mb-4">BSC</h2>
          <p className="text-gray-300">University Name: Institute of Science Tech and Technology</p>
          <p className="text-gray-300">Subject: Electronics and Communication Engineering</p>
          <p className="text-gray-300">Status: Running</p>
        </div>
      </div>
    </section>
  );
};

export default Study;
