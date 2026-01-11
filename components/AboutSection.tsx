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
                        , I mainly work behind the bar where I have fine-tuned
                        my service skills and mastered the craft for drinks.
                        I've built a career from the ground up, starting with
                        just{" "}
                        <span className='text-white font-semibold'>
                          2 people including myself, and grew to 100 employees
                        </span>
                        , establishing a central kitchen and 3 F&B outlets
                        within 1 year.
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
                          bartending and mixology, purchasing management,
                          administrative operations, graphic design, and team
                          leadership
                        </span>
                        . I've completed numerous computer courses including{" "}
                        <span className='text-white font-semibold'>
                          software engineering
                        </span>
                        , which complement my bar and operational skills,
                        allowing me to bridge traditional F&B service with
                        modern digital solutions.
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
                        I believe in delivering exceptional customer experiences
                        through quality service, expertly crafted drinks, and
                        genuine hospitality. From{" "}
                        <span className='text-white font-semibold'>
                          overlooking SOPs, inventory, and cost control
                        </span>{" "}
                        across all outlets including head office and central
                        kitchen, I'm driven by passion and excellence in
                        everything I do.
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
                        Throughout my 15+ year career in Food & Beverage, I've
                        primarily worked behind the bar, where I have fine-tuned
                        my service skills and mastered the craft of drink
                        preparation. I've handled{" "}
                        <span className='text-white font-semibold'>
                          purchasing, administrative work, designing, and
                          managing operations
                        </span>{" "}
                        across multiple venues, from overlooking SOPs and
                        inventory to cost control and vendor management.
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
                        My responsibilities span{" "}
                        <span className='text-white font-semibold'>
                          bartending and mixology, purchasing management,
                          inventory control, administrative duties, graphic
                          design
                        </span>{" "}
                        for marketing materials, and team leadership. I excel in
                        fast-paced bar environments where precision, speed, and
                        customer service are paramount.
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
                        Currently based in Hong Kong, I continue to perfect my
                        bartending craft while leveraging
                        <span className='text-white font-semibold'>
                          {" "}
                          computer skills
                        </span>{" "}
                        to optimize bar operations, manage inventory systems,
                        and create compelling beverage menus and marketing
                        materials.
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
