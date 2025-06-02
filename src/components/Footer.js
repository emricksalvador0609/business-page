import React from 'react';

const Footer = () => (
  <footer className="bg-indigo-900 text-indigo-200 py-12 px-6 text-center select-none">
    <p className="mb-2">© {new Date().getFullYear()} NexaFlow, Inc.</p>
    <div className="flex justify-center space-x-8">
      <a href="#features" className="hover:text-white transition">
        Features
      </a>
      <a href="#pricing" className="hover:text-white transition">
        Pricing
      </a>
      <a href="#contact" className="hover:text-white transition">
        Contact
      </a>
    </div>
  </footer>
);

export default Footer;
