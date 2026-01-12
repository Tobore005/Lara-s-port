"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation'; // To detect which page we are on

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // 1. Logic to check if the current page is a "Light" page (Blog, Portfolio, About)
  const isLightPage = pathname === '/blog' || pathname === '/portfolio' || pathname === '/about';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    if (!isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  };

  const navLinks = [
    { name: 'home', href: '/' },
    { name: 'about', href: '/about' },
    { name: 'portfolio', href: '/portfolio' },
    { name: 'blog', href: '/blog' },
    { name: 'contact', href: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full transition-all duration-500 z-[100] px-6 md:px-10 
      ${scrolled 
        ? 'py-4 bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-sm' 
        : 'py-8 bg-transparent'}`}
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        
        {/* Logo - Dynamically changes color based on page or scroll */}
        <div className={`text-sm font-bold tracking-tight z-[110] transition-colors duration-500
          ${(scrolled || isLightPage) ? 'text-black' : 'text-white'}`}>
          <Link href="/">writers.com</Link>
        </div>

        {/* Desktop Navigation */}
        <div className={`hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest transition-colors duration-500
          ${(scrolled || isLightPage) ? 'text-black' : 'text-white'}`}>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-brand-pink transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Hamburger Toggle */}
        <button 
          className={`md:hidden z-[110] p-2 transition-colors duration-500
            ${(scrolled || isLightPage || isOpen) ? 'text-black' : 'text-white'}`}
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Full-Screen Overlay - Fix: Uses h-[100dvh] for mobile browser bars */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white flex flex-col items-center justify-center z-[105] h-[100dvh]"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={toggleMenu}
                  className="text-5xl font-bold tracking-tighter text-black uppercase hover:text-brand-pink transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;