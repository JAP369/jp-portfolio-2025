'use client';

import { motion } from 'framer-motion';
import { FileText, Mail, Linkedin, Github } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background animated gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-gray-400 to-blue-500 p-1"
          >
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-6xl font-bold">
              JP
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Hey, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-blue-400">Jonathan</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-400 mb-4 max-w-3xl mx-auto"
          >
            Full-Stack Developer & Product Manager based in Hong Kong with 7+ years of experience,
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-lg md:text-xl text-gray-500 mb-12"
          >
            specializing in Web Development, Mobile Apps & Digital Product Strategy
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center items-center"
          >
            <a
              href="#"
              className="group px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-all duration-300 flex items-center gap-2"
            >
              <FileText className="w-5 h-5" />
              Resume
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-white/20 rounded-full font-medium hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-6 justify-center mt-12"
          >
            <a
              href="https://www.linkedin.com/in/jonathan-paita"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/JAP369"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:jonathan.paita@gmail.com"
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, repeat: Infinity, duration: 1.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1.5 h-1.5 bg-white rounded-full"
              />
            </div>
          </motion.div>

          {/* Tools/Software Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="mt-20 pt-12 border-t border-white/10"
          >
            <div className="flex flex-wrap items-center justify-center gap-8">
              {/* Adobe Illustrator */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-3 group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#FF9A00] flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#FF9A00]/50 transition-all duration-300">
                  <span className="text-2xl font-bold text-[#330000]">Ai</span>
                </div>
                <span className="text-xs text-gray-400 group-hover:text-white transition-colors">Adobe Illustrator</span>
              </motion.div>

              {/* Adobe Photoshop */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-3 group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#31A8FF] flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#31A8FF]/50 transition-all duration-300">
                  <span className="text-2xl font-bold text-[#001E36]">Ps</span>
                </div>
                <span className="text-xs text-gray-400 group-hover:text-white transition-colors">Adobe Photoshop</span>
              </motion.div>

              {/* Microsoft Office */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-3 group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D83B01] to-[#C239B3] flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#D83B01]/50 transition-all duration-300">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
                    <path d="M21.53 4.306v15.363l-9.843 4.324-9.843-4.324v-15.363l9.843-4.324 9.843 4.324zm-10.543 1.694v15.362l9.843-4.324v-15.363l-9.843 4.325zm-8.043 11.662l6.244 2.754v-6.249l-6.244-2.754v6.249zm0-7.294l6.244 2.754v-6.249l-6.244-2.754v6.249zm0-7.294l6.244 2.754v-2.754l-6.244-2.754v2.754z"/>
                  </svg>
                </div>
                <span className="text-xs text-gray-400 group-hover:text-white transition-colors">Microsoft Office</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Ticker Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="mt-12 overflow-hidden"
          >
            <div className="flex animate-scroll whitespace-nowrap text-sm text-gray-600">
              <span className="mx-8">Available for new opportunities</span>
              <span className="mx-8">•</span>
              <span className="mx-8">Available for new opportunities</span>
              <span className="mx-8">•</span>
              <span className="mx-8">Available for new opportunities</span>
              <span className="mx-8">•</span>
              <span className="mx-8">Available for new opportunities</span>
              <span className="mx-8">•</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
