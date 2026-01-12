"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ServiceBar = () => {
  const services = [
    "Print + Digital",
    "Branding",
    "Packaging",
    "Editorial",
    "Websites",
    "Campaigns",
    "Swags"
  ];

  // We double the array to ensure the loop is seamless
  const tickerContent = [...services, ...services];

  return (
    <div className="bg-white border-y border-black py-4 md:py-6 overflow-hidden flex whitespace-nowrap">
      <motion.div 
        className="flex"
        animate={{ x: [0, -1000] }} // Adjust -1000 based on content length
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {tickerContent.map((service, index) => (
          <div key={index} className="flex items-center px-6 md:px-12">
            <span className="text-black text-lg md:text-2xl font-black uppercase tracking-tighter">
              {service}
            </span>
            <span className="ml-12 md:ml-24 text-black text-2xl md:text-4xl font-black">
              *
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServiceBar;