import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import bannerImage from '../assets/banner.jpg';

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
    <section className="h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${bannerImage})` }}>
      {/* Blue Opaque Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-blue-100 opacity-10"></div>
      
      {/* Left Side Content */}
      <div className="relative z-10 flex items-center justify-center w-full h-full px-10 text-black">
        <div className="space-y-6 text-center max-w-2xl w-full">
          <h1 className="text-7xl font-extrabold leading-tight">
            We can help
            <br />
            you with your
            <br />
            company's
            <br />
            <span className="text-blue-900">{currentText}</span>
          </h1>
          <h2 className="text-3xl font-extrabold">
            <span className="text-black">आपकी सफलता , हमारी जिम्मेदारी</span>
          </h2>

          <div className="flex items-center justify-center space-x-20">
            <div className="text-2xl text-center">
              <span className="text-blue-900">1,000+</span> <br /> Happy Clients
            </div>
            <div className="text-2xl text-center">
              <span className="text-blue-900">100%</span> <br /> Client Satisfaction
            </div>
          </div>

          <a href="#contact" className="inline-flex items-center bg-blue-900 text-white px-6 py-3 hover:bg-blue-400 mt-6">
            Connect With Us
            <FaArrowRight className="ml-3" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;