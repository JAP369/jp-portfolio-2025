'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Award } from 'lucide-react';

const experiences = [
  {
    company: 'Technology Consultant',
    logo: '💼',
    positions: [
      { title: 'Full-Stack Developer & Product Manager', period: '2018 - Present' },
    ]
  },
  {
    company: 'Digital Solutions Provider',
    logo: '🚀',
    positions: [
      { title: 'Senior Software Engineer', period: '2020 - 2023' },
      { title: 'Software Engineer', period: '2018 - 2020' }
    ]
  },
  {
    company: 'Startup Ventures',
    logo: '⚡',
    positions: [
      { title: 'Product Manager', period: '2019 - 2022' }
    ]
  }
];

const awards = [
  {
    title: 'Excellence in Development',
    description: 'Recognition for outstanding contributions to product development and technical innovation'
  },
  {
    title: 'Team Leadership Award',
    description: 'Acknowledged for exceptional leadership in cross-functional team collaboration'
  }
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 px-6 bg-[#020617]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Experience Timeline */}
          <div className="mb-20">
            <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4">EXPERIENCE</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-12">Work experience</h3>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{exp.logo}</div>
                    <div className="flex-grow">
                      <h4 className="text-2xl font-bold mb-4">{exp.company}</h4>
                      <div className="space-y-3">
                        {exp.positions.map((position, posIndex) => (
                          <div key={posIndex} className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-l-2 border-gray-400 pl-4">
                            <p className="text-gray-300 font-medium">{position.title}</p>
                            <p className="text-gray-500 text-sm flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              {position.period}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4">AWARDS</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-6">Highlighting milestones</h3>
            <p className="text-gray-400 text-lg mb-12">
              Recognition for dedication to excellence and innovation in software development.
              Each accolade represents a milestone in my professional journey.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-gray-500/10 to-blue-500/10 border border-gray-400/20 hover:border-gray-400/40 transition-all duration-300"
                >
                  <Award className="w-12 h-12 text-gray-300 mb-4" />
                  <h4 className="text-xl font-bold mb-2">{award.title}</h4>
                  <p className="text-gray-400">{award.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
