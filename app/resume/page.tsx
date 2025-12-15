'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ResumePage() {
  const technicalSkills = [
    { skill: 'Bartending & Mixology', level: 90 },
    { skill: 'Product Sourcing & Procurement', level: 80 },
    { skill: 'Warehouse & Logistics Management', level: 80 },
    { skill: 'Inventory & Database Management', level: 95 },
    { skill: 'Graphic Design (Logo, Menu, Business Card)', level: 80 },
    { skill: 'Adobe Photoshop (Photo Manipulation)', level: 90 },
    { skill: 'Adobe Illustrator (Vector Design)', level: 80 },
    { skill: 'Microsoft Office (Word, Excel & PowerPoint)', level: 95 },
    { skill: 'Web Design - Front-End Development', level: 80 },
    { skill: 'Database - Back-End Development', level: 75 },
    { skill: 'Autodesk Maya (3D Animation)', level: 70 },
  ];

  const languages = [
    { language: 'Tagalog (Speaking)', level: 90 },
    { language: 'English (Speaking)', level: 85 },
    { language: 'Cantonese (Speaking)', level: 20 },
  ];

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
              Jonathan Austria Paita
            </h1>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-400 mb-3">
              <span>📍 4A, Tak Fung House, 1-3 Morrison Hill Road, Wan Chai, Hong Kong</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span>📧 jon89ap@gmail.com</span>
              <span>📱 +852 9760 2612</span>
            </div>
          </div>

          {/* Objective */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Objective</h2>
            <p className="text-gray-300 leading-relaxed">
              To obtain a challenging leadership position applying creative problem-solving and lean management skills with a growing company to achieve optimum utilisation of resources and maximum profits.
            </p>
          </section>

          {/* Skills & Acknowledgements */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Skills & Acknowledgements</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Motivation and problem-solving skills',
                'Works well as a team member or independently',
                'Resourceful, energetic, competent, multi-tasking, and results-oriented',
                'Good communication and presentation skills',
                'Highly self-motivated',
                'Absolute service to guests/customers',
                'Team player',
                'Innovative approach to overcoming obstacles'
              ].map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-cyan-400">▸</span>
                  <span className="text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Skills */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Technical Skills</h2>
            <div className="space-y-3">
              {technicalSkills.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1 text-sm">
                    <span className="text-gray-300">{item.skill}</span>
                    <span className="text-cyan-400">{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Work Experience */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Work Experience</h2>
            <div className="space-y-6">
              {/* Dragon-i */}
              <div className="border-l-2 border-cyan-500/50 pl-6">
                <h3 className="text-xl font-semibold text-white">Assistant Bar Manager</h3>
                <p className="text-gray-400 mb-2">Dragon-I, Central</p>
                <p className="text-sm text-gray-500 mb-3">November 2002 - November 2025</p>
                <p className="text-gray-300 leading-relaxed">
                  In this long-term role at one of Hong Kong's pioneering nightclubs, which opened in 2002 and has been a prestigious venue for 23 years, I maintained three bar sections while overseeing staff delegation, training, and roster management to ensure seamless operations. The club has hosted international celebrities such as David Beckham, Michelle Yeoh, and LeBron James, as well as athletes, and featured performances by music artists and icons including Snoop Dogg and Dr. Dre. I conducted regular beverage stock-takes, developed innovative cocktails and menus to enhance offerings, and handled purchasing to optimise supply chains and costs. Additionally, I managed closing reports, including cash reconciliation, and actively participated in numerous corporate events, international DJ parties, pop-ups, and other promotions to boost engagement and revenue.
                </p>
              </div>

              {/* The Big Things Kitchen */}
              <div className="border-l-2 border-cyan-500/50 pl-6">
                <h3 className="text-xl font-semibold text-white">Purchasing & Beverage Manager</h3>
                <p className="text-gray-400 mb-2">The Big Things Kitchen, Wong Chuk Hang, Aberdeen</p>
                <p className="text-sm text-gray-500 mb-3">July 2021 - March 2022</p>
                <p className="text-gray-300 leading-relaxed">
                  As Purchasing & Beverage Manager, I oversaw day-to-day restaurant operations, including group-wide inventory management, regular stock-takes, and spot checks across outlets. I implemented comprehensive purchasing plans, managed product logistics, scheduled expenditures, developed purchasing calendars, and determined optimal inventory levels for food and beverage products to maintain effective control. Building robust inventory systems involved product and recipe costings, vendor and market lists, data input, and reporting to the head of operations, while ensuring product quality met standards and addressing any service gaps for customer satisfaction.
                </p>
              </div>

              {/* Freeze Lounge */}
              <div className="border-l-2 border-cyan-500/50 pl-6">
                <h3 className="text-xl font-semibold text-white">Lounge Manager</h3>
                <p className="text-gray-400 mb-2">Freeze Lounge, SOHO, Central</p>
                <p className="text-sm text-gray-500 mb-3">November 2020 - June 2021</p>
                <p className="text-gray-300 leading-relaxed">
                  In my role as Lounge Manager, I handled employee hiring, interviews, training, and the development of SOP manuals to standardise operations. I managed staff rosters, payroll, hygiene, and cleanliness across the kitchen, dining, and bar areas, while monitoring stock levels and organising service improvements for greater efficiency. I created online menus and managed social media accounts to promote the restaurant, handled daily cash float counts, petty cash settlements, and closing reports, and implemented cost controls through inventory management and stock refinement by promoting unwanted items.
                </p>
              </div>

              {/* Lobster Bar & Grill */}
              <div className="border-l-2 border-cyan-500/50 pl-6">
                <h3 className="text-xl font-semibold text-white">Bar Operations & Service</h3>
                <p className="text-gray-400 mb-2">Lobster Bar & Grill Island Shangri-La, Admiralty</p>
                <p className="text-sm text-gray-500 mb-3">October 2018 - June 2020</p>
                <p className="text-gray-300 leading-relaxed">
                  Serving as second-in-command in a team of 50 staff members, I collaborated with sommeliers and demonstrated expertise in creating classic and signature mixed drinks using high-quality ingredients, from simple to complex recipes, drawing inspiration from vintage cocktails to develop menus representing various mixology eras. I delivered high-quality hospitality, promptly addressing patron complaints and needs, while ensuring bar safety, cleanliness, event oversight, and compliance with health regulations without compromising attention to co-workers or operational efficiency.
                </p>
              </div>

              {/* 2 Noon */}
              <div className="border-l-2 border-cyan-500/50 pl-6">
                <h3 className="text-xl font-semibold text-white">Purchasing Officer & Beverage Manager</h3>
                <p className="text-gray-400 mb-2">2 Noon (Luncheon) Limited, Wong Chuk Hang, Aberdeen</p>
                <p className="text-sm text-gray-500 mb-3">August 2018 - May 2019</p>
                <p className="text-gray-300 leading-relaxed">
                  Focusing on sourcing high-quality products from farms, markets, and frozen suppliers, I ensured all certifications and licenses were obtained while developing a daily production board system for inventory management, product and recipe costings, vendor lists, ordering, and forecasting. I handled customer feedback, monitored quality standards, and controlled costs, maintaining inventory through purchasing plans, strong vendor relationships, logistics management, expenditure scheduling, and inventory determination for food and beverages.
                </p>
              </div>

              {/* Hot House */}
              <div className="border-l-2 border-cyan-500/50 pl-6">
                <h3 className="text-xl font-semibold text-white">Bar Supervisor</h3>
                <p className="text-gray-400 mb-2">Hot House, Lee Tung Avenue, Wan Chai</p>
                <p className="text-sm text-gray-500 mb-3">May 2016 - August 2016</p>
                <p className="text-gray-300 leading-relaxed">
                  Leading a team of bartenders in operating two bar stations, I implemented service improvements to enhance efficiency, ensured the bar remained clean and hygienic, and developed consistent clean-up, maintenance, and streamlined procedures to complement the food served. I ordered stocks for sales, maintained inventory with daily data entry for purchases, secured closing reports for bar sales, balanced cash receipts, and adhered to all cash handling policies and procedures.
                </p>
              </div>

              {/* Mr & Mrs Fox */}
              <div className="border-l-2 border-cyan-500/50 pl-6">
                <h3 className="text-xl font-semibold text-white">Senior Bartender</h3>
                <p className="text-gray-400 mb-2">Mr & Mrs Fox, Swire Hotel, Quarry Bay</p>
                <p className="text-sm text-gray-500 mb-3">August 2015 - May 2016</p>
                <p className="text-gray-300 leading-relaxed">
                  Trained by the Old Street Group as a long-standing bar and brand specialist, I collaborated with professional mixologists, excelling in mixing, garnishing, and serving drinks using premium brands and ingredients. I built a strong clientele through social networks, supervised two main bar stations—one focused on coffee, mixed drinks, and craft beers—and was featured in "Story by Pernod Ricard 2015" to showcase the new bar.
                </p>
              </div>

              {/* Catalunya */}
              <div className="border-l-2 border-cyan-500/50 pl-6">
                <h3 className="text-xl font-semibold text-white">Head Bartender</h3>
                <p className="text-gray-400 mb-2">Catalunya (Hong Kong), Wan Chai</p>
                <p className="text-sm text-gray-500 mb-3">May 2013 - May 2015</p>
                <p className="text-gray-300 leading-relaxed">
                  As part of the opening team specialising in Spanish-inspired cocktails, mocktails, and gin and tonic varieties, I was managed and trained by Spanish mixologists alongside talented bartenders, learning advanced techniques for mixing, pouring, and shaking. I created and implemented new cocktails and equipment, and responded to patron needs by inquiring and observing the dining process to enhance service.
                </p>
              </div>

              {/* Staunton's */}
              <div className="border-l-2 border-cyan-500/50 pl-6">
                <h3 className="text-xl font-semibold text-white">Bartender</h3>
                <p className="text-gray-400 mb-2">Staunton's Wine Bar & Cafe, SOHO, Central</p>
                <p className="text-sm text-gray-500 mb-3">March 2012 - April 2013</p>
                <p className="text-gray-300 leading-relaxed">
                  In this bartending role, I provided mixing and serving of drinks to patrons, maintained bar operations, ensured customer satisfaction, and delivered efficient service in a dynamic environment.
                </p>
              </div>
            </div>
          </section>

          {/* Part-Time Work Experience */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Part-Time Work Experience</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Bartender - Cassio Social Club, Central (May 2022 - Nov 2023)',
                'Store Assistant - Ginsanity, Sai Ying Pun (April 2022 - Present)',
                'Store Assistant - Tramline Liquor, Wan Chai (March 2022 - Present)',
                'Bartender - Bourbon St., Soho Central (June 2019 - Dec 2019)',
                'Bartender, Server - Trafalgar English Pub, Wan Chai (Feb 2011 - Apr 2011)',
                'Bartender & Server - Kupfer, Wan Chai (Aug 2019 - Dec 2019)',
                'Bar-back & Server - VIP, Central (Feb 2008 - Apr 2008)',
                'Server - Viceroy Restaurant, Wan Chai (June 2007 - July 2007)',
                'Sales Promoter - Various locations (Apr 2001 - Jan 2008)'
              ].map((exp, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span className="text-gray-300 text-sm">{exp}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white">Full-Time Software Engineering Course</h3>
                <p className="text-gray-400">Accelerate Hong Kong</p>
                <p className="text-sm text-gray-500">May 2018 - September 2018</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Bachelor of Science in Information Technology</h3>
                <p className="text-gray-400">Informatics Computer Institute, Manila, Philippines</p>
                <p className="text-sm text-gray-500">June 2008 - 2010</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Certified 3D Animation & Design Program</h3>
                <p className="text-gray-400">First Academy of Computer Arts, Manila, Philippines</p>
                <p className="text-sm text-gray-500">July 2007 - November 2007</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Secondary School</h3>
                <p className="text-gray-400">Della Memorial School (Hip Wo), Hong Kong</p>
                <p className="text-sm text-gray-500">September 2002 - May 2007</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Primary School</h3>
                <p className="text-gray-400">Sir Ellis Kadoorie School, Hong Kong</p>
                <p className="text-sm text-gray-500">September 2000 - July 2002</p>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Certifications</h2>
            <div className="grid md:grid-cols-2 gap-2">
              {[
                'Accelerate Software Engineering Certification (2018)',
                'Programming Hub: HTML - Certification of Excellence',
                'Programming Hub: JavaScript - Certification of Excellence',
                'Programming Hub: Git - Certification of Excellence',
                'Jerry Global - Beverage & Hospitality Certification Program (2020)',
                'Grapea & Co. Wine E-Learning (2020)',
                'Champagne Taittinger Masterclass (2016)',
                'Grand Marnier Masterclass (2015)',
                'ExcelWithBusiness Web Design (2013)',
                'Global Leadership College Music & Digital Arts (2014)',
                'BOLS Bartending Academy (2012)',
                'Carlsberg Beer Academy (2012)',
                'Erdington (Hong Kong) Scotch whisky Training (2012)',
                'PC Networking & Windows 200 Server Administration (2009)'
              ].map((cert, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span className="text-gray-300 text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Languages</h2>
            <div className="space-y-3">
              {languages.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1 text-sm">
                    <span className="text-gray-300">{item.language}</span>
                    <span className="text-cyan-400">{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
