// src/components/Header.js
import React, { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import logo from '../assects/logo.png';
const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-5 bg-white shadow-md fixed w-full z-10">
      {/* Company Logo */}
      <div>
        <img src={logo} alt="Enego Logo" className="h-10" /> 
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-10 items-center"> 
        <a href="#home" className="hover:text-blue-500 hover:underline">Home</a>
        <a href="#about" className="hover:text-blue-500 hover:underline">About Us</a>

        {/* Professional Services Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setDropdownOpen(!isDropdownOpen)} 
            className="hover:text-blue-500 hover:underline"
          >
            Professional Services
          </button>
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
              <a href="#service1" className="block px-4 py-2 hover:bg-blue-500 hover:text-white">Service 1</a>
              <a href="#service2" className="block px-4 py-2 hover:bg-blue-500 hover:text-white">Service 2</a>
              <a href="#service3" className="block px-4 py-2 hover:bg-blue-500 hover:text-white">Service 3</a>
            </div>
          )}
        </div>

        <a href="#contact" className="hover:text-blue-500 hover:underline">Contact</a>

        {/* Phone Number in Blue Capsule */}
        <a href="tel:+919289247741" className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700">
          <FaPhoneAlt className="mr-2" /> {/* Icon with margin to right */}
          +91 9289247741
        </a>
      </nav>
    </header>
  );
};

export default Header;
