import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6 },
  };

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Business Owner',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      content: 'Keys FinServe has been instrumental in helping me plan for retirement while managing my business finances. Their expertise and personalized approach have given me peace of mind.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Tech Executive',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      content: 'The team\'s proactive approach to investment management and tax planning has helped me optimize my portfolio performance while minimizing tax implications.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Healthcare Professional',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
      content: 'I appreciate their holistic approach to financial planning. They took the time to understand my goals and created a strategy that aligns perfectly with my needs.',
      rating: 5,
    },
  ];

  return (
    <div className="pt-6">
      {/* Testimonials Grid */}
      <div className="py-12 bg-gradient-to-r from-blue-50 to-white">
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover mr-6 border-4 border-blue-300"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <div className="relative">
                  <Quote className="w-10 h-10 text-blue-200 absolute -top-6 -left-6 opacity-50" />
                  <p className="text-gray-700 italic relative z-10 pl-8">{testimonial.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Client Success Stories */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Discover how we’ve helped our clients achieve their financial goals through personalized planning and strategies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {[{
                title: 'Retirement Ready',
                description: 'How we helped a couple achieve their dream retirement 5 years ahead of schedule.',
                result: '40% increase in retirement savings',
              },
              {
                title: 'Business Success',
                description: 'Strategic tax planning that saved a small business owner significant money.',
                result: '35% reduction in tax liability',
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{story.title}</h3>
                <p className="text-gray-600 mb-6">{story.description}</p>
                <div className="text-blue-600 font-semibold text-lg">{story.result}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonials;
