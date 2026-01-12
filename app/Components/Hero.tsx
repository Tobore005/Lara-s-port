"use client";

import { motion } from "framer-motion";
import Link from 'next/link'; // Inside your Hero component:

export default function Hero() {
  return (
    <section className="min-h-[85vh] px-6 md:px-10 pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col justify-center relative overflow-hidden bg-black">
      {/* 1. THE BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src="/project1.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-60" // Lower opacity to make the black BG bleed through
        />

        {/* 2. THE MULTI-LAYER OVERLAY (This fixes the visibility) */}
        {/* Layer A: Solid tint */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Layer B: Gradient for the bottom text area */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 z-10" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full relative z-20">
        {/* 3. Main Heading - Your original sizes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-7xl md:text-[120px] font-bold leading-[0.85] tracking-tighter text-white uppercase drop-shadow-2xl">
            Strategic <br />
            <span className="text-brand-pink">creative.</span>
          </h1>
        </motion.div>

        {/* 4. Bottom Container */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-16 md:mt-24 gap-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl font-medium text-white max-w-sm leading-tight drop-shadow-md"
          >
            Design + copywriting services <br className="hidden md:block" />
            to grow your brand.
          </motion.p>
          
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full md:w-auto border-2 border-white bg-white text-black px-10 py-4 text-sm font-bold uppercase hover:bg-transparent hover:text-white transition-all shadow-xl"
            >
              Book a consult
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}
