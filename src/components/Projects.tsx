import { motion } from 'framer-motion';
import { ExternalLink, Activity, Users, Clock, CalendarDays } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import NetworkBackground from './NetworkBackground';
import type { ReactNode } from 'react';

type Project = {
  featured: boolean;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  links: { github?: string; live?: string };
  highlights?: { icon: ReactNode; text: string }[];
};

const projects: Project[] = [
  {
    featured: true,
    title: "WorkHub",
    subtitle: "Freelancer & Management Operating System",
    description: "A comprehensive SaaS platform designed for freelancers to manage their entire workflow. Features include an intelligent time tracking system, automated invoicing with PDF generation, a proprietary Client Trust scoring algorithm, Kanban boards, and real-time KPI dashboards.",
    tech: ["Django", "DRF", "React", "TypeScript", "Tailwind", "MySQL", "AWS EC2", "Nginx"],
    links: { github: "https://github.com/ketanven/fwts_appapi" },
    highlights: [
      { icon: <Clock size={16} />, text: "Intelligent Time Tracking" },
      { icon: <Activity size={16} />, text: "Client Trust Scoring" },
      { icon: <CalendarDays size={16} />, text: "Kanban & Calendar" },
      { icon: <Users size={16} />, text: "KPI Dashboards" }
    ]
  },
  {
    featured: false,
    title: "Milkly",
    subtitle: "Dairy eCommerce System",
    description: "A robust eCommerce platform tailored for dairy businesses. Built with complex real-world business logic handling subscription models, dynamic delivery tracking, and a comprehensive admin panel for inventory and route management.",
    tech: ["Node.js", "Express", "Vue.js", "MongoDB"],
    links: { github: "https://github.com/ketanven/Milky" }
  },
  {
    featured: false,
    title: "Booking Application",
    subtitle: "Real-time Reservation System",
    description: "A highly available booking platform handling real-time reservation flows, concurrency control, and integration with third-party payment gateways via secure backend APIs.",
    tech: ["Django", "PostgreSQL", "Redis"],
    links: { github: "#" }
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden">
      <NetworkBackground />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Featured Work
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Selected projects demonstrating my ability to build complex, scalable systems with real business impact.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden hover:bg-white/10 transition-all duration-300 ${project.featured ? 'md:col-span-2' : ''}`}
            >
              {/* Subtle background gradient for featured project */}
              {project.featured && (
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none"></div>
              )}

              <div className="relative z-10 flex flex-col md:flex-row gap-12">
                <div className="flex-1">
                  {project.featured && (
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full mb-4 border border-blue-500/20">
                      Flagship Project
                    </span>
                  )}
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h3>
                  <p className="text-blue-400 font-medium mb-6">{project.subtitle}</p>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    {project.description}
                  </p>

                  {project.featured && project.highlights && (
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {project.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-center text-sm text-gray-300">
                          <span className="text-blue-400 mr-2">{highlight.icon}</span>
                          {highlight.text}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 text-xs font-medium bg-black/50 text-gray-300 rounded-lg border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4">
                    {project.links.live && (
                      <a href={project.links.live} className="flex items-center justify-center space-x-2 bg-white text-black px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                        <ExternalLink size={16} />
                        <span>View Details</span>
                      </a>
                    )}
                    {project.links.github && (
                      <a href={project.links.github} className="flex items-center justify-center space-x-2 bg-white/5 text-white border border-white/10 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors">
                        <FaGithub size={16} />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>
                
                {/* Optional visual placeholder for featured project */}
                {project.featured && (
                  <div className="hidden lg:flex flex-1 items-center justify-center relative">
                    <div className="w-full aspect-video bg-black/40 border border-white/10 rounded-2xl flex items-center justify-center overflow-hidden relative shadow-2xl">
                      {/* Abstract architecture representation */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
                      <div className="flex space-x-4 z-10">
                         <div className="w-16 h-16 bg-blue-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center backdrop-blur-md">
                           <Activity className="text-blue-400" />
                         </div>
                         <div className="w-16 h-16 bg-purple-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center backdrop-blur-md translate-y-4">
                           <DatabaseIcon />
                         </div>
                         <div className="w-16 h-16 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center justify-center backdrop-blur-md">
                           <ServerIcon />
                         </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Simple icons for abstract diagram
function DatabaseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
  )
}

function ServerIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>
  )
}
