import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Projects Delivered', value: 120 },
  { label: 'Happy Clients', value: 95 },
  { label: 'Years in Business', value: 5 },
  { label: 'Technologies Used', value: 25 },
];

const countUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const AnimatedStats = () => {
  return (
    <section className="bg-indigo-50 py-10 px-6" id="stats">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-indigo-900 mb-12">Our Impact in Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="space-y-2"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={countUpVariant}
            >
              <motion.h3
                className="text-5xl font-bold text-pink-500"
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { delay: index * 0.2 + 0.3, duration: 0.6 },
                }}
              >
                <AnimatedNumber value={stat.value} />
              </motion.h3>
              <p className="text-indigo-700 text-lg font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AnimatedNumber = ({ value }) => {
  const motionValue = React.useRef(0);
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    const start = performance.now();
    const duration = 1500;

    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      const current = Math.floor(progress * value);
      setDisplay(current);
      if (progress < 1) requestAnimationFrame(animate);
      else setDisplay(value);
    };

    requestAnimationFrame(animate);
  }, [value]);

  return <>{display}</>;
};

export default AnimatedStats;
