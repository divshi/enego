// src/components/Services.js
import React from 'react';

const Services = () => {
    return (
      <div className="flex flex-col items-center ">
        {/* Stats Section */}
        <div className="flex justify-around w-full bg-blue-900 text-white py-8 mt-20 mx-4 ">
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
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md w-48">
              <img src="/path/to/start-business-icon.svg" alt="Start Your Business" className="w-12 h-12 mb-4"/>
              <p className="text-lg font-medium">Start Your Business</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md w-48">
              <img src="/path/to/grow-business-icon.svg" alt="Grow Your Business" className="w-12 h-12 mb-4"/>
              <p className="text-lg font-medium">Grow Your Business</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md w-48">
              <img src="/path/to/acquire-certifications-icon.svg" alt="Acquire Certifications" className="w-12 h-12 mb-4"/>
              <p className="text-lg font-medium">Acquire Certifications</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md w-48">
              <img src="/path/to/secure-funding-icon.svg" alt="Secure Funding" className="w-12 h-12 mb-4"/>
              <p className="text-lg font-medium">Secure Funding</p>
            </div>
          </div>
        </div>
  
        {/* Book Consultation Button */}
        <div className="my-8">
          <button className="px-10 py-3 text-lg font-semibold text-white bg-blue-900 rounded-full hover:bg-purple-700">
            Book Consultation
          </button>
        </div>
      </div>
    );
  };
  
  export default Services;
