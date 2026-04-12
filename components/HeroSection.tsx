"use client";

import { motion } from "framer-motion";
import { FileText, Mail, Linkedin, Github, Briefcase } from "lucide-react";
import { ReactElement, useState, useEffect } from "react";
import Image from "next/image";

// Tool icon components
const ToolIcon = ({ name, bg }: { name: string; bg: string }) => {
  const icons: { [key: string]: ReactElement } = {
    Bartending: (
      <svg viewBox='0 0 24 24' fill='white' className='w-8 h-8'>
        <path d='M3 14c0 1.3.84 2.4 2 2.82V20H3v2h7v-2H8v-3.18C9.16 16.4 10 15.3 10 14V6H3v8zm2-6h3v3H5V8zm11.7 0l-2-2h-1.4l-2 2h1.7L14 7v7c0 1.1.9 2 2 2s2-.9 2-2V7l1 1h1.7zM22 3H10v2h12V3z' />
      </svg>
    ),
    "Product Sourcing": (
      <svg viewBox='0 0 24 24' fill='white' className='w-8 h-8'>
        <path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' />
        <circle cx='9.5' cy='9.5' r='1.5' />
      </svg>
    ),
    "Warehouse Logistics": (
      <svg viewBox='0 0 24 24' fill='white' className='w-8 h-8'>
        <path d='M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z' />
      </svg>
    ),
    "Inventory Management": (
      <svg viewBox='0 0 24 24' fill='white' className='w-8 h-8'>
        <path d='M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z' />
      </svg>
    ),
    "Graphic Design": (
      <svg viewBox='0 0 24 24' fill='white' className='w-8 h-8'>
        <path d='M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z' />
      </svg>
    ),
    "Adobe Photoshop": (
      <svg viewBox='0 0 24 24' fill='white' className='w-9 h-9'>
        <path d='M9.85 8.42c.38-.1.8-.15 1.25-.15.45 0 .85.08 1.2.25.35.17.62.42.82.75s.3.73.3 1.2c0 .5-.11.93-.32 1.28s-.52.62-.92.8c-.4.18-.87.27-1.4.27-.2 0-.38-.01-.52-.02V8.42zm-2.2-1.45v9.5h2.2v-2.45c.25.03.52.05.82.05.75 0 1.4-.13 1.97-.38.57-.25 1-.62 1.32-1.1.32-.48.47-1.05.47-1.7 0-.6-.15-1.12-.45-1.57-.3-.45-.73-.8-1.28-1.03-.55-.24-1.2-.35-1.95-.35-.5 0-.95.03-1.35.08-.4.05-.75.12-.95.17zm7.4 5.8c.28.22.7.33 1.25.33.35 0 .65-.08.88-.23.23-.15.35-.35.35-.58 0-.2-.08-.37-.25-.5-.17-.13-.48-.26-.95-.4-.65-.2-1.13-.45-1.43-.75-.3-.3-.45-.67-.45-1.1 0-.32.1-.6.28-.85.18-.25.45-.45.8-.58.35-.13.75-.2 1.2-.2.55 0 1 .08 1.35.25v1.7c-.25-.17-.6-.25-1.05-.25-.3 0-.53.05-.7.17-.17.12-.25.27-.25.47 0 .18.08.33.23.45.15.12.43.24.85.37.7.22 1.2.48 1.5.78.3.3.45.68.45 1.13 0 .58-.22 1.03-.65 1.35-.43.32-1.03.48-1.8.48-.65 0-1.18-.12-1.6-.35v-1.7z' />
      </svg>
    ),
    "Adobe Illustrator": (
      <svg viewBox='0 0 24 24' fill='white' className='w-9 h-9'>
        <path d='M10.53 10.73l-.01.02c-.15.42-.3.83-.44 1.23-.15.41-.3.82-.44 1.23h2.37c-.14-.41-.29-.82-.44-1.23-.15-.4-.3-.81-.44-1.23l-.01-.02h-.59zm4.72 6.27h-2.13c-.08 0-.14-.05-.16-.12l-.46-1.41c-.02-.06-.08-.11-.15-.11H9.22c-.07 0-.13.05-.15.11l-.45 1.41c-.02.07-.08.12-.16.12H6.33c-.1 0-.17-.08-.14-.17l2.67-7.66c.04-.14.08-.28.12-.42.04-.14.08-.28.12-.42.04-.14.07-.27.09-.39.03-.15.17-.26.32-.26h2.3c.15 0 .29.11.32.26.02.12.06.25.09.39.04.14.08.28.12.42.04.14.08.28.12.42l2.67 7.66c.03.09-.04.17-.14.17z' />
      </svg>
    ),
    "Microsoft Office": (
      <svg viewBox='0 0 24 24' fill='white' className='w-8 h-8'>
        <path d='M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6zm10-10h-4v1h3v2h-3v1h4v2H9v-8h7v2z' />
      </svg>
    ),
    "Web Design": (
      <svg viewBox='0 0 24 24' fill='white' className='w-8 h-8'>
        <path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 9h10.5v3.5H4V9zm0 5.5h10.5V18H4v-3.5zM20 18h-3.5V9H20v9z' />
      </svg>
    ),
    Database: (
      <svg viewBox='0 0 24 24' fill='white' className='w-8 h-8'>
        <path d='M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zm8 6c0 2.21-3.58 4-8 4s-8-1.79-8-4v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9zm0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3z' />
      </svg>
    ),
    "3D Animation": (
      <svg viewBox='0 0 24 24' fill='white' className='w-8 h-8'>
        <path d='M12 2L4.5 6.5v11L12 22l7.5-4.5v-11L12 2zm0 2.18l5.5 3.3v6.54l-5.5 3.3-5.5-3.3V7.48l5.5-3.3zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z' />
      </svg>
    ),
  };

  return icons[name] || <span className='text-2xl font-bold'>⚙️</span>;
};

