// src/components/Hero.js
import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import bannerImage from '../assects/banner.jpeg';

const Hero = () => {
  const [currentText, setCurrentText] = useState('Growth');
  const textOptions = ['Growth', 'Funding', 'Certification', 'Marketing'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => {
        const currentIndex = textOptions.indexOf(prev);
        return textOptions[(currentIndex + 1) % textOptions.length];
      });
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen bg-cover bg-center text-black flex items-center justify-between p-40 pt-80 relative" >
      {/* Left Side Content */}
      <div className="space-y-6 w-1/2">
        <h1 className="text-7xl font-extrabold leading-tight">
          We can help
          <br />
          you with your
          <br />
          company's
          <br />
          <span className="text-blue-500">{currentText}</span>
        </h1>
          <br />
          <h2 className="text-3xl font-extrabold leading-tight">
          <span className="text-black">आपकी सफलता , हमारी जिम्मेदारी</span>
          </h2>

        <div className="flex items-center justify-center space-x-20">
            <div className="text-2xl text-center">
                <span className="text-blue-500">1,000+</span> <br /> Happy Clients
            </div>
            <div className="text-2xl text-center">
                <span className="text-blue-500">100%</span> <br /> Client Satisfaction
            </div>
        </div>

        <a href="#contact" className="inline-flex items-center bg-blue-500 text-white px-6 py-3 hover:bg-blue-700 mt-6">
        Connect With Us
        <FaArrowRight className="ml-3" />
        </a>

      </div>

      {/* Right Side Image */}
      <div className="w-1/2">
        <img src={bannerImage} alt="Banner" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default Hero;
