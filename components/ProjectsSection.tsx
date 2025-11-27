'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: 'Jio | UCP 🔒',
    description: "Jio's CDP tool turns customer data into insights & action",
    link: '#',
    bgColor: 'bg-[#1a1d3a]',
    textColor: 'text-blue-200'
  },
  {
    title: 'Fynd Speed',
    description: 'Performance monitoring tool for eCommerce websites',
    link: '#',
    bgColor: 'bg-[#1a2838]',
    textColor: 'text-cyan-200'
  },
  {
    title: 'Nexus - Design System',
    description: 'Supports 150+ variables & 600+ variants',
    link: '#',
    bgColor: 'bg-[#2a1a3a]',
    textColor: 'text-purple-200'
  },
  {
    title: 'Nexus - NFT App',
    description: 'A marketplace where users can buy, sell, or create NFTs',
    link: '#',
    bgColor: 'bg-[#1a2a38]',
    textColor: 'text-teal-200'
  }
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6 bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-20">
            <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4">+ PROJECTS +</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-4">What i've been up to</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative block"
              >
                {/* Project Card */}
                <div className="relative overflow-hidden rounded-3xl">
                  {/* Project Preview Image Area */}
                  <motion.div 
                    className={`${project.bgColor} aspect-[4/3] relative overflow-hidden`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                    
                    {/* Placeholder for actual project image - you can add your screenshots here */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <div className="text-6xl font-bold text-white/10">
                        {index + 1}
                      </div>
                    </div>
                  </motion.div>

                  {/* Project Info */}
                  <div className="bg-[#0a0a0a]/95 backdrop-blur-sm border-t border-white/5 p-6">
                    <motion.h4 
                      className={`text-xl md:text-2xl font-bold mb-2 ${project.textColor} group-hover:text-white transition-colors duration-300`}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.title}
                    </motion.h4>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10" />
              </motion.a>
            ))}
          </div>

          {/* "Made in Framer" badge style - optional */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 text-sm">Scroll to explore more projects</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
