import React from 'react';
import s1 from '../assects/s5.jpeg';
import s2 from '../assects/s6.jpeg';
import s3 from '../assects/s7.jpeg';
import s4 from '../assects/s8.jpeg';
import s5 from '../assects/s9.jpeg';
import s6 from '../assects/s10.jpeg';

const ServicesGrid = () => {
    return (
        <div className="bg-blue-900 p-8 text-white">
            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-6xl font-bold">Start Your Business</h2>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pl-20 pr-20 pt-10 justify-items-center">
                <div className="flex items-center p-6 bg-white rounded-lg shadow-md w-96 text-black transform transition-transform duration-300 hover:scale-105">
                    <img src={s1} alt="AGNii" className="w-16 h-16 mr-4"/>
                    <div>
                        <h3 className="text-lg font-semibold">AGNii</h3>
                        <p>AGNii – Accelerating Growth of New India’s Innovations – is a programme of the Office of the Principal Scientific...</p>
                    </div>
                </div>
                <div className="flex items-center p-6 bg-white rounded-lg shadow-md w-96 text-black transform transition-transform duration-300 hover:scale-105">
                    <img src={s2} alt="GeM" className="w-16 h-16 mr-4"/>
                    <div>
                        <h3 className="text-lg font-semibold">GeM</h3>
                        <p>The Government of India has created the GeM (Government E-Marketplace) platform to introduce transparency...</p>
                    </div>
                </div>
                <div className="flex items-center p-6 bg-white rounded-lg shadow-md w-96 text-black transform transition-transform duration-300 hover:scale-105">
                    <img src={s3} alt="Private Limited" className="w-16 h-16 mr-4"/>
                    <div>
                        <h3 className="text-lg font-semibold">Private Limited</h3>
                        <p>An Indian Private Limited Company is a hybrid between a partnership firm and a publicly-traded company...</p>
                    </div>
                </div>
                <div className="flex items-center p-6 bg-white rounded-lg shadow-md w-96 text-black transform transition-transform duration-300 hover:scale-105">
                    <img src={s4} alt="Limited Liability Partnership" className="w-16 h-16 mr-4"/>
                    <div>
                        <h3 className="text-lg font-semibold">Limited Liability Partnership</h3>
                        <p>Limited liability partnership is referred to as an LLP. Some of the features of LLPs are similar to those of traditional...</p>
                    </div>
                </div>
                <div className="flex items-center p-6 bg-white rounded-lg shadow-md w-96 text-black transform transition-transform duration-300 hover:scale-105">
                    <img src={s5} alt="Proprietorship" className="w-16 h-16 mr-4"/>
                    <div>
                        <h3 className="text-lg font-semibold">Proprietorship</h3>
                        <p>A sole proprietorship firm is a business structure in which a single person is in charge of all aspects of management...</p>
                    </div>
                </div>
                <div className="flex items-center p-6 bg-white rounded-lg shadow-md w-96 text-black transform transition-transform duration-300 hover:scale-105">
                    <img src={s6} alt="Goods and Service Tax" className="w-16 h-16 mr-4"/>
                    <div>
                        <h3 className="text-lg font-semibold">Goods and Service Tax</h3>
                        <p>All goods and services except petroleum products are subject to Goods and Service Tax (GST) registration at...</p>
                    </div>
                </div>
            </div>

            {/* Book Consultation Button */}
            <div className="mt-12 text-center">
                <button className="px-16 py-4 text-lg font-semibold text-blue-900 bg-white rounded-full hover:bg-gray-200">
                    Book Consultation
                </button>
            </div>
            
        </div>
    );
};

export default ServicesGrid;
