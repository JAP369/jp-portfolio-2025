"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { CaseStudy } from "@/lib/caseStudies";

export default function CaseStudyClient({
  caseStudy: cs,
}: {
  caseStudy: CaseStudy;
}) {
  return (
    <div className='min-h-screen bg-[#020617] text-white'>
      {/* ── Back nav ────────────────────────────────────────────────────── */}
      <div className='sticky top-0 z-40 border-b border-white/10 bg-[#020617]/80 backdrop-blur-md'>
        <div className='max-w-5xl mx-auto px-6 py-4 flex justify-between items-center'>
          <Link
            href='/#projects'
            className='flex items-center gap-2 text-gray-400 hover:text-white transition-colors'
          >
            <ArrowLeft className='w-4 h-4' />
            Back to Projects
          </Link>
          <a
            href={cs.liveUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 px-4 py-2 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity'
          >
            <ExternalLink className='w-3.5 h-3.5' />
            View Live Site
          </a>
        </div>
      </div>

      <div className='max-w-5xl mx-auto px-6 py-16 space-y-20'>
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='space-y-6'
        >
          <div className='flex flex-wrap items-center gap-3 text-sm text-gray-400'>
            <span className='px-3 py-1 border border-cyan-500/30 text-cyan-400 rounded-full'>
              {cs.category}
            </span>
            <span>{cs.year}</span>
            <span>·</span>
            <span>{cs.role}</span>
          </div>

          <h1 className='text-5xl md:text-7xl font-bold leading-tight'>
            {cs.title}
          </h1>
          <p className='text-xl md:text-2xl text-gray-300 max-w-2xl'>
            {cs.tagline}
          </p>

          {/* Tags */}
          <div className='flex flex-wrap gap-2 pt-2'>
            {cs.tags.map((tag) => (
              <span
                key={tag}
                className='px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400'
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Hero image */}
          <div className='relative rounded-3xl overflow-hidden aspect-video mt-8 border border-white/10'>
            <Image
              src={cs.heroImage}
              alt={cs.title}
              fill
              className='object-cover'
              priority
            />
          </div>
        </motion.div>

        {/* ── Metrics ───────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='grid grid-cols-2 md:grid-cols-4 gap-4'
        >
          {cs.metrics.map((m) => (
            <div
              key={m.label}
              className='bg-white/5 border border-white/10 rounded-2xl p-6 text-center'
            >
              <p className='text-3xl font-bold text-cyan-400'>{m.value}</p>
              <p className='text-sm text-gray-400 mt-1'>{m.label}</p>
            </div>
          ))}
        </motion.div>

        {/* ── Problem / Solution / Outcome ──────────────────────────────── */}
        {[
          {
            label: "The Problem",
            content: cs.problem,
            color: "text-red-400",
            border: "border-red-500/30",
          },
          {
            label: "The Solution",
            content: cs.solution,
            color: "text-cyan-400",
            border: "border-cyan-500/30",
          },
          {
            label: "The Outcome",
            content: cs.outcome,
            color: "text-green-400",
            border: "border-green-500/30",
          },
        ].map(({ label, content, color, border }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`border-l-4 ${border} pl-8 space-y-3`}
          >
            <h2 className={`text-xs uppercase tracking-widest ${color}`}>
              {label}
            </h2>
            <p className='text-gray-300 text-lg leading-relaxed'>{content}</p>
          </motion.div>
        ))}

        {/* ── Key Features ──────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-xs uppercase tracking-widest text-gray-500 mb-6'>
            Key Features
          </h2>
          <div className='grid md:grid-cols-2 gap-3'>
            {cs.features.map((feature) => (
              <div
                key={feature}
                className='flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4'
              >
                <span className='text-cyan-400 mt-0.5 text-lg leading-none'>
                  ▸
                </span>
                <span className='text-gray-300 text-sm'>{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/10'
        >
          <a
            href={cs.liveUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:opacity-90 transition-opacity'
          >
            <ExternalLink className='w-4 h-4' />
            Visit {cs.title}
          </a>
          <Link
            href='/#projects'
            className='inline-flex items-center gap-2 px-8 py-4 border border-white/20 rounded-full text-gray-300 hover:border-white/50 hover:text-white transition-all'
          >
            <ArrowLeft className='w-4 h-4' />
            All Projects
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
