"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

type Category = "All" | "Websites" | "Logos" | "Business Cards" | "Fliers";

interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
  category: Category;
  comingSoon?: boolean;
}

const projects: Project[] = [
  // ── NEW website projects ─────────────────────────────────────────────────
  {
    title: "Homie",
    description:
      "AI-powered roommate and room-finding platform for Hong Kong with zero agency fees and smart compatibility matching",
    link: "https://homie-hk.vercel.app/en",
    image: "/homie-hk.png",
    category: "Websites",
  },
  {
    title: "DirectHelper HK",
    description:
      "Skip the agency — browse 10,000+ verified Filipino and Indonesian domestic helper profiles and hire directly in days",
    link: "https://directhelper.vercel.app/",
    image: "/directhelper.png",
    category: "Websites",
  },
  {
    title: "NeatFix",
    description:
      "On-demand home services platform for professional cleaning, repair, and maintenance in Hong Kong",
    link: "https://neatfix.vercel.app/",
    image: "/neatfix.png",
    category: "Websites",
  },
  {
    title: "FlipFlix",
    description:
      "Filipino streaming platform featuring movies, series, K-Drama, and community features with watch party tools",
    link: "https://flip-flix.vercel.app/",
    image: "/flip-flix.png",
    category: "Websites",
  },
  // ── EXISTING website projects ────────────────────────────────────────────
  {
    title: "NPL Marketplace",
    description:
      "Nepal's trusted marketplace for buying and selling electronics, property, vehicles, and more",
    link: "https://npl-marketplace.vercel.app/",
    image: "/npl-marketplace.jpg",
    category: "Websites",
  },
  {
    title: "Next Level Club",
    description:
      "Premium nightclub and entertainment venue featuring modern design, event bookings, and VIP experiences",
    link: "https://next-level-club.vercel.app/",
    image: "/nlc.png",
    category: "Websites",
  },
  {
    title: "NexTrip",
    description:
      "Premium travel booking platform with flight search, curated destinations, and expert concierge services for extraordinary journeys",
    link: "https://nextrip-main.vercel.app/",
    image: "/nextrip.png",
    category: "Websites",
  },
  {
    title: "Airbnb Clone",
    description:
      "Full-featured accommodation booking platform with property listings, search filters, and reservation system",
    link: "https://airbnb-jap-clone.vercel.app/",
    image: "/airbnb-clone.png",
    category: "Websites",
  },
  // ── Logo designs (coming soon placeholders) ──────────────────────────────
  {
    title: "Logo Design — NeatFix",
    description:
      "Clean minimal logo mark for a home services platform emphasising trust and simplicity",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
    category: "Logos",
    comingSoon: true,
  },
  {
    title: "Logo Suite — Homie",
    description:
      "Modern wordmark and icon suite for a tech-forward roommate matching platform",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&h=600&fit=crop",
    category: "Logos",
    comingSoon: true,
  },
  // ── Business Cards (coming soon placeholders) ────────────────────────────
  {
    title: "Business Card — NeatFix",
    description:
      "Professional double-sided card with spot-UV finish and clean green brand identity",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=600&fit=crop",
    category: "Business Cards",
    comingSoon: true,
  },
  // ── Fliers (coming soon placeholders) ───────────────────────────────────
  {
    title: "Event Flier — Next Level Club",
    description:
      "High-energy nightclub event poster with neon aesthetics, DJ lineup, and event details",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
    category: "Fliers",
    comingSoon: true,
  },
];

const categories: Category[] = [
  "All",
  "Websites",
  "Logos",
  "Business Cards",
  "Fliers",
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [showAll, setShowAll] = useState(false);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const displayedProjects = showAll ? filtered : filtered.slice(0, 6);

  // reset show-all when switching tabs
  const handleCategoryChange = (cat: Category) => {
    setActiveCategory(cat);
    setShowAll(false);
  };

  return (
    <section id='projects' className='py-32 px-6 bg-[#020617]' ref={ref}>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* ── Header ─────────────────────────────────────────────────── */}
          <div className='text-center mb-12'>
            <h2 className='text-xs uppercase tracking-[0.3em] text-gray-500 mb-6'>
              PROJECTS
            </h2>
            <h3 className='text-5xl md:text-6xl font-bold mb-4'>
              What I&apos;ve been up to
            </h3>
            <p className='text-gray-400 text-lg max-w-xl mx-auto'>
              Websites, branding, menus, business cards, and more — a full
              spectrum of design work.
            </p>
          </div>

          {/* ── Category tabs ──────────────────────────────────────────── */}
          <div className='flex flex-wrap justify-center gap-2 mb-14'>
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <motion.button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-gray-400 hover:text-white border border-white/10 hover:border-white/30"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId='categoryPill'
                      className='absolute inset-0 rounded-full bg-linear-to-r from-cyan-500 to-blue-600'
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.5,
                      }}
                    />
                  )}
                  <span className='relative z-10'>{cat}</span>
                </motion.button>
              );
            })}
          </div>

          {/* ── Project grid ───────────────────────────────────────────── */}
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className='grid md:grid-cols-2 gap-6'
            >
              {displayedProjects.map((project, index) => {
                const isClickable = project.link !== "#";
                const Wrapper = isClickable ? motion.a : motion.div;
                const wrapperProps = isClickable
                  ? {
                      href: project.link,
                      target: "_blank" as const,
                      rel: "noopener noreferrer",
                    }
                  : {};

                return (
                  <Wrapper
                    key={`${project.title}-${index}`}
                    {...(wrapperProps as object)}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className='group relative block'
                  >
                    <motion.div
                      className='relative overflow-hidden rounded-3xl aspect-16/11'
                      whileHover={isClickable ? { scale: 1.02, y: -8 } : {}}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      style={{ willChange: "transform" }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className='object-cover'
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        loading={index < 4 ? "eager" : "lazy"}
                        quality={85}
                      />

                      {/* Dim overlay for coming-soon cards */}
                      {project.comingSoon && (
                        <div className='absolute inset-0 bg-black/50 backdrop-blur-[2px]' />
                      )}

                      <div className='absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent' />

                      {isClickable && (
                        <motion.div className='absolute inset-0 bg-linear-to-br from-cyan-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                      )}

                      {/* Coming Soon badge */}
                      {project.comingSoon && (
                        <div className='absolute top-4 right-4 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs text-white/70 font-medium'>
                          Coming Soon
                        </div>
                      )}

                      <div className='absolute bottom-0 left-0 right-0 p-8'>
                        <h4 className='text-2xl font-bold mb-3 text-white'>
                          {project.title}
                        </h4>
                        <p className='text-gray-300 text-sm leading-relaxed'>
                          {project.description}
                        </p>
                      </div>

                      {isClickable && (
                        <div className='absolute inset-0 border-2 border-white/0 group-hover:border-cyan-500/50 rounded-3xl transition-all duration-500' />
                      )}
                    </motion.div>
                  </Wrapper>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* ── Show more / less ───────────────────────────────────────── */}
          {filtered.length > 6 && (
            <motion.div
              className='text-center mt-16'
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <button
                onClick={() => setShowAll(!showAll)}
                className='group relative inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white hover:scale-105 transition-transform duration-300 overflow-hidden'
              >
                <span className='absolute inset-0 bg-linear-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
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
