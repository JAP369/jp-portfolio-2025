"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

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
    name: "Jade Ritual",
    ingredients: "matcha vodka · white crème de cacao · coconut cream · lime",
    year: 2023,
    image: "/cocktails/jade-ritual.jpg",
    accent: "#4ade80",
    venue: "Dragon-I",
  },
  {
    name: "Sex Afterglow",
    ingredients: "tequila · strawberries · lime · sugar · salt",
    year: 2021,
    image: "/cocktails/sex-afterglow.jpg",
    accent: "#f43f5e",
    venue: "Freeze Lounge",
  },
  {
    name: "Old Remedy",
    ingredients: "bourbon · nim jong · honey · egg white",
    year: 2021,
    image: "/cocktails/old-remedy.jpg",
    accent: "#f59e0b",
    venue: "Freeze Lounge",
  },
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
    name: "Lush Berries",
    ingredients: "vodka · blueberries · lime · banana · banana liqueur",
    year: 2017,
    image: "/cocktails/lush-berries.jpg",
    accent: "#7c3aed",
    venue: "12 Noon",
  },
  {
    name: "Spicy Amy",
    ingredients: "bourbon · amaretto · orange · lemon · ginger · red chilli",
    year: 2017,
    image: "/cocktails/spicy-amy.jpg",
    accent: "#fb923c",
    venue: "12 Noon",
  },
  {
    name: "Hei-Ria",
    ingredients: "brandy · triple sec · calamansi · wine",
    year: 2016,
    image: "/cocktails/hei-ria.png",
    accent: "#dc2626",
    venue: "Hei House",
  },
  {
    name: "Heilo-Heilo",
    ingredients:
      "gold rum · malibu · purple yam · nata de coco · banana · milk",
    year: 2016,
    image: "/cocktails/heilo-heilo.jpg",
    accent: "#a855f7",
    venue: "Hei House",
  },
  {
    name: "Midnight Manis",
    ingredients: "vodka · pandan syrup · condensed milk · oreo",
    year: 2016,
    image: "/cocktails/midnight-manis.jpg",
    accent: "#a855f7",
    venue: "Hei House",
  },
  {
    name: "Golden Mutiara",
    ingredients: "white rum · sweet corn puree · coconut cream · cornflakes",
    year: 2016,
    image: "/cocktails/golden-mutiara.jpg",
    accent: "#a855f7",
    venue: "Hei House",
  },
  {
    name: "Tropical Island",
    ingredients: "sake · gin · rum · tequila · pineapple · cola",
    year: 2016,
    image: "/cocktails/tropical-island.png",
    accent: "#06b6d4",
    venue: "Hei House",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.88, rotateX: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.65,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const overlayVariants = {
  rest: { opacity: 0, y: 20 },
  hover: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

const shineVariants = {
  rest: { x: "-100%", opacity: 0 },
  hover: {
    x: "200%",
    opacity: [0, 0.15, 0],
    transition: { duration: 0.7, ease: "easeInOut" as const },
  },
};

function CocktailCard({
  cocktail,
  index,
}: {
  cocktail: Cocktail;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: "-60px" }}
      animate={hovered ? "hover" : "rest"}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{ perspective: 800 }}
      className='group relative cursor-default'
    >
      {/* Glow ring on hover */}
      <motion.div
        className='absolute -inset-0.5 rounded-2xl pointer-events-none z-0'
        animate={{
          opacity: hovered ? 1 : 0,
          boxShadow: hovered ? `0 0 28px 6px ${cocktail.accent}55` : "none",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Card body — square via aspect-square */}
      <motion.div
        className='relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/5 z-10'
        animate={{
          scale: hovered ? 1.03 : 1,
          borderColor: hovered
            ? `${cocktail.accent}60`
            : "rgba(255,255,255,0.1)",
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {/* Photo */}
        <motion.div
          className='absolute inset-0'
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <Image
            src={cocktail.image}
            alt={cocktail.name}
            fill
            className='object-cover'
            sizes='(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw'
          />
        </motion.div>

        {/* Permanent bottom gradient */}
        <div className='absolute inset-0 bg-linear-to-t from-[#020617]/90 via-[#020617]/30 to-transparent' />

        {/* Shine sweep on hover */}
        <motion.div
          variants={shineVariants}
          className='absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent skew-x-12 pointer-events-none'
        />

        {/* Always-visible bottom info */}
        <div className='absolute bottom-0 left-0 right-0 p-4'>
          <h3 className='text-sm font-bold text-white leading-snug mb-0.5'>
            {cocktail.name}
          </h3>

          {/* Hover overlay — ingredients + venue + year */}
          <motion.div variants={overlayVariants}>
            <p className='text-[11px] text-gray-300 leading-relaxed tracking-wide mb-2'>
              {cocktail.ingredients}
            </p>
            <div className='flex items-center justify-between'>
              <span
                className='text-[11px] font-medium'
                style={{ color: `${cocktail.accent}dd` }}
              >
                {cocktail.venue}
              </span>
              <span
                className='text-[10px] font-bold px-2 py-0.5 rounded-full'
                style={{
                  backgroundColor: `${cocktail.accent}25`,
                  color: cocktail.accent,
                  border: `1px solid ${cocktail.accent}50`,
                }}
              >
                {cocktail.year}
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function FloatingOrb({
  style,
  color,
}: {
  style: React.CSSProperties;
  color: string;
}) {
  return (
    <motion.div
      className='absolute rounded-full pointer-events-none'
      style={{ background: color, filter: "blur(80px)", ...style }}
      animate={{
        y: [0, -30, 0],
        scale: [1, 1.1, 1],
        opacity: [0.04, 0.08, 0.04],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
        delay: parseFloat(String(style.animationDelay ?? 0)),
      }}
    />
  );
}

export default function CocktailShowcaseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const rawY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const parallaxY = useSpring(rawY, { stiffness: 60, damping: 20 });

  return (
    <section
      ref={sectionRef}
      id='cocktails'
      className='py-24 px-6 relative overflow-hidden'
    >
      {/* Animated background orbs */}
      <FloatingOrb
        color='#7c3aed'
        style={{
          width: 600,
          height: 600,
          top: "5%",
          left: "-10%",
          animationDelay: "0",
        }}
      />
      <FloatingOrb
        color='#0891b2'
        style={{
          width: 500,
          height: 500,
          bottom: "5%",
          right: "-8%",
          animationDelay: "2",
        }}
      />
      <FloatingOrb
        color='#be185d'
        style={{
          width: 350,
          height: 350,
          top: "40%",
          left: "40%",
          animationDelay: "4",
        }}
      />

      {/* Parallax grid lines */}
      <motion.div
        style={{ y: parallaxY, opacity: 0.04 }}
        className='absolute inset-0 pointer-events-none'
        aria-hidden
      >
        <div
          className='w-full h-full'
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, white 0px, white 1px, transparent 1px, transparent 80px), repeating-linear-gradient(0deg, white 0px, white 1px, transparent 1px, transparent 80px)",
          }}
        />
      </motion.div>

      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className='text-center mb-16'
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-5'
          >
            <motion.span
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
              className='w-1.5 h-1.5 rounded-full bg-cyan-400'
            />
            <span className='text-cyan-400 text-sm font-medium'>
              Original Creations
            </span>
          </motion.div>

          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            Cocktail{" "}
            <span className='text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400'>
              Showcase
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className='text-gray-400 max-w-xl mx-auto'
          >
            A selection of original cocktail recipes crafted over 15+ years
            behind Hong Kong&apos;s bars — each one a story of flavour,
            technique and place.
          </motion.p>
        </motion.div>

        {/* 4-column square grid */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          {cocktails.map((cocktail, i) => (
            <CocktailCard key={cocktail.name} cocktail={cocktail} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
