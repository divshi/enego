import React, { useState, useEffect } from 'react';
import s1 from '../assets/s18.jpeg';
import s2 from '../assets/d1.jpeg';
import s3 from '../assets/d2.jpeg';
import s4 from '../assets/d3.jpeg';
import s5 from '../assets/d4.jpeg';
import s6 from '../assets/d5.jpeg';
import s7 from '../assets/d6.jpeg';
import s8 from '../assets/d7.jpeg';
import banner2 from '../assets/banner3.jpeg.png';
const services = [
    { img: s1, title: 'Government Grants and Funding', description: 'The Government of India provides Grants and Funding opportunities to innovative startups to grow their presence and bring ...' },
    { img: s2, title: 'Seed Fund', description: 'The Government of India\'s Startup India initiative aims to create a strong startup ecosystem in the country in order to foster innovation...' },
    { img: s3, title: 'Nidhi Prayas Yojna', description: 'ENEGO SERVICES PRIVATE LIMITED provides 360° business solutions. Our team is a blend of more than 2 years of experienced professionals...' },
    { img: s4, title: 'MSME Loans', description: 'The government of India offers loans for Micro, Small and Medium Enterprises to facilitate their growth. India is a booming network of MSMEs ...' },
    { img: s5, title: 'Venture Capital', description: 'Venture Capital Assistance is financial assistance in the form of an interest-free loan offered by SFAC to eligible projects in order to cover the deficit in...' },
    { img: s6, title: 'Project Finance', description: 'This type of financing is where the lender accepts the future revenues as a guarantee for the amount which is lent. It is different from the traditional way of credit...' },
    { img: s7, title: 'Greenfield Loan', description: 'Get your greens straight for your business! Is your business a greenfield project? Greenfield projects are those projects which are still in their initial stages...' },
    { img: s8, title: 'Unsecured Business Loans', description: 'Now don’t worry about the collateral for availing loans for your business! No need for collateral if you are looking for funds as a budding entrepreneur or someone who...' }
];

const StartupFunding = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState('right'); // 'right' or 'left'

    useEffect(() => {
        // Cycle through services array every 3 seconds
        const interval = setInterval(() => {
            setSlideDirection(prev => (prev === 'right' ? 'left' : 'right')); // Alternate direction
            setCurrentIndex(prevIndex => (prevIndex + 1) % services.length); // Move to next card
        }, 3000);

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    return (
        <section className="h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${banner2})` }}>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent to-blue-900 p-8 text-white min-h-screen flex flex-col items-center justify-center">
            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-6xl font-bold">Startup Funding</h2>
            </div>

            {/* Animated Card */}
            <div
                key={currentIndex}
                className={`flex items-center p-6 bg-white rounded-lg shadow-md w-96 text-black transform transition-all duration-700 ${
                    slideDirection === 'right' ? 'animate-slide-right' : 'animate-slide-left'
                }`}
            >
                <img src={services[currentIndex].img} alt={services[currentIndex].title} className="w-16 h-16 mr-4 rounded-full shadow-md" />
                <div>
                    <h3 className="text-lg font-semibold">{services[currentIndex].title}</h3>
                    <p className="text-gray-600">{services[currentIndex].description}</p>
                </div>
            </div>

            {/* Book Consultation Button */}
            <div className="text-center mt-12">
                <button
                    style={{ width: "300px" }}
                    className="px-8 py-3 text-2xl font-semibold text-blue-900 bg-white rounded-full hover:bg-gray-200 transform transition-all duration-300 shadow-lg"
                >
                    Book Consultation
                </button>
            </div>

            {/* CSS for animations */}
            <style jsx>{`
                .animate-slide-right {
                    animation: slideRight 0.7s ease-in-out;
                }

                .animate-slide-left {
                    animation: slideLeft 0.7s ease-in-out;
                }

                @keyframes slideRight {
                    from {
                        transform: translateX(-100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }

                @keyframes slideLeft {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
        </section>
    );
};

export default StartupFunding;
