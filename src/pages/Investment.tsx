import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Shield,
  Target,
  BarChart,
  PieChart,
  ArrowUpRight,
} from 'lucide-react';
import vector from "../assets/vector.svg";
import { Link } from 'react-scroll';
const Investment = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 12
      }
    }
  };

  const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    viewport: { once: true, margin: "-100px" }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white mt-10">
      {/* Hero Section with enhanced animations and vector image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-indigo-600 to-blue-500 py-10 relative overflow-hidden"
      >
        {/* Animated abstract shapes */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
          className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
        ></motion.div>
        
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
          className="absolute bottom-0 left-10 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl"
        ></motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.6,
                type: "spring",
                stiffness: 50
              }}
              className="text-center md:text-left md:w-1/2"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                Investment Philosophy
              </h1>
              <motion.p 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto md:mx-0 font-light"
              >
                A disciplined approach to growing and preserving your wealth through strategic portfolio management.
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.7, type: "spring" }}
              className="mt-8 md:mt-0 md:w-1/2 flex justify-center md:justify-end"
            >
              <motion.img
        srcSet={vector}
        alt="Investment Illustration"
        className="w-64 md:w-80 h-auto"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Core Principles - Smaller cards with better animations */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: <TrendingUp className="w-10 h-10 text-indigo-600" />,
                title: 'Long-term Focus',
                description: 'We believe in sustainable, long-term investment strategies over short-term speculation.',
              },
              {
                icon: <Shield className="w-10 h-10 text-indigo-600" />,
                title: 'Risk Management',
                description: 'Careful consideration of risk-return tradeoffs in portfolio construction.',
              },
              {
                icon: <Target className="w-10 h-10 text-indigo-600" />,
                title: 'Goal-Based Planning',
                description: 'Investment strategies aligned with your specific financial objectives.',
              },
            ].map((principle, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white p-4 rounded-xl shadow hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="mb-4 bg-indigo-50 p-3 rounded-lg inline-block">{principle.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{principle.title}</h3>
                <p className="text-gray-600">{principle.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Investment Process - Improved animations */}
      <motion.div
        {...fadeIn}
        className="py-16 bg-indigo-50/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Investment Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach to building and managing your investment portfolio.
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                icon: <BarChart className="w-8 h-8 text-indigo-600" />,
                title: 'Market Analysis',
                description: 'Comprehensive analysis of market trends and opportunities.',
              },
              {
                icon: <PieChart className="w-8 h-8 text-indigo-600" />,
                title: 'Asset Allocation',
                description: 'Strategic distribution of investments across asset classes.',
              },
              {
                icon: <ArrowUpRight className="w-8 h-8 text-indigo-600" />,
                title: 'Performance Monitoring',
                description: 'Regular review and rebalancing of portfolio performance.',
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.2 }
                }}
                className="bg-white p-6 rounded-xl shadow transition-all duration-300"
              >
                <div className="mb-4 bg-indigo-50 p-3 rounded-lg inline-block">{process.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
{/* Portfolio Strategies - Enhanced with animations */}
<motion.div
  {...fadeIn}
  className="py-12 bg-white"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-8"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Portfolio Strategies</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Tailored investment strategies to meet your specific needs and goals.
      </p>
    </motion.div>
    
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid md:grid-cols-2 gap-6"
    >
      {[
        {
          title: 'Conservative Growth',
          description: 'Focus on capital preservation with moderate growth potential.',
          features: ['Lower risk tolerance', 'Income-generating assets', 'Capital preservation'],
          bgColor: 'from-blue-50 to-indigo-50',
          accentColor: 'bg-blue-600'
        },
        {
          title: 'Balanced Growth',
          description: 'Balanced approach between growth and income generation.',
          features: ['Moderate risk tolerance', 'Diversified portfolio', 'Regular rebalancing'],
          bgColor: 'from-indigo-50 to-purple-50',
          accentColor: 'bg-indigo-600'
        },
      ].map((strategy, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ 
            y: -5,
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.2 }
          }}
          animate={{ 
            y: [0, -5, 0], 
            transition: { 
              duration: 5, 
              repeat: Infinity, 
              repeatType: "mirror",
              delay: index * 0.5 
            }
          }}
          className={`bg-gradient-to-br ${strategy.bgColor} p-4 rounded-xl shadow-md border border-gray-100 relative overflow-hidden`}
        >
          {/* Animated background gradient */}
          <motion.div 
            className="absolute inset-0 z-0"
            animate={{ 
              background: [
                `linear-gradient(120deg, ${strategy.bgColor.split(' ')[0].slice(5)}, ${strategy.bgColor.split(' ')[2]})`,
                `linear-gradient(240deg, ${strategy.bgColor.split(' ')[0].slice(5)}, ${strategy.bgColor.split(' ')[2]})`,
                `linear-gradient(360deg, ${strategy.bgColor.split(' ')[0].slice(5)}, ${strategy.bgColor.split(' ')[2]})`
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{strategy.title}</h3>
            <p className="text-gray-600 mb-3">{strategy.description}</p>
            <ul className="space-y-2">
              {strategy.features.map((feature, i) => (
                <motion.li 
                  key={i} 
                  className="flex items-center text-gray-700"
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { 
                      opacity: 1, 
                      x: 0, 
                      transition: { 
                        duration: 0.3, 
                        delay: i * 0.2 + index * 0.1
                      } 
                    }
                  }}
                >
                  <motion.span 
                    className={`w-2 h-2 ${strategy.accentColor} rounded-full mr-2`}
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: i * 0.5 
                    }}
                  ></motion.span>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Animated corner accent */}
          <motion.div
            className={`absolute -bottom-4 -right-4 w-16 h-16 rounded-full opacity-20 ${strategy.accentColor.replace('bg-', 'bg-')}`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  </div>
</motion.div>  
      {/* CTA Section with enhanced animations */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-indigo-600 to-blue-500 py-12 relative overflow-hidden"
      >
        {/* Animated accent */}
        <motion.div 
          animate={{ 
            x: [0, 10, 0],
            y: [0, 5, 0],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
          className="absolute right-0 top-0 w-32 h-32 bg-blue-400/30 blur-3xl rounded-full"
        ></motion.div>
        
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-white mb-4"
          >
            Ready to Start Your Investment Journey?
          </motion.h2>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-lg text-blue-100 mb-6"
          >
            Let our experts help you build a portfolio aligned with your financial goals.
          </motion.p>
          


<motion.button
  initial={{ y: 20, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2, duration: 0.5 }}
  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)" }}
  whileTap={{ scale: 0.98 }}
  className="bg-white text-indigo-600 px-6 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
>
  <Link to="contact" smooth={true} duration={500}>
    Schedule a Consultation
  </Link>
</motion.button>

        </div>
      </motion.div>
    </div>
  );
};

export default Investment;