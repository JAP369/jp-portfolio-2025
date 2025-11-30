'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: 'Kusina - Filipino Restaurant',
    description: 'Authentic Filipino cuisine website with online menu and catering services in Hong Kong',
    link: 'https://kusina-hk.vercel.app/',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop'
  },
  {
    title: 'NPL Marketplace',
    description: "Nepal's trusted marketplace for buying and selling electronics, property, vehicles, and more",
    link: 'https://npl-marketplace.vercel.app/',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop'
  },
  {
    title: 'Dragon-i Nightclub',
    description: "Hong Kong's premier nightclub experience with events, VIP services, and luxury entertainment",
    link: 'https://dihk.vercel.app/',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop'
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio showcasing full-stack development and product management expertise',
    link: 'https://jonathanpaita.vercel.app/',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
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
            <h3 className="text-5xl md:text-6xl font-bold mb-4">What i've been up to</h3>
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
