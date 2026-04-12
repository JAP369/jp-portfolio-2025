"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Printer, ArrowLeft, Download } from "lucide-react";
import { caseStudies } from "@/lib/caseStudies";

const websiteProjects = caseStudies;

export default function PortfolioPDFPage() {
  return (
    <div className='min-h-screen bg-white text-gray-900'>
      {/* ── Screen-only top bar ─────────────────────────────────────────── */}
      <div className='print:hidden sticky top-0 z-40 border-b border-gray-200 bg-white/90 backdrop-blur-md'>
        <div className='max-w-5xl mx-auto px-6 py-4 flex justify-between items-center'>
          <Link
            href='/'
            className='flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors text-sm'
          >
            <ArrowLeft className='w-4 h-4' />
            Back to Portfolio
          </Link>
          <div className='flex gap-3'>
            <button
              onClick={() => window.print()}
              className='flex items-center gap-2 px-5 py-2 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-700 transition-colors'
            >
              <Download className='w-4 h-4' />
              Save as PDF
            </button>
            <button
              onClick={() => window.print()}
              className='flex items-center gap-2 px-5 py-2 border border-gray-200 rounded-xl text-sm hover:border-gray-400 transition-colors'
            >
              <Printer className='w-4 h-4' />
              Print
            </button>
          </div>
        </div>
      </div>

      {/* ── PDF content ─────────────────────────────────────────────────── */}
      <div className='max-w-5xl mx-auto px-8 py-12 space-y-12 print:py-0 print:px-0 print:space-y-8'>
        {/* Cover header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b-2 border-gray-900'
        >
          <div>
            <h1 className='text-4xl font-bold text-gray-900'>Jonathan Paita</h1>
            <p className='text-lg text-gray-500 mt-1'>
              Full-Stack Designer &amp; Developer · Hong Kong
            </p>
            <div className='flex flex-wrap gap-4 mt-3 text-sm text-gray-400'>
              <span>📧 jon89ap@gmail.com</span>
              <span>📱 +852 9760 2612</span>
              <span>🌐 jonathanpaita.com</span>
            </div>
          </div>
          <div className='text-right print:hidden'>
            <p className='text-xs text-gray-400 uppercase tracking-widest'>
              Portfolio
            </p>
            <p className='text-sm text-gray-500'>{new Date().getFullYear()}</p>
          </div>
        </motion.div>

        {/* Intro */}
        <div className='prose prose-gray max-w-none'>
          <p className='text-gray-600 text-lg leading-relaxed'>
            I design and build high-performance websites and digital products
            for businesses in Hong Kong and beyond. My work spans AI platforms,
            e-commerce, food delivery, service marketplaces, and streaming — all
            crafted with a focus on clean UI, real business outcomes, and
            technical quality.
          </p>
        </div>

        {/* Services summary */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          {[
            { label: "Websites", icon: "💻" },
            { label: "Logo Design", icon: "✏️" },
            { label: "Menu Design", icon: "📋" },
            { label: "Business Cards", icon: "🪪" },
            { label: "Social Media", icon: "📱" },
            { label: "Fliers & Posters", icon: "🖼️" },
            { label: "Branding", icon: "🎨" },
            { label: "Consulting", icon: "💡" },
          ].map((s) => (
            <div
              key={s.label}
              className='border border-gray-200 rounded-xl p-4 text-center'
            >
              <div className='text-2xl mb-1'>{s.icon}</div>
              <p className='text-xs font-semibold text-gray-600'>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Project showcase */}
        <div>
          <h2 className='text-xs uppercase tracking-widest text-gray-400 mb-6'>
            Selected Work
          </h2>
          <div className='grid md:grid-cols-2 gap-6'>
            {websiteProjects.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className='border border-gray-200 rounded-2xl overflow-hidden'
              >
                <div className='relative aspect-video'>
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='p-5'>
                  <div className='flex items-center justify-between mb-2'>
                    <h3 className='text-lg font-bold text-gray-900'>
                      {project.title}
                    </h3>
                    <span className='text-xs text-gray-400 border border-gray-200 px-2 py-0.5 rounded-full'>
                      {project.category}
                    </span>
                  </div>
                  <p className='text-gray-500 text-sm leading-relaxed mb-3'>
                    {project.tagline}
                  </p>
                  {/* Metrics row */}
                  <div className='flex flex-wrap gap-3'>
                    {project.metrics.slice(0, 2).map((m) => (
                      <div key={m.label} className='text-center'>
                        <p className='text-sm font-bold text-gray-900'>
                          {m.value}
                        </p>
                        <p className='text-xs text-gray-400'>{m.label}</p>
                      </div>
                    ))}
                  </div>
                  <p className='text-xs text-blue-600 mt-3 print:block hidden'>
                    {project.liveUrl}
                  </p>
                  <a
                    href={project.liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='print:hidden mt-3 inline-block text-xs text-blue-600 hover:underline'
                  >
                    {project.liveUrl} ↗
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className='grid md:grid-cols-2 gap-8 pb-8 border-b border-gray-200'>
          <div>
            <h2 className='text-xs uppercase tracking-widest text-gray-400 mb-4'>
              Technical Skills
            </h2>
            <div className='space-y-2'>
              {[
                "Next.js / React / TypeScript",
                "Tailwind CSS / Framer Motion",
                "Node.js / PostgreSQL",
                "Adobe Illustrator / Photoshop",
                "Figma / UI & UX Design",
                "SEO / Performance Optimisation",
              ].map((s) => (
                <div
                  key={s}
                  className='flex items-center gap-2 text-sm text-gray-600'
                >
                  <span className='w-1.5 h-1.5 rounded-full bg-gray-900 flex-shrink-0' />
                  {s}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className='text-xs uppercase tracking-widest text-gray-400 mb-4'>
              Contact &amp; Availability
            </h2>
            <div className='space-y-3 text-sm text-gray-600'>
              <p>📧 jon89ap@gmail.com</p>
              <p>📱 +852 9760 2612 (WhatsApp)</p>
              <p>📍 Wan Chai, Hong Kong</p>
              <p>🌐 jonathanpaita.com</p>
              <div className='mt-4 px-4 py-3 bg-green-50 border border-green-200 rounded-xl text-green-700 text-xs font-medium'>
                ✅ Available for freelance projects — reach out to discuss
                yours!
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className='text-center text-xs text-gray-400 pb-4'>
          © {new Date().getFullYear()} Jonathan Paita · All Rights Reserved ·
          jonathanpaita.com
        </p>
      </div>
    </div>
  );
}
