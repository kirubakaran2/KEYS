import React from 'react';
import { motion } from 'framer-motion';
import {
  PiggyBank,
  LineChart,
  Shield,
  Building,
  Briefcase,
  Calculator,
} from 'lucide-react';

const Services = () => {
  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.7 },
  };

  const fadeInDown = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.7 },
  };

  const services = [
    {
      icon: <PiggyBank className="w-12 h-12 text-gradient" />,
      title: 'Retirement Planning',
      description: 'Comprehensive retirement strategies tailored to your lifestyle goals and future aspirations.',
    },
    {
      icon: <LineChart className="w-12 h-12 text-gradient" />,
      title: 'Investment Management',
      description: 'Professional portfolio management focused on long-term growth and risk-adjusted returns.',
    },
    {
      icon: <Shield className="w-12 h-12 text-gradient" />,
      title: 'Tax Planning',
      description: 'Strategic tax minimization solutions to help preserve and grow your wealth.',
    },
    {
      icon: <Building className="w-12 h-12 text-gradient" />,
      title: 'Insurance Planning',
      description: 'Tailored insurance strategies to protect against financial risks and safeguard your future.',
    },
    {
      icon: <Briefcase className="w-12 h-12 text-gradient" />,
      title: 'Business Planning',
      description: 'Strategic business planning services for entrepreneurs and business owners.',
    },
    {
      icon: <Calculator className="w-12 h-12 text-gradient" />,
      title: 'Financial Planning',
      description: 'Holistic financial planning to help you achieve your short and long-term goals.',
    },
  ];

  return (
    <div>
      {/* Services Grid */}
      <div className="py-10 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={{
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: { staggerChildren: 0.3 },
              },
            }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-500"
              >
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Second Grid (Reverse Scroll - Bottom to Top) */}
      <div className="py-10 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={{
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: { staggerChildren: 0.3 },
              },
            }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.slice(3).map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInDown}
                className="bg-white p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-500"
              >
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Process Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-gradient-to-r from-teal-400 to-cyan-500"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-white max-w-3xl mx-auto text-lg">
              We follow a systematic approach to understand your needs and deliver tailored solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[{ step: '01', title: 'Discovery', description: 'Understanding your goals and current situation' },
            { step: '02', title: 'Analysis', description: 'Comprehensive analysis of your financial position' },
            { step: '03', title: 'Strategy', description: 'Developing a tailored financial strategy' },
            { step: '04', title: 'Implementation', description: 'Executing the plan and monitoring progress' }].map((process, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-5xl font-bold text-teal-600 mb-4">{process.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
