// src/Home.js
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import ServicesGrid from '../components/ServicesGrid';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Services />
        <ServicesGrid />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
