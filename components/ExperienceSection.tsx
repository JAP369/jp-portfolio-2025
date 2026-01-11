"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Award, Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Dragon-i | Central, Hong Kong",
    logo: "🍸",
    logoGradient: "from-orange-500 to-red-500",
    positions: [
      {
        title: "Assistant Bar Manager",
        period: "November 2022 - November 2025",
      },
    ],
    highlights: [
      "Managed 3 bar stations & staff operations",
      "Developed innovative cocktails for events",
      "POS system & inventory management",
      "International DJ parties & celebrity events",
    ],
  },
  {
    company: "The Big Things Kitchen | Wong Chuk Hang",
    logo: "🏢",
    logoGradient: "from-blue-500 to-cyan-500",
    positions: [
      {
        title: "Purchasing & Beverage Manager",
        period: "July 2021 - March 2022",
      },
    ],
    highlights: [
      "Group-wide inventory & purchasing",
      "Multi-outlet stock management",
      "Vendor relations & logistics",
      "Product costing & forecasting",
    ],
  },
  {
    company: "Freeze Lounge | SOHO, Central",
    logo: "❄️",
    logoGradient: "from-cyan-500 to-blue-500",
    positions: [
      { title: "Lounge Manager", period: "November 2020 - June 2021" },
    ],
    highlights: [
      "Cost control & inventory optimization",
      "Hookah lounge operations",
      "Event reservations & private functions",
      "Social media & marketing content",
    ],
  },
  {
    company: "Lobster Bar & Grill | Island Shangri-La",
    logo: "🦞",
    logoGradient: "from-red-500 to-orange-500",
    positions: [
      { title: "Bar Service Associate", period: "October 2018 - June 2020" },
    ],
    highlights: [
      "Asia's Top 50 Bars recognized venue",
      "Classic & signature cocktail crafting",
      "Menu development & mixology",
      "Premium hospitality standards",
    ],
  },
  {
    company: "Additional Experience",
    logo: "💼",
    logoGradient: "from-purple-500 to-pink-500",
    positions: [
      { title: "Various F&B Management Roles", period: "2012 - 2018" },
    ],
    highlights: [
      "Head Bartender & Bar Supervisor",
      "Purchasing Officer roles",
      "Multi-venue bar operations",
      "15+ years total industry experience",
    ],
  },
];

