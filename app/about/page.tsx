"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen pt-40 pb-20 px-6 md:px-10 text-white">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section 1: The Big Statement */}
        <section className="mb-32">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[12vw] md:text-[8vw] font-bold leading-[0.8] tracking-tighter uppercase mb-12"
          >
            Design <br /> is <br /> 
            <span className="text-brand-pink italic">Strategy.</span>
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <p className="text-2xl md:text-3xl font-medium leading-tight max-w-xl text-gray-300">
              I help brands bridge the gap between what they say and how they look. 
              As a writer and designer, I don't just make things pretty—I make them speak.
            </p>
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-brand-pink">
              Est. 2026 / Based in Nigeria
            </div>
          </div>
        </section>

        {/* Section 2: Expertise Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-16 py-24 border-t border-white/10">
          <div>
            <span className="text-brand-pink font-bold text-sm mb-4 block uppercase">01 / Copy</span>
            <h3 className="text-2xl font-bold mb-4">Narrative Strategy</h3>
            <p className="text-gray-400 leading-relaxed">Crafting brand voices that cut through the noise. From high-conversion landing pages to core brand manifestos.</p>
          </div>
          <div>
            <span className="text-brand-pink font-bold text-sm mb-4 block uppercase">02 / Design</span>
            <h3 className="text-2xl font-bold mb-4">Visual Identity</h3>
            <p className="text-gray-400 leading-relaxed">Developing cohesive design systems that reflect the soul of a brand. Minimalist, bold, and strategically sound.</p>
          </div>
          <div>
            <span className="text-brand-pink font-bold text-sm mb-4 block uppercase">03 / Synergy</span>
            <h3 className="text-2xl font-bold mb-4">The Intersection</h3>
            <p className="text-gray-400 leading-relaxed">Where the word meets the pixel. I provide a unified creative direction so your brand never feels disjointed.</p>
          </div>
        </section>

        {/* Section 3: Call to Action */}
        <section className="pt-24 border-t border-white/10 text-center">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-10">
            Ready to start?
          </h2>
          <a href="/contact" className="inline-block bg-white text-black px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-brand-pink hover:text-white transition-all transform hover:scale-105">
            Book a consultation
          </a>
        </section>

      </div>
    </main>
  );
}