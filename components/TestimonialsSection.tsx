'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sumanth Varma',
    role: 'Designer at Aquera',
    text: 'Siddharth is the best asset of our team, he uses his strategies which resembles the design thinking in more accurate way according to the project.'
  },
  {
    name: 'Meit Shah',
    role: 'Design Manager 1',
    text: 'Any team would be fortunate to have him. he is a quick learner, a dependable colleague, who brings both creativity & execution excellence to the table'
  },
  {
    name: 'Raghabendra Sahu',
    role: 'Designer 3 at Fynd',
    text: 'I worked directly with siddharth in a team, I would say he is very calm under pressure and his quality of work has inspired me at every point of time.'
  }
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-32 px-6 bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-6">TESTIMONIALS</h2>
            <h3 className="text-5xl md:text-6xl font-bold">In their words</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 flex flex-col"
              >
                <Quote className="w-10 h-10 text-purple-400 mb-6" />
                <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                  {testimonial.text}
                </p>
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
