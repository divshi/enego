import React from 'react';
import s1 from '../assets/s5.jpeg';
import s2 from '../assets/s6.jpeg';
import s3 from '../assets/s7.jpeg';
import s4 from '../assets/s8.jpeg';
import s5 from '../assets/s9.jpeg';
import s6 from '../assets/s10.jpeg';
import banner2 from '../assets/banner2.jpeg.png';

const ServicesGrid = () => {
    return (
        <section className="h-screen bg-cover bg-center relative">
            {/* Background Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-blue-900 to-transparent">
                
                {/* Heading */}
                <div className="text-center text-blue-900 pt-24 mb-12">
                    <h2 className="text-6xl font-extrabold tracking-wider">Start Your Business</h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 sm:px-12 lg:px-24 pt-10">
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
                            className="flex items-center p-6 bg-white rounded-lg shadow-lg w-full sm:w-96 text-black transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            <img src={service.img} alt={service.title} className="w-20 h-20 mr-6 rounded-full shadow-md"/>
                            <div>
                                <h3 className="text-xl font-semibold text-blue-900 mb-2">{service.title}</h3>
                                <p className="text-sm text-gray-600">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Book Consultation Button */}
                <div className="text-center mt-16">
                    <button
                        className="px-10 py-4 text-xl font-semibold text-white bg-blue-900 rounded-full hover:bg-blue-700 transform transition-all duration-300 hover:scale-105 shadow-xl"
                    >
                        Book Consultation
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;
