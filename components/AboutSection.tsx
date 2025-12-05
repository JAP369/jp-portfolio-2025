'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6 bg-[#020617]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-6">ABOUT</h2>
            <h3 className="text-5xl md:text-6xl font-bold">Journey so far</h3>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - My Story */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h4 className="text-2xl md:text-3xl font-semibold mb-3">My story</h4>
                <p className="text-gray-400 text-base leading-relaxed">
                  From the Philippines to Hong Kong - A 15+ year journey behind the bar
                </p>
              </div>
              
              <div className="space-y-5 text-gray-400 text-base leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Originally from the Philippines, I moved to Hong Kong to pursue opportunities in the
                  Food & Beverage industry. With over 15 years of hands-on experience, I mainly work
                  behind the bar where I have fine-tuned my service skills and mastered the craft for drinks.
                  I've built a career from the ground up, starting with just 2 people including myself,
                  and grew to 100 employees, establishing a central kitchen and 3 F&B outlets within 1 year.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  My expertise spans bartending and mixology, purchasing management, administrative
                  operations, graphic design, and team leadership. I've completed numerous computer
                  courses including software engineering, which complement my bar and operational skills,
                  allowing me to bridge traditional F&B service with modern digital solutions.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  I believe in delivering exceptional customer experiences through quality service,
                  expertly crafted drinks, and genuine hospitality. From overlooking SOPs, inventory,
                  and cost control across all outlets including head office and central kitchen, I'm
                  driven by passion and excellence in everything I do.
                </motion.p>
              </div>
            </motion.div>

            {/* Right Column - Work Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h4 className="text-2xl md:text-3xl font-semibold mb-3">Work experience</h4>
                <p className="text-gray-400 text-base leading-relaxed">
                  Mastering the craft behind the bar and beyond
                </p>
              </div>

              <div className="space-y-5 text-gray-400 text-base leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Throughout my 15+ year career in Food & Beverage, I've primarily worked behind the bar,
                  where I have fine-tuned my service skills and mastered the craft of drink preparation.
                  I've handled purchasing, administrative work, designing, and managing operations from
                  overlooking SOPs, inventory, and cost control. Started with just 2 people and grew to
                  100 employees with a central kitchen and 3 F&B outlets within 1 year.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  My responsibilities span bartending and mixology, purchasing management, inventory
                  control, administrative duties, graphic design for marketing materials, and team
                  leadership. I excel in fast-paced bar environments where precision, speed, and
                  customer service are paramount.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  Currently based in Hong Kong, I continue to perfect my bartending craft while leveraging
                  computer skills to optimize bar operations, manage inventory systems, and create
                  compelling beverage menus and marketing materials.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
