"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FileText,
  Mail,
  Linkedin,
  Github,
  Heart,
  Briefcase,
} from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id='contact' className='py-20 px-6 bg-[#020617]' ref={ref}>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='text-center'
        >
          <motion.h3
            className='text-4xl md:text-6xl font-bold mb-6'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's collaborate?
          </motion.h3>
          <motion.p
            className='text-gray-400 text-xl mb-12'
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I'm open for exciting opportunities, feel free to reach out!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className='flex flex-wrap gap-4 justify-center items-center mb-12'
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              href='/hire-me'
              className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium transition-all duration-300 flex items-center gap-2'
            >
              <Briefcase className='w-5 h-5' />
              Hire Me
            </motion.a>
            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              href='/resume'
              className='px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full font-medium transition-all duration-300 flex items-center gap-2'
            >
              <FileText className='w-5 h-5' />
              Resume
            </motion.a>
            <motion.a
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(6, 182, 212, 0.8)",
              }}
              whileTap={{ scale: 0.95 }}
              href='mailto:jonathan.paita@gmail.com'
              className='px-8 py-4 border-2 border-white/20 rounded-full font-medium hover:bg-white/10 transition-all duration-300 flex items-center gap-2'
            >
              <Mail className='w-5 h-5' />
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div
            className='mb-16'
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className='text-gray-400 text-lg mb-6'>Connect with me</p>
            <div className='flex gap-6 justify-center'>
              <motion.a
                whileHover={{
                  scale: 1.15,
                  y: -5,
                  boxShadow: "0 10px 30px rgba(6, 182, 212, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                href='https://www.linkedin.com/in/jonathan-paita'
                target='_blank'
                rel='noopener noreferrer'
                className='w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 flex items-center justify-center transition-all duration-300 hover:border-cyan-400/60'
              >
                <Linkedin className='w-6 h-6 text-cyan-400' />
              </motion.a>
              <motion.a
                whileHover={{
                  scale: 1.15,
                  y: -5,
                  boxShadow: "0 10px 30px rgba(6, 182, 212, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                href='https://github.com/JAP369'
                target='_blank'
                rel='noopener noreferrer'
                className='w-14 h-14 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 flex items-center justify-center transition-all duration-300 hover:border-purple-400/60'
              >
                <Github className='w-6 h-6 text-purple-400' />
              </motion.a>
              <motion.a
                whileHover={{
                  scale: 1.15,
                  y: -5,
                  boxShadow: "0 10px 30px rgba(6, 182, 212, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                href='mailto:jonathan.paita@gmail.com'
                className='w-14 h-14 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 flex items-center justify-center transition-all duration-300 hover:border-green-400/60'
              >
                <Mail className='w-6 h-6 text-green-400' />
              </motion.a>
            </div>
          </motion.div>

          {/* Footer */}
          <div className='border-t border-white/10 pt-12'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
              <motion.div
                className='flex flex-col items-center md:items-start gap-2'
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <p className='text-gray-500 flex items-center gap-2'>
                  © {new Date().getFullYear()} Jonathan Austria Paita. All
                  rights reserved.
                </p>
                <p className='text-gray-600 text-sm flex items-center gap-2'>
                  Crafted with passion
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Heart className='w-4 h-4 text-cyan-400 fill-cyan-400' />
                  </motion.span>
                  in Hong Kong
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className='flex gap-4'
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <motion.a
                  whileHover={{
                    scale: 1.2,
                    rotate: 5,
                    backgroundColor: "rgba(6, 182, 212, 0.2)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  href='https://www.linkedin.com/in/jonathan-paita'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300'
                >
                  <Linkedin className='w-5 h-5' />
                </motion.a>
                <motion.a
                  whileHover={{
                    scale: 1.2,
                    rotate: -5,
                    backgroundColor: "rgba(6, 182, 212, 0.2)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  href='https://github.com/JAP369'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300'
                >
                  <Github className='w-5 h-5' />
                </motion.a>
                <motion.a
                  whileHover={{
                    scale: 1.2,
                    rotate: 5,
                    backgroundColor: "rgba(6, 182, 212, 0.2)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  href='mailto:jonathan.paita@gmail.com'
                  className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300'
                >
                  <Mail className='w-5 h-5' />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
