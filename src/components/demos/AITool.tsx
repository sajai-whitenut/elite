import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Globe, MessageSquare, Sparkles, Zap } from 'lucide-react';

export default function AIToolDemo() {
  return (
    <div className="bg-[#0a0502] text-white font-sans min-h-screen relative overflow-hidden">
      {/* Atmospheric Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#ff4e00]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#3a1510]/20 rounded-full blur-[120px]" />
      </div>

      <nav className="relative z-10 px-8 py-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#ff4e00] rounded-lg flex items-center justify-center">
            <Sparkles size={18} className="text-white" />
          </div>
          <span className="text-xl font-bold tracking-tighter">AETHER AI</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-white/60">
          <a href="#" className="hover:text-white transition-colors">Models</a>
          <a href="#" className="hover:text-white transition-colors">API</a>
          <a href="#" className="hover:text-white transition-colors">Enterprise</a>
        </div>
        <button className="px-6 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-sm font-medium hover:bg-white/10 transition-all">
          Sign In
        </button>
      </nav>

      <main className="relative z-10 max-w-5xl mx-auto px-8 pt-24 pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff4e00]/10 border border-[#ff4e00]/20 rounded-full text-[#ff4e00] text-xs font-bold tracking-widest uppercase mb-8">
            <Zap size={14} />
            v2.0 Now Live
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
            Intelligence <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4e00] to-[#ff8e00]">Redefined.</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            The next generation of large language models, optimized for reasoning, creativity, and real-time execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-[#ff4e00] rounded-2xl font-bold hover:bg-[#ff6e00] transition-all shadow-[0_0_40px_rgba(255,78,0,0.3)]">
              Start Building
            </button>
            <button className="px-10 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all">
              Read Documentation
            </button>
          </div>
        </motion.div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard 
            icon={<Cpu className="text-[#ff4e00]" />} 
            title="Neural Engine" 
            desc="Proprietary architecture designed for sub-millisecond latency."
          />
          <FeatureCard 
            icon={<Globe className="text-[#ff4e00]" />} 
            title="Global Context" 
            desc="Massive 2M token window for deep understanding of complex data."
          />
          <FeatureCard 
            icon={<MessageSquare className="text-[#ff4e00]" />} 
            title="Human-Like" 
            desc="Advanced reasoning that mirrors human cognitive patterns."
          />
        </div>
      </main>

      {/* Floating UI Elements */}
      <div className="absolute top-1/2 left-10 hidden xl:block">
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest font-bold opacity-50">Processing...</span>
          </div>
          <div className="w-48 h-2 bg-white/10 rounded-full mb-2 overflow-hidden">
            <motion.div 
              animate={{ width: ['0%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-full bg-[#ff4e00]" 
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: any) {
  return (
    <div className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl text-left hover:bg-white/10 transition-all group">
      <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
    </div>
  );
}
