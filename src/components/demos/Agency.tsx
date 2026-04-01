import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Play } from 'lucide-react';

export default function AgencyDemo() {
  return (
    <div className="bg-white text-black font-sans min-h-screen overflow-x-hidden">
      {/* Marquee */}
      <div className="bg-black text-white py-4 overflow-hidden whitespace-nowrap border-b border-black">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="inline-block text-sm font-bold uppercase tracking-[0.5em]"
        >
          CREATIVE DIRECTION • BRAND IDENTITY • DIGITAL EXPERIENCES • MOTION DESIGN • STRATEGY • CREATIVE DIRECTION • BRAND IDENTITY • DIGITAL EXPERIENCES • MOTION DESIGN • STRATEGY •
        </motion.div>
      </div>

      <header className="grid grid-cols-1 md:grid-cols-12 border-b border-black">
        <div className="md:col-span-8 p-8 md:p-16 border-r border-black flex flex-col justify-between min-h-[60vh]">
          <div className="flex justify-between items-start">
            <div className="text-2xl font-black tracking-tighter">VOID.</div>
            <div className="text-xs uppercase font-bold tracking-widest opacity-50">Studio // LDN</div>
          </div>
          
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] font-black leading-[0.8] tracking-tighter uppercase mt-12"
          >
            WE BREAK <br /> THE RULES.
          </motion.h1>
        </div>
        
        <div className="md:col-span-4 p-8 flex flex-col justify-between bg-[#00FF00]">
          <nav className="flex flex-col gap-4 text-2xl font-bold uppercase tracking-tighter">
            <a href="#" className="hover:line-through">Work</a>
            <a href="#" className="hover:line-through">About</a>
            <a href="#" className="hover:line-through">Journal</a>
            <a href="#" className="hover:line-through">Contact</a>
          </nav>
          
          <div className="space-y-4">
            <p className="text-sm font-bold leading-tight max-w-[200px]">
              A creative collective pushing the boundaries of digital aesthetics.
            </p>
            <button className="w-full py-4 bg-black text-white font-bold uppercase tracking-widest text-xs flex justify-between px-6 items-center group">
              Start a project
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 border-b border-black">
        <ProjectItem number="01" title="Neon Pulse" category="Branding" color="bg-blue-500" />
        <ProjectItem number="02" title="Ghost Protocol" category="Web Design" color="bg-red-500" />
        <ProjectItem number="03" title="Static Flow" category="Motion" color="bg-yellow-500" />
      </section>

      <footer className="p-8 md:p-16 flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="text-[10vw] font-black tracking-tighter leading-none opacity-10">VOID.</div>
        <div className="flex gap-12 text-xs font-bold uppercase tracking-widest">
          <div className="space-y-2">
            <div className="opacity-30">Social</div>
            <div>Instagram</div>
            <div>Twitter</div>
            <div>Behance</div>
          </div>
          <div className="space-y-2">
            <div className="opacity-30">Contact</div>
            <div>hello@void.studio</div>
            <div>+44 20 7946 0958</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProjectItem({ number, title, category, color }: { number: string, title: string, category: string, color: string }) {
  return (
    <div className="border-r border-black last:border-r-0 group cursor-pointer overflow-hidden relative">
      <div className="p-8 flex flex-col justify-between h-[400px] relative z-10">
        <div className="flex justify-between items-start">
          <span className="text-4xl font-black opacity-20">{number}</span>
          <span className="text-[10px] uppercase font-bold tracking-[0.3em] bg-black text-white px-2 py-1">{category}</span>
        </div>
        <h3 className="text-4xl font-black uppercase tracking-tighter leading-none group-hover:scale-110 transition-transform origin-left">
          {title}
        </h3>
      </div>
      <div className={`absolute inset-0 ${color} translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]`} />
    </div>
  );
}
