import React from 'react';
import s1 from '../assets/s11.jpeg';
import s2 from '../assets/s12.jpeg';

const Business = () => {
    return (
      <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-blue-900 to-blue-900 text-white p-10">
        
        {/* Title Section */}
        <div className="text-center my-12 animate-fade-in">
            <h2 className="text-6xl font-bold mb-4">Grow Your Business</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-200">Explore professional certifications to enhance your business credibility and market presence. Start with our services below!</p>
        </div>

        {/* Services Section */}
        <div className="flex flex-wrap justify-center gap-10 mt-10">
            
            {/* ISO Certification Card */}
            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-white via-gray-100 to-gray-200 rounded-lg shadow-lg w-80 transform transition-transform duration-300 hover:scale-105 hover:rotate-1">
                <div className="w-24 h-24 mb-4 rounded-full overflow-hidden shadow-md">
                    <img src={s1} alt="ISO Certification" className="w-full h-full object-cover"/>
                </div>
                <p className="text-xl font-semibold text-blue-900">ISO Certification</p>
                <p className="text-gray-700 text-sm text-center mt-2">Achieve internationally recognized standards and elevate your brand reputation.</p>
            </div>

            {/* IEC Certification Card */}
            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-white via-gray-100 to-gray-200 rounded-lg shadow-lg w-80 transform transition-transform duration-300 hover:scale-105 hover:-rotate-1">
                <div className="w-24 h-24 mb-4 rounded-full overflow-hidden shadow-md">
                    <img src={s2} alt="IEC Certification" className="w-full h-full object-cover"/>
                </div>
                <p className="text-xl font-semibold text-blue-900">IEC Certification</p>
                <p className="text-gray-700 text-sm text-center mt-2">Get certified for international trade and take your business global.</p>
            </div>

        </div>

        {/* Style for Fade-in Animation */}
        <style jsx>{`
            .animate-fade-in {
                animation: fadeIn 1.2s ease-in-out;
            }

            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(-20px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `}</style>
      </div>
    );
};

export default Business;
