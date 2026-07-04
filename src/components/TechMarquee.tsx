import { motion } from 'framer-motion';
import { 
  SiDjango, SiLaravel, SiDocker, SiReact, SiMysql, SiPostgresql, SiPython, SiRedis,
  SiExpress, SiPostman, SiTypescript, SiJsonwebtokens, SiMongodb, SiSqlite, SiNginx,
  SiGithubactions, SiRedux, SiNextdotjs, SiTailwindcss, SiBootstrap, SiStripe,
  SiRazorpay, SiFirebase, SiTwilio, SiAnthropic, SiGithubcopilot, SiOpenai, SiGoogle
} from 'react-icons/si';
import { FaAws, FaNodeJs, FaVuejs, FaLinux, FaUserShield, FaRocket, FaDatabase, FaTerminal } from 'react-icons/fa';

const techs = [
  // 1. AI-Assisted Development (First)
  { name: 'Antigravity', icon: FaRocket, color: 'group-hover:text-red-500' },
  { name: 'Claude Code', icon: SiAnthropic, color: 'group-hover:text-orange-300' },
  { name: 'Gemini', icon: SiGoogle, color: 'group-hover:text-blue-500' },
  { name: 'ChatGPT', icon: SiOpenai, color: 'group-hover:text-emerald-500' },
  { name: 'Cursor', icon: FaTerminal, color: 'group-hover:text-cyan-500' },
  { name: 'GitHub Copilot', icon: SiGithubcopilot, color: 'group-hover:text-purple-400' },

  // 2. Core Frontend & Frameworks
  { name: 'React.js', icon: SiReact, color: 'group-hover:text-cyan-400' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'group-hover:text-white' },
  { name: 'Vue.js', icon: FaVuejs, color: 'group-hover:text-emerald-500' },
  { name: 'TailwindCSS', icon: SiTailwindcss, color: 'group-hover:text-cyan-400' },

  // 3. Backend & Core Languages
  { name: 'Node.js', icon: FaNodeJs, color: 'group-hover:text-green-500' },
  { name: 'TypeScript', icon: SiTypescript, color: 'group-hover:text-blue-400' },
  { name: 'Django', icon: SiDjango, color: 'group-hover:text-emerald-600' },
  { name: 'Python', icon: SiPython, color: 'group-hover:text-blue-500' },
  { name: 'Laravel', icon: SiLaravel, color: 'group-hover:text-red-500' },
  { name: 'Express.js', icon: SiExpress, color: 'group-hover:text-gray-400' },

  // 4. Cloud & Infrastructure
  { name: 'AWS', icon: FaAws, color: 'group-hover:text-orange-400' },
  { name: 'Docker', icon: SiDocker, color: 'group-hover:text-blue-500' },
  { name: 'GitHub Actions', icon: SiGithubactions, color: 'group-hover:text-blue-400' },
  { name: 'Nginx', icon: SiNginx, color: 'group-hover:text-emerald-500' },
  { name: 'Linux', icon: FaLinux, color: 'group-hover:text-yellow-500' },

  // 5. Databases & Cache
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'group-hover:text-blue-400' },
  { name: 'MySQL', icon: SiMysql, color: 'group-hover:text-blue-600' },
  { name: 'Redis', icon: SiRedis, color: 'group-hover:text-red-600' },
  { name: 'MongoDB', icon: SiMongodb, color: 'group-hover:text-green-600' },
  { name: 'SQLite', icon: SiSqlite, color: 'group-hover:text-blue-300' },

  // 6. Payments & Integrations
  { name: 'Stripe', icon: SiStripe, color: 'group-hover:text-indigo-500' },
  { name: 'Razorpay', icon: SiRazorpay, color: 'group-hover:text-blue-500' },
  { name: 'Firebase', icon: SiFirebase, color: 'group-hover:text-amber-500' },
  { name: 'SMS/OTP APIs', icon: SiTwilio, color: 'group-hover:text-red-500' },

  // 7. Architectural Core Concepts
  { name: 'REST APIs', icon: SiPostman, color: 'group-hover:text-orange-500' },
  { name: 'Query Optimization', icon: FaDatabase, color: 'group-hover:text-amber-500' },
  { name: 'JWT Auth', icon: SiJsonwebtokens, color: 'group-hover:text-pink-500' },
  { name: 'RBAC', icon: FaUserShield, color: 'group-hover:text-emerald-500' },
  { name: 'Redux Toolkit', icon: SiRedux, color: 'group-hover:text-purple-500' },
  { name: 'Bootstrap', icon: SiBootstrap, color: 'group-hover:text-purple-600' }
];

export default function TechMarquee() {
  // We duplicate the array to create a seamless infinite translation loop
  const duplicatedTechs = [...techs, ...techs];

  return (
    <div className="w-full bg-black border-y border-white/5 py-10 overflow-hidden relative z-20">
      
      {/* Vignette gradients to fade edges out smoothly */}
      <div className="absolute top-0 bottom-0 left-0 w-32 md:w-64 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-32 md:w-64 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
      
      <motion.div 
        className="flex space-x-16 md:space-x-24 items-center w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 80, repeat: Infinity }}
      >
        {duplicatedTechs.map((tech, idx) => {
          const Icon = tech.icon;
          return (
            <div key={idx} className="flex items-center space-x-4 group cursor-default grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 shrink-0">
              <Icon className={`w-8 h-8 md:w-10 md:h-10 ${tech.color} transition-colors`} />
              <span className="text-xl md:text-2xl font-bold text-gray-600 group-hover:text-white transition-colors tracking-widest uppercase whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
