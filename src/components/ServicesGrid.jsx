import React from 'react';
import s1 from '../assets/s5.jpeg';
import s2 from '../assets/s6.jpeg';
import s3 from '../assets/s7.jpeg';
import s4 from '../assets/s8.jpeg';
import s5 from '../assets/s9.jpeg';
import s6 from '../assets/s10.jpeg';

const ServicesGrid = () => {
    return (
        <section className="min-h-screen bg-cover bg-center relative bg-white">
            {/* Background Overlay */}
            <div className="absolute top-0 left-0 w-full h-full"></div>
            
            {/* Heading */}
            <div className="relative z-10 text-center text-blue-900 pt-28 mb-2">
                <h2 className="text-5xl font-bold tracking-widest uppercase">Empower Your Business</h2>
                <p className="text-lg font-medium mt-4">Explore innovative solutions to start your journey</p>
            </div>

            {/* Services Grid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6 sm:px-12 lg:px-24 pt-16">
                {[
                    { img: s1, title: 'AGNii', description: 'AGNii – Accelerating Growth of New India’s Innovations – is a programme of the Office of the Principal Scientific...' },
                    { img: s2, title: 'GeM', description: 'The Government of India has created the GeM (Government E-Marketplace) platform to introduce transparency...' },
                    { img: s3, title: 'Private Limited', description: 'An Indian Private Limited Company is a hybrid between a partnership firm and a publicly-traded company...' },
                    { img: s4, title: 'Limited Liability Partnership', description: 'Limited liability partnership is referred to as an LLP. Some of the features of LLPs are similar to those of traditional...' },
                    { img: s5, title: 'Proprietorship', description: 'A sole proprietorship firm is a business structure in which a single person is in charge of all aspects of management...' },
                    { img: s6, title: 'Goods and Service Tax', description: 'All goods and services except petroleum products are subject to Goods and Service Tax (GST) registration at...' }
                ].map((service, index) => (
                    <div
                        key={index}
                        className="flex items-center p-8 bg-gradient-to-r from-blue-900 to-indigo-600 rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
                    >
                        <img src={service.img} alt={service.title} className="w-24 h-24 mr-8 rounded-full shadow-lg border-4 border-white"/>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                            <p className="text-sm text-gray-200">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Book Consultation Button */}
            <div className="relative z-10 text-center mt-20">
                <button
                    className="px-12 py-5 text-2xl font-semibold text-white bg-blue-900 rounded-full hover:bg-indigo-700 transform transition-all duration-300 hover:scale-110 shadow-2xl"
                >
                    Book a Consultation
                </button>
            </div>
        </section>
    );
};

export default ServicesGrid;