const tools = [
  { name: "Bartending", bg: "#D97706" },
  { name: "Web Design", bg: "#4F46E5" },
  { name: "Database", bg: "#DC2626" },
  { name: "3D Animation", bg: "#059669" },
  { name: "Product Sourcing", bg: "#7C3AED" },
  { name: "Warehouse Logistics", bg: "#0284C7" },
  { name: "Inventory Management", bg: "#CA8A04" },
  { name: "Graphic Design", bg: "#10B981" },
  { name: "Adobe Photoshop", bg: "#31A8FF" },
  { name: "Adobe Illustrator", bg: "#FF9A00" },
  { name: "Microsoft Office", bg: "#D83B01" },
];

export default function HeroSection() {
  const [greeting, setGreeting] = useState("Hey");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setGreeting("Good morning");
    } else if (hour >= 12 && hour < 17) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }
  }, []);

  return (
    <section
      id='home'
      className='min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden'
    >
      {/* Background animated gradient */}
      <div className='absolute inset-0 opacity-20'>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
            x: [-20, 20, -20],
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className='absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full filter blur-3xl'
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [20, -20, 20],
            y: [20, -20, 20],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className='absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-500 rounded-full filter blur-3xl'
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-600 rounded-full filter blur-3xl'
        />
      </div>

      <div className='max-w-6xl mx-auto relative z-10 w-full flex-1 flex flex-col items-center justify-center'>
        {/* Hero Content - Text and Photo */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full mb-16'>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center lg:text-left order-2 lg:order-1'
          >
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: 0.1 }}
              className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 backdrop-blur-sm'
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className='w-2 h-2 bg-green-500 rounded-full'
              />
              <span className='text-sm text-gray-300'>
                Available for new opportunities
              </span>
            </motion.div>

            {/* Name and Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className='text-4xl md:text-6xl lg:text-7xl font-bold mb-6'
            >
              {greeting}, I'm{" "}
              <motion.span
                className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600'
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ backgroundSize: "200% auto" }}
              >
                Jonathan
              </motion.span>
              .
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className='text-lg md:text-xl text-gray-400 mb-3'
            >
              Bartender & F&B Professional with{" "}
              <span className='text-white font-semibold'>15+ years</span> of
              experience,
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className='text-base md:text-lg text-gray-500 mb-8'
            >
              specializing in Bartending, Mixology, Service Excellence,
              Purchasing & Operations from coffee shops to central kitchens
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className='flex flex-wrap gap-4 justify-center lg:justify-start items-center'
            >
              <motion.a
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                href='/hire-me'
                className='group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium transition-all duration-300 flex items-center gap-2'
              >
                <Briefcase className='w-5 h-5' />
                Hire Me
              </motion.a>
              <motion.a
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(255,255,255,0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                href='/resume'
                className='group px-8 py-4 bg-white text-black rounded-full font-medium transition-all duration-300 flex items-center gap-2'
              >
                <FileText className='w-5 h-5' />
                Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='order-1 lg:order-2 flex justify-center lg:justify-end'
          >
            <div className='relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96'>
              {/* Animated border effect */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className='absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 blur-xl opacity-70'
              />

              {/* Profile Photo */}
              <div className='relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm bg-gradient-to-br from-cyan-500/20 to-blue-600/20'>
                <Image
                  src='/jp-photo.jpg'
                  alt='Jonathan Paita - Bartender & F&B Professional'
                  fill
                  className='object-cover'
                  priority
                  sizes='(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px'
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Links - Now outside the grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className='flex gap-6 justify-center mb-16 relative z-10'
        >
          <motion.a
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            href='https://www.linkedin.com/in/jonathan-paita'
            target='_blank'
            rel='noopener noreferrer'
            className='w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 backdrop-blur-sm'
          >
            <Linkedin className='w-5 h-5' />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            href='https://github.com/JAP369'
            target='_blank'
            rel='noopener noreferrer'
            className='w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 backdrop-blur-sm'
          >
            <Github className='w-5 h-5' />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            href='mailto:jonathan.paita@gmail.com'
            className='w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 backdrop-blur-sm'
          >
            <Mail className='w-5 h-5' />
          </motion.a>
        </motion.div>

        {/* Tools Carousel - Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className='w-full pb-12 relative z-10'
        >
          <div className='relative overflow-hidden py-8'>
            {/* Gradient fade edges */}
            <div className='absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none'></div>
            <div className='absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none'></div>

            {/* Scrolling carousel */}
            <div className='flex animate-carousel'>
              {/* First set of tools */}
              {tools.map((tool, index) => (
                <motion.div
                  key={`tool-1-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{
                    scale: 1.1,
                    y: -8,
                    transition: { duration: 0.2 },
                  }}
                  className='flex-shrink-0 mx-6 flex flex-col items-center gap-3 cursor-pointer group'
                >
                  <motion.div
                    whileHover={{
                      boxShadow: `0 10px 40px ${tool.bg}40`,
                      rotate: [0, -5, 5, 0],
                    }}
                    transition={{ duration: 0.3 }}
                    className='w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300'
                    style={{ backgroundColor: tool.bg }}
                  >
                    <ToolIcon name={tool.name} bg={tool.bg} />
                  </motion.div>
                  <span className='text-xs text-gray-500 whitespace-nowrap group-hover:text-gray-300 transition-colors duration-300'>
                    {tool.name}
                  </span>
                </motion.div>
              ))}
              {/* Duplicate set for seamless loop */}
              {tools.map((tool, index) => (
                <motion.div
                  key={`tool-2-${index}`}
                  whileHover={{
                    scale: 1.1,
                    y: -8,
                    transition: { duration: 0.2 },
                  }}
                  className='flex-shrink-0 mx-6 flex flex-col items-center gap-3 cursor-pointer group'
                >
                  <motion.div
                    whileHover={{
                      boxShadow: `0 10px 40px ${tool.bg}40`,
                      rotate: [0, -5, 5, 0],
                    }}
                    transition={{ duration: 0.3 }}
                    className='w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300'
                    style={{ backgroundColor: tool.bg }}
                  >
                    <ToolIcon name={tool.name} bg={tool.bg} />
                  </motion.div>
                  <span className='text-xs text-gray-500 whitespace-nowrap group-hover:text-gray-300 transition-colors duration-300'>
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

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
          animation: carousel 50s linear infinite;
        }
        .animate-carousel:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
