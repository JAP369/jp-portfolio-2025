"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as const },
    },
  };

  return (
    <section
      id='about'
      className='py-32 px-6 bg-[#020617] relative overflow-hidden'
      ref={ref}
    >
      {/* Animated Background */}
      <div className='absolute inset-0 opacity-10'>
        <motion.div
          style={{ y: y1 }}
          className='absolute top-1/3 -left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-orange-500 to-red-600 rounded-full filter blur-3xl'
        />
        <motion.div
          style={{ y: y2 }}
          className='absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-500 to-purple-600 rounded-full filter blur-3xl'
        />
      </div>

      <div className='max-w-6xl mx-auto relative z-10'>
        <motion.div
          initial='hidden'
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className='mb-20'>
            <motion.h2
              className='text-xs uppercase tracking-[0.3em] text-gray-500 mb-6'
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              ABOUT
            </motion.h2>
            <motion.h3
              className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent'
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Journey so far
            </motion.h3>
          </motion.div>

          {/* Content Grid */}
          <div className='grid md:grid-cols-2 gap-12 lg:gap-20'>
            {/* Left Column - My Story */}
            <motion.div variants={itemVariants} className='space-y-8'>
              <div className='relative'>
                {/* Decorative Line */}
                <motion.div
                  className='absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 rounded-full'
                  initial={{ height: 0 }}
                  animate={isInView ? { height: "100%" } : {}}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />

                <div className='space-y-6'>
                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className='text-3xl md:text-4xl font-semibold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
                      My story
                    </h4>
                    <p className='text-cyan-400 text-lg font-medium'>
                      From the Philippines to Hong Kong - A 15+ year journey
                      behind the bar
                    </p>
                  </motion.div>

                  <div className='space-y-6 text-gray-400 text-base lg:text-lg leading-relaxed'>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className='relative pl-6 border-l-2 border-white/10 hover:border-cyan-500/50 transition-colors duration-300'
                    >
                      <motion.div
                        className='absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-cyan-400'
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <p>
                        Originally from the Philippines, I moved to Hong Kong to
                        pursue opportunities in the Food & Beverage industry.
                        With over{" "}
                        <span className='text-white font-semibold'>
                          15 years of hands-on experience
                        </span>
                        , I specialize in bartending and mixology, having worked
                        at prestigious venues including Dragon-i, Lobster Bar &
                        Grill at Island Shangri-La, and various F&B
                        establishments across Hong Kong.
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className='relative pl-6 border-l-2 border-white/10 hover:border-blue-500/50 transition-colors duration-300'
                    >
                      <motion.div
                        className='absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-blue-400'
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          delay: 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <p>
                        My expertise spans{" "}
                        <span className='text-white font-semibold'>
                          bartending and mixology, purchasing and inventory
                          management, warehouse logistics, database systems, and
                          graphic design
                        </span>
                        . I've completed a
                        <span className='text-white font-semibold'>
                          {" "}
                          Full-Time Software Engineering Course
                        </span>{" "}
                        at Accelerate Hong Kong, allowing me to bridge
                        traditional F&B operations with modern digital solutions
                        and web development.
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 1 }}
                      className='relative pl-6 border-l-2 border-white/10 hover:border-purple-500/50 transition-colors duration-300'
                    >
                      <motion.div
                        className='absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-purple-400'
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          delay: 1,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <p>
                        Most recently as{" "}
                        <span className='text-white font-semibold'>
                          Assistant Bar Manager at Dragon-i
                        </span>{" "}
                        (2022-2025), I oversaw three bar stations, managed POS
                        systems, developed innovative cocktails, and supported
                        major events with international DJs and celebrities. I
                        believe in delivering exceptional experiences through
                        quality service, expertly crafted drinks, and genuine
                        hospitality.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Work Experience */}
            <motion.div variants={itemVariants} className='space-y-8'>
              <div className='relative'>
                {/* Decorative Line */}
                <motion.div
                  className='absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-red-500 to-pink-500 rounded-full'
                  initial={{ height: 0 }}
                  animate={isInView ? { height: "100%" } : {}}
                  transition={{ duration: 1.5, delay: 0.7 }}
                />

                <div className='space-y-6'>
                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className='text-3xl md:text-4xl font-semibold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
                      Work experience
                    </h4>
                    <p className='text-orange-400 text-lg font-medium'>
                      Mastering the craft behind the bar and beyond
                    </p>
                  </motion.div>

                  <div className='space-y-6 text-gray-400 text-base lg:text-lg leading-relaxed'>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className='group relative p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300'
                    >
                      <motion.div
                        className='absolute top-4 right-4 text-4xl opacity-20 group-hover:opacity-40 transition-opacity'
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        🍸
                      </motion.div>
                      <p>
                        <span className='text-white font-semibold'>
                          Dragon-i, Central (2022-2025)
                        </span>{" "}
                        - Assistant Bar Manager overseeing three bar stations,
                        managing staff delegation and training, handling POS
                        systems, developing cocktails for in-house and external
                        events, conducting beverage stock-takes, and supporting
                        corporate events with international DJs and celebrity
                        guests.
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 1 }}
                      className='group relative p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300'
                    >
                      <motion.div
                        className='absolute top-4 right-4 text-4xl opacity-20 group-hover:opacity-40 transition-opacity'
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        💼
                      </motion.div>
                      <p>
                        <span className='text-white font-semibold'>
                          The Big Things Kitchen (2021-2022)
                        </span>{" "}
                        - Purchasing & Beverage Manager directing group-wide
                        inventory management, comprehensive purchasing
                        strategies, product logistics, vendor relationships, and
                        quality control across multiple outlets. Secured
                        certifications, implemented production systems, and
                        handled graphic design for marketing.
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      className='group relative p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:border-green-500/50 transition-all duration-300'
                    >
                      <motion.div
                        className='absolute top-4 right-4 text-4xl opacity-20 group-hover:opacity-40 transition-opacity'
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      >
                        🏢
                      </motion.div>
                      <p>
                        <span className='text-white font-semibold'>
                          Lobster Bar & Grill, Island Shangri-La (2018-2020)
                        </span>{" "}
                        - Bar Service Associate at one of Asia's top 50 bars,
                        crafting classic and signature cocktails, managing daily
                        operations, contributing to menu development, and
                        maintaining exceptional hospitality standards in a
                        prestigious hotel environment.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
