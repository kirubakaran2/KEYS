import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Trophy } from 'lucide-react';

const About = () => {
  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6 },
  };

  const stats = [
    { icon: <Clock className="w-8 h-8 text-gradient-to-r from-purple-500 to-indigo-600" />, value: '15+', label: 'Years Experience' },
    { icon: <Users className="w-8 h-8 text-gradient-to-r from-purple-500 to-indigo-600" />, value: '100+', label: 'Happy Clients' },
    { icon: <Trophy className="w-8 h-8 text-gradient-to-r from-purple-500 to-indigo-600" />, value: '50M+', label: 'Assets Managed' },
    { icon: <Award className="w-8 h-8 text-gradient-to-r from-purple-500 to-indigo-600" />, value: '25+', label: 'Industry Awards' },
  ];

  return (
    <div className="pt-20 bg-gradient-to-t from-blue-900 to-blue-800">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20 text-center text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">About Keys FinTech</h1>
            <p className="text-2xl md:text-3xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Your trusted partner in navigating the complexities of wealth management and financial planning.
            </p>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200, damping: 10 }}
              className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-lg font-medium text-white cursor-pointer shadow-lg hover:shadow-xl"
            >
              Learn More
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <div className="py-24 bg-gray-900 text-white">
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
            className="grid grid-cols-2 md:grid-cols-4 gap-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-t from-blue-800 to-blue-600 p-8 rounded-lg shadow-xl text-center transition-all hover:scale-105"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg text-gray-200">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Story Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-24 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeInUp}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600">
                Founded in 2009, Keys FinTech has been at the forefront of providing comprehensive financial planning and investment management services. Our journey began with a simple mission: to help individuals and families achieve their financial goals through personalized, strategic guidance.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to uphold that mission while embracing innovative solutions and maintaining our commitment to excellence in client service. Our team of experienced professionals brings diverse expertise to create tailored financial strategies that adapt to our clients' evolving needs.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                alt="Team meeting"
                className="rounded-3xl shadow-2xl transform transition-all hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Values Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every interaction we have with our clients.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Integrity',
                description: 'We maintain the highest standards of professional ethics and transparency.',
              },
              {
                title: 'Excellence',
                description: 'We strive for excellence in everything we do, from research to client service.',
              },
              {
                title: 'Innovation',
                description: 'We embrace new technologies and approaches to better serve our clients.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-t from-blue-100 to-blue-50 p-8 rounded-lg shadow-xl transition-all hover:scale-105"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-lg text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
