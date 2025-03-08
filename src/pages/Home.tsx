import React, { useEffect, useState } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import {
  Shield,
  BarChart as ChartBar,
  Target,
  ArrowRight,
  Check,
  Star,
  Phone,
  User,
  Heart,
  DollarSign
} from "lucide-react";
import About from "./About";
import Services from "./Services";
import Investment from "./Investment";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import businessimage from "../assets/business.jpg";
import { ArrowUpRight } from 'lucide-react';

const Home = () => {
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const scrollToSection = (id: string): void => {
      const element = document.getElementById(id);
      if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      }
    };

  // Parallax effect for background
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);

  useEffect(() => {
    controls.start("visible");

    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [controls]);
  return (
    <div className="bg-slate-50 overflow-hidden">
      {/* Hero Section with modern split design */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center bg-cover bg-center pt-16 md:pt-10"
        style={{
          background:
            "radial-gradient(125% 125% at -2% 101%, rgba(2, 87, 245, 1) 10.5%, rgba(2, 120, 245, 1) 16%, rgba(2, 140, 245, 1) 17.5%, rgba(100, 170, 245, 1) 25%, rgba(174, 202, 238, 1) 40%, rgba(179, 214, 202, 1) 65%, rgba(233, 201, 148, 1) 100%)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 lg:pr-8 mb-10 lg:mb-0 z-10"
          >
            <div className="inline-block mb-3">
              <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs sm:text-sm font-medium">
                Trusted by 2,500+ clients
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
              <span className="block">Smarter path to</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                financial freedom
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-xl">
              We leverage years of financial expertise to craft personalized
              strategies that adapt to your evolving goals and ensure long-term
              success.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-teal-600 text-white rounded-xl font-medium shadow-lg hover:bg-teal-700 transition-all flex items-center justify-center sm:justify-start gap-2 w-full sm:w-auto"
              >
                <span>Start your journey</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-800 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-all w-full sm:w-auto text-center"
              >
                Book a consultation
              </motion.button>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 justify-center sm:justify-start">
              <div className="flex -space-x-2 sm:-space-x-3">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-white overflow-hidden"
                  >
                    <img
                      src={`https://randomuser.me/api/portraits/thumb/men/${
                        i + 1
                      }.jpg`}
                      alt={`Person ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                <span className="font-semibold text-gray-900">4.9/5</span> from
                over 2,000 reviews
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 w-full lg:w-1/2 px-4 sm:px-6 lg:px-0"
          >
            <div
              className="relative w-full h-56 sm:h-64 md:h-80 lg:h-96 xl:h-[550px] bg-cover bg-center rounded-3xl p-4 sm:p-6 shadow-2xl overflow-hidden"
              style={{
                backgroundImage: `url(${businessimage})`, // Replace with your actual image variable
              }}
            >
              {/* Abstract shapes */}
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 bg-gradient-to-br from-teal-300 to-teal-400 rounded-full blur-2xl opacity-20 -mr-8 -mt-8 sm:-mr-10 sm:-mt-10 lg:-mr-16 lg:-mt-16"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-32 sm:h-32 lg:w-48 lg:h-48 xl:w-60 xl:h-60 bg-gradient-to-br from-blue-300 to-purple-400 rounded-full blur-2xl opacity-10 -ml-8 -mb-8 sm:-ml-10 sm:-mb-10 lg:-ml-16 lg:-mb-16"></div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-teal-600" />
        </motion.div>
      </section>
      {/* Service cards with glassmorphism */}
      <section id="services" className="py-10 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Our Services
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="h-1 w-16 bg-teal-500 mx-auto mb-4"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Tailored financial solutions for every stage of your journey
            </motion.p>
          </div>
          <Services />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            {[
              {
                icon: <DollarSign className="w-8 h-8 text-teal-600" />,
                title: "Mutual Fund (SIP)",
                description:
                  "Invest in mutual funds through SIPs to build wealth systematically over time with professional fund management.",
                color: "from-teal-400 to-teal-600",
              },
              {
                icon: <User className="w-8 h-8 text-blue-600" />,
                title: "Life Insurance",
                description:
                  "Protect your loved ones with comprehensive life insurance plans designed to provide financial security.",
                color: "from-blue-400 to-blue-600",
              },
              {
                icon: <Heart className="w-8 h-8 text-indigo-600" />,
                title: "Health Insurance",
                description:
                  "Secure your health and medical needs with tailored health insurance policies offering wide coverage.",
                color: "from-indigo-400 to-indigo-600",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white/80 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl border border-gray-100 group"
              >
                <div className="h-2 bg-gradient-to-r group-hover:h-3 transition-all duration-300 ease-in-out ${service.color}"></div>
                <div className="p-8 relative overflow-hidden">
                  {/* Background gradient blob */}
                  <div
                    className={`absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>

                  <div className="mb-6 p-3 rounded-xl bg-gray-50 inline-block">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <a
                    href="#"
                    className="inline-flex items-center text-teal-600 font-medium hover:text-teal-800 transition-colors group-hover:underline"
                  >
                    <span>Learn more</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                    >
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </motion.span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - We'll use the imported component */}

      {/* Our approach section with interactive numbers */}
      <section id="about" className="py-0 bg-white">
        <About />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Our Approach
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: 180 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                backgroundColor: "rgba(0, 206, 204, 0.8)", // smooth transition to a different color
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="h-1 w-16 mx-auto mb-6"
            ></motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              A methodical process designed to optimize your financial success
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {[
              {
                number: "01",
                title: "Discovery",
                description:
                  "We learn about your goals, needs, and current financial situation.",
              },
              {
                number: "02",
                title: "Analysis",
                description:
                  "Our team analyzes your data to identify opportunities and challenges.",
              },
              {
                number: "03",
                title: "Strategy",
                description:
                  "We create a customized plan aligned with your specific objectives.",
              },
              {
                number: "04",
                title: "Implementation",
                description:
                  "Execute the strategy with ongoing monitoring and adjustments.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="relative"
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotate: 5,
                    transition: { duration: 0.3 },
                  }}
                  className="absolute -top-8 -left-4 text-7xl font-bold text-teal-100"
                >
                  {step.number}
                </motion.div>
                <div className="bg-gray-50 rounded-xl p-8 pt-12 relative z-10 h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Section - We'll use the imported component */}
      <section id="investment">
        <Investment />
      </section>

      {/* Testimonials - Modern circular design */}
      <section
        id="testimonials"
        className="py-20 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Voices of Our Clients
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="h-1 w-16 bg-teal-500 mx-auto mb-6"
            ></motion.div>
          </div>

          <div className="flex flex-wrap justify-center items-center relative">
            <Testimonials />
          </div>
        </div>
      </section>
      <section id="contact">
        <Contact />
      </section>
      {/* Contact Section - We'll use the imported component */}

      {/* Modern CTA with gradient overlay */}
      <section className="relative py-20 overflow-hidden">
      {/* Background with animated blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900 to-blue-900 overflow-hidden">
        {/* Three animated blobs with smoother, slower random movement */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            animate={{
              x: [0, 100, -50, 30, 0],
              y: [0, -50, 100, 20, 0],
            }}
            transition={{
              duration: 25 + i * 5, // Different durations for each blob
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            style={{
              left: `${20 + i * 30}%`, // Spread out horizontally
              top: `${20 + (i % 2) * 40}%`, // Alternate vertical positions
              width: `${250 + i * 50}px`,
              height: `${250 + i * 50}px`,
              opacity: 0.1,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Ready to Transform Your Financial Future?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-teal-100 mb-10"
          >
            Join thousands of clients who've achieved financial security and
            freedom with our guidance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-teal-900 rounded-xl font-bold shadow-lg hover:bg-teal-50 transition-all duration-300 flex items-center"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('about')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-all duration-300"
            >
              <span>Learn About Our Process</span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Added Footer */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/30 py-3 text-center text-white/80">
        <p className="text-sm">© 2025 Keys FinTech. All rights reserved.</p>
      </div>
    </section>
    </div>
  );
};

export default Home;
