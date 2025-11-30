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
            <p className="text-xl text-gray-400 mb-4">Bartender & Food & Beverage Professional</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span>📍 Hong Kong SAR</span>
              <span>📧 jonathan.paita@gmail.com</span>
              <span>📱 +852 6421 3849</span>
            </div>
          </div>

          {/* Professional Summary */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Professional Summary</h2>
            <p className="text-gray-300 leading-relaxed">
              Dedicated and experienced Food & Beverage professional with over 15 years in the hospitality industry, 
              primarily working behind the bar where I have fine-tuned my service skills and mastered the craft of 
              drink preparation. Originally from the Philippines, now based in Hong Kong. Proven expertise in bartending, 
              mixology, purchasing management, inventory control, administrative operations, graphic design, and team 
              leadership. Successfully established operations from coffee shops to central kitchens serving multiple outlets. 
              Combines traditional bartending excellence with modern computer skills and digital tools to deliver 
              exceptional customer experiences.
            </p>
          </section>

          {/* Core Competencies */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Core Competencies</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Bartending & Mixology',
                'Customer Service Excellence',
                'Drink Menu Development',
                'Bar Operations Management',
                'Purchasing & Procurement',
                'Inventory Control & Management',
                'Vendor Relations & Negotiations',
                'Team Leadership & Training',
                'Administrative Operations',
                'Graphic Design & Marketing',
                'Cost Control & Budgeting',
                'Quality Assurance',
                'POS Systems & Technology',
                'Microsoft Office Suite',
                'Adobe Creative Suite'
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
              {/* Experience 1 - Based on CV */}
              <div className="border-l-2 border-cyan-500/50 pl-6">
                <h3 className="text-xl font-semibold text-white">Bartender & Operations Manager</h3>
                <p className="text-gray-400 mb-2">F&B Group | Hong Kong SAR</p>
                <p className="text-sm text-gray-500 mb-3">2010 - Present</p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Work primarily behind the bar, fine-tuning service skills and mastering craft for drinks</li>
                  <li>• Established and managed central kitchen operations serving 3 retail outlets</li>
                  <li>• Expert in bartending, mixology, and creating signature cocktails</li>
                  <li>• Oversee purchasing, inventory management, and vendor relationships</li>
                  <li>• Manage administrative operations including scheduling, payroll, and reporting</li>
                  <li>• Design drink menus, marketing materials, and promotional content using Adobe Creative Suite</li>
                  <li>• Lead and train bar staff across multiple locations</li>
                  <li>• Implement cost control measures and maintain quality standards</li>
                </ul>
              </div>

              {/* Experience 2 */}
              <div className="border-l-2 border-cyan-500/50 pl-6">
                <h3 className="text-xl font-semibold text-white">Barista & Coffee Shop Manager</h3>
                <p className="text-gray-400 mb-2">Independent Coffee Shop | Hong Kong SAR</p>
                <p className="text-sm text-gray-500 mb-3">2008 - 2010</p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Started and managed coffee shop from concept to daily operations</li>
                  <li>• Developed expertise in coffee preparation and customer service</li>
                  <li>• Handled all purchasing, inventory, and supplier negotiations</li>
                  <li>• Created brand identity and marketing materials</li>
                  <li>• Managed staff recruitment, training, and scheduling</li>
                  <li>• Maintained quality standards and ensured customer satisfaction</li>
                </ul>
              </div>

              {/* Experience 3 */}
              <div className="border-l-2 border-cyan-500/50 pl-6">
                <h3 className="text-xl font-semibold text-white">F&B Service Staff</h3>
                <p className="text-gray-400 mb-2">Various Establishments | Philippines & Hong Kong</p>
                <p className="text-sm text-gray-500 mb-3">2006 - 2008</p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Gained foundational F&B experience in service and operations</li>
                  <li>• Developed strong customer service and hospitality skills</li>
                  <li>• Learned beverage preparation and bar support</li>
                  <li>• Built understanding of inventory management fundamentals</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education & Training */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Education & Training</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white">Secondary Education</h3>
                <p className="text-gray-400">Philippines</p>
                <p className="text-sm text-gray-500">Completed secondary education</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Professional Computer Courses</h3>
                <p className="text-gray-400">Various Institutions | Hong Kong</p>
                <ul className="mt-2 space-y-1 text-gray-300 text-sm">
                  <li>• Microsoft Office Suite - Word, Excel, PowerPoint</li>
                  <li>• Graphic Design - Adobe Photoshop, Illustrator</li>
                  <li>• Digital Marketing & Social Media Management</li>
                  <li>• POS Systems & Restaurant Management Software</li>
                  <li>• Inventory Management Systems</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Bartending & F&B Certifications</h3>
                <p className="text-gray-400">Industry Training</p>
                <ul className="mt-2 space-y-1 text-gray-300 text-sm">
                  <li>• Professional Bartending & Mixology Training</li>
                  <li>• Food Safety & Hygiene Certification</li>
                  <li>• Barista & Coffee Preparation</li>
                  <li>• Customer Service Excellence</li>
                  <li>• Responsible Alcohol Service</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Key Achievements */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Key Achievements</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🍸</span>
                <div>
                  <h4 className="font-semibold text-white">Bartending Excellence</h4>
                  <p className="text-gray-300 text-sm">15+ years behind the bar, mastering mixology and delivering exceptional customer service</p>
                </div>
              </div>
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
                  <h4 className="font-semibold text-white">Digital Integration</h4>
                  <p className="text-gray-300 text-sm">Leveraged computer skills to create marketing materials, optimize inventory, and streamline bar operations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">👥</span>
                <div>
                  <h4 className="font-semibold text-white">Team Leadership</h4>
                  <p className="text-gray-300 text-sm">Trained and mentored bar staff, fostering service excellence and professional growth</p>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Computer Applications</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between bg-white/5 p-3 rounded-lg">
                    <span className="text-gray-300">Microsoft Office Suite</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-cyan-400"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-white/5 p-3 rounded-lg">
                    <span className="text-gray-300">Adobe Photoshop</span>
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-cyan-400"></div>
                      ))}
                      <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-white/5 p-3 rounded-lg">
                    <span className="text-gray-300">Adobe Illustrator</span>
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-cyan-400"></div>
                      ))}
                      <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Bar & F&B Skills</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between bg-white/5 p-3 rounded-lg">
                    <span className="text-gray-300">Mixology & Cocktails</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-cyan-400"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-white/5 p-3 rounded-lg">
                    <span className="text-gray-300">Customer Service</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-cyan-400"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-white/5 p-3 rounded-lg">
                    <span className="text-gray-300">Inventory Management</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-cyan-400"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Languages */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Languages</h2>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/5 px-6 py-3 rounded-lg border border-white/10">
                <span className="text-white font-semibold">English</span>
                <span className="text-gray-400 text-sm ml-2">- Fluent</span>
              </div>
              <div className="bg-white/5 px-6 py-3 rounded-lg border border-white/10">
                <span className="text-white font-semibold">Tagalog</span>
                <span className="text-gray-400 text-sm ml-2">- Native</span>
              </div>
              <div className="bg-white/5 px-6 py-3 rounded-lg border border-white/10">
                <span className="text-white font-semibold">Cantonese</span>
                <span className="text-gray-400 text-sm ml-2">- Conversational</span>
              </div>
            </div>
          </section>

          {/* References */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">References</h2>
            <p className="text-gray-300">Available upon request</p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
