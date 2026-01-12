"use client";

import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white px-6 md:px-10 py-16 border-t border-black/5">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-16">
        
        {/* Top Part: Branding & Links */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8">
          <div className="space-y-4">
            <div className="text-xl font-bold tracking-tighter uppercase">
              writers.com
            </div>
            <p className="text-xs font-bold text-black/40 max-w-[200px] uppercase tracking-widest leading-relaxed">
              Bespoke design + Narrative strategy for global brands.
            </p>
          </div>
          
          <div className="flex gap-16 md:gap-24 text-xs font-bold uppercase tracking-widest">
            {/* Socials */}
            <div className="flex flex-col gap-4">
              <p className="text-black/30 mb-2">Connect</p>
              <a href="#" className="hover:text-brand-pink transition-all hover:translate-x-1 inline-block">Instagram</a>
              <a href="#" className="hover:text-brand-pink transition-all hover:translate-x-1 inline-block">LinkedIn</a>
              <a href="#" className="hover:text-brand-pink transition-all hover:translate-x-1 inline-block">Behance</a>
            </div>
            
            {/* Legal */}
            <div className="flex flex-col gap-4">
              <p className="text-black/30 mb-2">Legal</p>
              <a href="#" className="hover:text-brand-pink transition-all hover:translate-x-1 inline-block">Privacy</a>
              <a href="#" className="hover:text-brand-pink transition-all hover:translate-x-1 inline-block">Terms</a>
            </div>
          </div>
        </div>

        {/* Bottom Part: Copyright & Action */}
        <div className="border-t border-black/5 pt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <p>© 2026 ALL RIGHTS RESERVED</p>
            <p>DESIGNED BY Tobore</p>
          </div>

          {/* Back to Top Toggle */}
          <button 
            onClick={scrollToTop}
            className="text-black hover:text-brand-pink transition-colors flex items-center gap-2 group"
          >
            <span>Back to top</span>
            <span className="text-lg transition-transform group-hover:-translate-y-1">↑</span>
          </button>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;