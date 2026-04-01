import React from 'react';
import { motion } from 'motion/react';
import { Heart, Leaf, Moon, Sun } from 'lucide-react';

export default function WellnessDemo() {
  return (
    <div className="bg-[#f5f5f0] text-[#5A5A40] font-serif min-h-screen">
      <nav className="flex justify-between items-center px-8 py-8">
        <div className="text-2xl font-light italic tracking-tight">Oasis.</div>
        <div className="hidden md:flex gap-12 text-sm uppercase tracking-widest font-medium">
          <a href="#" className="hover:text-black transition-colors">Retreats</a>
          <a href="#" className="hover:text-black transition-colors">Practices</a>
          <a href="#" className="hover:text-black transition-colors">Journal</a>
        </div>
        <button className="px-8 py-3 bg-[#5A5A40] text-white rounded-full text-xs uppercase tracking-widest hover:bg-[#4A4A30] transition-colors">
          Book Session
        </button>
      </nav>

      <main className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-7xl md:text-8xl font-light leading-[1.1] mb-8">
              Find your <br /> <span className="italic">inner rhythm.</span>
            </h1>
            <p className="text-xl font-light leading-relaxed opacity-80 mb-12 max-w-md">
              A curated space for mindful movement, holistic healing, and conscious living. Reconnect with yourself in our sanctuary.
            </p>
            <div className="flex gap-8">
              <Feature icon={<Leaf className="w-5 h-5" />} label="Natural" />
              <Feature icon={<Heart className="w-5 h-5" />} label="Holistic" />
              <Feature icon={<Sun className="w-5 h-5" />} label="Mindful" />
            </div>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="aspect-[3/4] rounded-[100px] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1545208393-216c7ad81985?auto=format&fit=crop&q=80&w=800" 
                alt="Wellness"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-white rounded-full p-8 shadow-xl flex items-center justify-center text-center">
              <div className="text-xs uppercase tracking-widest font-bold leading-tight">
                Est. 2024 <br /> <span className="font-light italic">Sanctuary</span>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-48 grid grid-cols-1 md:grid-cols-3 gap-12">
          <Card 
            title="Morning Flow" 
            time="07:00 AM" 
            icon={<Sun className="w-6 h-6" />}
            desc="Start your day with gentle movement and focused breathing."
          />
          <Card 
            title="Deep Rest" 
            time="08:00 PM" 
            icon={<Moon className="w-6 h-6" />}
            desc="A restorative practice to prepare your body for deep sleep."
          />
          <Card 
            title="Mindful Living" 
            time="Workshops" 
            icon={<Leaf className="w-6 h-6" />}
            desc="Learn the art of presence in your everyday activities."
          />
        </section>
      </main>
    </div>
  );
}

function Feature({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-12 h-12 rounded-full border border-[#5A5A40]/20 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-[10px] uppercase tracking-widest font-bold">{label}</span>
    </div>
  );
}

function Card({ title, time, icon, desc }: { title: string, time: string, icon: React.ReactNode, desc: string }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white p-10 rounded-[40px] shadow-sm border border-[#5A5A40]/5"
    >
      <div className="flex justify-between items-start mb-8">
        <div className="p-3 bg-[#f5f5f0] rounded-2xl">{icon}</div>
        <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">{time}</span>
      </div>
      <h3 className="text-2xl font-light mb-4">{title}</h3>
      <p className="text-sm font-light leading-relaxed opacity-70">{desc}</p>
    </motion.div>
  );
}
