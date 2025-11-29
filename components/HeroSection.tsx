'use client';

import { motion } from 'framer-motion';
import { FileText, Mail, Linkedin, Github } from 'lucide-react';

const tools = [
  { name: 'Adobe Illustrator', icon: 'Ai', bg: '#FF9A00', text: '#330000' },
  { name: 'Adobe Photoshop', icon: 'Ps', bg: '#31A8FF', text: '#001E36' },
  { name: 'Microsoft Office', icon: 'Ms', bg: '#D83B01', text: '#FFFFFF' },
  { name: 'Graphic Design', icon: 'Gd', bg: '#00D4AA', text: '#003D2E' },
  { name: 'Web Design', icon: 'Wd', bg: '#667EEA', text: '#FFFFFF' },
  { name: 'Database', icon: 'Db', bg: '#F56565', text: '#FFFFFF' },
  { name: '3D Animation', icon: '3D', bg: '#48BB78', text: '#FFFFFF' },
  { name: 'Bartending', icon: 'Bt', bg: '#ED8936', text: '#FFFFFF' },
  { name: 'Product Sourcing', icon: 'Ps', bg: '#9F7AEA', text: '#FFFFFF' },
  { name: 'Warehouse Logistics', icon: 'Wl', bg: '#4299E1', text: '#FFFFFF' },
  { name: 'Inventory Management', icon: 'Im', bg: '#ECC94B', text: '#2D3748' },
];

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background animated gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm text-gray-300">Available for new opportunities</span>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            Hey, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-blue-400">Jonathan</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-gray-400 mb-3 max-w-3xl mx-auto"
          >
            Full-Stack Developer & Product Manager based in Hong Kong with <span className="text-white font-semibold">7+ years</span> of experience,
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-base md:text-lg text-gray-500 mb-12"
          >
            specializing in Web Development, Mobile Apps & Digital Product Strategy
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4 justify-center items-center mb-12"
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
            transition={{ delay: 0.9 }}
            className="flex gap-6 justify-center"
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
        </motion.div>
      </div>

      {/* Tools Carousel - Bottom Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-0 left-0 right-0 pb-8 z-10"
      >
        <div className="relative overflow-hidden">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10"></div>
          
          {/* Scrolling carousel */}
          <div className="flex animate-carousel">
            {/* First set of tools */}
            {tools.map((tool, index) => (
              <div
                key={`tool-1-${index}`}
                className="flex-shrink-0 mx-4 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: tool.bg, color: tool.text }}
                >
                  {tool.icon}
                </div>
                <span className="text-xs text-gray-500 whitespace-nowrap">{tool.name}</span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {tools.map((tool, index) => (
              <div
                key={`tool-2-${index}`}
                className="flex-shrink-0 mx-4 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: tool.bg, color: tool.text }}
                >
                  {tool.icon}
                </div>
                <span className="text-xs text-gray-500 whitespace-nowrap">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes carousel {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-carousel {
          animation: carousel 40s linear infinite;
        }
        .animate-carousel:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
