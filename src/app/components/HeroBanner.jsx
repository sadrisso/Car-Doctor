"use client"
import React from "react";
import { motion } from "framer-motion";

const HeroBanner = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[700px] overflow-hidden shadow-md">
      {/* Background Image with Overlay */}
      <img
        src="/assets/images/banner/5.jpg"
        alt="Car Servicing"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-opacity-50"></div>{" "}
      {/* Dark Overlay */}
      {/* Content Section */}
      <div className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-xl mb-4 text-white"
        >
          Affordable Price For Car Servicing
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg max-w-md mb-8 text-gray-300"
        >
          There Are Many Variations Of Passages Of Available, But The Majority
          Have Suffered Alteration In Some Form
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-300">
            Discover More
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold rounded-lg shadow-md transition-all duration-300">
            Latest Project
          </button>
        </motion.div>
      </div>
      {/* Navigation Arrows (Optional, if you want to implement carousel-like functionality) */}
      <div className="absolute bottom-8 right-8 z-10 flex space-x-4">
        <button className="flex items-center justify-center w-12 h-12 bg-gray-700 bg-opacity-70 hover:bg-opacity-100 rounded-full text-white text-xl transition-all duration-300">
          &larr;
        </button>
        <button className="flex items-center justify-center w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full text-white text-xl transition-all duration-300">
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
