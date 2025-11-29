'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const skills = [
  {
    title: 'Full-Stack Development',
    description: 'Building scalable web applications with modern frameworks and best practices, from front-end to back-end.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
        <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="2"/>
        <path d="M8 21h8" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 17v4" strokeWidth="2" strokeLinecap="round"/>
        <path d="M7 10l3 3-3 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 16h3" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    title: 'Product Management',
    description: 'Leading product strategy and driving execution from concept to launch with cross-functional teams.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
        <path d="M12 2L2 7l10 5 10-5-10-5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12l10 5 10-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: 'Mobile Development',
    description: 'Creating cross-platform mobile applications with intuitive user experiences and native performance.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
        <rect x="5" y="2" width="14" height="20" rx="2" strokeWidth="2"/>
        <path d="M12 18h.01" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    title: 'Cloud & DevOps',
    description: 'Implementing cloud infrastructure, CI/CD pipelines, and ensuring scalable, reliable deployments.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-6 bg-[#020617] relative overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-6"
          >
            SKILLS
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold"
          >
            Things I'm good at
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <motion.div 
                className="text-cyan-400 mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {skill.icon}
              </motion.div>
              <h4 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                {skill.title}
              </h4>
              <p className="text-gray-400 leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
