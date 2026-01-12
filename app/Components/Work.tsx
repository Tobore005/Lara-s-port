import React from 'react';
import Link from 'next/link';
import ProjectCard from './ProjectCard';

const TheWork = () => {
  return (
    <section className="bg-white px-10 py-24">
      <div className="mx-auto">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <h2 className="text-[100px] font-bold leading-[0.8] tracking-tighter text-black mb-8">
              The <br /> Work.
            </h2>
            <p className="text-xl font-medium text-black max-w-xs leading-tight">
              One great thing about creative is that the work speaks for itself.
            </p>
          </div>
          
          <Link 
            href="/portfolio" 
            className="border border-black rounded-full px-8 py-2 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all inline-block"
          >
            See the portfolio
          </Link>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <ProjectCard 
            category="Graphic Design"
            linkText="See more"
            imagePath="/project1.jpg"
            title="Design"
          />
          <ProjectCard 
            category="Art + Creative Direction"
            linkText="Portfolio"
            imagePath="/project2.jpg"
            title="Art"
          />
          <ProjectCard 
            category="Copywriting"
            linkText="Read more"
            imagePath="/project3.jpg"
            title="Copy"
          />
        </div>

      </div>
    </section>
  ); // <--- Make sure this is exactly: );
}; // <--- Make sure this is exactly: };

export default TheWork;