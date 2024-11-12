import React from 'react';
import s1 from '../assects/s13.jpeg';
import s2 from '../assects/s14.jpeg';
import s3 from '../assects/s15.jpeg';
import s4 from '../assects/s16.jpeg';
import s5 from '../assects/s17.jpeg';

const Certifications = () => {
    return (
      <div className="flex flex-col items-center">
          
        {/* Services Section */}
        <div className="my-12 text-center">
            <h2 className="text-6xl mt-20 font-bold">Acquire Certifications</h2>
            <div className="flex flex-wrap justify-center gap-10 mt-10">
                <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md w-96 transform transition-transform duration-300 hover:scale-105">
                <img src={s1} alt="Start Your Business" className="w-30 h-20 mb-4"/>
                <p className="text-lg font-medium">Startup India Certification
                </p>
                </div>
                <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md w-96 transform transition-transform duration-300 hover:scale-105">
                <img src={s2} alt="Grow Your Business" className="w-30 h-20 mb-4"/>
                <p className="text-lg font-medium">MSME Registration</p>
                </div>
                <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md w-96 transform transition-transform duration-300 hover:scale-105">
                <img src={s3} alt="Start Your Business" className="w430 h-20 mb-4"/>
                <p className="text-lg font-medium">Udyam certification</p>
                </div>
                <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md w-96 transform transition-transform duration-300 hover:scale-105">
                <img src={s4} alt="Grow Your Business" className="w-30 h-20 mb-4"/>
                <p className="text-lg font-medium">ZED Certification</p>
                </div>
                <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md w-96 transform transition-transform duration-300 hover:scale-105">
                <img src={s5} alt="Start Your Business" className="w-30 h-20 mb-4"/>
                <p className="text-lg font-medium">Tax Exemption Certificate</p>
                </div>
            </div>

             
            <button style={{ width: "500px", margin: "20px" }} className="px-20 py-3 text-2xl font-semibold text-white bg-blue-900 rounded-full hover:bg-blue-700">
            Book Consultation
            </button>
            
        </div>

      </div>
    );
};

export default Certifications;
