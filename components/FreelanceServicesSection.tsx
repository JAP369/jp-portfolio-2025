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
    description: 'Professional bartending for your events, with 15+ years of expertise',
    features: [
      'Cocktail bar setup & service',
      'Signature drink menu creation',
      'Private events & parties',
      'Corporate functions',
      'Wedding receptions',
      'Bar staff training'
    ]
  },
  {
    title: 'F&B Operations Consulting',
    icon: '💼',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'hover:border-blue-500/50',
    description: 'Complete F&B operations management and consulting services',
    features: [
      'Operations setup & management',
      'Purchasing & inventory systems',
      'Cost control & budgeting',
      'SOP development',
      'Vendor management',
      'Quality assurance protocols'
    ]
  },
  {
    title: 'Web Development & Design',
    icon: '💻',
    gradient: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'hover:border-purple-500/50',
    description: 'Modern, responsive websites and web applications tailored to your needs',
    features: [
      'Custom website development',
      'E-commerce solutions',
      'Restaurant & bar websites',
      'Responsive design',
      'SEO optimization',
      'Website maintenance'
    ]
  },
  {
    title: 'Graphic Design & Marketing',
    icon: '🎨',
    gradient: 'from-green-500/20 to-emerald-500/20',
    borderColor: 'hover:border-green-500/50',
    description: 'Creative design solutions for menus, marketing materials, and branding',
    features: [
      'Menu design & creation',
      'Marketing materials',
      'Social media graphics',
      'Brand identity design',
      'Promotional content',
      'Print & digital design'
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
                ease: [0.25, 0.4, 0.25, 1]
              }}
              className="group relative"
            >
              {/* Glow Effect */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 blur-xl rounded-3xl transition-opacity duration-500`}
              />
              
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br ${service.gradient} backdrop-blur-sm border border-white/10 ${service.borderColor} transition-all duration-500 h-full`}
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
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 + idx * 0.05 }}
                      className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors duration-300"
                    >
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
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
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Why Hire Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-16"
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
                whileHover={{ y: -5 }}
                className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-5xl font-bold text-cyan-500/20 mb-4">{item.number}</div>
                <h5 className="text-xl font-bold mb-3 text-white">{item.title}</h5>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold text-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300"
          >
            Let's Work Together
            <ArrowRight className="w-5 h-5" />
          </motion.a>
          <p className="text-gray-500 mt-6 text-sm">
            Available for freelance projects • Hong Kong based • Remote work available
          </p>
        </motion.div>
      </div>
    </section>
  );
}
