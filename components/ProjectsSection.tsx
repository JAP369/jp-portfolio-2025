"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    title: "Kusina - Filipino Restaurant",
    description:
      "Authentic Filipino cuisine website with online menu and catering services in Hong Kong",
    link: "https://kusina-hk.vercel.app/",
    image: "/kusina.png",
  },
  {
    title: "NPL Marketplace",
    description:
      "Nepal's trusted marketplace for buying and selling electronics, property, vehicles, and more",
    link: "https://npl-marketplace.vercel.app/",
    image: "/npl-marketplace.jpg",
  },
  {
    title: "Next Level Club",
    description:
      "Premium nightclub and entertainment venue featuring modern design, event bookings, and VIP experiences",
    link: "https://next-level-club.vercel.app/",
    image: "/nlc.png",
  },
  {
    title: "NexTrip",
    description:
      "Premium travel booking platform with flight search, curated destinations, and expert concierge services for extraordinary journeys",
    link: "https://nextrip-main.vercel.app/",
    image: "/nextrip.png",
  },
  {
    title: "Helperly",
    description:
      "Professional domestic helper recruitment agency in Hong Kong with visa assistance, training programs, and 24/7 support",
    link: "https://helperly-main.vercel.app/",
    image: "/helperly.png",
  },
  {
    title: "Airbnb Clone",
    description:
      "Full-featured accommodation booking platform with property listings, search filters, and reservation system",
    link: "https://airbnb-jap-clone.vercel.app/",
    image: "/airbnb-clone.png",
  },
  {
    title: "E-Commerce Dashboard",
    description:
      "Modern admin dashboard for e-commerce management with analytics, inventory tracking, and order processing",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    title: "Fitness Tracking App",
    description:
      "Health and fitness application with workout plans, progress tracking, and nutrition guidance",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
  },
  {
    title: "Real Estate Platform",
    description:
      "Property listing and search platform with virtual tours, mortgage calculator, and agent connections",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
  },
  {
    title: "Restaurant Booking System",
    description:
      "Comprehensive reservation management system with table booking, menu ordering, and customer reviews",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id='projects' className='py-32 px-6 bg-[#020617]' ref={ref}>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className='text-center mb-20'>
            <h2 className='text-xs uppercase tracking-[0.3em] text-gray-500 mb-6'>
              PROJECTS
            </h2>
            <h3 className='text-5xl md:text-6xl font-bold mb-4'>
              What i've been up to
            </h3>
          </div>

          <div className='grid md:grid-cols-2 gap-6'>
            {displayedProjects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='group relative block'
              >
                <motion.div
                  className='relative overflow-hidden rounded-3xl aspect-[16/11]'
                  whileHover={{ scale: 1.02, y: -8 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className='absolute inset-0 w-full h-full object-cover'
                    initial={{ scale: 1.1 }}
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />

                  <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent' />

                  <motion.div className='absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

                  <div className='absolute bottom-0 left-0 right-0 p-8'>
                    <motion.h4
                      className='text-2xl font-bold mb-3 text-white'
                      initial={{ y: 0 }}
                      whileHover={{ y: -5 }}
                    >
                      {project.title}
                    </motion.h4>
                    <p className='text-gray-300 text-sm leading-relaxed mb-4'>
                      {project.description}
                    </p>
                  </div>

                  <div className='absolute inset-0 border-2 border-white/0 group-hover:border-cyan-500/50 rounded-3xl transition-all duration-500' />
                </motion.div>
              </motion.a>
            ))}
          </div>

          {projects.length > 6 && (
            <motion.div
              className='text-center mt-16'
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <button
                onClick={() => setShowAll(!showAll)}
                className='group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white hover:scale-105 transition-transform duration-300 overflow-hidden'
              >
                <span className='absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                <span className='relative z-10'>
                  {showAll ? "Show Less" : "View More Projects"}
                </span>
                <motion.svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 relative z-10'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  animate={{ y: showAll ? 0 : [0, 3, 0] }}
                  transition={{ repeat: showAll ? 0 : Infinity, duration: 1.5 }}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d={showAll ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                  />
                </motion.svg>
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
