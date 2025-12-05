'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
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
    ),
    gradient: 'from-orange-500/20 to-red-500/20',
    borderColor: 'hover:border-orange-500/50',
    iconColor: 'text-orange-400'
  },
  {
    title: 'Purchasing & Inventory',
    description: 'Expert in beverage purchasing, vendor management, inventory control systems, and cost optimization.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeWidth="2"/>
        <path d="M9 12h6M9 16h3" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    gradient: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'hover:border-blue-500/50',
    iconColor: 'text-blue-400'
  },
  {
    title: 'Design & Marketing',
    description: 'Creating drink menus, marketing materials, and brand visuals with Adobe Creative Suite and digital tools.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    gradient: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'hover:border-purple-500/50',
    iconColor: 'text-purple-400'
  },
  {
    title: 'Operations & Administration',
    description: 'Managing bar operations, staff leadership, administrative tasks, and business operations with computer proficiency.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
        <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="2"/>
        <path d="M7 8h10M7 12h10M7 16h5" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    gradient: 'from-green-500/20 to-emerald-500/20',
    borderColor: 'hover:border-green-500/50',
    iconColor: 'text-green-400'
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section id="skills" className="py-32 px-6 bg-[#020617] relative overflow-hidden" ref={ref}>
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{ y }}
      >
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-gradient-to-br from-purple-500 to-pink-600 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-4"
          >
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs uppercase tracking-[0.3em] text-gray-500"
            >
              SKILLS
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
            >
              Things I'm good at
            </motion.h3>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.7, 
                delay: 0.4 + index * 0.15,
                ease: [0.25, 0.4, 0.25, 1] as const
              }}
              className="group relative"
            >
              {/* Glow Effect on Hover */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${skill.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`}
                whileHover={{ scale: 1.05 }}
              />
              
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br ${skill.gradient} backdrop-blur-sm border border-white/10 ${skill.borderColor} transition-all duration-500 h-full`}
              >
                {/* Icon Container */}
                <motion.div 
                  className={`${skill.iconColor} mb-6 relative`}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <motion.div
                    animate={{ 
                      rotate: 360,
                    }}
                    transition={{ 
                      duration: 20, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                    className="absolute -inset-2 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  >
                    <div className={`w-full h-full rounded-full bg-gradient-to-r ${skill.gradient} blur-md`} />
                  </motion.div>
                  <div className="relative">
                    {skill.icon}
                  </div>
                </motion.div>

                {/* Content */}
                <motion.h4 
                  className="text-2xl lg:text-3xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {skill.title}
                </motion.h4>
                
                <motion.p 
                  className="text-gray-400 leading-relaxed text-base lg:text-lg group-hover:text-gray-300 transition-colors duration-300"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {skill.description}
                </motion.p>

                {/* Animated Corner Accent */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-br from-white to-gray-400 opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Accent Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm tracking-wider">
            Combining traditional hospitality excellence with modern technology
          </p>
        </motion.div>
      </div>
    </section>
  );
}
