import React from 'react';
import s1 from '../assets/s13.jpeg';
import s2 from '../assets/d1.jpeg';
import s3 from '../assets/d2.jpeg';
import s4 from '../assets/d3.jpeg';
import s5 from '../assets/d4.jpeg';
import s6 from '../assets/d5.jpeg';
import s7 from '../assets/d6.jpeg';
import s8 from '../assets/d7.jpeg';
import { FaLightbulb, FaChartLine, FaBuilding, FaHandsHelping, FaUserTie, FaReceipt } from 'react-icons/fa';

const services = [
    { img: s1, title: 'Government Grants and Funding', description: 'The Government of India provides Grants and Funding opportunities to innovative startups to grow their presence and bring ...', icon: FaLightbulb },
    { img: s2, title: 'Seed Fund', description: 'The Government of India\'s Startup India initiative aims to create a strong startup ecosystem in the country in order to foster innovation...', icon: FaChartLine },
    { img: s3, title: 'Nidhi Prayas Yojna', description: 'ENEGO SERVICES PRIVATE LIMITED provides 360° business solutions. Our team is a blend of more than 2 years of experienced professionals...', icon: FaBuilding  },
    { img: s4, title: 'MSME Loans', description: 'The government of India offers loans for Micro, Small and Medium Enterprises to facilitate their growth. India is a booming network of MSMEs ...', icon: FaHandsHelping },
    { img: s5, title: 'Venture Capital', description: 'Venture Capital Assistance is financial assistance in the form of an interest-free loan offered by SFAC to eligible projects in order to cover the deficit in...', icon: FaUserTie },
    { img: s6, title: 'Project Finance', description: 'This type of financing is where the lender accepts the future revenues as a guarantee for the amount which is lent. It is different from the traditional way of credit...', icon: FaReceipt },
    { img: s7, title: 'Greenfield Loan', description: 'Get your greens straight for your business! Is your business a greenfield project? Greenfield projects are those projects which are still in their initial stages...', icon: FaLightbulb },
    { img: s8, title: 'Unsecured Business Loans', description: 'Now don’t worry about the collateral for availing loans for your business! No need for collateral if you are looking for funds as a budding entrepreneur or someone who...', icon: FaChartLine }
];

const StartupFunding = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-white text-gray-900 py-13 overflow-hidden">
            {/* Floating Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
                <div className="bg-red-400 w-40 h-40 rounded-full absolute -top-0 -left-20 animate-pulse"></div>
                <div className="bg-blue-500 w-20 h-20 rounded-full absolute bottom-10 right-10 animate-pulse"></div>
                <div className="bg-blue-700 w-32 h-32 rounded-full absolute top-1/2 left-1/3 animate-bounce"></div>
            </div>
            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-5xl font-bold text-blue-900 mt-10">Startup Funding</h2>
            </div>

            {/* Services Cards */}
            <div className="flex justify-center items-center relative z-10 px-8 sm:px-12 lg:px-24 min-h-[60vh]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-screen-xl w-full justify-center">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group relative p-6 rounded-lg shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${index % 2 === 0 ? 'bg-gradient-to-r from-blue-700 to-blue-900' : 'bg-gradient-to-br from-red-500 to-red-700'}`}
                        >
                            <div className="flex items-center justify-center">
                                <img src={service.img} alt={service.title} className="w-24 h-24 rounded-full border-4 border-white shadow-xl" />
                            </div>
                            <div className="text-center mt-4">
                                <h3 className="text-2xl font-semibold text-white mb-2">{service.title}</h3>
                                <p className="text-sm text-gray-100">{service.description}</p>
                            </div>
                            <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center rounded-lg">
                                <service.icon className={`text-6xl ${index % 2 === 0 ? 'text-blue-300' : 'text-red-300'}`}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Button with Ripple Animation */}
            <div className="relative z-10 text-center mt-16 mb-10">
                <button className="px-10 py-4 text-2xl font-semibold text-white bg-gradient-to-r from-blue-700 to-blue-900 rounded-full overflow-hidden relative group">
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full transform scale-0 transition-transform duration-500 group-hover:scale-150 opacity-30"></span>
                    <span className="relative">Book a Consultation</span>
                </button>
            </div>
        </section>




    );
};

export default StartupFunding;
