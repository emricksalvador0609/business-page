import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Contact from './components/contact';
import Testimonials  from './components/Testimonials';
import AnimatedStats from './components/AnimatedStats';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const App = () => {
  return (
    <>
      <Header />

      {/* 🔑 ID must match nav link hrefs */}
      <section id="home">
        <Hero />
      </section>
      
      <section id="features">
        <Features />
      </section>
      
      <AnimatedStats />
      <section id="pricing">
        <CallToAction />
       
      </section>
     
      <section id="contact">
        <Contact />
      </section>
      <Testimonials />
      <Footer />

      
    </>
  );
};

export default App;
