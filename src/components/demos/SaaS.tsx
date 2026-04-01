import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function SaaSDemo() {
  return (
    <div className="bg-[#f5f5f4] text-[#0a0a0a] font-sans min-h-screen overflow-hidden">
      <nav className="flex justify-between items-center px-8 py-6 border-b border-[#0a0a0a]/10">
        <div className="font-bold text-xl tracking-tighter">NEXUS.</div>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
          <a href="#" className="hover:opacity-50 transition-opacity">Product</a>
          <a href="#" className="hover:opacity-50 transition-opacity">Pricing</a>
          <a href="#" className="hover:opacity-50 transition-opacity">About</a>
        </div>
        <button className="px-6 py-2 border border-[#0a0a0a] rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-[#0a0a0a] hover:text-white transition-all">
          Get Started
        </button>
      </nav>

      <main className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-80px)]">
        <div className="p-8 lg:p-24 flex flex-col justify-center border-r border-[#0a0a0a]/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold mb-6 block opacity-60">
              Enterprise Workflow Solution
            </span>
            <h1 className="text-6xl lg:text-8xl font-semibold leading-[0.88] tracking-tighter mb-8">
              UNIFY YOUR <br /> DATA LAYER.
            </h1>
            <p className="text-lg opacity-70 max-w-md mb-10 leading-relaxed">
              The only platform that bridges the gap between raw data and actionable intelligence. Built for scale, designed for precision.
            </p>
            <div className="flex gap-4">
              <button className="w-24 h-24 rounded-full border border-[#0a0a0a] flex items-center justify-center uppercase text-[10px] tracking-widest font-bold hover:bg-[#0a0a0a] hover:text-white transition-all group">
                Try Now
              </button>
              <div className="flex flex-col justify-center gap-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>14-day free trial</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="bg-[#0a0a0a] text-white p-8 lg:p-24 flex flex-col justify-center relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
              <div className="flex gap-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-4 bg-white/10 rounded-full w-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.random() * 60 + 30}%` }}
                      transition={{ duration: 2, delay: i * 0.2, repeat: Infinity, repeatType: 'reverse' }}
                      className="h-full bg-white/20"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
          
          <div className="absolute bottom-12 right-12 text-[10px] uppercase tracking-[0.3em] opacity-30 [writing-mode:vertical-rl] rotate-180">
            SECURE INFRASTRUCTURE // v4.0.2
          </div>
        </div>
      </main>
    </div>
  );
}
