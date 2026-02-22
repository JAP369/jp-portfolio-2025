"use client";

import { motion } from "framer-motion";

export default function SkeletonLoader() {
  return (
    <div className='space-y-6'>
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 0.6, 0.4] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className='relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10'
        >
          <div className='aspect-video w-full bg-gradient-to-br from-cyan-500/10 to-blue-600/10' />
          <div className='p-6 space-y-3'>
            <div className='h-6 bg-white/10 rounded w-3/4' />
            <div className='h-4 bg-white/10 rounded w-full' />
            <div className='h-4 bg-white/10 rounded w-5/6' />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
