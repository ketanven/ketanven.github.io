import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import AmbientBackground from './AmbientBackground';
import resumePDF from '../assets/Ketan Pillai.pdf';

export default function Hero() {
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
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl leading-tight"
        >
          Backend Engineer building <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 md:whitespace-nowrap">
            <TypeAnimation
              sequence={[
                'scalable systems & APIs',
                2000,
                'high-performance backends',
                2000,
                'robust microservices',
                2000,
                'complex business logic',
                2000,
                'secure cloud architectures',
                2000,
                'fast & reliable databases',
                2000,
                'data-driven solutions',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed"
        >
          Hi, I'm Ketan Pillai. I specialize in high-performance backends, scalable architectures, and crafting real-world solutions that handle complex business logic.
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
