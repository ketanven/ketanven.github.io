import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { Building2, GraduationCap, Calendar, ChevronRight } from 'lucide-react';

const timeline = [
  {
    type: "work",
    title: "Junior Software Developer",
    organization: "iCoderz Pvt. Ltd.",
    date: "Oct 2024 – Present",
    details: [
      "Promoted to full-time Junior Developer after successfully completing a 6-month internship.",
      "Working on scalable backend solutions using Laravel, implementing RESTful APIs and service-layer architecture.",
      "Managing and optimizing MySQL databases with a focus on performance, indexing, and query optimization.",
      "Collaborating with the frontend team using Vue.js to create dynamic web applications."
    ]
  },
  {
    type: "education",
    title: "Master of Computer Applications",
    organization: "Silver Oak University",
    date: "2024 – Present",
    details: ["Pursuing advanced studies in computer science and application development."]
  },
  {
    type: "work",
    title: "Backend Development Intern",
    organization: "iCoderz Pvt. Ltd.",
    date: "April 2024 – Oct 2024",
    details: [
      "Contributed to live projects by building and integrating backend features using Laravel and MySQL.",
      "Gained hands-on experience with API development, validation, and database schema design.",
      "Learned agile workflows and version control practices in a professional environment."
    ]
  },
  {
    type: "education",
    title: "Bachelor of Computer Applications",
    organization: "GLS University",
    date: "2021 – 2024",
    details: ["Completed bachelor's degree focusing on core computer science subjects, software engineering, and database management systems."]
  },
  {
    type: "education",
    title: "12th Commerce",
    organization: "Nelson's Higher Secondary School",
    date: "Completed 2021",
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

        <div ref={containerRef} className="relative pl-8 ml-4 md:ml-0 md:pl-0 border-l border-white/10 md:border-none">
          
          {/* Animated Mobile Line */}
          <motion.div 
            style={{ scaleY: scrollYProgress }}
            className="md:hidden absolute left-[-1px] top-0 bottom-0 w-[2px] origin-top bg-gradient-to-b from-blue-500 via-purple-500 to-transparent"
          ></motion.div>

          {/* Static Desktop Line */}
          <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-white/10 -translate-x-[0.5px]"></div>
          
          {/* Animated Desktop Line */}
          <motion.div 
            style={{ scaleY: scrollYProgress }}
            className="hidden md:block absolute left-[50%] top-0 bottom-0 w-[2px] origin-top bg-gradient-to-b from-blue-500 via-purple-500 to-transparent -translate-x-[1px]"
          ></motion.div>
          
          {timeline.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`mb-12 relative md:flex md:items-center w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="absolute -left-10 md:left-1/2 w-8 h-8 rounded-full md:-translate-x-1/2 mt-0 md:mt-0 shadow-[0_0_15px_rgba(59,130,246,0.3)] bg-black border-2 border-blue-500 flex items-center justify-center z-10">
                {item.type === 'work' ? <Building2 size={14} className="text-blue-400" /> : <GraduationCap size={14} className="text-purple-400" />}
              </div>

              <div className={`md:w-[45%] md:px-8 mb-4 md:mb-0 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <div className={`flex items-center text-blue-400 font-medium mb-2 ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                  {item.organization}
                </div>
                <div className={`flex items-center text-sm text-gray-500 ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                  <Calendar size={14} className="mr-2" />
                  {item.date}
                </div>
              </div>

              <div className={`bg-white/5 border border-white/10 rounded-2xl p-6 md:w-[45%] hover:bg-white/10 transition-colors shadow-xl backdrop-blur-sm ${idx % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                <ul className="space-y-3">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start text-gray-300">
                      <ChevronRight size={16} className="text-blue-400 mr-2 mt-0.5 shrink-0" />
                      <span className="text-sm leading-relaxed">{detail}</span>
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
