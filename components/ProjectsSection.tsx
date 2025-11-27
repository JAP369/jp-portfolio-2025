'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack web application with payment integration and real-time inventory management',
    link: '#',
    tag: 'Web Development',
    gradient: 'from-blue-500/20 to-purple-500/20',
    image: '/project1.jpg'
  },
  {
    title: 'Mobile Banking App',
    description: 'Cross-platform mobile application for digital banking with secure transactions',
    link: '#',
    tag: 'Mobile Development',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    image: '/project2.jpg'
  },
  {
    title: 'Product Management Dashboard',
    description: 'Analytics and reporting platform for product teams with real-time insights',
    link: '#',
    tag: 'Product Management',
    gradient: 'from-purple-500/20 to-pink-500/20',
    image: '/project3.jpg'
  },
  {
    title: 'Enterprise CRM System',
    description: 'Customer relationship management solution with automation and integrations',
    link: '#',
    tag: 'Enterprise',
    gradient: 'from-violet-500/20 to-purple-500/20',
    image: '/project4.jpg'
  }
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Image Placeholder */}
                <div className="relative aspect-[16/10] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-sm" />
                  </div>
                  
                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/40 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ExternalLink className="w-12 h-12 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative p-8">
                  <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium mb-4">
                    {project.tag}
                  </span>
                  
                  <h4 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: 'left' }}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
