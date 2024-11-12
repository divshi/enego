import React, { useState, useEffect } from 'react';
import s1 from '../assets/s1.jpeg';
import s2 from '../assets/s2.jpeg';
import s3 from '../assets/s3.jpeg';
import s4 from '../assets/s4.jpeg';

const servicesData = [
    { image: s1, title: "Start Your Business" },
    { image: s2, title: "Grow Your Business" },
    { image: s3, title: "Acquire Certifications" },
    { image: s4, title: "Secure Funding" },
];

const Services = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % servicesData.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="flex flex-col items-center">

            {/* Stats Section */}
            <div className="flex justify-around w-full bg-gradient-to-r from-blue-900 via-indigo-500 via-blue-500 to-blue-900 text-white py-8 mt-20 mx-4 lg:mx-16 rounded-xl shadow-lg">
                <div className="text-center space-y-2">
                    <p className="text-6xl font-extrabold">60+</p>
                    <p className="text-lg">Service Options</p>
                </div>
                <div className="text-center space-y-2">
                    <p className="text-6xl font-extrabold">1,500+</p>
                    <p className="text-lg">Completed Projects</p>
                </div>
                <div className="text-center space-y-2">
                    <p className="text-6xl font-extrabold">40+</p>
                    <p className="text-lg">Combined Experience</p>
                </div>
                <div className="text-center space-y-2">
                    <p className="text-6xl font-extrabold">10CR</p>
                    <p className="text-lg">Seed Funding</p>
                </div>
            </div>

            {/* Services Section */}
            <div className="my-8 text-center"> {/* Reduced margin here */}
                <h2 className="text-6xl font-extrabold mb-8 text-blue-900">Our Services</h2>
                <div className="relative w-full h-[400px]"> {/* Container height kept the same */}
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className={`absolute w-full h-full transition-all duration-1000 transform ${
                                index === currentIndex
                                    ? 'opacity-100 translate-x-0'
                                    : 'opacity-0 translate-x-full'
                            }`}
                        >
                            <div className="flex flex-col items-center p-12 bg-gradient-to-r from-blue-900 via-indigo-500 via-blue-500 to-blue-900 rounded-lg shadow-xl w-[380px] h-90 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-32 h-32 mb-6 rounded-full border-4 border-white"
                                />
                                <p className="text-xl font-semibold text-white">{service.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button className="px-24 py-4 text-2xl font-semibold text-white bg-blue-900 rounded-full hover:bg-blue-700 transform transition-transform duration-300 hover:scale-105 shadow-lg mb-10">
                Book Consultation
            </button>

        </div>
    );
};

export default Services;
