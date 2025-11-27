'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileText, Mail, Linkedin, Github, Heart } from 'lucide-react';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 px-6 bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-4xl md:text-6xl font-bold mb-6">Let's collaborate?</h3>
          <p className="text-gray-400 text-xl mb-12">
            I'm open for exciting opportunities, feel free to reach out!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center items-center mb-16">
            <a
              href="#"
              className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-all duration-300 flex items-center gap-2"
            >
              <FileText className="w-5 h-5" />
              Resume
            </a>
            <a
              href="mailto:jonathan.paita@gmail.com"
              className="px-8 py-4 border-2 border-white/20 rounded-full font-medium hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
          </div>

          {/* Footer */}
          <div className="border-t border-white/10 pt-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-gray-500 flex items-center gap-2">
                Built with Next.js, TypeScript & Tailwind CSS
                <Heart className="w-4 h-4 text-red-500" />
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/jonathan-paita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/JAP369"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="mailto:jonathan.paita@gmail.com"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
