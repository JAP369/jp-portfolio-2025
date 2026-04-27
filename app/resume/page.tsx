"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Download,
  Printer,
  MapPin,
  Phone,
  Mail,
  Github,
  Briefcase,
  Calendar,
} from "lucide-react";

const partTimeJobs = [
  {
    title: "BARTENDER & CASHIER",
    company: "H.ER",
    location: "Central",
    period: "November 2025 – Present",
  },
  {
    title: "BARTENDER",
    company: "The Trilogy",
    location: "Central",
    period: "October 2025 – March 2026",
  },
  {
    title: "BARTENDER",
    company: "Cassio Social Club",
    location: "Central",
    period: "May 2022 – October 2022",
  },
  {
    title: "STORE ASSISTANT",
    company: "Ginsanity",
    location: "Sai Ying Pun",
    period: "April 2022 – June 2022",
  },
  {
    title: "STORE ASSISTANT",
    company: "Tramline Liqour",
    location: "Wan Chai",
    period: "March 2022 – June 2022",
  },
  {
    title: "BARTENDER",
    company: "Bourbon St.",
    location: "SOHO, Central",
    period: "June – December 2011",
  },
  {
    title: "BARTENDER, CASHIER & SERVER",
    company: "Trafalgar English Pub",
    location: "Wan Chai",
    period: "February – April 2011",
  },
  {
    title: "BARTENDER & SERVER",
    company: "Le Jardin Club",
    location: "Central",
    period: "August 2010 – December 2019",
  },
  {
    title: "BARBACK & SERVER",
    company: "Stormies",
    location: "Central",
    period: "March – May 2008",
  },
  {
    title: "SALES PROMOTER",
    company: "V.I.P.",
    location: "Central",
    period: "January 2008 – February 2008",
  },
  {
    title: "SERVER",
    company: "Viceroy Restaurant",
    location: "Wan Chai",
    period: "June 2007 – July 2007",
  },
  {
    title: "SALES PROMOTER",
    company: "Mango Telecom",
    location: "Central",
    period: "June 2006 – August 2006",
  },
  {
    title: "SALES PROMOTER",
    company: "FILGLOBE",
    location: "Central",
    period: "March 2006 – April 2006",
  },
  {
    title: "SALES PROMOTER",
    company: "Smart 1528",
    location: "Central",
    period: "April 2005 – February 2006",
  },
];

