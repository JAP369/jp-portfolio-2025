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
                  From the Philippines to Hong Kong - A 15+ year journey in Food & Beverage
                </p>
              </div>
              
              <div className="space-y-5 text-gray-400 text-base leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Originally from the Philippines, I moved to Hong Kong to pursue opportunities in the
                  Food & Beverage industry. With over 15 years of hands-on experience, I've built a career
                  from the ground up, starting from a simple coffee shop to establishing central kitchens
                  and managing multiple outlets.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  My expertise spans purchasing management, administrative operations, graphic design,
                  and team leadership. I've completed numerous computer courses that complement my
                  operational skills, allowing me to bridge traditional F&B management with modern
                  digital solutions.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  I believe in delivering exceptional customer experiences through efficient operations,
                  quality service, and continuous improvement. Whether it's managing inventory, designing
                  marketing materials, or optimizing kitchen workflows, I'm driven by excellence.
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
                  Building F&B operations from coffee shops to central kitchens
                </p>
              </div>

              <div className="space-y-5 text-gray-400 text-base leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Throughout my 15+ year career in Food & Beverage, I've progressed from entry-level
                  positions to managing entire operations. I successfully established a central kitchen
                  and expanded operations to 3 outlets, handling everything from vendor relationships
                  to staff management.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  My responsibilities have included purchasing management, inventory control, administrative
                  duties, graphic design for marketing materials, and team leadership. I thrive in
                  fast-paced environments where operational efficiency meets customer satisfaction.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  Currently based in Hong Kong, I continue to leverage my extensive F&B knowledge
                  combined with computer skills to optimize operations and deliver outstanding results.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
