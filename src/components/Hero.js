import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-700 via-indigo-800 to-indigo-900 text-white overflow-hidden px-6 z-0">
      {/* Abstract blurred circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob z-0"></div>
      <div className="absolute top-40 right-0 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 z-0"></div>
      <div className="absolute -bottom-20 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 z-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative max-w-4xl text-center space-y-8 z-10"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Empower Your Business with{' '}
          <span className="text-pink-400">Next-Level</span> Solutions
        </h1>
        <p className="text-lg md:text-xl text-indigo-200 max-w-xl mx-auto drop-shadow-md">
          Build stunning websites and applications with cutting-edge tech that
          scales with your growth.
        </p>
        <div className="flex justify-center space-x-6 mt-6">
          <a
            href="#contact"
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-400"
          >
            Get Started
          </a>
            <a
                href="#features"
                className="flex items-center text-indigo-300 font-semibold hover:text-white transition duration-300 ease-in-out underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded"
            >
                Learn More
            </a>
        </div>
      </motion.div>

      {/* Scroll Down Arrow */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-indigo-300"
        aria-hidden="true"
      >
        <svg
          className="w-8 h-8 animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
