'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      {/* Header */}
      <div className="border-b border-white/10 py-6">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            ← Back to Portfolio
          </Link>
          <button 
            onClick={() => window.print()}
            className="px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/50 rounded-lg transition-colors"
          >
            Print Resume
          </button>
        </div>
      </div>

      {/* Resume Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 space-y-8"
        >
          {/* Header */}
          <div className="text-center border-b border-white/10 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Jonathan Paita
            </h1>
            <p className="text-xl text-gray-400 mb-4">Food & Beverage Operations Manager</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span>📍 Hong Kong</span>
              <span>📧 jonathan.paita@gmail.com</span>
              <span>📱 Available for opportunities</span>
            </div>
          </div>

          {/* Professional Summary */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Professional Summary</h2>
            <p className="text-gray-300 leading-relaxed">
              Seasoned Food & Beverage professional with over 15 years of comprehensive experience in the hospitality industry. 
              Originally from the Philippines, now based in Hong Kong. Proven track record of establishing and managing F&B 
              operations from ground-up coffee shops to full-scale central kitchens and multiple retail outlets. Expertise in 
              purchasing management, inventory control, administrative operations, graphic design, and team leadership. Combines 
              traditional F&B expertise with modern computer skills and digital tools to optimize business operations.
            </p>
          </section>

          {/* Core Competencies */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Core Competencies</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Operations Management',
                'Purchasing & Procurement',
                'Inventory Control & Management',
                'Vendor Relations & Negotiations',
                'Team Leadership & Training',
                'Administrative Operations',
                'Graphic Design & Marketing',
                'Menu Development & Design',
                'Cost Control & Budgeting',
                'Quality Assurance',
                'POS Systems & Technology',
                'Microsoft Office Suite'
              ].map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-cyan-400">▸</span>
                  <span className="text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Professional Experience */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Professional Experience</h2>
            <div className="space-y-6">
              {/* Experience 1 */}
              <div className="border-l-2 border-cyan-500/50 pl-6">
                <h3 className="text-xl font-semibold text-white">Operations Manager</h3>
                <p className="text-gray-400 mb-2">F&B Group | Hong Kong</p>
                <p className="text-sm text-gray-500 mb-3">2015 - Present</p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Established and managed central kitchen operations serving 3 retail outlets</li>
                  <li>• Oversaw purchasing, inventory management, and vendor relationships</li>
                  <li>• Implemented cost control measures resulting in improved profit margins</li>
                  <li>• Led team of 20+ staff across multiple locations</li>
                  <li>• Designed marketing materials and menu layouts using Adobe Creative Suite</li>
                  <li>• Managed administrative operations including scheduling, payroll, and reporting</li>
                </ul>
              </div>

              {/* Experience 2 */}
              <div className="border-l-2 border-cyan-500/50 pl-6">
                <h3 className="text-xl font-semibold text-white">Coffee Shop Manager</h3>
                <p className="text-gray-400 mb-2">Independent Coffee Shop | Hong Kong</p>
                <p className="text-sm text-gray-500 mb-3">2010 - 2015</p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Started and managed coffee shop from concept to daily operations</li>
                  <li>• Handled all purchasing, inventory, and supplier negotiations</li>
                  <li>• Created brand identity and marketing materials</li>
                  <li>• Managed staff recruitment, training, and scheduling</li>
                  <li>• Maintained quality standards and customer satisfaction</li>
                </ul>
              </div>

              {/* Experience 3 */}
              <div className="border-l-2 border-cyan-500/50 pl-6">
                <h3 className="text-xl font-semibold text-white">F&B Service & Operations</h3>
                <p className="text-gray-400 mb-2">Various Establishments | Hong Kong & Philippines</p>
                <p className="text-sm text-gray-500 mb-3">2008 - 2010</p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Gained comprehensive F&B experience across multiple roles</li>
                  <li>• Developed strong foundation in food service, customer relations, and operations</li>
                  <li>• Learned inventory management and purchasing fundamentals</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education & Training */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Education & Training</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white">Computer Skills Courses</h3>
                <p className="text-gray-400">Various Institutions | Hong Kong</p>
                <ul className="mt-2 space-y-1 text-gray-300 text-sm">
                  <li>• Microsoft Office Suite (Word, Excel, PowerPoint)</li>
                  <li>• Graphic Design & Adobe Creative Suite</li>
                  <li>• POS Systems & Restaurant Management Software</li>
                  <li>• Digital Marketing & Social Media Management</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Food & Beverage Training</h3>
                <p className="text-gray-400">Industry Certifications</p>
                <ul className="mt-2 space-y-1 text-gray-300 text-sm">
                  <li>• Food Safety & Hygiene Certification</li>
                  <li>• Barista & Coffee Training</li>
                  <li>• Customer Service Excellence</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Key Achievements */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Key Achievements</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏆</span>
                <div>
                  <h4 className="font-semibold text-white">Central Kitchen Establishment</h4>
                  <p className="text-gray-300 text-sm">Successfully established and scaled central kitchen operations supporting 3 outlets</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📈</span>
                <div>
                  <h4 className="font-semibold text-white">Business Growth</h4>
                  <p className="text-gray-300 text-sm">Expanded from single coffee shop to multi-outlet operation over 5 years</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h4 className="font-semibold text-white">Process Optimization</h4>
                  <p className="text-gray-300 text-sm">Implemented digital tools and systems to streamline operations and reduce costs</p>
                </div>
              </div>
            </div>
          </section>

          {/* Languages */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Languages</h2>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                <span className="text-white font-semibold">English</span>
                <span className="text-gray-400 text-sm ml-2">- Fluent</span>
              </div>
              <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                <span className="text-white font-semibold">Tagalog</span>
                <span className="text-gray-400 text-sm ml-2">- Native</span>
              </div>
              <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                <span className="text-white font-semibold">Cantonese</span>
                <span className="text-gray-400 text-sm ml-2">- Working Proficiency</span>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
