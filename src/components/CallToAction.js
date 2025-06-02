import React from 'react';

const CallToAction = () => (
  <section className="relative bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-white py-20 px-6 overflow-hidden">
    {/* Wave SVG background */}
    <svg
      className="absolute top-0 left-0 w-full h-40 opacity-30"
      viewBox="0 0 1440 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="white"
        fillOpacity="0.15"
        d="M0,64L80,101.3C160,139,320,213,480,245.3C640,277,800,267,960,229.3C1120,192,1280,128,1360,96L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />
    </svg>
    <div className="relative max-w-4xl mx-auto text-center space-y-6">
      <h2 className="text-4xl font-extrabold drop-shadow-lg">
        Ready to take your business to the next level?
      </h2>
      <p className="text-indigo-200 text-lg max-w-xl mx-auto">
        Join hundreds of happy customers who trust NexaFlow to power their online presence.
      </p>
      <a
        href="#contact"
        className="inline-block bg-white text-indigo-700 font-bold py-4 px-12 rounded-full shadow-lg hover:shadow-xl hover:bg-indigo-50 transition-all duration-300 transform hover:-translate-y-1"
      >
        Start Free Trial
      </a>
    </div>
  </section>
);

export default CallToAction;
