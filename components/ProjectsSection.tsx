'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: 'Central Kitchen Operations',
    description: 'Established and managed central kitchen serving 3 retail outlets with streamlined operations',
    link: '#',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop'
  },
  {
    title: 'Coffee Shop Establishment',
    description: 'Built successful coffee shop from ground up, managing all aspects from concept to daily operations',
    link: '#',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=600&fit=crop'
  },
  {
    title: 'Multi-Outlet Expansion',
    description: 'Successfully expanded operations to 3 outlets across Hong Kong with consistent quality standards',
    link: '#',
    image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&h=600&fit=crop'
  },
  {
    title: 'Brand & Marketing Design',
    description: 'Created comprehensive brand identity, marketing materials, and menu designs for F&B businesses',
    link: '#',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop'
  }
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6 bg-[#020617]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-20">
            <h2 className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-6">PROJECTS</h2>
            <h3 className="text-5xl md:text-6xl font-bold mb-4">What I've accomplished</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative block"
              >
                <motion.div 
                  className="relative overflow-hidden rounded-3xl aspect-[16/11]"
                  whileHover={{ scale: 1.02, y: -8 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <motion.h4 
                      className="text-2xl font-bold mb-3 text-white"
                      initial={{ y: 0 }}
                      whileHover={{ y: -5 }}
                    >
                      {project.title}
                    </motion.h4>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="absolute inset-0 border-2 border-white/0 group-hover:border-cyan-500/50 rounded-3xl transition-all duration-500" />
                </motion.div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
