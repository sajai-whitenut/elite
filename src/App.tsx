import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ChevronLeft, 
  Github, 
  Linkedin, 
  Mail, 
  Menu, 
  X, 
  Layout, 
  Database, 
  Palette, 
  Heart, 
  Home, 
  Sparkles,
  Smartphone,
  Globe,
  Zap
} from 'lucide-react';
import { cn } from './lib/utils';

// Demos
import SaaSDemo from './components/demos/SaaS';
import DashboardDemo from './components/demos/Dashboard';
import AgencyDemo from './components/demos/Agency';
import WellnessDemo from './components/demos/Wellness';
import RealEstateDemo from './components/demos/RealEstate';
import AIToolDemo from './components/demos/AITool';

// Components
import ProjectCard from './components/ProjectCard';

const SERVICES = [
  {
    title: "Web Development",
    description: "High-performance, scalable web applications built with React and TypeScript. Optimized for speed and SEO.",
    icon: <Globe className="w-8 h-8" />,
    benefit: "Faster load times and better search rankings."
  },
  {
    title: "UI/UX Design",
    description: "User-centric design systems that prioritize accessibility and intuitive navigation across all devices.",
    icon: <Palette className="w-8 h-8" />,
    benefit: "Increased user engagement and lower bounce rates."
  },
  {
    title: "Mobile Optimization",
    description: "Responsive layouts that provide a seamless experience on smartphones and tablets without compromise.",
    icon: <Smartphone className="w-8 h-8" />,
    benefit: "Reach your customers wherever they are."
  },
  {
    title: "Performance Tuning",
    description: "Deep optimization of existing codebases to reduce latency and improve core web vitals.",
    icon: <Zap className="w-8 h-8" />,
    benefit: "Higher conversion rates through instant interactions."
  }
];

const PROJECTS = [
  {
    id: 'saas',
    title: 'Nexus Enterprise',
    category: 'SaaS Platform',
    description: 'A high-performance enterprise data management platform with a focus on clean, professional aesthetics and complex data visualization.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    component: SaaSDemo,
    icon: <Layout className="w-5 h-5" />,
    githubUrl: "https://github.com/yourusername/nexus-enterprise",
    demoUrl: "https://nexus-demo.vercel.app"
  },
  {
    id: 'dashboard',
    title: 'Inventory OS',
    category: 'Admin Dashboard',
    description: 'A technical, information-dense dashboard for logistics and inventory control, featuring a brutalist, hardware-inspired design.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    component: DashboardDemo,
    icon: <Database className="w-5 h-5" />,
    githubUrl: "https://github.com/yourusername/inventory-os",
    demoUrl: "https://inventory-demo.vercel.app"
  },
  {
    id: 'agency',
    title: 'Void Studio',
    category: 'Creative Agency',
    description: 'A bold, high-energy portfolio for a creative agency, utilizing brutalist typography and dynamic marquee animations.',
    image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800',
    component: AgencyDemo,
    icon: <Palette className="w-5 h-5" />,
    githubUrl: "https://github.com/yourusername/void-studio",
    demoUrl: "https://void-demo.vercel.app"
  },
  {
    id: 'wellness',
    title: 'Oasis Wellness',
    category: 'Health & Lifestyle',
    description: 'An organic, warm, and inviting landing page for a wellness sanctuary, focusing on soft typography and serene imagery.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
    component: WellnessDemo,
    icon: <Heart className="w-5 h-5" />,
    githubUrl: "https://github.com/yourusername/oasis-wellness",
    demoUrl: "https://oasis-demo.vercel.app"
  },
  {
    id: 'realestate',
    title: 'Lumina Estates',
    category: 'Luxury Real Estate',
    description: 'A prestigious marketplace for ultra-luxury properties, featuring a dark, cinematic aesthetic and high-end typography.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    component: RealEstateDemo,
    icon: <Home className="w-5 h-5" />,
    githubUrl: "https://github.com/yourusername/lumina-estates",
    demoUrl: "https://lumina-demo.vercel.app"
  },
  {
    id: 'aitool',
    title: 'Aether AI',
    category: 'AI Technology',
    description: 'A futuristic landing page for an AI tool, utilizing atmospheric gradients, glassmorphism, and immersive motion effects.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    component: AIToolDemo,
    icon: <Sparkles className="w-5 h-5" />,
    githubUrl: "https://github.com/yourusername/aether-ai",
    demoUrl: "https://aether-demo.vercel.app"
  }
];

