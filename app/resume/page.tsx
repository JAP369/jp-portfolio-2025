'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Download, ArrowLeft, Star, TrendingUp, Users, Award } from 'lucide-react';

export default function ResumePage() {
  const [activeSection, setActiveSection] = useState('summary');
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white relative overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="fixed inset-0 opacity-20"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-500 to-pink-600 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </motion.div>

      {/* Header */}
      <motion.div 
        className="sticky top-0 z-50 backdrop-blur-xl bg-[#020617]/80 border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-5xl mx-auto px-6 py-6 flex justify-between items-center">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Portfolio
            </motion.button>
          </Link>
          <motion.button 
            onClick={() => window.print()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-medium shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </motion.button>
        </div>
      </motion.div>

      {/* Resume Content */}
      <div className="max-w-5xl mx-auto px-6 py-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Hero Header */}
          <motion.div 
            variants={itemVariants}
            className="text-center relative"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-6xl shadow-2xl shadow-cyan-500/30"
            >
              🍸
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Jonathan Paita
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl text-gray-400 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Bartender • F&B Operations Manager • Web Developer
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-6 text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <span className="flex items-center gap-2">📍 Hong Kong SAR</span>
              <span className="flex items-center gap-2">📧 jonathan.paita@gmail.com</span>
              <span className="flex items-center gap-2">📱 +852 6421 3849</span>
            </motion.div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div 
            variants={itemVariants}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              { icon: <Star className="w-8 h-8" />, value: '15+', label: 'Years Experience', color: 'from-orange-500 to-red-500' },
              { icon: <Users className="w-8 h-8" />, value: '100', label: 'Team Members', color: 'from-blue-500 to-cyan-500' },
              { icon: <TrendingUp className="w-8 h-8" />, value: '3', label: 'Outlets Managed', color: 'from-green-500 to-emerald-500' },
              { icon: <Award className="w-8 h-8" />, value: '1 Year', label: 'Growth Period', color: 'from-purple-500 to-pink-500' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.05 }}
                className={`p-6 rounded-3xl bg-gradient-to-br ${stat.color} bg-opacity-10 border border-white/10 hover:border-white/30 transition-all duration-300 text-center`}
              >
                <motion.div
                  className="text-cyan-400 mb-3 flex justify-center"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Professional Summary */}
          <motion.div 
            variants={itemVariants}
            className="relative p-10 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 backdrop-blur-sm overflow-hidden"
          >
            <motion.div
              className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/20 rounded-full filter blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Professional Summary
            </h2>
            <motion.p 
              className="text-gray-300 leading-relaxed text-lg relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Dedicated and experienced Food & Beverage professional with over <span className="text-white font-semibold">15 years</span> in the hospitality industry, 
              primarily working behind the bar where I have fine-tuned my service skills and mastered the craft for drinks. 
              Originally from the Philippines, now based in Hong Kong. Proven expertise in bartending, mixology, purchasing 
              management, inventory control, administrative operations, graphic design, and team leadership. Successfully 
              scaled operations from just <span className="text-white font-semibold">2 people to 100 employees</span>, establishing a central kitchen and <span className="text-white font-semibold">3 F&B outlets within 
              1 year</span>. Combines traditional bartending excellence with modern computer skills including <span className="text-white font-semibold">software engineering</span> 
              to deliver exceptional customer experiences and operational efficiency.
            </motion.p>
          </motion.div>

          {/* Core Competencies */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Core Competencies
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { skill: 'Bartending & Mixology', icon: '🍸' },
                { skill: 'Customer Service Excellence', icon: '⭐' },
                { skill: 'Drink Menu Development', icon: '📋' },
                { skill: 'Bar Operations Management', icon: '🏢' },
                { skill: 'Purchasing & Procurement', icon: '🛒' },
                { skill: 'Inventory Control & Cost Management', icon: '📊' },
                { skill: 'Vendor Relations & Negotiations', icon: '🤝' },
                { skill: 'Team Leadership & Training', icon: '👥' },
                { skill: 'Administrative Operations & SOPs', icon: '📝' },
                { skill: 'Graphic Design (Adobe Creative Suite)', icon: '🎨' },
                { skill: 'Cost Control & Budgeting', icon: '💰' },
                { skill: 'Quality Assurance & Standards', icon: '✅' },
                { skill: 'POS Systems & Technology', icon: '💻' },
                { skill: 'Microsoft Office Suite', icon: '📄' },
                { skill: 'Software Engineering Knowledge', icon: '⚙️' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={skillVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-gray-300">{item.skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
