import { motion } from 'framer-motion';
import { Target, Zap, MessageSquare, LifeBuoy, Code2, Layers } from 'lucide-react';

export default function About() {
  const cards = [
    {
      icon: <Layers className="w-6 h-6 text-blue-400" />,
      title: "End-to-End Ownership",
      description: "Experience building real-world systems across backend APIs, admin panels, and frontend interfaces — not just one layer of the stack."
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      title: "Performance First",
      description: "Focused on optimizing database queries, caching strategies, and reducing API response times."
    },
    {
      icon: <Target className="w-6 h-6 text-green-400" />,
      title: "Problem Solver",
      description: "I thrive on breaking down complex architectural challenges into scalable, manageable microservices."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-yellow-400" />,
      title: "Client Communication",
      description: "Bridging the gap between technical complexity and business goals through transparent, clear dialogues."
    },
    {
      icon: <LifeBuoy className="w-6 h-6 text-red-400" />,
      title: "After-Sales Support",
      description: "Dedicated to long-term success with robust maintenance, proactive hotfixes, and seamless feature integration."
    },
    {
      icon: <Code2 className="w-6 h-6 text-indigo-400" />,
      title: "Clean Architecture",
      description: "Prioritizing deeply maintainable, extensively documented, and self-explanatory codebases for future scalability."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:w-2/3"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Engineering Philosophy
          </h2>
          <div className="text-gray-400 text-lg space-y-4">
            <p>
              I started my tech journey with a relentless curiosity for how things work under the hood. From an internship to a full-time role as a Junior Software Developer, I've worked across the entire stack — building REST APIs, admin panels, and customer-facing interfaces for products used by real teams and paying subscribers.
            </p>
            <p>
              Whether it's designing complex database schemas, building backend flows in Django, Laravel, and Node.js, wiring up payment infrastructure with Stripe and Razorpay, or building the React/Vue interfaces on top, my focus stays on clean, maintainable, scalable code.
            </p>
            <p>
              I also lean heavily on AI-assisted development — tools like Claude Code, GitHub Copilot, and Cursor are part of my daily workflow, letting me move faster through boilerplate and iterate on ideas quickly without sacrificing code quality.
            </p>
            <div className="p-4 border-l-2 border-blue-500 bg-blue-500/5 mt-6 rounded-r-lg">
              <p className="text-gray-300 italic text-base">
                "If there's one thing teams consistently count on me for, it's my ability to map out complex backend logic on day one and deliver fast, production-ready systems without cutting corners."
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="bg-black/50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
