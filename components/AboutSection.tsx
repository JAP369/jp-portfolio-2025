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
                  A journey in crafting engaging experiences and exploring new horizons
                </p>
              </div>
              
              <div className="space-y-5 text-gray-400 text-base leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Originally from the Philippines, I moved to Hong Kong to pursue my passion for technology
                  and innovation. With over 7 years of experience spanning full-stack development and
                  product management, I've built a career creating seamless digital experiences.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  I specialize in web development, mobile applications, and digital product strategy.
                  My journey has taken me through diverse roles - from software engineering to product
                  management - giving me a unique perspective on building products that users love.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  When I'm not immersed in coding projects, you'll likely find me exploring new
                  technologies and frameworks. Balancing work with continuous learning keeps me inspired
                  and fuels my creativity.
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
                  Building products across continents
                </p>
              </div>

              <div className="space-y-5 text-gray-400 text-base leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  I've worked across diverse environments and teams of all sizes, which has
                  strengthened my adaptability, creativity, and ability to deliver impactful solutions.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  My experience spans the entire product lifecycle - from initial concept and technical
                  architecture to development, deployment, and continuous improvement. I thrive in
                  collaborative environments where innovation meets execution.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  Currently based in Hong Kong, I continue to expand my expertise in modern web
                  technologies, mobile development, and agile product management, always staying
                  at the forefront of industry best practices.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