const workExperience = [
  {
    company: "Dragon-I",
    location: "Wyndham Street, Central",
    period: "November 2022 – November 2025",
    title: "Assistant Bar Manager",
    bullets: [
      "Managed three bar sections simultaneously with full staff delegation, training and roster oversight",
      "Conducted regular beverage stock-takes; managed purchasing to optimise supply chains and costs",
      "Handled daily closing reports including cash reconciliation and end-of-night audits",
      "Coordinated and participated in corporate events, international DJ nights and promotional pop-ups",
      "Liaised directly with promoters, VIP hosts and event organisers to ensure seamless beverage service delivery",
      "Introduced personalised drink experiences and custom event menus to elevate the guest experience",
      "Update the backend of the POS system with new menu items and price changes.",
      'Coordinate with club promoters to understand guest list density and prepare the bars for specific "waves" of arrivals.',
      'Oversee the large-scale pre-batching of "house" cocktails to ensure flavor consistency across all 3 bars.',
    ],
  },
  {
    company: "The Big Things Kitchen",
    location: "Wong Chuk Hang, Aberdeen",
    period: "July 2021 – March 2022",
    title: "Purchasing & Beverage Manager",
    bullets: [
      "Oversaw group-wide inventory management with regular stock-takes and spot checks across all outlets",
      "Implemented comprehensive purchasing plans, logistics scheduling and optimal inventory level management for F&B",
      "Built inventory systems including product and recipe costings, vendor and market lists, data input and reporting",
      "Managed product quality assurance and service gap analysis to ensure consistent customer satisfaction",
      "Negotiated vendor contracts and coordinated deliveries to align with kitchen production schedules and reduce waste",
      "Established the beverage program for a multi-concept food group spanning multiple bar and dining outlets",
      "Curated wine, spirits and craft beer lists tailored to each outlet's individual concept and price range",
      "Designed cocktail menus incorporating locally sourced and seasonal ingredients for the group's bar outlets",
      "Conducted staff beverage training workshops covering product knowledge, pouring standards and guest recommendation skills",
      "Analysed beverage sales data to identify best-sellers, manage slow-moving inventory and maximise contribution margins",
      "Introduced digital beverage ordering tools and stock management systems to streamline daily operations",
      "Reviewed and updated beverage cost of goods monthly to ensure alignment with group-wide F&B profit targets",
      "Perform monthly stock counts, spot checks, and site visits to ensure inventory accuracy.",
      "Managed relationships with beverage distributors and brand ambassadors to access promotional allocations and tastings",
    ],
  },
  {
    company: "Freeze Lounge",
    location: "SOHO, Central",
    period: "November 2020 – June 2021",
    title: "Lounge Manager",
    bullets: [
      "Recruited, interviewed and trained employees; wrote SOP manuals, managed rosters and payroll",
      "Set up and closed establishment; enforced hygiene standards and government covid compliance measures",
      "Developed online menus, website and QR-accessible declaration forms enabling a fully touchless guest experience",
      "Settled daily cash float counts, petty cash and compiled nightly closing and liability reports",
      "Controlled general costs; refined and promoted slow-moving inventory to maintain profitability",
      "Managed all vendor and purchasing relationships; monitored market trends in the hookah shisha industry",
      "Maintained guest and reservation database; organised private events and collaborated with neighbouring venues",
      "Created photography and video content for social media marketing and brand promotion",
      "Evaluated employees; conducted performance reviews and disciplinary procedures where required",
    ],
  },
  {
    company: "Lobster Bar & Grill – Island Shangri-La",
    location: "Admiralty",
    period: "October 2018 – June 2020",
    title: "Bar Operations Associate",
    bullets: [
      "Contributed to the beverage program at a venue ranked among Asia's 50 Best Bars",
      "Supported cocktail menu development bridging vintage mixology with contemporary innovation using premium ingredients",
      "Upheld elite quality and service standards expected of a globally recognised top-tier bar",
      "Delivered five-star hospitality and prioritised guest satisfaction throughout high-volume service",
      "Enforced health, safety and regulatory compliance; provided meticulous event and operational oversight",
      "Documented prep recipes and mise en place standards to maintain consistency across all shift teams",
      "Assisted senior bartenders during high-profile tasting events, media nights and awards ceremonies",
      "Developed comprehensive knowledge of fine wines, premium spirits and classic cocktail heritage to enrich guest interactions",
      "Collaborated with the kitchen team on food and beverage pairings to enhance the overall dining experience",
    ],
  },
  {
    company: "JBM, 12 Noon (Jamaty Limited)",
    location: "Wong Chuk Hang, Aberdeen",
    period: "August 2016 – May 2018",
    title: "Purchasing Officer & Beverage Manager",
    bullets: [
      "Designed and maintained the full beverage program including cocktails, wines, craft spirits and non-alcoholic options",
      "Monitored beverage sales performance and refined the menu by replacing low-performers with seasonal specials",
      "Control and monitor cash and cheque payment status; coordinate with Accounts Department to ensure timely payments and on-time goods shipping",
      "Established par levels for all beverage lines and conducted weekly counts to prevent stockouts and overstock",
      "Sourced high-quality F&B products from farms, markets and frozen suppliers; obtained all required certifications",
      "Developed a daily production board system for inventory management, ordering and sales forecasting",
      "Negotiated pricing and lead times with multiple suppliers to improve margins and delivery reliability",
      "Maintained accurate purchasing records and generated weekly expenditure reports for management review",
      "Built comprehensive vendor and market lists; established a database for ongoing supplier performance evaluation",
      "Monitored quality standards and managed logistics across the full supply chain",
      "Tracked F&B market pricing trends and identified cost-saving opportunities without compromising product quality",
      "Assisted in developing the annual F&B budget and reported on monthly variances to the operations manager",
      "Control and monitor cash and cheque payment status; coordinate with Accounts Department to ensure timely payments and on-time goods shipping",
      "Receive, check, and record incoming food & beverage and non-food deliveries",
      "Arrange delivery of goods from China factory to Hong Kong office.",
    ],
  },
  {
    company: "Hei House",
    location: "Lee Tung Avenue, Wan Chai",
    period: "May 2016 – August 2016",
    title: "Bar Supervisor",
    bullets: [
      "Led a team of bartenders across two bar stations, implementing improvements to elevate service efficiency",
      "Ensured bar cleanliness, hygiene and streamlined procedures to complement the dining experience",
      "Ordered weekly stocks and maintained daily inventory data entry and purchase records",
      "Secured closing reports for bar sales and balanced cash receipts in line with company policies",
      "Conducted daily pre-service briefings to brief staff on specials, table counts and any operational updates",
      "Liaised with the kitchen team to align beverage service timing with food plate delivery",
      "Resolved guest complaints with professionalism and escalated recurring issues to senior management",
      "Maintained accurate shift handover records to ensure continuity across day and evening operations",
    ],
  },
  {
    company: "Mr & Mrs Fox – Swire Hotel",
    location: "Quarry Bay",
    period: "August 2015 – May 2016",
    title: "Senior Bartender",
    bullets: [
      "Collaborated with professional mixologists, excelling in mixing, garnishing and serving with premium brands",
      "Built a strong clientele through social networks and brand engagement",
      "Supervised two main bar stations covering coffee, mixed drinks and craft beers",
      "Featured in 'Story by Pernod Ricard 2015' to showcase the venue's new bar concept",
      "Mentored and coached junior bar staff on technique, product knowledge and hotel service standards",
      "Maintained accurate daily par levels and ensured all premium spirits were correctly stored and labelled",
      "Applied in-depth knowledge of Swire Hotel's luxury hospitality protocols to deliver consistently elevated service",
      "Contributed research into contemporary cocktail trends to inform seasonal menu refreshes",
    ],
  },
  {
    company: "Catalunya (Hong Kong)",
    location: "Morrison Hill, Wan Chai",
    period: "May 2013 – July 2015",
    title: "Head Bartender",
    bullets: [
      "Part of the opening team specialising in Spanish-inspired cocktails, mocktails and gin & tonic varieties",
      "Trained by Spanish mixologists in advanced mixing, pouring and shaking techniques",
      "Created and implemented new cocktails and equipment upgrades for the bar program",
      "Responded to patron needs through active observation and inquiry to continuously improve service",
      "Developed a structured cocktail training programme for junior bartending and service staff",
      "Managed daily bar setup and breakdown ensuring strict compliance with hygiene and food safety standards",
      "Contributed to sourcing premium imported Spanish spirits and artisanal ingredients for the bar program",
      "Represented the venue at trade events and spirit brand masterclasses to expand industry knowledge",
    ],
  },
  {
    company: "Staunton's Wine Bar & Cafe",
    location: "SOHO, Central",
    period: "March 2012 – April 2013",
    title: "Bartender",
    bullets: [
      "Mixed and served a full range of cocktails, wines and beers while maintaining orderly bar operations",
      "Ensured consistent customer satisfaction and delivered efficient service in a fast-paced environment",
      "Developed working knowledge of wine varietals, beer styles and spirits to advise guests with confidence",
      "Assisted in training new bar staff on drink preparation and venue-specific service standards",
      "Maintained accurate pour counts and minimised wastage to support beverage cost targets",
      "Engaged with regulars to build lasting rapport and encourage repeat visits to the venue",
      "Managed multiple simultaneous orders professionally during busy evening and weekend service",
      "Collaborated with management on weekly inventory counts and assisted with stock ordering",
    ],
  },
  {
    company: "All Night Long",
    location: "Knutsford Terrace, Tsim Sha Tsui",
    period: "January 2011 – February 2012",
    title: "Bartender",
    bullets: [
      "Prepared and served a wide range of cocktails, spirits, wines and beers according to standard bar recipes",
      "Maintained cleanliness and organisation of the bar station throughout service",
      "Memorised the full menu and daily specials to confidently guide guest selections",
      "Handled cash transactions accurately and balanced the till at the end of each shift",
      "Restocked and rotated bar inventory including spirits, mixers, garnishes and glassware after each service",
      "Operated professionally in a high-volume nightlife environment during late-night and weekend peak periods",
      "Coordinated with floor staff and managers to ensure smooth beverage service delivery across the venue",
      "Adhered to responsible service of alcohol guidelines and proactively monitored guest wellbeing",
    ],
  },
];

