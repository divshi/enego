// src/components/Services.js
import React from 'react';
import s1 from '../assects/s1.jpeg';
import s2 from '../assects/s2.jpeg';
import s3 from '../assects/s3.jpeg';
import s4 from '../assects/s4.jpeg';

const Services = () => {
    return (
      <div className="flex flex-col items-center">
        
        {/* Stats Section */}
        <div className="flex justify-around w-full bg-blue-900 text-white py-8 mt-20 mx-4 lg:mx-16">
          <div className="text-center">
            <p className="text-6xl font-bold">60+</p>
            <p className="text-lg">Service Option</p>
          </div>
          <div className="text-center">
            <p className="text-6xl font-bold">1,500+</p>
            <p className="text-lg">Completed Project</p>
          </div>
          <div className="text-center">
            <p className="text-6xl font-bold">40+</p>
            <p className="text-lg">Combined Experience</p>
          </div>
          <div className="text-center">
            <p className="text-6xl font-bold">10CR</p>
            <p className="text-lg">Seed funding</p>
          </div>
        </div>
  
        {/* Services Section */}
        <div className="my-12 text-center">
          <h2 className="text-6xl font-bold">Our Services</h2>
          <div className="flex flex-wrap justify-center gap-8 mt-6">
            <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md w-64 transform transition-transform duration-300 hover:scale-105">
              <img src={s1} alt="Start Your Business" className="w-20 h-20 mb-4"/>
              <p className="text-lg font-medium">Start Your Business</p>
            </div>
            <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md w-64 transform transition-transform duration-300 hover:scale-105">
              <img src={s2} alt="Grow Your Business" className="w-20 h-20 mb-4"/>
              <p className="text-lg font-medium">Grow Your Business</p>
            </div>
            <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md w-64 transform transition-transform duration-300 hover:scale-105">
              <img src={s3} alt="Acquire Certifications" className="w-20 h-20 mb-4"/>
              <p className="text-lg font-medium">Acquire Certifications</p>
            </div>
            <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md w-64 transform transition-transform duration-300 hover:scale-105">
              <img src={s4} alt="Secure Funding" className="w-20 h-20 mb-4"/>
              <p className="text-lg font-medium">Secure Funding</p>
            </div>
          </div>
        </div>
  
        <button style={{ width: "500px" }} className="px-20 py-3 text-2xl font-semibold text-white bg-blue-900 rounded-full hover:bg-blue-700">
        Book Consultation
        </button>

      </div>
    );
};

export default Services;