export default function App() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ActiveComponent = activeDemo ? PROJECTS.find(p => p.id === activeDemo)?.component : null;

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#1a1a1a] font-sans selection:bg-black selection:text-white">
      <AnimatePresence mode="wait">
        {activeDemo ? (
          <motion.div
            key="demo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white overflow-auto"
          >
            <button 
              onClick={() => setActiveDemo(null)}
              className="fixed top-8 left-8 z-[110] p-4 bg-black text-white rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
            >
              <ChevronLeft size={20} />
              <span className="text-xs uppercase tracking-widest font-bold pr-2 hidden md:block">Back to Portfolio</span>
            </button>
            {ActiveComponent && <ActiveComponent />}
          </motion.div>
        ) : (
          <motion.div
            key="portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Navigation */}
            <nav className={cn(
              "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-8 py-6 flex justify-between items-center",
              scrolled ? "bg-white/80 backdrop-blur-xl border-b border-black/5 py-4" : "bg-transparent"
            )}>
              <div className="text-xl font-black tracking-tighter">ELITE.</div>
              
              <div className="hidden md:flex gap-12 text-xs uppercase tracking-[0.2em] font-bold">
                <a href="#work" className="hover:opacity-50 transition-opacity">Work</a>
                <a href="#about" className="hover:opacity-50 transition-opacity">About</a>
                <a href="#contact" className="hover:opacity-50 transition-opacity">Contact</a>
              </div>

              <div className="flex items-center gap-6">
                <div className="hidden sm:flex gap-4">
                  <a href="#" className="p-2 hover:bg-black/5 rounded-full transition-colors"><Github size={18} /></a>
                  <a href="#" className="p-2 hover:bg-black/5 rounded-full transition-colors"><Linkedin size={18} /></a>
                </div>
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 md:hidden"
                >
                  {isMenuOpen ? <X /> : <Menu />}
                </button>
              </div>
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col justify-center px-8 md:px-24 pt-20">
              <div className="max-w-5xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="inline-block px-4 py-2 bg-black text-white text-[10px] uppercase tracking-[0.3em] font-bold mb-8">
                    Available for Freelance
                  </span>
                  <h1 className="text-[12vw] md:text-[8vw] font-black leading-[0.85] tracking-tighter uppercase mb-12">
                    CRAFTING <br /> DIGITAL <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-black">EXCELLENCE.</span>
                  </h1>
                  <div className="flex flex-col md:flex-row gap-12 items-start md:items-end">
                    <p className="text-xl md:text-2xl text-black/60 max-w-xl leading-relaxed font-medium">
                      I build high-end web experiences that convert. From technical dashboards to luxury boutiques, I bring your vision to life with precision.
                    </p>
                    <a href="#work" className="group flex items-center gap-4 text-xs uppercase tracking-[0.3em] font-black whitespace-nowrap">
                      View My Work <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all"><ArrowRight size={18} /></div>
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Background Decoration */}
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[40vw] h-[40vw] bg-gradient-to-br from-gray-100 to-transparent rounded-full blur-3xl -z-10 opacity-50" />
            </section>

            {/* Work Section */}
            <section id="work" className="px-8 md:px-24 py-32">
              <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-black/40 mb-4 block">Selected Projects</span>
                  <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">The Showcase.</h2>
                </div>
                <p className="text-black/50 max-w-xs text-sm font-medium leading-relaxed">
                  Explore 6 distinct design systems and architectures built to demonstrate versatility and technical depth.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.map((project, index) => (
                  <ProjectCard 
                    key={project.id}
                    title={project.title}
                    category={project.category}
                    description={project.description}
                    image={project.image}
                    githubUrl={project.githubUrl}
                    demoUrl={project.demoUrl}
                    onClick={() => setActiveDemo(project.id)}
                    className={cn(index % 2 === 1 ? "md:translate-y-12" : "")}
                  />
                ))}
              </div>
            </section>

            {/* About Section */}
            <section id="about" className="bg-black text-white px-8 md:px-24 py-32">
              <div className="max-w-4xl">
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40 mb-8 block">About Me</span>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-12 leading-tight">
                  I bridge the gap between <span className="italic font-serif text-gray-400">design</span> and <span className="italic font-serif text-gray-400">engineering</span> to create products that feel as good as they look.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <p className="text-lg opacity-60 leading-relaxed">
                    With over 5 years of experience in the digital space, I've helped startups and established brands launch products that stand out. My approach is rooted in clean code, accessible design, and performance.
                  </p>
                  <div className="space-y-6">
                    <div className="flex gap-4 items-center">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center"><Layout size={20} /></div>
                      <div>
                        <div className="font-bold">UI/UX Design</div>
                        <div className="text-sm opacity-50">Figma, Framer, Motion</div>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center"><Database size={20} /></div>
                      <div>
                        <div className="font-bold">Full-Stack Dev</div>
                        <div className="text-sm opacity-50">React, Node, TypeScript</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section id="services" className="px-8 md:px-24 py-32 bg-white">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-24">
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-black/40 mb-4 block">What I Offer</span>
                  <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Services.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {SERVICES.map((service, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5 }}
                      className="p-12 bg-[#f8f9fa] rounded-[40px] border border-black/5 flex flex-col items-start group"
                    >
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                        {service.icon}
                      </div>
                      <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                      <p className="text-black/60 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <div className="mt-auto pt-6 border-t border-black/5 w-full">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-[#ff4e00]">Benefit:</span>
                        <p className="text-sm font-medium mt-1">{service.benefit}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="px-8 md:px-24 py-32 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto"
              >
                <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-12">Let's Build <br /> Together.</h2>
                <p className="text-xl text-black/60 mb-12">
                  Currently accepting new projects for Q2 2026.
                </p>
                <a 
                  href="mailto:hello@elite.dev"
                  className="inline-flex items-center gap-4 px-12 py-6 bg-black text-white rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform"
                >
                  Get in touch <Mail size={20} />
                </a>
                
                <div className="mt-24 pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-widest font-bold opacity-40">
                  <div>© 2026 Elite Portfolio Pro</div>
                  <div className="flex gap-8">
                    <a href="#" className="hover:opacity-100">Twitter</a>
                    <a href="#" className="hover:opacity-100">Instagram</a>
                    <a href="#" className="hover:opacity-100">Dribbble</a>
                  </div>
                </div>
              </motion.div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
