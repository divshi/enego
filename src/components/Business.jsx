import React from 'react';
import s1 from '../assets/s11.jpeg';
import s2 from '../assets/s12.jpg';
import bannerImage from '../assets/banner3.jpeg.png'
const Business = () => {
    return (
        <div className="flex flex-col items-center min-h-screen text-white p-10 h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${bannerImage})` }}>

            {/* Title Section */}
            <div className="text-center my-12 animate-fade-in">
                <h2 className="text-6xl font-bold mb-4">Grow Your Business</h2>
                <p className="text-lg max-w-2xl mx-auto text-gray-200">Explore professional certifications to enhance your business credibility and market presence. Start with our services below!</p>
            </div>

            {/* Flip Card Section */}
            <div className="perspective-container mt-10">
                <div className="flip-card">
                    {/* Front Side - ISO Certification */}
                    <div className="flip-card-face flip-card-front">
                        <div className="content p-6 rounded-lg bg-blue-50">
                            <div className="w-31 h-31 mt-[-100px] rounded-full overflow-hidden">
                                <img src={s1} alt="ISO Certification" className="w-full h-full object-cover"/>
                            </div>
                            <p className="text-xl font-semibold text-blue-900">ISO Certification</p>
                            <p className="text-gray-700 text-sm text-center mt-2">Achieve internationally recognized standards and < br />elevate your brand reputation.</p>
                        </div>
                    </div>

                    {/* Back Side - IEC Certification */}
                    <div className="flip-card-face flip-card-back">
                        <div className="content p-6 rounded-lg bg-blue-50">
                            <div className="w-31 h-31 mt-[-100px] rounded-full overflow-hidden">
                                <img src={s2} alt="IEC Certification" className="w-full h-full object-cover"/>
                            </div>
                            <p className="text-xl font-semibold text-blue-900">IEC Certification</p>
                            <p className="text-gray-700 text-sm text-center mt-2">Get certified for international trade and take< br /> your business global.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS for Flip Card */}
            <style jsx>{`
                .perspective-container {
                    perspective: 1000px;
                }
                .flip-card {
                    position: relative;
                    width: 450px; /* Increase width */
                    height: 280px; /* Decrease height */
                    transform-style: preserve-3d;
                    transition: transform 0.8s ease;
                }
                .flip-card:hover {
                    transform: rotateY(180deg);
                }
                .flip-card-face {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    backface-visibility: hidden;
                    border-radius: 0.75rem;
                    background: linear-gradient(to bottom right, white, white);
                }
                .flip-card-back {
                    transform: rotateY(180deg);
                }
                .content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                }
            `}</style>
        </div>
    );
};

export default Business;
