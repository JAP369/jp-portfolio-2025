'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const services = [
  {
    title: 'Bartending & Mixology Services',
    icon: '🍸',
    gradient: 'from-orange-500/20 to-red-500/20',
    borderColor: 'hover:border-orange-500/50',
    glowColor: 'from-orange-500 to-red-500',
    description: 'Professional bartending for your events, with 15+ years of expertise',
    pricing: 'Starting from HK$800/event',
    features: [
      'Cocktail bar setup & service',
      'Signature drink menu creation',
      'Private events & parties',
      'Corporate functions',
      'Wedding receptions',
      'Bar staff training',
      'Mixology workshops',
      'Premium spirits consultation'
    ]
  },
  {
    title: 'F&B Operations Consulting',
    icon: '💼',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'hover:border-blue-500/50',
    glowColor: 'from-blue-500 to-cyan-500',
    description: 'Complete F&B operations management and consulting services',
    pricing: 'Custom quotes available',
    features: [
      'Operations setup & management',
      'Purchasing & inventory systems',
      'Cost control & budgeting',
      'SOP development',
      'Vendor management',
      'Quality assurance protocols',
      'Staff recruitment & training',
      'Menu engineering & pricing'
    ]
  },
  {
    title: 'Web Development & Design',
    icon: '💻',
    gradient: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'hover:border-purple-500/50',
    glowColor: 'from-purple-500 to-pink-500',
    description: 'Modern, responsive websites and web applications tailored to your needs',
    pricing: 'From HK$5,000',
    features: [
      'Custom website development',
      'E-commerce solutions',
      'Restaurant & bar websites',
      'Responsive design',
      'SEO optimization',
      'Website maintenance',
      'Performance optimization',
      'Mobile app development'
    ]
  },
  {
    title: 'Graphic Design & Marketing',
    icon: '🎨',
    gradient: 'from-green-500/20 to-emerald-500/20',
    borderColor: 'hover:border-green-500/50',
    glowColor: 'from-green-500 to-emerald-500',
    description: 'Creative design solutions for menus, marketing materials, and branding',
    pricing: 'Starting from HK$500/project',
    features: [
      'Menu design & creation',
      'Marketing materials',
      'Social media graphics',
      'Brand identity design',
      'Promotional content',
      'Print & digital design',
      'Logo & branding packages',
      'Photography editing'
    ]
  }
];

const whyHireMe = [
  {
    number: '01',
    title: 'Versatile Skill Set',
    description: 'Combine traditional F&B expertise with modern tech skills for comprehensive solutions'
  },
  {
    number: '02',
    title: 'Proven Track Record',
    description: 'Scaled operations from 2 to 100 employees, managed multiple outlets successfully'
  },
  {
    number: '03',
    title: 'Systems & Efficiency',
    description: 'Create productive workflows that save time and increase profitability'
  },
  {
    number: '04',
    title: 'Quality & Excellence',
    description: '15+ years of delivering exceptional service and outstanding results'
  }
];

export default function FreelanceServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="services" className="py-32 px-6 bg-[#020617] relative overflow-hidden" ref={ref}>
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{ y }}
      >
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-purple-500 to-pink-600 rounded-full filter blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            FREELANCE SERVICES
          </motion.h2>
          <motion.h3 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            What I can do for you
          </motion.h3>
          <motion.p
            className="text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Offering a unique blend of hospitality expertise and technical skills to help your business thrive
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.7, 
                delay: 0.4 + index * 0.15,
                ease: [0.25, 0.4, 0.25, 1] as const
              }}
              className="group relative"
            >
              {/* Glow Effect */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${service.glowColor} opacity-0 group-hover:opacity-100 blur-xl rounded-3xl transition-opacity duration-500`}
              />
              
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br ${service.gradient} backdrop-blur-sm border border-white/10 ${service.borderColor} transition-all duration-500 h-full flex flex-col`}
              >
                {/* Icon */}
                <motion.div 
                  className="text-6xl mb-6"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <motion.h4 
                  className="text-2xl lg:text-3xl font-bold mb-4 text-white"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.title}
                </motion.h4>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Pricing Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="mb-6 inline-block"
                >
                  <span className="px-4 py-2 bg-white/10 rounded-full text-cyan-400 text-sm font-semibold border border-cyan-500/30">
                    {service.pricing}
                  </span>
                </motion.div>

                {/* Features List */}
                <ul className="space-y-3 flex-grow">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 + idx * 0.05 }}
                      className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors duration-300"
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Check className="w-5 h-5 text-green-400 shrink-0" />
                      </motion.div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Corner Accent */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Hover Glow Line */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl`}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Why Hire Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-20"
        >
          <h4 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Why hire me?
          </h4>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyHireMe.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <motion.div 
                  className="text-5xl font-bold text-cyan-500/20 mb-4"
                  whileHover={{ scale: 1.1 }}
                >
                  {item.number}
                </motion.div>
                <h5 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">{item.title}</h5>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                
                {/* Animated underline */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mb-16 relative"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { value: '500+', label: 'Events Served', icon: '🎉' },
              { value: '15+', label: 'Years Experience', icon: '⭐' },
              { value: '100%', label: 'Client Satisfaction', icon: '❤️' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.15 }}
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                className="relative group"
              >
                <motion.div
                  className="text-6xl mb-4"
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div 
                  className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-2"
                  whileHover={{ scale: 1.15 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400 text-lg font-medium">{stat.label}</div>
                
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold text-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300"
          >
            Let&apos;s Work Together
            <ArrowRight className="w-5 h-5" />
          </motion.a>
          <motion.p 
            className="text-gray-500 mt-6 text-sm"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 2 }}
          >
            Available for freelance projects • Hong Kong based • Remote work available
          </motion.p>
          <motion.div
            className="mt-8 flex justify-center gap-6 text-gray-600 text-xs"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Available Now
            </span>
            <span>•</span>
            <span>Response within 24hrs</span>
            <span>•</span>
            <span>Free Consultation</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
