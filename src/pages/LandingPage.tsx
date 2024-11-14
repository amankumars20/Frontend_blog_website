import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // for animations

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center px-4 text-gray-800">
      
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center space-y-4 mb-10"
      >
        <h1 className="text-5xl font-extrabold text-gray-900">
          Welcome to the world of blogs!
        </h1>
        <p className="text-lg text-gray-700">
          Discover, write, and share your stories with the world. Join our community of readers and writers today!
        </p>
      </motion.div>
      
      {/* CTA Buttons */}
      <div className="flex space-x-4">
        <Link to="/signup">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
          >
            Sign Up
          </motion.button>
        </Link>
        <Link to="/signin">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 bg-gray-800 text-white font-bold rounded-lg shadow-lg hover:bg-gray-900 transition-all duration-300"
          >
            Sign In
          </motion.button>
        </Link>
      </div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-center"
      >
        <FeatureCard
          title="Read Diverse Content"
          description="Explore articles on a wide variety of topics from our diverse community."
          icon="📚"
        />
        <FeatureCard
          title="Write Your Story"
          description="Create and publish your own articles with our user-friendly editor."
          icon="✍️"
        />
        <FeatureCard
          title="Connect with Readers"
          description="Engage with a community that shares your interests and passions."
          icon="🤝"
        />
      </motion.div>

      {/* Animated Floating Icons */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bg-purple-400 w-40 h-40 rounded-full opacity-60"
          animate={{ x: [-50, 200, -50], y: [-50, 200, -50] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
        <motion.div
          className="absolute bg-blue-400 w-32 h-32 rounded-full opacity-60 top-40"
          animate={{ x: [50, -200, 50], y: [50, -200, 50] }}
          transition={{ repeat: Infinity, duration: 8 }}
        />
      </div>
    </div>
  );
};

// Reusable FeatureCard Component
const FeatureCard = ({ title, description, icon }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300"
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default LandingPage;
