'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  {
    title: 'Full-Stack Development',
    description: 'Building scalable web applications with modern frameworks and best practices.',
    illustration: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <rect x="50" y="50" width="40" height="40" rx="4" fill="none" stroke="currentColor" strokeWidth="3" />
        <rect x="110" y="50" width="40" height="40" rx="4" fill="none" stroke="currentColor" strokeWidth="3" />
        <rect x="50" y="110" width="40" height="40" rx="4" fill="none" stroke="currentColor" strokeWidth="3" />
        <rect x="110" y="110" width="40" height="40" rx="4" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="65" cy="65" r="4" fill="currentColor" />
        <circle cx="75" cy="65" r="4" fill="currentColor" />
        <circle cx="125" cy="65" r="4" fill="currentColor" />
        <circle cx="135" cy="65" r="4" fill="currentColor" />
        <line x1="90" y1="70" x2="110" y2="70" stroke="currentColor" strokeWidth="2" />
        <line x1="70" y1="90" x2="70" y2="110" stroke="currentColor" strokeWidth="2" />
        <line x1="130" y1="90" x2="130" y2="110" stroke="currentColor" strokeWidth="2" />
        <line x1="90" y1="130" x2="110" y2="130" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  },
  {
    title: 'Mobile Development',
    description: 'Creating cross-platform mobile applications with intuitive user experiences.',
    illustration: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <rect x="60" y="40" width="80" height="120" rx="8" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="100" cy="145" r="6" fill="currentColor" />
        <rect x="75" y="55" width="50" height="8" rx="4" fill="currentColor" />
        <rect x="75" y="75" width="50" height="30" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="75" y="115" width="50" height="15" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  },
  {
    title: 'Product Management',
    description: 'Leading product strategy and driving execution from concept to launch.',
    illustration: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="70" cy="80" r="6" fill="currentColor" />
        <circle cx="130" cy="80" r="6" fill="currentColor" />
        <circle cx="70" cy="120" r="6" fill="currentColor" />
        <circle cx="130" cy="120" r="6" fill="currentColor" />
        <circle cx="100" cy="100" r="6" fill="currentColor" />
        <path d="M 50 100 L 150 100" stroke="currentColor" strokeWidth="2" />
        <path d="M 75 60 L 60 40 M 125 60 L 140 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <ellipse cx="100" cy="100" rx="35" ry="25" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(45 100 100)" />
      </svg>
    )
  },
  {
    title: 'Cloud & DevOps',
    description: 'Deploying and maintaining scalable infrastructure with modern DevOps practices.',
    illustration: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <ellipse cx="100" cy="90" rx="60" ry="35" fill="none" stroke="currentColor" strokeWidth="3" />
        <ellipse cx="70" cy="110" rx="40" ry="25" fill="none" stroke="currentColor" strokeWidth="2" />
        <ellipse cx="130" cy="110" rx="40" ry="25" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="100" cy="70" r="4" fill="currentColor" />
        <circle cx="80" cy="85" r="4" fill="currentColor" />
        <circle cx="120" cy="85" r="4" fill="currentColor" />
      </svg>
    )
  },
  {
    title: 'Agile Methodology',
    description: 'Managing projects with agile frameworks and continuous improvement practices.',
    illustration: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M 100 40 L 100 100 L 140 130" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <circle cx="100" cy="40" r="6" fill="currentColor" />
        <circle cx="160" cy="100" r="6" fill="currentColor" />
        <circle cx="100" cy="160" r="6" fill="currentColor" />
        <circle cx="40" cy="100" r="6" fill="currentColor" />
      </svg>
    )
  },
  {
    title: 'API Development',
    description: 'Designing and building robust RESTful APIs and microservices architectures.',
    illustration: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="80" r="20" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="60" cy="120" r="20" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="140" cy="120" r="20" fill="none" stroke="currentColor" strokeWidth="3" />
        <line x1="85" y1="90" x2="70" y2="110" stroke="currentColor" strokeWidth="2" />
        <line x1="115" y1="90" x2="130" y2="110" stroke="currentColor" strokeWidth="2" />
        <line x1="75" y1="130" x2="125" y2="130" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  }
];

export default function SkillsSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0.1, 0.9], [300, -1800]);

  return (
    <section id="skills" className="py-40 px-6 bg-[#0a0a0a] overflow-hidden min-h-[120vh]" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-widest text-gray-500 mb-4"
          >
            + SKILLS +
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Things I'm good at
          </motion.h3>
        </div>

        <div className="relative h-[500px] flex items-center overflow-hidden">
          <motion.div 
            style={{ x }}
            className="flex gap-32"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="group text-center flex-shrink-0 w-[350px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-48 h-48 mx-auto mb-8 text-gray-400 group-hover:text-white transition-colors duration-300">
                  {skill.illustration}
                </div>
                <h4 className="text-2xl font-bold mb-4 group-hover:text-gray-300 transition-colors">
                  {skill.title}
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
