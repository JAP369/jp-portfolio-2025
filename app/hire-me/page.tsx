"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock, Check, Mail, Phone, Linkedin } from "lucide-react";

export default function HireMePage() {
  const services = [
    {
      title: "Bartending Services",
      icon: "🍸",
      gradient: "from-orange-500 to-red-500",
      rate: "HK$150-200",
      unit: "per hour",
      description:
        "Professional bartending for events, parties, and private functions",
      features: [
        "Classic & signature cocktail preparation",
        "Bar setup & equipment management",
        "Menu consultation & drink recommendations",
        "Professional service for up to 100+ guests",
        "Inventory management & ordering assistance",
      ],
    },
    {
      title: "Web Development",
      icon: "💻",
      gradient: "from-blue-500 to-cyan-500",
      rate: "HK$200-350",
      unit: "per hour",
      description: "Modern, responsive websites and web applications",
      features: [
        "Custom website design & development",
        "React, Next.js, TypeScript expertise",
        "Responsive & mobile-first design",
        "Database integration & API development",
        "Website maintenance & updates",
      ],
    },
    {
      title: "Graphic Design",
      icon: "🎨",
      gradient: "from-purple-500 to-pink-500",
      rate: "HK$150-200",
      unit: "per hour",
      description: "Professional graphic design for marketing and branding",
      features: [
        "Logo design & brand identity",
        "Menu design for F&B businesses",
        "Marketing materials & promotional designs",
        "Adobe Photoshop & Illustrator expertise",
        "Print & digital design formats",
      ],
    },
    {
      title: "Office Administration & Purchasing",
      icon: "📋",
      gradient: "from-green-500 to-emerald-500",
      rate: "HK$150-250",
      unit: "per hour",
      description:
        "Professional office support, data management, and procurement services",
      features: [
        "Data entry & database management",
        "Purchasing & vendor coordination",
        "Inventory tracking & stock management",
        "Microsoft Office & spreadsheet expertise",
        "Administrative support & documentation",
      ],
    },
  ];

  return (
    <div className='min-h-screen bg-[#020617] text-white'>
      {/* Header */}
      <div className='border-b border-white/10 py-6'>
        <div className='max-w-7xl mx-auto px-6 flex justify-between items-center'>
          <Link
            href='/'
            className='text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2'
          >
            <ArrowLeft className='w-5 h-5' />
            Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className='max-w-7xl mx-auto px-6 py-20'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-center mb-20'
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className='inline-block mb-4'
          >
            <span className='px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium'>
              Available for Hire
            </span>
          </motion.div>
          <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>
            Hire Me for Your Project
          </h1>
          <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
            Professional services available on an hourly basis. From bartending
            events to building your next website, I bring 15+ years of expertise
            to help your project succeed.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className='grid md:grid-cols-2 gap-8 mb-20'>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className='group relative'
            >
              {/* Glow Effect */}
              <motion.div
                className={`absolute -inset-1 bg-linear-to-r ${service.gradient} opacity-0 group-hover:opacity-20 blur-xl rounded-3xl transition-opacity duration-500`}
              />

              <div className='relative p-8 rounded-3xl bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-500 h-full'>
                {/* Icon */}
                <motion.div
                  className={`w-20 h-20 rounded-2xl bg-linear-to-br ${service.gradient} flex items-center justify-center text-5xl mb-6 shadow-lg`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.div>

                {/* Content */}
                <h3 className='text-3xl font-bold mb-3 text-white'>
                  {service.title}
                </h3>

                <div className='flex items-baseline gap-2 mb-4'>
                  <span className='text-4xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
                    {service.rate}
                  </span>
                  <span className='text-gray-500 text-sm flex items-center gap-1'>
                    <Clock className='w-4 h-4' />
                    {service.unit}
                  </span>
                </div>

                <p className='text-gray-400 mb-6 leading-relaxed'>
                  {service.description}
                </p>

                {/* Features */}
                <ul className='space-y-3'>
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      className='flex items-start gap-3 text-gray-300'
                    >
                      <Check className='w-5 h-5 text-cyan-400 shrink-0 mt-0.5' />
                      <span className='text-sm'>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className='relative p-12 rounded-3xl bg-linear-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 backdrop-blur-sm text-center'
        >
          <motion.div
            className='absolute -inset-1 bg-linear-to-r from-cyan-500 to-blue-600 opacity-20 blur-xl rounded-3xl'
            animate={{
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />

          <div className='relative z-10'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              Ready to Work Together?
            </h2>
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
              Let&apos;s discuss your project requirements and how I can help
              bring your vision to life.
            </p>

            <div className='flex flex-wrap gap-4 justify-center'>
              <motion.a
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                href='mailto:jon89ap@gmail.com'
                className='px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold transition-all duration-300 flex items-center gap-2'
              >
                <Mail className='w-5 h-5' />
                Email Me
              </motion.a>
              <motion.a
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(6, 182, 212, 0.8)",
                }}
                whileTap={{ scale: 0.95 }}
                href='https://wa.me/85297602612'
                target='_blank'
                rel='noopener noreferrer'
                className='px-8 py-4 border-2 border-white/20 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2'
              >
                <Phone className='w-5 h-5' />
                WhatsApp
              </motion.a>
              <motion.a
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(6, 182, 212, 0.8)",
                }}
                whileTap={{ scale: 0.95 }}
                href='https://www.linkedin.com/in/jonathan-paita'
                target='_blank'
                rel='noopener noreferrer'
                className='px-8 py-4 border-2 border-white/20 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2'
              >
                <Linkedin className='w-5 h-5' />
                LinkedIn
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className='mt-12 text-center text-gray-500'
        >
          <p className='mb-2'>
            <strong className='text-gray-400'>Location:</strong> Hong Kong
          </p>
          <p className='mb-2'>
            <strong className='text-gray-400'>Availability:</strong> Part-time &
            Freelance Projects
          </p>
          <p>
            <strong className='text-gray-400'>Response Time:</strong> Usually
            within 24 hours
          </p>
        </motion.div>
      </div>
    </div>
  );
}
