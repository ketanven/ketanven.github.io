import { motion } from 'framer-motion';
import { 
  SiDjango, SiLaravel, SiDocker, 
  SiReact, SiMysql, SiPostgresql, 
  SiPython, SiRedis 
} from 'react-icons/si';
import { FaAws, FaNodeJs, FaVuejs } from 'react-icons/fa';

const techs = [
  { name: 'Python', icon: SiPython, color: 'group-hover:text-blue-500' },
  { name: 'Django', icon: SiDjango, color: 'group-hover:text-emerald-600' },
  { name: 'Laravel', icon: SiLaravel, color: 'group-hover:text-red-500' },
  { name: 'Node.js', icon: FaNodeJs, color: 'group-hover:text-green-500' },
  { name: 'AWS', icon: FaAws, color: 'group-hover:text-orange-500' },
  { name: 'Docker', icon: SiDocker, color: 'group-hover:text-blue-600' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'group-hover:text-blue-400' },
  { name: 'Redis', icon: SiRedis, color: 'group-hover:text-red-600' },
  { name: 'MySQL', icon: SiMysql, color: 'group-hover:text-blue-700' },
  { name: 'React', icon: SiReact, color: 'group-hover:text-cyan-400' },
  { name: 'Vue.js', icon: FaVuejs, color: 'group-hover:text-emerald-500' },
];

export default function TechMarquee() {
  // We duplicate the array to create a seamless infinite translation loop
  const duplicatedTechs = [...techs, ...techs];

  return (
    <div className="w-full bg-black border-y border-white/5 py-10 overflow-hidden relative z-20">
      
      {/* Vignette gradients to fade edges out smoothly seamlessly */}
      <div className="absolute top-0 bottom-0 left-0 w-32 md:w-64 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-32 md:w-64 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
      
      <motion.div 
        className="flex space-x-16 md:space-x-24 items-center w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 40, repeat: Infinity }}
      >
        {duplicatedTechs.map((tech, idx) => {
          const Icon = tech.icon;
          return (
            <div key={idx} className="flex items-center space-x-4 group cursor-default grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <Icon className={`w-8 h-8 md:w-10 md:h-10 ${tech.color} transition-colors`} />
              <span className="text-xl md:text-2xl font-bold text-gray-600 group-hover:text-white transition-colors tracking-widest uppercase">
                {tech.name}
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
