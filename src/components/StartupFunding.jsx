import React from 'react';
import s1 from '../assects/s18.jpeg';
import s2 from '../assects/d1.jpeg';
import s3 from '../assects/d2.jpeg';
import s4 from '../assects/d3.jpeg';
import s5 from '../assects/d4.jpeg';
import s6 from '../assects/d5.jpeg';
import s7 from '../assects/d6.jpeg';
import s8 from '../assects/d7.jpeg';

const StartupFunding = () => {
    return (
        <div className="bg-blue-900 p-8 text-white">
            {/* Heading */}
            <div className="text-center mb-15 mt-10">
                <h2 className="text-6xl font-bold">Startup Funding</h2>
            </div>

            {/* Startup Services Grid */}
            <div className="flex flex-wrap justify-center gap-10 mt-10">
                <div className="flex items-center p-6 bg-white rounded-lg shadow-md w-96 text-black transform transition-transform duration-300 hover:scale-105">
                    <img src={s1} alt="AGNii" className="w-16 h-16 mr-4"/>
                    <div>
                        <h3 className="text-lg font-semibold">Government Grants and Funding</h3>
                        <p>The Government of India provides Grants and Funding opportunities to innovative startups to grow their presence and bring ...</p>
                    </div>
                </div>
                <div className="flex items-center p-6 bg-white rounded-lg shadow-md w-96 text-black transform transition-transform duration-300 hover:scale-105">
                    <img src={s2} alt="GeM" className="w-16 h-16 mr-4"/>
                    <div>
                        <h3 className="text-lg font-semibold">Seed Fund</h3>
                        <p>The Government of India's Startup India initiative aims to create a strong startup ecosystem in the country in order to foster innovation...</p>
                    </div>
                </div>
                <div className="flex items-center p-6 bg-white rounded-lg shadow-md w-96 text-black transform transition-transform duration-300 hover:scale-105">
                    <img src={s3} alt="Private Limited" className="w-16 h-16 mr-4"/>
                    <div>
                        <h3 className="text-lg font-semibold">Nidhi Prayas Yojna</h3>
                        <p>ENEGO SERVICES PRIVATE LIMITED provides 360° business solutions. Our team is a blend of more than 2 years of experienced professionals...</p>
                    </div>
                </div>
                <div className="flex items-center p-6 bg-white rounded-lg shadow-md w-96 text-black transform transition-transform duration-300 hover:scale-105">
                    <img src={s4} alt="Limited Liability Partnership" className="w-16 h-16 mr-4"/>
                    <div>
                        <h3 className="text-lg font-semibold">MSME Loans</h3>
                        <p>MSME Loans The government of India offer loans for Micro, Small and Medium Enterprises to facilitate their growth. India is a booming network of MSMEs ...</p>
                    </div>
                </div>
                <div className="flex items-center p-6 bg-white rounded-lg shadow-md w-96 text-black transform transition-transform duration-300 hover:scale-105">
                    <img src={s5} alt="Proprietorship" className="w-16 h-16 mr-4"/>
                    <div>
                        <h3 className="text-lg font-semibold">Venture Capital</h3>
                        <p>Venture Capital Assistance is financial assistance in the form of an interest-free loan offered by SFAC to eligible projects in order to cover the deficit in...</p>
                    </div>
                </div>
                <div className="flex items-center p-6 bg-white rounded-lg shadow-md w-96 text-black transform transition-transform duration-300 hover:scale-105">
                    <img src={s6} alt="Goods and Service Tax" className="w-16 h-16 mr-4"/>
                    <div>
                        <h3 className="text-lg font-semibold">Project Finance</h3>
                        <p>This type of financing is where the lender accepts the future revenues as a guarantee for the amount which is lent. It is different from the traditional way of credit...</p>
                    </div>
                </div>
                <div className="flex items-center p-6 bg-white rounded-lg shadow-md w-96 text-black transform transition-transform duration-300 hover:scale-105">
                    <img src={s7} alt="Proprietorship" className="w-16 h-16 mr-4"/>
                    <div>
                        <h3 className="text-lg font-semibold">Greenfield Loan</h3>
                        <p>Get your greens straight for your business! Is your business a greenfield project? Greenfield projects are those projects which are still in their initial stages...</p>
                    </div>
                </div>
                <div className="flex items-center p-6 bg-white rounded-lg shadow-md w-96 text-black transform transition-transform duration-300 hover:scale-105">
                    <img src={s8} alt="Goods and Service Tax" className="w-16 h-16 mr-4"/>
                    <div>
                        <h3 className="text-lg font-semibold">Unsecured Business Loans</h3>
                        <p>Now don’t worry about the collateral for availing loans for your business! No need for collateral if you are looking for funds as a budding entrepreneur or someone who...</p>
                    </div>
                </div>
            </div>

            {/* Book Consultation Button */}
            <div className=" text-center">
                <button style={{ width: "500px", margin: "40px" }} className="px-20 py-3 text-2xl font-semibold text-black bg-white rounded-full hover:bg-grey-200">
                    Book Consultation
                </button>
            </div>
            
        </div>
    );
};

export default StartupFunding;
