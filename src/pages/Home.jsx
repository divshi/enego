// src/Home.js
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import ServicesGrid from '../components/ServicesGrid';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Business from '../components/Business';
import Certifications from '../components/Certifications';
import StartupFunding from '../components/StartupFunding';
 
const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Services />
        <ServicesGrid />
        {/* <Contact /> */}
        <Business />
        <Certifications />
        <StartupFunding />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
