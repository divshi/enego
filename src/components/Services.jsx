import React from 'react';
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
    return (
        <div className="flex flex-col justify-center items-center w-full max-w-6xl mx-auto mt-20 px-4">

            {/* Stats Section */}
            <div className="flex justify-around w-full bg-gradient-to-r from-blue-700 via-red-600 to-blue-900 text-white py-8 mt-12 mx-4 lg:mx-16 rounded-xl shadow-xl">
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
            <div className="my-8 text-center w-full">
                <h2 className="text-5xl font-extrabold mb-8 text-blue-900">Our Services</h2>
                <div className="flex justify-between w-full space-x-6">
                    {servicesData.map((service, index) => (
                        <div key={index} className="flex flex-col items-center p-6 w-[23%]">
                            <div className="relative">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-32 h-32 mb-6 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.2)]" // Customized shadow to make it even
                                />
                            </div>
                            <p className="text-xl font-semibold text-blue-900">{service.title}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Services;
