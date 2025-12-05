'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const additionalExperiences = [
  {
    icon: '🍸',
    title: 'Bartending Expertise',
    period: '15+ Years',
    description: 'Over 15 years of experience in the Food & Beverage industry, primarily working behind the bar where I have fine-tuned my service skills and mastered the craft for drinks. Specialized in mixology, cocktail creation, and delivering exceptional customer experiences.'
  },
  {
    icon: '📦',
    title: 'Purchasing & Inventory Management',
    period: 'Operations',
    description: 'Comprehensive experience in purchasing, inventory control, and vendor management. Expertly managed SOPs, inventory tracking, and cost control across all outlets including head office and central kitchen operations.'
  },
  {
    icon: '🎨',
    title: 'Design & Marketing',
    period: 'Creative',
    description: 'Skilled in graphic design and marketing material creation using Adobe Creative Suite. Developed beverage menus, promotional materials, and brand visuals that enhance customer engagement and business growth.'
  },
  {
    icon: '💻',
    title: 'Computer & Software Skills',
    period: 'Technical',
    description: 'Completed many computer courses including software engineering, Microsoft Office Suite, Adobe Photoshop, Adobe Illustrator, and digital marketing tools. Leverage technology to optimize bar operations and streamline administrative tasks.'
  },
  {
    icon: '👥',
    title: 'Team Leadership & Growth',
    period: 'Management',
    description: 'Started with just 2 people including myself and grew to 100 employees within 1 year. Established a central kitchen and 3 Food & Beverage outlets. Managed staff recruitment, training, scheduling, and performance development.'
  },
  {
    icon: '🏢',
    title: 'Administrative Operations',
    period: 'Administration',
    description: 'Overseeing Standard Operating Procedures (SOPs), administrative operations, scheduling, payroll management, and business reporting. Maintained quality standards while ensuring efficient day-to-day operations across multiple locations.'
  }
];

export default function AdditionalExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="additional-experience" className="py-32 px-6 bg-[#020617] relative overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-500 to-purple-600 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-6"
          >
            PROFESSIONAL EXPERTISE
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Diverse Skill Portfolio
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-3xl mx-auto"
          >
            More than 15 years in the Food & Beverage industry with comprehensive expertise spanning
            bartending, operations management, purchasing, design, and technology. A unique blend of
            traditional hospitality excellence and modern digital capabilities.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalExperiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <motion.div 
                className="text-5xl mb-4"
                whileHover={{ scale: 1.15, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                {experience.icon}
              </motion.div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">
                  {experience.title}
                </h4>
                <span className="text-xs text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                  {experience.period}
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm">
                {experience.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Summary Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20"
        >
          <div className="flex items-start gap-4">
            <div className="text-4xl">💡</div>
            <div>
              <h4 className="text-2xl font-bold mb-3 text-cyan-400">Comprehensive Experience</h4>
              <p className="text-gray-300 leading-relaxed">
                Throughout my career, I've demonstrated versatility and dedication across all aspects of
                Food & Beverage operations. From hands-on bartending and mixology to strategic operations
                management, purchasing coordination, and creative design work. My computer knowledge from
                multiple courses including software engineering allows me to integrate modern technology
                with traditional hospitality, creating efficient systems and exceptional customer experiences.
                Successfully scaling operations from a small team to 100 employees while maintaining quality
                and service excellence showcases my ability to lead, innovate, and deliver results.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
