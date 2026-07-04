import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "AI-Assisted Development",
    color: "bg-indigo-500",
    hoverBorder: "hover:border-indigo-500/30",
    hoverShadow: "hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.15)]",
    skills: ["Claude Code", "GitHub Copilot", "Cursor", "ChatGPT", "Gemini", "Antigravity"]
  },
  {
    title: "Backend Core",
    color: "bg-blue-500",
    hoverBorder: "hover:border-blue-500/30",
    hoverShadow: "hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)]",
    skills: ["Python", "Django", "Node.js", "Express.js", "Laravel", "REST APIs", "TypeScript", "JWT Authentication", "RBAC"]
  },
  {
    title: "Database & Cache",
    color: "bg-green-500",
    hoverBorder: "hover:border-green-500/30",
    hoverShadow: "hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.15)]",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Redis", "Query Optimization"]
  },
  {
    title: "Cloud & DevOps",
    color: "bg-purple-500",
    hoverBorder: "hover:border-purple-500/30",
    hoverShadow: "hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)]",
    skills: ["AWS (EC2, S3, RDS, ALB, Secrets Manager)", "Docker", "Nginx", "GitHub Actions (CI/CD)", "Linux"]
  },
  {
    title: "Frontend",
    color: "bg-orange-500",
    hoverBorder: "hover:border-orange-500/30",
    hoverShadow: "hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.15)]",
    skills: ["React.js", "Redux Toolkit", "Vue.js", "Next.js", "TailwindCSS", "Bootstrap"]
  },
  {
    title: "Payments & Integrations",
    color: "bg-red-500",
    hoverBorder: "hover:border-red-500/30",
    hoverShadow: "hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.15)]",
    skills: ["Stripe", "Razorpay", "Firebase (Realtime DB, Firestore)", "OTP/SMS APIs"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 relative overflow-hidden">
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
            A comprehensive overview of the technologies and tools I use to architect and build scalable full-stack applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col h-full transition-all duration-500 group ${category.hoverBorder} ${category.hoverShadow}`}
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className={`w-3.5 h-3.5 rounded-full ${category.color} mr-3 shadow-[0_0_12px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-300`}></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3.5 py-2 text-sm font-medium bg-white/5 border border-white/5 text-gray-300 rounded-xl hover:bg-white/10 hover:border-white/10 hover:text-white transition-all duration-200 cursor-default"
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
