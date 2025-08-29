"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function Services({ data }) {
  return (
    <div>
      <motion.section
        className="px-4 py-12 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Our Items
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.map((item, index) => (
            <motion.div
              key={item?._id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item?.title || "Item Title"}
              </h3>
              <div className="w-full h-48 relative rounded-lg overflow-hidden">
                <Image
                  src={item?.img || "/placeholder.jpg"}
                  alt={item?.title || "Item"}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-lg font-semibold text-gray-800 pt-2">
                Price:{" "}
                <span className="text-orange-500 font-bold">${item?.price}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

export default Services;
