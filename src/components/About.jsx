// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <section id="about" className="p-10 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg">We focus on delivering energy solutions that benefit both your budget and the environment.</p>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img src="/about.jpg" alt="About Enego" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default About;
