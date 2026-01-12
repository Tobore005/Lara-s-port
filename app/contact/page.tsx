"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <section className="bg-black min-h-screen pt-40 pb-20 px-6 md:px-10 text-white">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left Side: Impact Text */}
        <div className="flex flex-col justify-between">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-[100px] font-bold leading-[0.8] tracking-tighter uppercase"
          >
            Let's <br /> Build <br /> 
            <span className="text-brand-pink">It.</span>
          </motion.h1>
          
          <div className="mt-12 lg:mt-0">
            <p className="text-xl md:text-2xl font-medium text-gray-400 max-w-sm leading-tight mb-8">
              Strategy, design, and copy that moves the needle.
            </p>
            <a href="mailto:hello@writers.com" className="text-xl font-bold border-b-2 border-brand-pink pb-1">
              hello@writers.com
            </a>
          </div>
        </div>

        {/* Right Side: Simple Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10"
        >
          <form className="space-y-10">
            <div className="border-b border-white/20 pb-4">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Name</label>
              <input type="text" placeholder="Your name" className="w-full bg-transparent text-xl outline-none" />
            </div>
            <div className="border-b border-white/20 pb-4">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Service</label>
              <select className="w-full bg-transparent text-xl outline-none appearance-none cursor-pointer">
                <option className="bg-black">Creative Direction</option>
                <option className="bg-black">Copywriting</option>
                <option className="bg-black">Brand Design</option>
              </select>
            </div>
            <button className="w-full bg-white text-black py-6 rounded-full font-bold uppercase tracking-widest hover:bg-brand-pink hover:text-white transition-all">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}