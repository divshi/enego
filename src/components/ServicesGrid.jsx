import React from 'react';
import { FaLightbulb, FaChartLine, FaBuilding, FaHandsHelping, FaUserTie, FaReceipt } from 'react-icons/fa';
import s1 from '../assets/s5.jpeg';
import s2 from '../assets/s6.jpeg';
import s3 from '../assets/s7.jpeg';
import s4 from '../assets/s8.jpeg';
import s5 from '../assets/s9.jpeg';
import s6 from '../assets/s10.jpeg';

const servicesData = [
    { img: s1, title: 'AGNii', description: 'Accelerating New Innovations...', icon: FaLightbulb },
    { img: s2, title: 'GeM', description: 'Transparency in e-marketplace...', icon: FaChartLine },
    { img: s3, title: 'Private Limited', description: 'Private Limited Company...', icon: FaHandsHelping },
    { img: s4, title: 'Limited Liability Partnership', description: 'Features similar to traditional...', icon: FaBuilding },
    { img: s5, title: 'Proprietorship', description: 'Single person management...', icon: FaUserTie },
    { img: s6, title: 'Goods and Service Tax', description: 'GST registration and regulation...', icon: FaReceipt },
];

const ServicesGrid = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-white text-gray-900 py-13 mt-10 overflow-hidden">
            {/* Floating Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
                <div className="bg-red-400 w-40 h-40 rounded-full absolute -top-0 -left-20 animate-pulse"></div>
                <div className="bg-blue-500 w-20 h-20 rounded-full absolute bottom-10 right-10 animate-pulse"></div>
                <div className="bg-blue-700 w-32 h-32 rounded-full absolute top-1/2 left-1/3 animate-bounce"></div>
            </div>

            {/* Heading */}
            <div className="relative z-10 text-center text-blue-900 pt-10 mb-12">
                <h2 className="text-5xl font-bold tracking-widest uppercase">
                    Empower Your Business
                </h2>
                <p className="text-lg font-medium mt-4 opacity-80">
                    Explore innovative solutions to start your journey
                </p>
            </div>

            {/* Services Grid */}
            <div className="flex items-center justify-center relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8 sm:px-12 lg:px-24">
                {servicesData.map((service, index) => (
                    <div 
                        key={index} 
                        className={`group relative p-6 rounded-full shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${index % 2 === 0 ? 'bg-gradient-to-r from-blue-700 to-blue-900' : 'bg-gradient-to-br from-red-500 to-red-700'}`}
                    >
                        <div className="flex items-center justify-center">
                            {/* Circular Image */}
                            <img src={service.img} alt={service.title} className="w-24 h-24 rounded-full border-4 border-white shadow-xl" />
                        </div>
                        <div className="text-center mt-4">
                            <h3 className="text-2xl font-semibold text-white mb-2">{service.title}</h3>
                            <p className="text-sm text-gray-100">{service.description}</p>
                        </div>
                        <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center rounded-full">
                            <service.icon className={`text-6xl ${index % 2 === 0 ? 'text-blue-300' : 'text-red-300'}`} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Button with Ripple Animation */}
            <div className="relative z-10 text-center mt-16 m-10">
                <button className="px-10 py-4 text-2xl font-semibold text-white bg-gradient-to-r from-blue-700 to-blue-900 rounded-full overflow-hidden relative group">
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full transform scale-0 transition-transform duration-500 group-hover:scale-150 opacity-30"></span>
                    <span className="relative">Book a Consultation</span>
                </button>
            </div>
        </section>
    );
};

export default ServicesGrid;
