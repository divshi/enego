import React from 'react';
import s1 from '../assets/s13.jpeg';
import s2 from '../assets/s14.jpeg';
import s3 from '../assets/s15.jpeg';
import s4 from '../assets/s16.jpeg';
import s5 from '../assets/s17.jpeg';
import bannerImage from '../assets/banner2.jpeg.png';

const Certifications = () => {
    return (
      <section className="h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${bannerImage})` }}>
        {/* Apply opacity via an overlay */}
        <div className="absolute inset-0 bg-white opacity-80"></div>

        <div className="flex flex-col items-center min-h-screen text-blue-900 p-10 relative z-10">

            {/* Heading */}
            <div className="text-center my-12">
                <h2 className="text-6xl font-bold mb-4">Acquire Certifications</h2>
            </div>

            {/* Scrolling Certifications Row */}
            <div className="overflow-hidden mt-8">
                <div className="flex items-center gap-8 animate-scroll">
                    {[ 
                        { src: s1, title: "Startup India Certification" },
                        { src: s2, title: "MSME Registration" },
                        { src: s3, title: "Udyam Certification" },
                        { src: s4, title: "ZED Certification" },
                        { src: s5, title: "Tax Exemption Certificate" },

                    ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center justify-center p-4 bg-blue-900 rounded-full w-[280px] h-[280px] transition-transform duration-300 hover:scale-105">
                            <div className="w-20 h-20 mb-4 rounded-full overflow-hidden shadow-lg bg-white">
                                <img src={item.src} alt={item.title} className="w-full h-full object-cover"/>
                            </div>
                            <p className="text-xl font-semibold text-white text-center">{item.title}</p>
                            <p className="text-gray-200 text-center mt-2 text-sm">Achieve {item.title} and enhance your business growth.</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Book Consultation Button */}
            <button className="px-16 py-4 mt-12 text-2xl font-semibold text-white bg-gradient-to-r from-blue-900 to-blue-700 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
                Book Consultation
            </button>

            {/* Custom Animations */}
            <style jsx>{`
                .animate-fade-in {
                    animation: fadeIn 1s ease-in-out;
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                /* Scrolling Animation */
                .animate-scroll {
                    display: flex;
                    gap: 2rem;
                    animation: scroll 0s linear infinite;
                }

                @keyframes scroll {
                    0% { transform: translateX(100%); }
                    50% { transform: translateX(0); }
                    100% { transform: translateX(-100%); }
                }
            `}</style>
        </div>
      </section>
    );
};

export default Certifications;
