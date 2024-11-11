// src/components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section 
      className="h-screen bg-cover bg-center flex items-center justify-center text-center text-white" 
      style={{ backgroundImage: 'url(/path-to-your-background-image.jpg)' }}
    >
      <div className="px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Your Solution for Energy Efficiency
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Helping businesses reduce energy costs and improve sustainability.
        </p>
        <a 
          href="#services" 
          className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
