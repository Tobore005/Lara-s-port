"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const BlogCard = ({ post }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group border-b border-gray-100 pb-12 mb-12 last:border-0"
  >
    <Link href={`/blog/${post.slug}`} className="grid grid-cols-1 md:grid-cols-[1fr_200px] gap-8 items-start">
      {/* Text Content */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-5 bg-black rounded-full" /> {/* Placeholder for Author Avatar */}
          <span className="text-xs font-bold uppercase tracking-widest">Writers.com</span>
          <span className="text-gray-400 text-xs">• Jan 12, 2026</span>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 group-hover:text-brand-pink transition-colors leading-tight">
          {post.title}
        </h2>
        
        <p className="text-gray-500 line-clamp-2 text-lg leading-relaxed mb-6 font-serif">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-4">
          <span className="bg-gray-100 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-600">
            {post.category}
          </span>
          <span className="text-gray-400 text-xs">{post.readTime} min read</span>
        </div>
      </div>

      {/* Blog Image */}
      <div className="relative aspect-square md:w-[200px] overflow-hidden rounded-sm">
        <img 
          src={post.image} 
          alt={post.title} 
          className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </Link>
  </motion.div>
);

export default function BlogPage() {
  const posts = [
    {
      slug: "future-of-copy",
      title: "Why AI won't replace strategic narrative in 2026",
      excerpt: "The difference between a generated sentence and a strategic narrative lies in the soul of the brand. We explore why nuance is the new gold.",
      category: "Strategy",
      readTime: 5,
      image: "/project1.jpg"
    },
    {
      slug: "minimalist-design",
      title: "The psychology of white space in high-end branding",
      excerpt: "Less isn't just more; less is expensive. How to use silence in your design to speak louder than your competitors.",
      category: "Design",
      readTime: 8,
      image: "/project2.jpg"
    },
    {
      slug: "brand-voice",
      title: "Finding your brand voice in a world of noise",
      excerpt: "If your brand sounds like everyone else, you're invisible. Here is how to develop a unique tonal identity.",
      category: "Copywriting",
      readTime: 4,
      image: "/project3.jpg"
    }
  ];

  return (
    <main className="bg-white min-h-screen pt-40 pb-20 px-6">
      <div className="max-w-[800px] mx-auto">
        
        {/* Blog Header */}
        <header className="mb-20 border-b-4 border-black pb-8">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">
            The <span className="text-brand-pink">Blog.</span>
          </h1>
          <p className="mt-4 text-xl text-gray-400 font-medium italic">
            Thoughts on design, words, and the space between.
          </p>
        </header>

        {/* Blog Feed */}
        <section>
          {posts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </section>

      </div>
    </main>
  );
}
