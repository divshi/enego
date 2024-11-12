// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <form className="max-w-lg mx-auto">
        <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 border border-gray-300 rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 border border-gray-300 rounded" />
        <textarea placeholder="Your Message" className="w-full p-3 mb-4 border border-gray-300 rounded"></textarea>
        <button type="submit" className="w-full bg-blue-900 text-white py-3 rounded hover:bg-blue-900">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
