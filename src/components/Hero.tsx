import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import AmbientBackground from './AmbientBackground';
import resumePDF from '../assets/Ketan Pillai.pdf';

const phrases = [
  'scalable full-stack applications',
  'high-performance backends',
  'integrated subscription billing',
  'robust microservices',
  'real-time backend systems',
  'modern React & Vue interfaces',
  'interactive admin dashboards',
  'secure cloud architectures',
  'optimized database schemas',
  'end-to-end SaaS products'
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <AmbientBackground />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-sm font-medium text-gray-300">Available for new opportunities</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl leading-tight"
        >
          Full-Stack Engineer building <br className="hidden md:block"/>
          
          {/* Desktop Version: Type Animation */}
          <span className="hidden md:inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 whitespace-nowrap">
            <TypeAnimation
              sequence={[
                'scalable full-stack applications',
                2000,
                'high-performance backends',
                2000,
                'integrated subscription billing',
                2000,
                'robust microservices',
                2000,
                'real-time backend systems',
                2000,
                'modern React & Vue interfaces',
                2000,
                'interactive admin dashboards',
                2000,
                'secure cloud architectures',
                2000,
                'optimized database schemas',
                2000,
                'end-to-end SaaS products',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>

          {/* Mobile Version: Smooth Slide-up Rotator */}
          <span className="relative flex md:hidden justify-center items-center h-20 sm:h-24 w-full text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 overflow-hidden mt-2">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 max-w-[300px] xs:max-w-xs sm:max-w-xl px-4 py-1"
              >
                {phrases[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed"
        >
          Hi, I'm Ketan Pillai. I build full-stack products end-to-end — from scalable Node.js, Laravel, and Django backends to the React and Vue interfaces on top — with particular strength in API architecture and cloud infrastructure.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <a href="#projects" className="group flex items-center justify-center space-x-2 bg-white text-black px-8 py-3.5 rounded-lg font-medium hover:bg-gray-200 transition-colors w-full sm:w-auto">
            <span>View Projects</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center space-x-2 bg-white/5 text-white border border-white/10 px-8 py-3.5 rounded-lg font-medium hover:bg-white/10 transition-colors w-full sm:w-auto backdrop-blur-sm">
            <span>Download Resume</span>
          </a>
          <a href="#contact" className="group flex items-center justify-center space-x-2 bg-transparent text-gray-400 px-6 py-3.5 hover:text-white transition-colors w-full sm:w-auto">
            <Terminal size={18} />
            <span>Contact Me</span>
          </a>
        </motion.div>

      </div>

    </section>
  );
}
