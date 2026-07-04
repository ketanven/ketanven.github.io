import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { Building2, GraduationCap, Calendar, ChevronRight } from 'lucide-react';

const timeline = [
  {
    type: "work",
    title: "Junior Software Developer",
    organization: "iCoderz Pvt. Ltd.",
    date: "Apr 2024 – Present",
    details: [
      "Promoted to full-time Junior Software Developer after completing a 6-month internship.",
      <span>
        <strong>SourceCAD</strong> — Online CAD Learning Platform <em className="text-gray-400 text-xs">(Node.js, React.js, Next.js, Express.js, PostgreSQL)</em>
        <span className="block text-xs text-gray-400 mt-1 pl-3 border-l border-blue-500/30 space-y-1">
          <span>• Built & maintained REST APIs across web, admin, and mobile clients.</span><br/>
          <span>• Implemented subscription billing integrating Stripe and Razorpay (upgrades, downgrades, webhook cycles).</span><br/>
          <span>• Owned the React.js admin panel, course management, and training dashboards.</span>
        </span>
      </span>,
      <span>
        <strong>Go Payana</strong> — Ride-Hailing Platform <em className="text-gray-400 text-xs">(Laravel, Vue.js)</em>
        <span className="block text-xs text-gray-400 mt-1 pl-3 border-l border-blue-500/30 space-y-1">
          <span>• Built rider and driver app REST APIs for zero-commission ride-hailing.</span><br/>
          <span>• Developed the Vue.js admin panel for ride tracking and driver management.</span><br/>
          <span>• Implemented OTP authentication and real-time location/matching features.</span>
        </span>
      </span>,
      <span>
        <strong>ToMoveOut</strong> — Relocation Marketplace <em className="text-gray-400 text-xs">(Laravel, JavaScript)</em>
        <span className="block text-xs text-gray-400 mt-1 pl-3 border-l border-blue-500/30 space-y-1">
          <span>• Delivered relocation marketplace APIs, Blade admin panel, and JavaScript frontend.</span><br/>
          <span>• Built multi-country/multi-language listing search, filters, and in-app messaging.</span>
        </span>
      </span>,
      <span>
        <strong>PMS</strong> — Project Management System <em className="text-gray-400 text-xs">(Laravel, Vue.js)</em>
        <span className="block text-xs text-gray-400 mt-1 pl-3 border-l border-blue-500/30 space-y-1">
          <span>• Added company-wide project management APIs, task tracking, and real-time timers.</span><br/>
          <span>• Developed CEO/Manager/Employee role dashboards and Kanban boards.</span>
        </span>
      </span>
    ]
  },
  {
    type: "education",
    title: "Master of Computer Applications (MCA)",
    organization: "Silver Oak University",
    date: "Completed — CGPA 9.3",
    details: ["Pursuing advanced studies in computer science and application development."]
  },
  {
    type: "work",
    title: "Backend Development Intern",
    organization: "iCoderz Pvt. Ltd.",
    date: "Oct 2023 – Mar 2024",
    details: [
      "Contributed to production Laravel applications and REST API development under senior engineer guidance.",
      "Gained hands-on experience with database design, validation, and deployment activities.",
      "Learned Agile workflows and version control practices in a professional environment."
    ]
  },
  {
    type: "education",
    title: "Bachelor of Computer Applications (BCA)",
    organization: "GLS University",
    date: "2021 – 2024 — CGPA 8.0",
    details: ["Completed bachelor's degree focusing on core computer science subjects, software engineering, and database management systems."]
  },
  {
    type: "education",
    title: "12th Commerce",
    organization: "Nelson's Higher Secondary School",
    date: "Completed",
    details: ["Completed higher secondary education establishing a strong quantitative foundation."]
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section id="experience" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[120px] opacity-30 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            My Journey
          </h2>
          <p className="text-gray-400 text-lg">
            A continuous path of learning and building robust software solutions.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative pl-6 md:pl-8 border-l border-white/10 max-w-3xl mx-auto">
          
          {/* Animated Scroll-Linked Line */}
          <motion.div 
            style={{ scaleY: scrollYProgress }}
            className="absolute left-[-1px] top-0 bottom-0 w-[2px] origin-top bg-gradient-to-b from-blue-500 via-purple-500 to-transparent"
          ></motion.div>
          
          {timeline.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative pb-12 last:pb-0"
            >
              {/* Timeline dot icon - centered mathematically on the left line */}
              <div className="absolute left-[-17px] top-1.5 w-8 h-8 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.3)] bg-black border-2 border-blue-500 flex items-center justify-center z-10">
                {item.type === 'work' ? <Building2 size={14} className="text-blue-400" /> : <GraduationCap size={14} className="text-purple-400" />}
              </div>

              {/* Card Container holding all info together */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 shadow-xl backdrop-blur-sm hover:border-blue-500/30">
                {/* Header Information (Title, Company, Date) */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-3">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{item.title}</h3>
                    <div className="text-blue-400 font-semibold text-sm md:text-base">{item.organization}</div>
                  </div>
                  <div className="flex items-center text-xs md:text-sm text-gray-400 md:self-start bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 w-fit">
                    <Calendar size={14} className="mr-2 text-blue-400" />
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* Details Bullet List */}
                <ul className="space-y-4">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start text-gray-300">
                      <ChevronRight size={16} className="text-blue-400 mr-2 mt-1 shrink-0" />
                      <span className="text-sm md:text-base leading-relaxed w-full">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
