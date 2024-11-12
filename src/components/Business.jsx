import React from 'react';
import s1 from '../assets/s11.jpeg';
import s2 from '../assets/s12.jpeg';

const Business = () => {
    return (
      <div className="flex flex-col items-center">
          
        {/* Services Section */}
        <div className="my-12 text-center">
            <h2 className="text-6xl font-bold">Grow Your Business</h2>
            <div className="flex flex-wrap justify-center gap-10 mt-10">
                <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md w-96 transform transition-transform duration-300 hover:scale-105">
                <img src={s1} alt="Start Your Business" className="w-30 h-20 mb-4"/>
                <p className="text-lg font-medium">ISO Certification</p>
                </div>
                <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md w-96 transform transition-transform duration-300 hover:scale-105">
                <img src={s2} alt="Grow Your Business" className="w-30 h-20 mb-4"/>
                <p className="text-lg font-medium">IEC Certification</p>
                </div>
            </div>
        </div>

      </div>
    );
};

export default Business;
