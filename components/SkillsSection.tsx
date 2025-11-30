'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const skills = [
  {
    title: 'Bartending & Mixology',
    description: '15+ years behind the bar, fine-tuning service and craft for drinks, specializing in cocktails and beverage preparation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
        <path d="M6 3h12M8 3v6a4 4 0 0 0 4 4 4 4 0 0 0 4-4V3M12 13v8M8 21h8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: 'Purchasing & Inventory',
    description: 'Expert in beverage purchasing, vendor management, inventory control systems, and cost optimization.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeWidth="2"/>
        <path d="M9 12h6M9 16h3" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    title: 'Design & Marketing',
    description: 'Creating drink menus, marketing materials, and brand visuals with Adobe Creative Suite and digital tools.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: 'Operations & Administration',
    description: 'Managing bar operations, staff leadership, administrative tasks, and business operations with computer proficiency.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
        <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="2"/>
        <path d="M7 8h10M7 12h10M7 16h5" strokeWidth="2" strokeLinecap="round"/>
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
