"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function ServiceDetails({ data }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Banner */}
      <section className="relative w-full h-[150px] md:h-[200px] lg:h-[250px] rounded-xl overflow-hidden">
        {/* Background Image */}
        <Image
          src="/assets/images/banner/4.jpg"
          alt="details-banner"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Centered Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h3
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-2xl md:text-4xl font-bold text-center"
          >
            Service Details
          </motion.h3>
        </div>
      </section>

      {/* Service Card */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-white w-full mx-auto mt-6 shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row"
      >
        {/* Image */}
        {data?.img && (
          <div className="relative w-full md:w-1/2 h-60 md:h-auto">
            <Image
              src={data.img}
              alt={data.title || "Service Image"}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div className="p-6 flex flex-col justify-center flex-1">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-2xl font-bold text-gray-800"
          >
            {data.title || "Service Title"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-gray-600 leading-relaxed mt-3"
          >
            {data.description || "No description available for this service."}
          </motion.p>

          {/* Price & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex items-center justify-between mt-6"
          >
            <span className="text-xl font-semibold text-green-600">
              ${data.price || "N/A"}
            </span>
            <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition">
              Book Now
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default ServiceDetails;
