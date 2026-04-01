import React from 'react';
import { motion } from 'motion/react';
import { Bed, MapPin, Maximize, Search } from 'lucide-react';

export default function RealEstateDemo() {
  return (
    <div className="bg-black text-white font-sans min-h-screen">
      <header className="px-8 py-8 flex justify-between items-center border-b border-white/10">
        <div className="text-2xl font-light tracking-[0.2em] uppercase">LUMINA.</div>
        <div className="flex gap-8 text-[11px] uppercase tracking-[0.3em] font-medium opacity-60">
          <a href="#" className="hover:opacity-100 transition-opacity">Estates</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Concierge</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Private</a>
        </div>
        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-all">
          <Search size={16} />
        </div>
      </header>

      <main>
        <section className="relative h-[80vh] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920" 
            alt="Luxury Estate"
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <span className="text-[11px] uppercase tracking-[0.5em] font-bold mb-6 block">The Sovereign Collection</span>
              <h1 className="text-7xl md:text-[120px] font-light leading-[0.9] tracking-tighter mb-12">
                ELEVATED <br /> LIVING.
              </h1>
              <div className="flex gap-4">
                <button className="px-10 py-4 border border-white rounded-full text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all">
                  View Portfolio
                </button>
              </div>
            </motion.div>
          </div>
          
          <div className="absolute bottom-12 right-8 flex gap-12 text-[10px] uppercase tracking-[0.2em] font-bold">
            <div className="flex flex-col gap-1">
              <span className="opacity-40">Location</span>
              <span>Geneva, CH</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="opacity-40">Price</span>
              <span>$14.2M</span>
            </div>
          </div>
        </section>

        <section className="px-8 py-24 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="text-4xl font-light tracking-tight">Featured Residences</h2>
            <div className="h-[1px] flex-grow bg-white/10 mx-12 hidden md:block" />
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold opacity-40">01 — 08</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <PropertyCard 
              img="https://images.unsplash.com/photo-1600607687940-47a0f925901e?auto=format&fit=crop&q=80&w=800"
              title="Villa Seraphina"
              location="Cap d'Antibes, FR"
              price="$28,000,000"
              beds="7"
              size="1,200 m²"
            />
            <PropertyCard 
              img="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800"
              title="The Glass House"
              location="Aspen, USA"
              price="$12,500,000"
              beds="5"
              size="850 m²"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

function PropertyCard({ img, title, location, price, beds, size }: any) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group cursor-pointer"
    >
      <div className="aspect-[16/10] overflow-hidden mb-6 relative">
        <img 
          src={img} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold">
          {price}
        </div>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-2xl font-light mb-2">{title}</h3>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest opacity-50">
            <MapPin size={12} />
            {location}
          </div>
        </div>
        <div className="flex gap-6 text-[10px] uppercase tracking-widest font-bold opacity-60">
          <div className="flex items-center gap-2">
            <Bed size={14} />
            {beds}
          </div>
          <div className="flex items-center gap-2">
            <Maximize size={14} />
            {size}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
