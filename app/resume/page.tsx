'use client';

import Link from 'next/link';
import { Download, ArrowLeft } from 'lucide-react';

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200 py-4 print:hidden">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          <button 
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </button>
        </div>
      </div>

      {/* Resume Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white">
          {/* Header */}
          <div className="text-center mb-8 pb-6 border-b-2 border-gray-300">
            <h1 className="text-4xl font-bold mb-2 text-gray-900">JONATHAN PAITA</h1>
            <p className="text-lg text-gray-700 mb-3">Bartender | F&B Operations Manager | Web Developer</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <span>📍 Hong Kong SAR</span>
              <span>•</span>
              <span>📧 jonathan.paita@gmail.com</span>
              <span>•</span>
              <span>📱 +852 6421 3849</span>
            </div>
          </div>

          {/* Professional Summary */}
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-3 text-gray-900 border-b-2 border-cyan-600 pb-1 inline-block">PROFESSIONAL SUMMARY</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Dedicated and experienced Food & Beverage professional with over <strong>15 years</strong> in the hospitality industry, 
              primarily working behind the bar where I have fine-tuned my service skills and mastered the craft for drinks. 
              Originally from the Philippines, now based in Hong Kong. Proven expertise in bartending, mixology, purchasing 
              management, inventory control, administrative operations, graphic design, and team leadership. Successfully 
              scaled operations from just <strong>2 people to 100 employees</strong>, establishing a central kitchen and <strong>3 F&B outlets within 
              1 year</strong>. Combines traditional bartending excellence with modern computer skills including <strong>software engineering</strong> 
              to deliver exceptional customer experiences and operational efficiency.
            </p>
          </section>

          {/* Core Competencies */}
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-3 text-gray-900 border-b-2 border-cyan-600 pb-1 inline-block">CORE COMPETENCIES</h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {[
                'Bartending & Mixology',
                'Customer Service Excellence',
                'Drink Menu Development',
                'Bar Operations Management',
                'Purchasing & Procurement',
                'Inventory Control & Cost Management',
                'Vendor Relations & Negotiations',
                'Team Leadership & Training',
                'Administrative Operations & SOPs',
                'Graphic Design (Adobe Creative Suite)',
                'Cost Control & Budgeting',
                'Quality Assurance & Standards',
                'POS Systems & Technology',
                'Microsoft Office Suite',
                'Software Engineering Knowledge'
              ].map((skill, index) => (
                <div key={index} className="flex items-start gap-2 text-gray-700">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Professional Experience */}
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-3 text-gray-900 border-b-2 border-cyan-600 pb-1 inline-block">PROFESSIONAL EXPERIENCE</h2>
            <div className="space-y-5">
              {/* Experience 1 */}
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Bartender & Operations Manager</h3>
                    <p className="text-gray-700 font-semibold">Multi-Outlet F&B Group</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-700 font-semibold">Hong Kong SAR</p>
                    <p className="text-gray-600">2010 - Present</p>
                  </div>
                </div>
                <ul className="space-y-1.5 text-gray-700 ml-5 list-disc">
                  <li>Primarily work behind the bar, fine-tuning service skills and mastering the craft for drinks with 15+ years of dedicated experience</li>
                  <li>Successfully scaled operations from 2 people to 100 employees within 1 year, demonstrating exceptional growth management</li>
                  <li>Established and managed central kitchen operations serving 3 Food & Beverage retail outlets</li>
                  <li>Oversee purchasing, inventory management, cost control, and vendor relationships across all outlets including head office</li>
                  <li>Manage Standard Operating Procedures (SOPs), administrative operations, scheduling, and quality control</li>
                  <li>Design drink menus, marketing materials, and promotional content using Adobe Creative Suite</li>
                  <li>Lead, train, and mentor bar staff across multiple locations, fostering service excellence</li>
                  <li>Implement cost control measures while maintaining premium quality standards</li>
                  <li>Leverage computer skills and software engineering knowledge to optimize operations and inventory systems</li>
                </ul>
              </div>

              {/* Experience 2 */}
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Barista & Coffee Shop Manager</h3>
                    <p className="text-gray-700 font-semibold">Independent Coffee Shop</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-700 font-semibold">Hong Kong SAR</p>
                    <p className="text-gray-600">2008 - 2010</p>
                  </div>
                </div>
                <ul className="space-y-1.5 text-gray-700 ml-5 list-disc">
                  <li>Launched and managed coffee shop from concept through daily operations</li>
                  <li>Developed expertise in coffee preparation, beverage crafting, and customer service</li>
                  <li>Handled all purchasing, inventory management, and supplier negotiations</li>
                  <li>Created brand identity, marketing materials, and visual designs</li>
                  <li>Managed staff recruitment, training, scheduling, and performance development</li>
                  <li>Maintained quality standards and ensured exceptional customer satisfaction</li>
                </ul>
              </div>

              {/* Experience 3 */}
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">F&B Service Staff</h3>
                    <p className="text-gray-700 font-semibold">Various Hospitality Establishments</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-700 font-semibold">Philippines & HK</p>
                    <p className="text-gray-600">2006 - 2008</p>
                  </div>
                </div>
                <ul className="space-y-1.5 text-gray-700 ml-5 list-disc">
                  <li>Gained foundational Food & Beverage experience in service and operations</li>
                  <li>Developed strong customer service and hospitality skills</li>
                  <li>Learned beverage preparation, bar support, and service techniques</li>
                  <li>Built understanding of inventory management and operational fundamentals</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education & Training */}
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-3 text-gray-900 border-b-2 border-cyan-600 pb-1 inline-block">EDUCATION & TRAINING</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Secondary Education</h3>
                <p className="text-gray-700">Philippines</p>
                <p className="text-sm text-gray-600">Completed secondary education with strong academic foundation</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Computer & Software Courses</h3>
                <p className="text-gray-700 mb-2">Various Institutions | Hong Kong</p>
                <ul className="space-y-1 text-gray-700 ml-5 list-disc text-sm">
                  <li>Software Engineering - Programming fundamentals and development practices</li>
                  <li>Microsoft Office Suite - Word, Excel, PowerPoint (Advanced)</li>
                  <li>Graphic Design - Adobe Photoshop, Adobe Illustrator</li>
                  <li>Digital Marketing & Social Media Management</li>
                  <li>POS Systems & Restaurant Management Software</li>
                  <li>Inventory Management Systems & Database Applications</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Bartending & F&B Certifications</h3>
                <p className="text-gray-700 mb-2">Industry Training</p>
                <ul className="space-y-1 text-gray-700 ml-5 list-disc text-sm">
                  <li>Professional Bartending & Mixology Training</li>
                  <li>Food Safety & Hygiene Certification</li>
                  <li>Barista & Coffee Preparation Techniques</li>
                  <li>Customer Service Excellence</li>
                  <li>Responsible Alcohol Service</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-3 text-gray-900 border-b-2 border-cyan-600 pb-1 inline-block">TECHNICAL SKILLS</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-3">Computer Applications</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 text-sm">Microsoft Office Suite</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-cyan-600"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 text-sm">Adobe Photoshop</span>
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-cyan-600"></div>
                      ))}
                      <div className="w-2 h-2 rounded-full bg-gray-300"></div>
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
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 text-sm">Adobe Illustrator</span>
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-cyan-600"></div>
                      ))}
                      <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-3">Bar & F&B Skills</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 text-sm">Mixology & Cocktails</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-cyan-600"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 text-sm">Customer Service</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-cyan-600"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 text-sm">Inventory Management</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-cyan-600"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Languages */}
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-3 text-gray-900 border-b-2 border-cyan-600 pb-1 inline-block">LANGUAGES</h2>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-gray-100 rounded-lg border border-gray-300">
                <span className="text-gray-900 font-semibold">English</span>
                <span className="text-gray-600 text-sm ml-2">- Fluent</span>
              </div>
              <div className="px-4 py-2 bg-gray-100 rounded-lg border border-gray-300">
                <span className="text-gray-900 font-semibold">Tagalog</span>
                <span className="text-gray-600 text-sm ml-2">- Native</span>
              </div>
              <div className="px-4 py-2 bg-gray-100 rounded-lg border border-gray-300">
                <span className="text-gray-900 font-semibold">Cantonese</span>
                <span className="text-gray-600 text-sm ml-2">- Conversational</span>
              </div>
            </div>
          </section>

          {/* References */}
          <section>
            <h2 className="text-xl font-bold mb-3 text-gray-900 border-b-2 border-cyan-600 pb-1 inline-block">REFERENCES</h2>
            <p className="text-gray-700">Available upon request</p>
          </section>
        </div>
      </div>
    </div>
  );
}
