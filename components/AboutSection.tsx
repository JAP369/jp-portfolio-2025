'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6 bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-20">
            <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4">+ ABOUT +</h2>
            <h3 className="text-4xl md:text-6xl font-bold">Journey so far</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* My Story */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-8">
                <h4 className="text-3xl font-bold mb-4">My story</h4>
                <p className="text-gray-500 text-lg mb-8">
                  From the Philippines to Hong Kong, building digital experiences that matter
                </p>
              </div>
              
              <div className="space-y-6 text-gray-400 leading-relaxed">
                <p>
                  Originally from the Philippines, I moved to Hong Kong to pursue my passion for technology
                  and innovation. With over 7 years of experience spanning full-stack development and
                  product management, I've built a career creating seamless digital experiences.
                </p>
                <p>
                  I specialize in web development, mobile applications, and digital product strategy.
                  My journey has taken me through diverse roles - from software engineering to product
                  management - giving me a unique perspective on building products that users love.
                </p>
                <p>
                  I believe in the power of technology to solve real-world problems and create meaningful
                  impact. Whether it's developing scalable web applications or crafting intuitive mobile
                  experiences, I'm driven by the challenge of turning complex ideas into elegant solutions.
                </p>
              </div>
            </motion.div>

            {/* Work Experience */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="mb-8">
                <h4 className="text-3xl font-bold mb-4">Work experience</h4>
                <p className="text-gray-500 text-lg mb-8">
                  Building products across continents
                </p>
              </div>

              <div className="space-y-6 text-gray-400 leading-relaxed">
                <p>
                  Throughout my career, I've had the privilege of working with diverse teams across
                  Asia, contributing to projects ranging from e-commerce platforms to enterprise
                  solutions and mobile applications.
                </p>
                <p>
                  My experience spans the entire product lifecycle - from initial concept and technical
                  architecture to development, deployment, and continuous improvement. I thrive in
                  collaborative environments where innovation meets execution.
                </p>
                <p>
                  Currently based in Hong Kong, I continue to expand my expertise in modern web
                  technologies, mobile development, and agile product management, always staying
                  at the forefront of industry best practices.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
