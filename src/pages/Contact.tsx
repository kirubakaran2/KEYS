import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formDataToSend = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const response = await fetch('http://127.0.0.1:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSend),
      });

      if (response.ok) {
        setFormSubmitted(true); // Show success message in React
      } else {
        alert('There was an error submitting your form.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting your form.');
    }
  };

  // Google Maps URL for the specific address
  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=No.+46,+3rd+Floor,+Giri+Road,+T.+Nagar,+Chennai+600017';

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    initial: { y: 40, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const infoItems = [
    {
      icon: <Phone className="w-6 h-6 text-blue-500" />,
      title: 'Phone',
      content: '+91 9444567777',
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-500" />,
      title: 'Email',
      content: 'christy@christel.in',
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-500" />,
      title: 'Office',
      content: 'No. 46, 3rd Floor, Giri Road, T. Nagar, Chennai - 600 017.',
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      title: 'Business Hours',
      content:
        'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: By Appointment\nSunday: Closed',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-32 overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-blue-900 opacity-30"></div>
          <div className="absolute -inset-x-40 -top-40 -bottom-40 bg-gradient-radial from-blue-600/30 to-transparent"></div>
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-radial from-blue-500/20 to-transparent rounded-full transform translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Let's Connect
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto font-light">
              Reach out to our expert advisors and take the first step toward financial freedom.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Contact Content */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div variants={fadeInUp} initial="initial" animate="animate" className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl transform -rotate-1 scale-105 opacity-70"></div>
            <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-10 overflow-hidden">
              <AnimatePresence>
                {!formSubmitted ? (
                  <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} key="form">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            placeholder="+91 9444567777"
                          />
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                            What can we help you with?
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                            required
                          >
                            <option value="">Select a subject</option>
                            <option value="investment">Investment Planning</option>
                            <option value="retirement">Retirement Planning</option>
                            <option value="tax">Tax Planning</option>
                            <option value="other">Other Services</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Tell us how we can help you..."
                          required
                        ></textarea>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-medium flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/20 hover:shadow-blue-600/30 transition-all duration-300"
                      >
                        <span>Send Message</span>
                        <Send className="w-5 h-5" />
                      </motion.button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center py-12 text-center"
                    key="success"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                    >
                      <CheckCircle className="w-20 h-20 text-green-500 mb-6" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent!</h3>
                    <p className="text-gray-600 max-w-md">
                      Thank you for reaching out. One of our advisors will get back to you shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
          {/* Contact Information */}
          <motion.div variants={staggerChildren} initial="initial" animate="animate" className="space-y-12">
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 text-lg">
                Our team of financial experts is ready to guide you through your financial journey with personalized solutions tailored to your unique needs.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-8">
              {infoItems.map((item, index) => (
                <motion.div key={index} variants={fadeInUp} className="flex items-start space-x-6 group">
                  <div className="bg-blue-50 p-3 rounded-xl group-hover:bg-blue-100 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            {/* Google Map with Clickable Link */}
            <motion.div variants={fadeInUp} className="mt-8 w-full">
              <div className="bg-blue-50 p-6 rounded-xl shadow-inner">
                <div className="relative">
                  <h3 className="font-semibold text-gray-900 text-lg mb-3">Our Location</h3>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="h-64 bg-blue-100 rounded-lg overflow-hidden relative transition-all duration-300 shadow-md group-hover:shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-300/20 to-blue-500/20 flex flex-col items-center justify-center">
                        <MapPin className="w-12 h-12 text-blue-600 mb-3" />
                        <p className="text-blue-800 font-medium text-center">
                          Click to view on Google Maps
                          <br />
                          <span className="text-sm font-normal">
                            No. 46, 3rd Floor, Giri Road, T. Nagar, Chennai
                          </span>
                        </p>
                      </div>

                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white p-2 rounded-full">
                          <ExternalLink className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
