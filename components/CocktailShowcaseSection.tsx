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
    name: "The Forgotten",
    ingredients: "mezcal · pineapple · lime · hibiscus syrup",
    year: 2019,
    image: "/cocktails/the-forgotten.jpg",
    accent: "#e879f9",
    venue: "Lobster Bar & Grill",
  },
  {
    name: "Lush Berries",
    ingredients: "vodka · blueberries · lime · banana · banana liqueur",
    year: 2017,
    image: "/cocktails/lush-berries.jpg",
    accent: "#818cf8",
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

// Sort by year descending, then group
const sortedCocktails = [...cocktails].sort((a, b) => b.year - a.year);
const years = [...new Set(sortedCocktails.map((c) => c.year))].sort(
  (a, b) => b - a,
);

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
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className='group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300'
    >
      {/* Image */}
      <div className='relative h-72 overflow-hidden'>
        <Image
          src={cocktail.image}
          alt={cocktail.name}
          fill
          className='object-cover transition-transform duration-500 group-hover:scale-105'
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
        />
        <div className='absolute inset-0 bg-linear-to-t from-[#020617] via-[#020617]/30 to-transparent' />

        {/* Year badge */}
        <div className='absolute top-3 right-3'>
          <span
            className='px-2.5 py-1 rounded-full text-xs font-bold backdrop-blur-sm'
            style={{
              backgroundColor: `${cocktail.accent}25`,
              color: cocktail.accent,
              border: `1px solid ${cocktail.accent}50`,
            }}
          >
            {cocktail.year}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className='p-5'>
        <h3 className='text-base font-bold text-white mb-1.5'>
          {cocktail.name}
        </h3>
        <p className='text-xs text-gray-400 leading-relaxed tracking-wide'>
          {cocktail.ingredients}
        </p>
        <p
          className='mt-3 text-xs font-medium'
          style={{ color: `${cocktail.accent}cc` }}
        >
          {cocktail.venue}
        </p>
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

      <div className='max-w-6xl mx-auto relative z-10'>
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

        {/* Cocktails grouped by year (latest first) */}
        {years.map((year) => (
          <div key={year} className='mb-14'>
            {/* Year divider */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='flex items-center gap-4 mb-8'
            >
              <span className='text-3xl font-bold text-white tabular-nums'>
                {year}
              </span>
              <div className='flex-1 h-px bg-white/10' />
            </motion.div>

            {/* Cards grid */}
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              {sortedCocktails
                .filter((c) => c.year === year)
                .map((cocktail, i) => (
                  <CocktailCard
                    key={cocktail.name}
                    cocktail={cocktail}
                    index={i}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
