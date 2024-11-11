// src/components/Services.js
import React from 'react';

const Services = () => {
  return (
    <section id="services" className="p-10">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <img src="/icon1.png" alt="Service Icon" className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Energy Consulting</h3>
          <p>Providing expert advice on energy-saving solutions.</p>
        </div>
        {/* Add more service cards as needed */}
      </div>
    </section>
  );
};

export default Services;
