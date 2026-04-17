"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Cocktail {
  name: string;
  ingredients: string;
  year: number;
  image: string;
  venue: string;
  accent: string;
}

const cocktails: Cocktail[] = [
  {
    name: "Oceanic Bliss",
    ingredients: "gin · dry vermouth · ultramarine sea-rup · coral tuile",
    year: 2020,
    image: "/cocktails/oceanic-bliss.jpg",
    accent: "#818cf8",
    venue: "Lobster Bar & Grill",
  },
  {
    name: "The Forgotten",
    ingredients: "mezcal · pineapple · lime · hibiscus syrup",
    year: 2019,
    image: "/cocktails/the-forgotten.jpg",
    accent: "#e879f9",
    venue: "Lobster Bar & Grill",
  },
  {
    name: "Jade Ritual",
    ingredients: "matcha vodka · white crème de cacao · coconut cream · lime",
    year: 2023,
    image: "/cocktails/jade-ritual.jpg",
    accent: "#4ade80",
    venue: "Dragon-I",
  },
  {
    name: "Crimson Kiss",
    ingredients: "gin · strawberry purée · elderflower · lemon · rose water",
    year: 2024,
    image: "/cocktails/crimson-kiss.jpg",
    accent: "#f43f5e",
    venue: "Dragon-I",
  },
  {
    name: "Old Remedy",
    ingredients: "aged rum · Chinese herbal bitters · honey · lychee · ginger beer",
    year: 2025,
    image: "/cocktails/old-remedy.jpg",
    accent: "#f59e0b",
    venue: "Dragon-I",
  },
  {
    name: "Lush Berries",
    ingredients: "vodka · blueberries · lime · banana · banana liqueur",
    year: 2017,
    image: "/cocktails/lush-berries.jpg",
    accent: "#7c3aed",
    venue: "Mr & Mrs Fox",
  },
  {
    name: "Spicy Amy",
    ingredients: "bourbon · amaretto · orange · lemon · ginger · red chilli",
    year: 2017,
    image: "/cocktails/spicy-amy.jpg",
    accent: "#fb923c",
    venue: "Mr & Mrs Fox",
  },
];

function CocktailCard({
  cocktail,
  index,
}: {
  cocktail: Cocktail;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className='group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300'
    >
      {/* Image */}
      <div className='relative h-56 overflow-hidden'>
        <Image
          src={cocktail.image}
          alt={cocktail.name}
          fill
          className='object-cover transition-transform duration-500 group-hover:scale-105'
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
        />
        <div className='absolute inset-0 bg-linear-to-t from-[#020617] via-[#020617]/20 to-transparent' />
      </div>

      {/* Info */}
      <div className='p-4'>
        <h3 className='text-sm font-bold text-white mb-1 leading-snug'>
          {cocktail.name}
        </h3>
        <p className='text-xs text-gray-400 leading-relaxed tracking-wide mb-3'>
          {cocktail.ingredients}
        </p>
        <div className='flex items-center justify-between'>
          <p
            className='text-xs font-medium'
            style={{ color: `${cocktail.accent}cc` }}
          >
            {cocktail.venue}
          </p>
          <span
            className='text-xs font-bold px-2 py-0.5 rounded-full'
            style={{
              backgroundColor: `${cocktail.accent}20`,
              color: cocktail.accent,
              border: `1px solid ${cocktail.accent}40`,
            }}
          >
            {cocktail.year}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function CocktailShowcaseSection() {
  return (
    <section id='cocktails' className='py-20 px-6 relative overflow-hidden'>
      {/* Background glow */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full filter blur-3xl' />
        <div className='absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-600/5 rounded-full filter blur-3xl' />
      </div>

      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-14'
        >
          <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4'>
            <span className='text-cyan-400 text-sm font-medium'>
              Original Creations
            </span>
          </div>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            Cocktail{" "}
            <span className='text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500'>
              Showcase
            </span>
          </h2>
          <p className='text-gray-400 max-w-xl mx-auto'>
            A selection of original cocktail recipes crafted over 15+ years
            behind Hong Kong&apos;s bars — each one a story of flavour,
            technique and place.
          </p>
        </motion.div>

        {/* Flat 4-column grid */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
          {cocktails.map((cocktail, i) => (
            <CocktailCard key={cocktail.name} cocktail={cocktail} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
