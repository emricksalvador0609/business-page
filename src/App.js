import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Contact from './components/contact';

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

      <section id="pricing">
        <CallToAction />
      </section>

      <section id="contact">
        <Contact />
      </section>
      <Footer />

      
    </>
  );
};

export default App;
