import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Fully Responsive',
    description: 'Optimized for all devices and screen sizes, delivering flawless UX everywhere.',
    icon: (
      <svg className="w-10 h-10 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 3h-8a2 2 0 0 0-2 2v2h12V5a2 2 0 0 0-2-2z"></path>
      </svg>
    ),
  },
  {
    title: 'Fast Performance',
    description: 'Lightning fast load times with optimized code and smart caching strategies.',
    icon: (
      <svg className="w-10 h-10 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9z"></path>
      </svg>
    ),
  },
  {
    title: 'Customizable UI',
    description: 'Easily tailor your web app with flexible components and modern design options.',
    icon: (
      <svg className="w-10 h-10 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M14.31 8l5.74 9.94"></path>
        <path d="M9.69 8h11.48"></path>
        <path d="M7.38 12l5.74-9.94"></path>
        <path d="M9.69 16L3.95 6.06"></path>
        <path d="M14.31 16H2.83"></path>
        <path d="M16.62 12l-5.74 9.94"></path>
      </svg>
    ),
  },
];

const fadeInVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Features = () => (
  <section id="features" className="py-24 bg-white px-6">
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-4xl font-extrabold text-center mb-16 text-indigo-900">Features</h2>
      <div className="grid md:grid-cols-3 gap-12">
        {features.map(({ title, description, icon }, idx) => (
          <motion.div
            key={idx}
            className="bg-indigo-50 rounded-3xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={idx}
          >
            <div className="mb-6">{icon}</div>
            <h3 className="text-2xl font-semibold text-indigo-800 mb-3">{title}</h3>
            <p className="text-indigo-600">{description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
