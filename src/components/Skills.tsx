import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Backend Core",
    color: "bg-blue-500",
    skills: ["Python", "Django", "Node.js", "Laravel", "REST APIs", "TypeScript"]
  },
  {
    title: "Database & Cache",
    color: "bg-green-500",
    skills: ["MySQL", "PostgreSQL", "Redis", "MongoDB", "Query Optimization"]
  },
  {
    title: "Cloud & DevOps",
    color: "bg-purple-500",
    skills: ["AWS EC2", "AWS S3", "AWS Secrets Manager", "Docker", "Nginx", "CI/CD", "Linux"]
  },
  {
    title: "Frontend Integration",
    color: "bg-orange-500",
    skills: ["React", "Vue.js", "Next.js", "TailwindCSS"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Technical Arsenal
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A comprehensive overview of the technologies and tools I use to architect and build scalable applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className={`w-3 h-3 rounded-full ${category.color} mr-3 shadow-[0_0_10px_rgba(255,255,255,0.1)]`}></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1.5 text-sm font-medium bg-white/5 border border-white/5 text-gray-300 rounded-lg hover:bg-white/10 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
