import React from 'react';

interface ProjectProps {
  title: string;
  category: string;
  imagePath: string;
  linkText: string;
}

const ProjectCard = ({ title, category, imagePath, linkText }: ProjectProps) => {
  return (
    <div className="flex flex-col group cursor-pointer w-full">
      {/* This container forces the image into a perfect square */}
      <div className="relative w-full aspect-square overflow-hidden bg-gray-100 mb-4">
        <img 
          src={imagePath} 
          alt={title} 
          // absolute + object-cover ensures the image fills the square perfectly
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <h3 className="text-xl font-bold text-black mb-1">{category}</h3>
      <div className="flex items-center gap-1 border-b border-black w-fit pb-0.5">
        <span className="text-xs font-bold uppercase tracking-wider">{linkText}</span>
        <span className="text-lg">→</span>
      </div>
    </div>
  );
};

// CRITICAL: Ensure this is a default export
export default ProjectCard;