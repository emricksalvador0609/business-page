import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Jane Doe',
    role: 'CEO, Acme Corp',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'KegsBiz helped us scale our website with ease. The team was responsive and professional!',
  },
  {
    name: 'John Smith',
    role: 'Founder, StartupX',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'Their solutions boosted our performance tremendously. Highly recommended!',
  },
  {
    name: 'Emily Johnson',
    role: 'Product Manager, TechSolutions',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote: 'A seamless experience from start to finish. The team understood our vision perfectly.',
  },
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="testimonials" className="py-20 bg-indigo-50 px-6">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-extrabold text-indigo-900 mb-12">What Our Customers Say</h2>
        <Slider {...settings}>
          {testimonials.map(({ name, role, photo, quote }, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="px-4"
            >
              <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <p className="text-indigo-700 italic mb-6">&quot;{quote}&quot;</p>
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={photo}
                    alt={name}
                    className="w-14 h-14 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-indigo-900">{name}</p>
                    <p className="text-indigo-600 text-sm">{role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
