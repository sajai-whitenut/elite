import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';

interface ProjectCardProps {
  key?: React.Key;
  title: string;
  description: string;
  category: string;
  image: string;
  githubUrl?: string;
  demoUrl?: string;
  onClick: () => void;
  className?: string;
}

export default function ProjectCard({ title, description, category, image, githubUrl = "#", demoUrl = "#", onClick, className }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={cn(
        "group relative bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm hover:shadow-2xl transition-all duration-500",
        className
      )}
    >
      <div className="aspect-[16/10] overflow-hidden relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
          <button 
            onClick={onClick}
            className="px-6 py-3 bg-white text-black rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
          >
            Full Demo <ExternalLink size={14} />
          </button>
        </div>
      </div>
      
      <div className="p-8">
        <div className="flex justify-between items-start mb-3">
          <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/40">
            {category}
          </div>
          <div className="flex gap-3">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-black/40 hover:text-black transition-colors">
              <ArrowRight className="w-4 h-4 rotate-[-45deg]" />
            </a>
          </div>
        </div>
        <h3 className="text-2xl font-bold tracking-tight mb-4 group-hover:text-black transition-colors">
          {title}
        </h3>
        <p className="text-black/60 text-sm leading-relaxed mb-8">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <button 
            onClick={onClick}
            className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold group-hover:gap-4 transition-all"
          >
            View Details <ArrowRight size={14} />
          </button>
          <div className="flex gap-4">
            <a href={githubUrl} className="text-[10px] uppercase tracking-widest font-bold opacity-40 hover:opacity-100 transition-opacity">GitHub</a>
            <a href={demoUrl} className="text-[10px] uppercase tracking-widest font-bold opacity-40 hover:opacity-100 transition-opacity">Live</a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
