'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: 'Jio | UCP 🔒',
    description: "Jio's CDP tool turns customer data into insights & action",
    link: '#',
    bgGradient: 'from-[#2d2d5f] via-[#3d3d7f] to-[#4d4d8f]'
  },
  {
    title: 'Fynd Speed',
    description: 'Performance monitoring tool for eCommerce websites',
    link: '#',
    bgGradient: 'from-[#1e3a4a] via-[#2e4a5a] to-[#3e5a6a]'
  },
  {
    title: 'Nexus - Design System',
    description: 'Supports 150+ variables & 600+ variants',
    link: '#',
    bgGradient: 'from-[#3d2d5f] via-[#5d4d7f] to-[#7d5d9f]'
  },
  {
    title: 'Nexus - NFT App',
    description: 'A marketplace where users can buy, sell, or create NFTs',
    link: '#',
    bgGradient: 'from-[#2d3d5f] via-[#4d5d7f] to-[#6d7d9f]'
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

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative block"
              >
                {/* Project Card */}
                <motion.div 
                  className="relative overflow-hidden rounded-3xl aspect-[16/11]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient}`} />
                  
                  {/* Mockup/Screenshot placeholder - you can replace with actual images */}
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="w-full h-full bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-white/20 text-sm font-medium">Project Preview</span>
                    </div>
                  </div>

                  {/* Bottom overlay with title and description */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                    <motion.h4 
                      className="text-2xl font-bold mb-2 text-white"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      {project.title}
                    </motion.h4>
                    <motion.p 
                      className="text-gray-300 text-sm leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {project.description}
                    </motion.p>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
                </motion.div>

                {/* Subtle glow on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
