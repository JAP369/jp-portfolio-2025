"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ResumePage() {
  const technicalSkills = [
    { skill: "Bartending & Mixology", level: 80 },
    { skill: "Product Sourcing & Procurement", level: 70 },
    { skill: "Warehouse & Logistics Management", level: 70 },
    { skill: "Inventory & Database Management", level: 80 },
    { skill: "Graphic Design (Logo, Menu, Business Card)", level: 70 },
    { skill: "Adobe Photoshop (Photo Manipulation)", level: 60 },
    { skill: "Adobe Illustrator (Vector Design)", level: 70 },
    { skill: "Microsoft Office (Word, Excel & PowerPoint)", level: 80 },
    { skill: "Web Design - Front-End Development", level: 80 },
    { skill: "Database - Back-End Development", level: 50 },
    { skill: "Autodesk Maya (3D Animation)", level: 60 },
  ];

  const languages = [
    { language: "Tagalog (Speaking & Writing)", level: 90 },
    { language: "English (Speaking & Writing)", level: 80 },
    { language: "Cantonese (Speaking)", level: 10 },
  ];

  return (
    <div className='min-h-screen bg-[#020617] text-white'>
      {/* Header */}
      <div className='border-b border-white/10 py-6'>
        <div className='max-w-4xl mx-auto px-6 flex justify-between items-center'>
          <Link
            href='/'
            className='text-cyan-400 hover:text-cyan-300 transition-colors'
          >
            ← Back to Portfolio
          </Link>
          <button
            onClick={() => window.print()}
            className='px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/50 rounded-lg transition-colors'
          >
            Print Resume
          </button>
        </div>
      </div>

      {/* Resume Content */}
      <div className='max-w-4xl mx-auto px-6 py-12'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 space-y-8'
        >
          {/* Header */}
          <div className='text-center border-b border-white/10 pb-8'>
            <h1 className='text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
              Jonathan Austria Paita
            </h1>
            <div className='flex flex-wrap justify-center gap-2 text-sm text-gray-400 mb-3'>
              <span>
                📍 4A, Tak Fung House, 1-3 Morrison Hill Road, Wan Chai, Hong
                Kong
              </span>
            </div>
            <div className='flex flex-wrap justify-center gap-4 text-sm text-gray-400'>
              <span>📧 jon89ap@gmail.com</span>
              <span>📱 +852 9760 2612</span>
            </div>
          </div>

          {/* Objective */}
          <section>
            <h2 className='text-2xl font-bold mb-4 text-cyan-400'>Objective</h2>
            <p className='text-gray-300 leading-relaxed'>
              To obtain a challenging leadership position applying creative
              problem-solving and lean management skills with a growing company
              to achieve optimum utilisation of resources and maximum profits.
            </p>
          </section>

          {/* Skills & Acknowledgements */}
          <section>
            <h2 className='text-2xl font-bold mb-4 text-cyan-400'>
              Skills & Acknowledgements
            </h2>
            <div className='grid md:grid-cols-2 gap-3'>
              {[
                "Motivation and problem-solving skills",
                "Works well as a team member or independently",
                "Resourceful, energetic, competent, multi-tasking, and results-oriented",
                "Good communication and presentation skills",
                "Highly self-motivated",
                "Absolute service to guests/customers",
                "Team player",
                "Innovative approach to overcoming obstacles",
              ].map((skill, index) => (
                <div key={index} className='flex items-center gap-2'>
                  <span className='text-cyan-400'>▸</span>
                  <span className='text-gray-300'>{skill}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Skills */}
          <section>
            <h2 className='text-2xl font-bold mb-4 text-cyan-400'>
              Technical Skills
            </h2>
            <div className='space-y-3'>
              {technicalSkills.map((item, index) => (
                <div key={index}>
                  <div className='flex justify-between mb-1 text-sm'>
                    <span className='text-gray-300'>{item.skill}</span>
                    <span className='text-cyan-400'>{item.level}%</span>
                  </div>
                  <div className='w-full bg-gray-700 rounded-full h-2'>
                    <div
                      className='bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all duration-1000'
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Work Experience */}
          <section>
            <h2 className='text-2xl font-bold mb-4 text-cyan-400'>
              Work Experience
            </h2>
            <div className='space-y-6'>
              {/* Dragon-i */}
              <div className='border-l-2 border-cyan-500/50 pl-6'>
                <h3 className='text-xl font-semibold text-white'>
                  Assistant Bar Manager
                </h3>
                <p className='text-gray-400 mb-2'>
                  Dragon-I, Wyndham St., Central
                </p>
                <p className='text-sm text-gray-500 mb-3'>
                  November 2022 - November 2025
                </p>
                <p className='text-gray-300 leading-relaxed'>
                  As Assistant Bar Manager at one of Hong Kong's pioneering
                  nightclubs—established in 2002 and a prestigious venue for
                  over two decades hosting international celebrities like David
                  Beckham, Michelle Yeoh, and LeBron James, along with athletes
                  and iconic performers such as Snoop Dogg and Dr. Dre—I oversaw
                  seamless operations across three bar stations, ensuring they
                  were fully stocked, equipped, and ready for high-volume
                  service. I managed staff delegation, training, and roster
                  creation to optimize team performance; handled cashier
                  responsibilities, including cash reconciliation and closing
                  reports; and maintained the POS system by adding items and
                  updating menus. Additionally, I developed innovative cocktails
                  for both in-house use and external events outside the venue,
                  conducted regular beverage stock-takes, ordered products to
                  streamline supply chains and control costs, and inputted
                  invoices into the inventory system. My contributions extended
                  to actively supporting corporate events, international DJ
                  parties, pop-ups, and promotions to drive engagement and
                  revenue.
                </p>
              </div>

              {/* The Big Things Kitchen */}
              <div className='border-l-2 border-cyan-500/50 pl-6'>
                <h3 className='text-xl font-semibold text-white'>
                  Purchasing & Beverage Manager
                </h3>
                <p className='text-gray-400 mb-2'>
                  The Big Things Kitchen, Wong Chuk Hang, Aberdeen
                </p>
                <p className='text-sm text-gray-500 mb-3'>
                  July 2021 - March 2022
                </p>
                <p className='text-gray-300 leading-relaxed'>
                  Recruited for a head office role in central management as
                  Purchasing & Beverage Manager, directly reporting to the
                  Director of Operations, I directed daily restaurant
                  operations, encompassing group-wide inventory management,
                  regular stock-takes, and spot checks across multiple outlets
                  to ensure accuracy and efficiency. I spearheaded comprehensive
                  purchasing strategies, including product logistics
                  coordination, expenditure scheduling, purchasing calendar
                  development, determination of optimal inventory levels and
                  delivery timings for food and beverage items, procurement of
                  dry, frozen, and fresh produce, beverages, office supplies,
                  equipment, and maintenance components, while fostering robust
                  systems for product and recipe costings, vendor and market
                  lists, data entry, and detailed reporting to senior operations
                  leadership—incorporating invoices, inventory, stocktake lists,
                  wastage, and staff meals for end-of-month submissions.
                </p>
                <br />
                <p>
                  mphasizing high-quality sourcing from farms, markets, and
                  frozen suppliers, I secured all necessary certifications and
                  licenses, implemented a daily production board system to
                  streamline inventory oversight, ordering, forecasting, and
                  cost control, built strong vendor relationships to stay
                  updated on market prices and track product costs, initiated
                  corrective actions to minimize waste and expenditures,
                  inspected products to meet quality standards, monitored
                  production operations for conformance to company
                  specifications, and engaged in packing goods for each outlet.
                  Additionally, I proactively addressed customer feedback,
                  quality standards, and service gaps to enhance satisfaction
                  through strategic logistics management, and handled graphic
                  design for marketing purposes and product packaging materials.
                </p>
              </div>

              {/* Freeze Lounge */}
              <div className='border-l-2 border-cyan-500/50 pl-6'>
                <h3 className='text-xl font-semibold text-white'>
                  Lounge Manager
                </h3>
                <p className='text-gray-400 mb-2'>
                  Freeze Lounge, SOHO, Central
                </p>
                <p className='text-sm text-gray-500 mb-3'>
                  November 2020 - June 2021
                </p>
                <p className='text-gray-300 leading-relaxed'>
                  As Purchasing & Beverage Manager, I directed daily restaurant
                  operations, encompassing group-wide inventory management,
                  regular stock-takes, and spot checks across multiple outlets
                  to ensure accuracy and efficiency. I spearheaded comprehensive
                  purchasing strategies, including product logistics
                  coordination, expenditure scheduling, purchasing calendar
                  development, and determination of optimal inventory levels for
                  food and beverage items, while fostering robust systems for
                  product and recipe costings, vendor and market lists, data
                  entry, and detailed reporting to senior operations leadership.
                  Emphasizing high-quality sourcing from farms, markets, and
                  frozen suppliers, I secured all necessary certifications and
                  licenses, implemented a daily production board system to
                  streamline inventory oversight, ordering, forecasting, and
                  cost control, and proactively addressed customer feedback,
                  quality standards, and service gaps to enhance satisfaction
                  and minimize expenditures through strong vendor relationships
                  and strategic logistics management.
                </p>
                <br />
                <p>
                  General cost control, inventory and stock management. Refined
                  inventory by clearing up unwanted bottles and ingredients and
                  pushing it out as promotional products. Manage all
                  controllable costs to keep operations profitable. Purchasing
                  of general stocks and ensuring good relationship with vendors.
                  Handling company's sales, settling and finalising the closing
                  and liability report.
                </p>
                <br />
                <p>
                  Taking reservations, recording of guest's database and
                  organising private events. Maintain awareness of market trends
                  in the hookah shisha industry, understanding forthcoming
                  customer initiatives and monitoring what local competitors are
                  doing. Taken photos videos of products, establishment to
                  generate content for social media marketing and promotion.
                  Collaborated with neighbouring restaurant to supplement for
                  food to provide to guests.
                </p>
                <br />
                <p></p>
              </div>

              {/* Lobster Bar & Grill */}
              <div className='border-l-2 border-cyan-500/50 pl-6'>
                <h3 className='text-xl font-semibold text-white'>
                  Bar Service Associate
                </h3>
                <p className='text-gray-400 mb-2'>
                  Lobster Bar & Grill Island Shangri-La, Admiralty
                </p>
                <p className='text-sm text-gray-500 mb-3'>
                  October 2018 - June 2020
                </p>
                <p className='text-gray-300 leading-relaxed'>
                  At the hotel's sole bar and restaurant, recognized among
                  Asia's top 50 bars, I collaborated with other mixologists to
                  demonstrate expertise in crafting classic and signature
                  cocktails and mixed drinks using premium ingredients, ranging
                  from simple to intricate recipes inspired by vintage styles,
                  while contributing to menu development across various mixology
                  eras. I managed daily operations, including setting up and
                  closing the bar establishment, ensuring stringent hygiene
                  standards, overseeing bar inventory management, and ordering
                  beverage and food stocks. Committed to delivering exceptional
                  hospitality and services to guests, I promptly addressed
                  complaints and needs, maintained bar safety and cleanliness,
                  and upheld compliance with health regulations, all while
                  balancing attention to co-workers and operational efficiency.
                </p>
              </div>

              {/* Jamaty - 12 Noon */}
              <div className='border-l-2 border-cyan-500/50 pl-6'>
                <h3 className='text-xl font-semibold text-white'>
                  Purchasing Officer & Beverage Manager
                </h3>
                <p className='text-gray-400 mb-2'>
                  12 Noon (Jamaty Limited), Wong Chuk Hang, Aberdeen
                </p>
                <p className='text-sm text-gray-500 mb-3'>
                  August 2016 - May 2018
                </p>
                <p className='text-gray-300 leading-relaxed'>
                  Engaged in establishing a central kitchen, office, warehouse
                  and retail stores from scratch. Ensure all certifications and
                  licenses are obtained as required. Developed a production
                  board system to apply and manage in a daily basis which
                  contains general inventory management, product and recipe
                  costings, vendors and market lists, ordering and forecasting
                  items in demand. Analyse variances, initiate corrective
                  actions to avoid waste and limit costs.
                </p>
                <br />
                <p>
                  Maintained inventory by implementing purchasing plans and
                  staying in contact and building good relationship with vendors
                  and shippers. Product logistics management, scheduling
                  expenditures, purchasing calendar and determining timing of
                  all deliveries. Procuring and purchasing of dry and fresh
                  produce, beverages, office supplies, tools, equipments,
                  maintenance components. Sourcing of printing and packaging
                  manufacturers for product labels, biodegradable food beverages
                  packaging materials, marketing campaigns.
                </p>
                <br />
                <p>
                  Responsible for various sized of customised PET bottles,
                  generating barcodes, nutritional product labels, packaging
                  designs and assigning production expiry dates. Designed and
                  developed non-alcoholic and alcoholic mixed beverages with
                  cold pressed juices and healthier ingredients for retail, b2b,
                  marketing and events. Supervision and staff training of
                  kitchen and beverage department, ensuring an efficient and
                  productive central kitchen production flow from preparation to
                  dispatching of finished products.
                </p>
              </div>

              {/* Hei House */}
              <div className='border-l-2 border-cyan-500/50 pl-6'>
                <h3 className='text-xl font-semibold text-white'>
                  Bar Supervisor
                </h3>
                <p className='text-gray-400 mb-2'>
                  Hei House, Lee Tung Avenue, Wan Chai
                </p>
                <p className='text-sm text-gray-500 mb-3'>
                  May 2016 - August 2016
                </p>
                <p className='text-gray-300 leading-relaxed'>
                  At a Malaysian and Southeast Asian fusion two-storey
                  restaurant operating in the heart of Lee Tung Avenue, I led a
                  team of bartenders in managing two bar stations, implementing
                  and organizing service enhancements to optimize efficiency. I
                  identified operational challenges and proposed targeted
                  solutions to improve performance. I developed innovative
                  Southeast Asian-inspired non-alcoholic and alcoholic mixed
                  beverages designed to complement the cuisine offerings.
                  Furthermore, I managed stock ordering for sales, maintained
                  accurate inventory levels, conducted daily and weekly data
                  entry for inventory and purchases, prepared closing reports
                  for bar sales, balanced cash receipts, and strictly followed
                  all cash handling policies and procedures.
                </p>
              </div>

              {/* Mr & Mrs Fox */}
              <div className='border-l-2 border-cyan-500/50 pl-6'>
                <h3 className='text-xl font-semibold text-white'>
                  Senior Bartender
                </h3>
                <p className='text-gray-400 mb-2'>
                  Mr & Mrs Fox, Swire Hotels, Quarry Bay
                </p>
                <p className='text-sm text-gray-500 mb-3'>
                  August 2015 - May 2016
                </p>
                <p className='text-gray-300 leading-relaxed'>
                  At one of the newest outlets under the Swire Hospitality
                  department—a well-themed three-storey bar and restaurant
                  located in the new SOHO of the east—I was trained and
                  consulted by Old Street Group, Asia's longest-standing
                  in-market bar and brand specialist, while collaborating with a
                  team of professional mixologists. I honed high-level skills in
                  mixing, garnishing, and serving drinks using only the finest
                  brands and quality ingredients, including preparing in-house
                  syrups, purees, garnishes, and other homemade components. I
                  operated two main bar stations, one specializing in coffee,
                  mixed drinks, and craft beers. Additionally, the venue was
                  featured in Pernod Ricard's Bar Stars program to showcase the
                  new bar in town.
                </p>
              </div>

              {/* Catalunya */}
              <div className='border-l-2 border-cyan-500/50 pl-6'>
                <h3 className='text-xl font-semibold text-white'>
                  Head Bartender
                </h3>
                <p className='text-gray-400 mb-2'>
                  Catalunya (Hong Kong), Wan Chai
                </p>
                <p className='text-sm text-gray-500 mb-3'>
                  May 2013 - May 2015
                </p>
                <p className='text-gray-300 leading-relaxed'>
                  As part of the opening team at a restaurant specializing in
                  high-end Catalan and Spanish cuisines, I contributed as a
                  bartender focused on crafting Spanish-inspired cocktails,
                  mocktails, and a variety of gin and tonic styles. I was
                  managed and trained by a couple of Spanish mixologists
                  alongside a group of talented bartenders, where I learned and
                  adopted unconventional bartending techniques and molecular
                  mixology incorporating unusual ingredients, tools, and
                  equipment. Through cross-training, I also served as a food
                  runner and server, enhancing my ability to respond to
                  additional patron requirements by inquiring about their needs
                  and observing the dining process to ensure exceptional
                  service.
                </p>
              </div>

              {/* Staunton's */}
              <div className='border-l-2 border-cyan-500/50 pl-6'>
                <h3 className='text-xl font-semibold text-white'>Bartender</h3>
                <p className='text-gray-400 mb-2'>
                  Staunton's Wine Bar & Cafe, SOHO, Central
                </p>
                <p className='text-sm text-gray-500 mb-3'>
                  March 2012 - April 2013
                </p>
                <p className='text-gray-300 leading-relaxed'>
                  In this bartending role at a bar and wine cafe featuring a
                  wide collection of wines, I created and served cocktails and
                  various drinks to patrons, operated the coffee machine, and
                  provided breakfast, lunch, and dinner selections throughout
                  the day. I maintained bar operations, ensured customer
                  satisfaction, and delivered efficient service in a dynamic
                  environment.
                </p>
              </div>
            </div>
          </section>

          {/* Part-Time Work Experience */}
          <section>
            <h2 className='text-2xl font-bold mb-4 text-cyan-400'>
              Part-Time Work Experience
            </h2>
            <div className='grid md:grid-cols-2 gap-3'>
              {[
                "Bartender - The Trilogy, Central (November 2025 - Present)",
                "Bartender & Cashier - H.ER, Central (October 2025 - Present)",
                "Bartender - Cassio Social Club, Central (May 2022 - Nov 2023)",
                "Store Assistant - Ginsanity, Sai Ying Pun (April 2022 - November 2023)",
                "Store Assistant - Tramline Liquor, Wan Chai (March 2022 - November 2023)",
                "Bartender - Bourbon St., Soho Central (June 2019 - Dec 2019)",
                "Bartender, Server - Trafalgar English Pub, Wan Chai (Feb 2011 - Apr 2011)",
                "Bartender & Server - Kupfer, Wan Chai (Aug 2019 - Dec 2019)",
                "Bar-back & Server - VIP, Central (Feb 2008 - Apr 2008)",
                "Server - Viceroy Restaurant, Wan Chai (June 2007 - July 2007)",
                "Sales Promoter - Various locations (Apr 2001 - Jan 2008)",
              ].map((exp, index) => (
                <div key={index} className='flex items-start gap-2'>
                  <span className='text-cyan-400 mt-1'>•</span>
                  <span className='text-gray-300 text-sm'>{exp}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className='text-2xl font-bold mb-4 text-cyan-400'>Education</h2>
            <div className='space-y-4'>
              <div>
                <h3 className='text-lg font-semibold text-white'>
                  Full-Time Software Engineering Course
                </h3>
                <p className='text-gray-400'>Accelerate Hong Kong</p>
                <p className='text-sm text-gray-500'>
                  May 2018 - September 2018
                </p>
              </div>
              <div>
                <h3 className='text-lg font-semibold text-white'>
                  Bachelor of Science in Information Technology
                </h3>
                <p className='text-gray-400'>
                  Informatics Computer Institute, Manila, Philippines
                </p>
                <p className='text-sm text-gray-500'>June 2008 - 2010</p>
              </div>
              <div>
                <h3 className='text-lg font-semibold text-white'>
                  Certified 3D Animation & Design Program
                </h3>
                <p className='text-gray-400'>
                  First Academy of Computer Arts, Manila, Philippines
                </p>
                <p className='text-sm text-gray-500'>
                  July 2007 - November 2007
                </p>
              </div>
              <div>
                <h3 className='text-lg font-semibold text-white'>
                  Secondary School
                </h3>
                <p className='text-gray-400'>
                  Della Memorial School (Hip Wo), Hong Kong
                </p>
                <p className='text-sm text-gray-500'>
                  September 2002 - May 2007
                </p>
              </div>
              <div>
                <h3 className='text-lg font-semibold text-white'>
                  Primary School
                </h3>
                <p className='text-gray-400'>
                  Sir Ellis Kadoorie School, Hong Kong
                </p>
                <p className='text-sm text-gray-500'>
                  September 2000 - July 2002
                </p>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className='text-2xl font-bold mb-4 text-cyan-400'>
              Certifications
            </h2>
            <div className='grid md:grid-cols-2 gap-2'>
              {[
                "Accelerate Software Engineering Certification (2018)",
                "Programming Hub: HTML - Certification of Excellence",
                "Programming Hub: JavaScript - Certification of Excellence",
                "Programming Hub: Git - Certification of Excellence",
                "Jerry Global - Beverage & Hospitality Certification Program (2020)",
                "Grapea & Co. Wine E-Learning (2020)",
                "Champagne Taittinger Masterclass (2016)",
                "Grand Marnier Masterclass (2015)",
                "ExcelWithBusiness Web Design (2013)",
                "Global Leadership College Music & Digital Arts (2014)",
                "BOLS Bartending Academy (2012)",
                "Carlsberg Beer Academy (2012)",
                "Erdington (Hong Kong) Scotch whisky Training (2012)",
                "PC Networking & Windows 200 Server Administration (2009)",
              ].map((cert, index) => (
                <div key={index} className='flex items-start gap-2'>
                  <span className='text-cyan-400 mt-1'>•</span>
                  <span className='text-gray-300 text-sm'>{cert}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section>
            <h2 className='text-2xl font-bold mb-4 text-cyan-400'>Languages</h2>
            <div className='space-y-3'>
              {languages.map((item, index) => (
                <div key={index}>
                  <div className='flex justify-between mb-1 text-sm'>
                    <span className='text-gray-300'>{item.language}</span>
                    <span className='text-cyan-400'>{item.level}%</span>
                  </div>
                  <div className='w-full bg-gray-700 rounded-full h-2'>
                    <div
                      className='bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all duration-1000'
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
