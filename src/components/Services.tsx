import { motion } from 'framer-motion';
import { Code2, Database, Rocket, Wrench } from 'lucide-react';

const services = [
  {
    icon: <Code2 className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />,
    title: "Custom API Development",
    description: "Building secure, highly-scalable, and fully documented REST APIs tailored to your business needs, powered by robust Django, Laravel, or Node.js backends.",
    color: "from-blue-500/20 to-transparent",
    border: "group-hover:border-blue-500/50"
  },
  {
    icon: <Database className="w-8 h-8 text-green-400 group-hover:text-green-300 transition-colors" />,
    title: "Database Architecture",
    description: "Designing high-performance schemas in MySQL and PostgreSQL. Optimizing slow queries, caching with Redis, and ensuring data integrity.",
    color: "from-green-500/20 to-transparent",
    border: "group-hover:border-green-500/50"
  },
  {
    icon: <Rocket className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" />,
    title: "Full-Stack SaaS MVP",
    description: "Rapidly prototyping and delivering complete web applications from scratch, pairing robust backend logic with modern, lightning-fast React or Vue.js frontends.",
    color: "from-purple-500/20 to-transparent",
    border: "group-hover:border-purple-500/50"
  },
  {
    icon: <Wrench className="w-8 h-8 text-orange-400 group-hover:text-orange-300 transition-colors" />,
    title: "Refactoring & Bug Fixing",
    description: "Diving into complex legacy systems to resolve critical execution bugs, eliminate technical debt, and significantly increase overall application stability.",
    color: "from-orange-500/20 to-transparent",
    border: "group-hover:border-orange-500/50"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute left-[20%] top-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Freelance Offerings
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life or fix what's broken? Here is exactly how I can help your business grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`group relative overflow-hidden bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] ${service.border}`}
            >
              {/* Hover glowing background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
              
              <div className="relative z-10">
                <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl border border-white/10 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
