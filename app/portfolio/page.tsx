"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const PortfolioItem = ({ title, category, imagePath, id, span }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`group cursor-pointer ${span}`}
  >
    <Link href={`/portfolio/${id}`}>
      {/* Aspect ratios keep images from becoming "too big" or "ugly" */}
      <div className={`relative overflow-hidden bg-gray-100 mb-6 
        ${span.includes('row-span-2') ? 'aspect-[4/6]' : 'aspect-[16/10]'} 
        ${span.includes('col-span-2') ? 'md:aspect-[21/9]' : ''}`}
      >
        <img 
          src={imagePath} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>

      <div className="flex justify-between items-end border-b border-black/10 pb-4">
        <div>
          <h3 className="text-xl md:text-2xl font-bold tracking-tighter uppercase leading-none">{title}</h3>
          <p className="text-[10px] font-bold text-brand-pink uppercase tracking-widest mt-2">{category}</p>
        </div>
        <span className="text-[10px] font-black uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
          View Project ↗
        </span>
      </div>
    </Link>
  </motion.div>
);

export default function PortfolioPage() {
  const projects = [
    { id: 1, title: "Brand Identity", category: "Design", imagePath: "/project1.jpg", span: "md:col-span-2" },
    { id: 2, title: "Narrative", category: "Copy", imagePath: "/project2.jpg", span: "md:col-span-1 md:row-span-2" },
    { id: 3, title: "Art Direction", category: "Creative", imagePath: "/project3.jpg", span: "md:col-span-1" },
    { id: 4, title: "Visual System", category: "Design", imagePath: "/project1.jpg", span: "md:col-span-1" },
    { id: 5, title: "Editorial", category: "Copy", imagePath: "/project2.jpg", span: "md:col-span-2" },
    { id: 6, title: "Digital Brand", category: "Web", imagePath: "/project3.jpg", span: "md:col-span-1" },
    { id: 7, title: "Strategy", category: "Creative", imagePath: "/project1.jpg", span: "md:col-span-2" },
  ];

  return (
    <main className="bg-white min-h-screen pt-40 pb-32 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Centered Header */}
        <header className="mb-32 text-center">
          <h1 className="text-[10vw] md:text-[8vw] font-bold leading-[0.8] tracking-tighter uppercase inline-block">
            Selected <br /> <span className="text-brand-pink italic">Works.</span>
          </h1>
          <p className="mt-8 text-xs font-bold text-gray-400 uppercase tracking-[0.5em]">
            Curated Portfolio — 2026
          </p>
        </header>

        {/* The Centered Gallery Container */}
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-24">
          {projects.map((project) => (
            <PortfolioItem key={project.id} {...project} />
          ))}
        </div>

        {/* Centered Footer */}
        <footer className="mt-48 text-center border-t border-black/5 pt-20">
          <Link href="/contact" className="group inline-block">
            <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter group-hover:text-brand-pink transition-colors">
              Start a project →
            </h2>
          </Link>
        </footer>
      </div>
    </main>
  );
}