export default function ResumePage() {
  const technicalSkills = [
    { skill: "Bartending & Mixology", level: 80 },
    { skill: "Product Sourcing & Procurement", level: 70 },
    { skill: "Warehouse & Logistics Management", level: 70 },
    { skill: "Inventory & Database Management", level: 80 },
    { skill: "Graphic Design (Logo, Menu, Business Card)", level: 70 },
    { skill: "Adobe Photoshop (Photo Manipulation)", level: 60 },
    { skill: "Adobe Illustrator (Vector Design)", level: 80 },
    { skill: "Microsoft Office (Word, Excel & PowerPoint)", level: 80 },
    { skill: "Web Design – Front-End Development", level: 80 },
    { skill: "Database – Back-End Development", level: 50 },
    { skill: "Autodesk Maya (3D Animation)", level: 50 },
  ];

  const languages = [
    {
      language: "Tagalog",
      sub: "Speaking · Writing · Reading",
      flag: "🇵🇭",
      level: 90,
    },
    {
      language: "English",
      sub: "Speaking · Writing · Reading",
      flag: "🇬🇧",
      level: 80,
    },
    { language: "Cantonese", sub: "Speaking", flag: "🇭🇰", level: 10 },
  ];

  return (
    <div className='min-h-screen bg-[#020617] text-white'>
      {/* Resume Content */}
      <div className='max-w-6xl mx-auto px-4 py-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col lg:flex-row'
        >
          {/* ── LEFT SIDEBAR ── */}
          <aside className='lg:w-[320px] shrink-0 bg-[#0f172a] px-8 py-10 flex flex-col gap-8'>
            {/* Portrait Photo */}
            <div className='flex flex-col items-center text-center gap-3'>
              <div className='w-32 h-32 rounded-full overflow-hidden ring-2 ring-cyan-500/60 shadow-lg shadow-cyan-500/20 shrink-0'>
                <Image
                  src='/jp-photo.jpg'
                  alt='Jonathan Austria Paita'
                  width={128}
                  height={128}
                  className='w-full h-full object-cover grayscale'
                  priority
                />
              </div>
              <div>
                <h1 className='text-2xl font-bold text-white leading-tight'>
                  Jonathan
                  <br />
                  <span className='text-cyan-400'>Austria Paita</span>
                </h1>
                <p className='mt-1 text-sm font-medium text-gray-400 uppercase tracking-widest'>
                  Bar | Operations | Procurement | Design | Web| Admin
                </p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h2 className='text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3 border-b border-cyan-400/30 pb-1'>
                Contact
              </h2>
              <ul className='space-y-2 text-sm text-gray-300'>
                <li className='flex items-start gap-2'>
                  <MapPin className='w-4 h-4 text-cyan-400 mt-0.5 shrink-0' />
                  <span>Wan Chai, Hong Kong</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Phone className='w-4 h-4 text-cyan-400 mt-0.5 shrink-0' />
                  <span>+852 9760 2612</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Mail className='w-4 h-4 text-cyan-400 mt-0.5 shrink-0' />
                  <span>jon89ap@gmail.com</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Github className='w-4 h-4 text-cyan-400 mt-0.5 shrink-0' />
                  <a
                    href='https://github.com/JAP369'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:text-cyan-400 transition-colors break-all'
                  >
                    github.com/JAP369
                  </a>
                </li>
              </ul>
            </div>

            {/* Objective */}
            <div>
              <h2 className='text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3 border-b border-cyan-400/30 pb-1'>
                Objective
              </h2>
              <p className='text-sm text-gray-300 leading-relaxed'>
                To obtain a challenging leadership position applying creative
                problem-solving and lean management skills with a growing
                company to achieve optimum utilisation of resources and maximum
                profits.
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className='text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3 border-b border-cyan-400/30 pb-1'>
                Education
              </h2>
              <div className='space-y-4 text-sm'>
                {[
                  {
                    degree: "Full-Time Software Engineering Course",
                    school: "Accelerate Hong Kong",
                    period: "May 2018 – September 2018",
                  },
                  {
                    degree: "B.S. Information Technology",
                    school:
                      "Informatics Computer Institute, Manila, Philippines",
                    period: "June 2008 – 2010",
                  },
                  {
                    degree: "Certified 3D Animation & Design Program",
                    school:
                      "First Academy of Computer Arts, Manila, Philippines",
                    period: "July 2007 – November 2007",
                  },
                  {
                    degree: "Secondary School",
                    school: "Della Memorial School (Hip Wo), Hong Kong",
                    period: "September 2002 – May 2007",
                  },
                  {
                    degree: "Primary School",
                    school: "Sir Ellis Kadoorie School, Hong Kong",
                    period: "September 2000 – July 2002",
                  },
                ].map((edu, i) => (
                  <div key={i}>
                    <p className='font-semibold text-white text-xs leading-snug'>
                      {edu.degree}
                    </p>
                    <p className='text-gray-400 text-xs mt-0.5'>{edu.school}</p>
                    <p className='text-cyan-400/80 text-xs mt-0.5'>
                      {edu.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className='text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3 border-b border-cyan-400/30 pb-1'>
                Technical Skills
              </h2>
              <div className='space-y-2.5'>
                {technicalSkills.map((item, index) => (
                  <div key={index}>
                    <div className='flex justify-between mb-1 text-xs'>
                      <span className='text-gray-300'>{item.skill}</span>
                      <span className='text-cyan-400'>{item.level}%</span>
                    </div>
                    <div className='w-full bg-gray-700 rounded-full h-1.5'>
                      <div
                        className='bg-linear-to-r from-cyan-500 to-blue-600 h-1.5 rounded-full'
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h2 className='text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3 border-b border-cyan-400/30 pb-1'>
                Languages
              </h2>
              <div className='space-y-3'>
                {languages.map((item, index) => (
                  <div key={index}>
                    <div className='flex items-center justify-between mb-1'>
                      <div className='flex items-center gap-1.5'>
                        <span className='text-base'>{item.flag}</span>
                        <span className='text-xs font-semibold text-white uppercase tracking-wide'>
                          {item.language}
                        </span>
                      </div>
                      <span className='text-xs text-cyan-400'>
                        {item.level}%
                      </span>
                    </div>
                    <p className='text-xs text-gray-500 mb-1'>{item.sub}</p>
                    <div className='w-full bg-gray-700 rounded-full h-1.5'>
                      <div
                        className='bg-linear-to-r from-cyan-500 to-blue-600 h-1.5 rounded-full'
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className='text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3 border-b border-cyan-400/30 pb-1'>
                Certifications
              </h2>
              <ul className='space-y-1.5 text-xs text-gray-300'>
                {[
                  "Accelerate Software Engineering Certification (2018)",
                  "Programming Hub: HTML – Excellence",
                  "Programming Hub: JavaScript – Excellence",
                  "Programming Hub: Git – Excellence",
                  "Jerry Global – Beverage & Hospitality (2020)",
                  "Grapea & Co. Wine E-Learning (2020)",
                  "Champagne Taittinger Masterclass (2016)",
                  "Grand Marnier Masterclass (2015)",
                  "ExcelWithBusiness Web Design (2013)",
                  "Global Leadership College Music & Digital Arts (2014)",
                  "BOLS Bartending Academy (2012)",
                  "Carlsberg Beer Academy (2012)",
                  "Erdington (HK) Scotch Whisky Training (2012)",
                  "PC Networking & Windows Server Admin (2009)",
                ].map((cert, i) => (
                  <li key={i} className='flex items-start gap-1.5'>
                    <span className='text-cyan-400 mt-0.5'>▸</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* ── RIGHT MAIN CONTENT ── */}
          <main className='flex-1 bg-[#020617] px-8 py-10 space-y-10'>
            {/* Skills & Acknowledgements */}
            <section>
              <h2 className='text-lg font-bold uppercase tracking-widest text-cyan-400 mb-4 border-b border-cyan-400/30 pb-2'>
                Skills &amp; Acknowledgements
              </h2>
              <div className='grid sm:grid-cols-2 gap-2'>
                {[
                  "Motivation and problem-solving skills",
                  "Works well as a team member or independently",
                  "Resourceful, energetic, competent, multi-tasking and results-oriented",
                  "Good communication and presentation skills",
                  "Highly self-motivated",
                  "Absolute service to guests / customers",
                  "Team player",
                  "Innovative approach to overcoming obstacles",
                ].map((skill, i) => (
                  <div key={i} className='flex items-start gap-2 text-sm'>
                    <span className='text-cyan-400 mt-0.5'>▸</span>
                    <span className='text-gray-300'>{skill}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Work Experience */}
            <section>
              <h2 className='text-lg font-bold uppercase tracking-widest text-cyan-400 mb-6 border-b border-cyan-400/30 pb-2'>
                Work Experience
              </h2>
              <div className='space-y-7'>
                {workExperience.map((job, i) => (
                  <div key={i} className='border-l-2 border-cyan-500/40 pl-5'>
                    <div className='flex flex-wrap items-start justify-between gap-1 mb-0.5'>
                      <h3 className='text-base font-bold text-white'>
                        {job.company}
                      </h3>
                      <span className='text-xs text-cyan-400 font-medium whitespace-nowrap'>
                        {job.period}
                      </span>
                    </div>
                    <div className='flex flex-wrap items-center gap-x-3 gap-y-0.5 mb-2'>
                      <span className='text-sm font-semibold text-cyan-300 italic'>
                        {job.title}
                      </span>
                      <span className='text-xs text-gray-500 flex items-center gap-1'>
                        <MapPin className='w-3 h-3' />
                        {job.location}
                      </span>
                    </div>
                    <ul className='space-y-1'>
                      {job.bullets.map((b, bi) => (
                        <li
                          key={bi}
                          className='flex items-start gap-2 text-sm text-gray-300'
                        >
                          <span className='text-cyan-500 mt-1 text-xs'>●</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Part-Time Work Experience */}
            <section>
              <h2 className='text-lg font-bold uppercase tracking-widest text-cyan-400 mb-6 border-b border-cyan-400/30 pb-2'>
                Part-Time Work Experience
              </h2>
              <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-4'>
                {partTimeJobs.map((job, i) => (
                  <div
                    key={i}
                    className='bg-white/5 border border-white/10 rounded-xl p-4 hover:border-cyan-500/40 transition-colors'
                  >
                    <h3 className='text-xs font-bold uppercase tracking-wide text-white mb-2 leading-snug'>
                      {job.title}
                    </h3>
                    <div className='flex items-start gap-1.5 text-xs text-gray-400 mb-1'>
                      <Briefcase className='w-3 h-3 text-cyan-400 mt-0.5 shrink-0' />
                      <span>
                        {job.company}, {job.location}
                      </span>
                    </div>
                    <div className='flex items-start gap-1.5 text-xs text-gray-400'>
                      <Calendar className='w-3 h-3 text-cyan-400 mt-0.5 shrink-0' />
                      <span>{job.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </motion.div>

        {/* ── Bottom action bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className='flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 pt-6 border-t border-white/10'
        >
          <Link
            href='/'
            className='flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium text-sm'
          >
            ← Back to Portfolio
          </Link>
          <div className='flex gap-3'>
            <button
              onClick={() => window.print()}
              className='px-5 py-2.5 bg-linear-to-r from-cyan-500 to-blue-600 hover:opacity-90 rounded-xl transition-all flex items-center gap-2 font-semibold text-sm'
            >
              <Download className='w-4 h-4' />
              Download PDF
            </button>
            <button
              onClick={() => window.print()}
              className='px-5 py-2.5 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/50 rounded-xl transition-colors flex items-center gap-2 text-sm'
            >
              <Printer className='w-4 h-4' />
              Print
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