const awards = [
  {
    title: "Dragon-i Legacy",
    description:
      "Assistant Bar Manager at one of Hong Kong's pioneering nightclubs (est. 2002), hosting international celebrities including David Beckham, Michelle Yeoh, LeBron James, Snoop Dogg, and Dr. Dre",
    gradient: "from-cyan-500/20 to-blue-500/20",
    icon: "🌟",
  },
  {
    title: "Asia's Top 50 Bars",
    description:
      "Mixologist at Lobster Bar & Grill, Island Shangri-La - recognized among Asia's top 50 bars, mastering classic and signature cocktails using premium ingredients",
    gradient: "from-orange-500/20 to-red-500/20",
    icon: "🏆",
  },
  {
    title: "Multi-Outlet Operations",
    description:
      "Purchasing & Beverage Manager directing inventory, procurement, and logistics across multiple F&B outlets, central kitchen, and head office operations",
    gradient: "from-purple-500/20 to-pink-500/20",
    icon: "📊",
  },
  {
    title: "15+ Years Excellence",
    description:
      "Over 15 years of exceptional service in Hong Kong's F&B industry, from bartending and mixology to purchasing management and software engineering skills",
    gradient: "from-green-500/20 to-emerald-500/20",
    icon: "🎯",
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      id='experience'
      className='py-32 px-6 bg-[#020617] relative overflow-hidden'
      ref={ref}
    >
      {/* Animated Background */}
      <motion.div className='absolute inset-0 opacity-10' style={{ y }}>
        <div className='absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full filter blur-3xl' />
        <div className='absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-orange-500 to-red-600 rounded-full filter blur-3xl' />
      </motion.div>

      <div className='max-w-6xl mx-auto relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Experience Timeline */}
          <div className='mb-24'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className='mb-16'
            >
              <motion.h2
                className='text-xs uppercase tracking-[0.3em] text-gray-500 mb-6'
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                EXPERIENCE
              </motion.h2>
              <motion.h3
                className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent'
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Work experience
              </motion.h3>
              <motion.p
                className='text-gray-400 text-lg max-w-2xl'
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                15+ years mastering the art of bartending and F&B management
                across Hong Kong
              </motion.p>
            </motion.div>

            <div className='space-y-6'>
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: 0.4 + index * 0.15,
                    ease: [0.25, 0.4, 0.25, 1] as const,
                  }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className='group relative'
                >
                  {/* Glow Effect */}
                  <motion.div
                    className={`absolute -inset-1 bg-gradient-to-r ${exp.logoGradient} opacity-0 group-hover:opacity-20 blur-xl rounded-3xl transition-opacity duration-500`}
                  />

                  <div className='relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-500'>
                    <div className='flex items-start gap-6'>
                      {/* Logo */}
                      <motion.div
                        className={`relative flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${exp.logoGradient} flex items-center justify-center text-4xl shadow-lg`}
                        whileHover={{
                          rotate: [0, -10, 10, -10, 0],
                          scale: 1.1,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <motion.div
                          animate={{
                            y: [0, -5, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          {exp.logo}
                        </motion.div>
                      </motion.div>

                      {/* Content */}
                      <div className='flex-grow'>
                        <motion.h4
                          className='text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300'
                          whileHover={{ x: 5 }}
                        >
                          {exp.company}
                        </motion.h4>

                        <div className='space-y-4 mb-6'>
                          {exp.positions.map((position, posIndex) => (
                            <motion.div
                              key={posIndex}
                              className='flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 border-l-2 border-gray-600 hover:border-cyan-400 pl-4 py-2 transition-all duration-300'
                              whileHover={{ x: 5, borderLeftWidth: 4 }}
                            >
                              <div className='flex items-center gap-2'>
                                <Briefcase className='w-4 h-4 text-cyan-400' />
                                <p className='text-gray-300 font-medium text-lg'>
                                  {position.title}
                                </p>
                              </div>
                              <div className='flex items-center gap-2 text-gray-500 text-sm'>
                                <Calendar className='w-4 h-4' />
                                <span>{position.period}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Experience Highlights */}
                        {exp.highlights && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            whileInView={{ opacity: 1, height: "auto" }}
                            transition={{ duration: 0.5 }}
                            className='mt-4 pt-4 border-t border-white/10'
                          >
                            <p className='text-xs uppercase tracking-wider text-gray-500 mb-3'>
                              Key Areas
                            </p>
                            <div className='grid grid-cols-2 gap-2'>
                              {exp.highlights.map((highlight, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                                  transition={{
                                    duration: 0.4,
                                    delay: 0.6 + idx * 0.1,
                                  }}
                                  className='flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors'
                                >
                                  <div className='w-1.5 h-1.5 rounded-full bg-cyan-400' />
                                  <span>{highlight}</span>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </div>

                    {/* Hover Indicator */}
                    <motion.div
                      className='absolute top-4 right-4 w-3 h-3 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100'
                      animate={{
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.8 }}
              className='mb-12'
            >
              <motion.h2
                className='text-xs uppercase tracking-[0.3em] text-gray-500 mb-6'
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                AWARDS
              </motion.h2>
              <motion.h3
                className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent'
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 1 }}
              >
                Highlighting milestones
              </motion.h3>
              <motion.p
                className='text-gray-400 text-lg max-w-3xl'
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 1.1 }}
              >
                Key achievements and recognition throughout my career in Hong
                Kong's Food & Beverage industry, from prestigious hotel bars to
                iconic nightclub venues.
              </motion.p>
            </motion.div>

            <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-6'>
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: 1.2 + index * 0.2,
                    ease: [0.25, 0.4, 0.25, 1] as const,
                  }}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className='group relative'
                >
                  {/* Glow on Hover */}
                  <motion.div
                    className={`absolute -inset-1 bg-gradient-to-br ${award.gradient} opacity-0 group-hover:opacity-100 blur-xl rounded-3xl transition-opacity duration-500`}
                  />

                  <div
                    className={`relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br ${award.gradient} backdrop-blur-sm border border-white/10 group-hover:border-white/30 transition-all duration-500 h-full`}
                  >
                    {/* Icon */}
                    <motion.div
                      className='text-6xl mb-6'
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {award.icon}
                    </motion.div>

                    {/* Award Icon */}
                    <Award className='w-12 h-12 text-gray-300 mb-6 group-hover:text-white transition-colors duration-300' />

                    <motion.h4
                      className='text-2xl lg:text-3xl font-bold mb-4 text-white'
                      whileHover={{ x: 5 }}
                    >
                      {award.title}
                    </motion.h4>

                    <p className='text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300'>
                      {award.description}
                    </p>

                    {/* Corner Accent */}
                    <motion.div
                      className='absolute bottom-4 right-4 w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-100'
                      animate={{
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
