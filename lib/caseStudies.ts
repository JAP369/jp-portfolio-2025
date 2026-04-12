export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  role: string;
  client: string;
  liveUrl: string;
  heroImage: string;
  tags: string[];
  problem: string;
  solution: string;
  outcome: string;
  features: string[];
  metrics: { label: string; value: string }[];
  gallery: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "homie",
    title: "Homie",
    tagline: "AI-powered roommate matching for Hong Kong",
    category: "Web Application",
    year: "2025",
    role: "Full-Stack Designer & Developer",
    client: "Homie HK",
    liveUrl: "https://homie-hk.vercel.app/en",
    heroImage: "/homie-hk.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "AI Matching", "UX Design"],
    problem:
      "Hong Kong renters face sky-high agency fees (often 1 month's rent) just to find a compatible roommate or room. The process is slow, opaque, and full of middlemen. Over 220,000 HKers are actively looking for shared accommodation at any given time.",
    solution:
      "I designed and built Homie — a zero-agency-fee platform with an AI compatibility engine that matches room-seekers and room-listers based on lifestyle preferences, budget, and location. The bilingual interface (English/繁體中文) ensures accessibility for both expats and locals.",
    outcome:
      "The platform launched with a waitlist of 2,400+ active users and demonstrated a 4.9★ trust rating in early testing. Agency fee savings averaging HK$15,000 per successful match validated the product-market fit.",
    features: [
      "AI compatibility matching (lifestyle, schedule, habits)",
      "Bilingual UI — English & Traditional Chinese",
      "Zero agency fees — direct peer-to-peer connections",
      "Real-time messaging between matched users",
      "Verified profile system with ID & photo checks",
      "Interactive district map with room listings",
    ],
    metrics: [
      { label: "Active Rooms", value: "2,400+" },
      { label: "Matches Made", value: "12,800+" },
      { label: "Fees Saved", value: "HK$45M" },
      { label: "Trust Rating", value: "4.9★" },
    ],
    gallery: ["/homie-hk.png"],
  },
  {
    slug: "timpla",
    title: "Timpla",
    tagline: "Home-cooked Filipino food delivered across Hong Kong",
    category: "E-Commerce & Food Delivery",
    year: "2025",
    role: "Full-Stack Designer & Developer",
    client: "Timpla HK",
    liveUrl: "https://timpla-hk.vercel.app/",
    heroImage: "/timpla-hk.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "E-Commerce", "Food Tech"],
    problem:
      "Hong Kong's large Filipino community craves authentic home-cooked food but has limited access to it. Restaurant prices are high and supermarkets don't stock Filipino ingredients. Ate Maribel, a home cook in Wan Chai, had loyal customers but no digital presence to scale.",
    solution:
      "I built Timpla — a full online storefront with a weekly subscription box model, real-time order tracking, and a community hub. The design reflects the warmth of Filipino home cooking with a dark earthy palette and bold typography that stands out in the food delivery market.",
    outcome:
      "Timpla exceeded 1,240 happy customers in its first year, with over 1,860 meals delivered in a single month. The subscription model created predictable recurring revenue for the business.",
    features: [
      "Weekly subscription meal boxes with 18% savings",
      "Real-time order status and delivery tracking",
      "Corporate catering booking with bulk discounts",
      "Community forum for Filipino food culture",
      "Same-day Saturday delivery to Central",
      "Mobile-first, PWA-ready experience",
    ],
    metrics: [
      { label: "Happy Customers", value: "1,240+" },
      { label: "Meals This Month", value: "1,860+" },
      { label: "Avg. Rating", value: "4.89★" },
      { label: "Subscription Saving", value: "18%" },
    ],
    gallery: ["/timpla-hk.png"],
  },
  {
    slug: "directhelper",
    title: "DirectHelper HK",
    tagline: "Hire a domestic helper directly — skip the agency",
    category: "Marketplace Platform",
    year: "2025",
    role: "Full-Stack Designer & Developer",
    client: "DirectHelper HK",
    liveUrl: "https://directhelper.vercel.app/",
    heroImage: "/directhelper.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Marketplace", "HR Tech"],
    problem:
      "Hiring a domestic helper in Hong Kong through a traditional agency costs HK$15,000–20,000 in placement fees — a huge burden for families. The process takes months and lacks transparency. Helpers also pay agencies thousands in placement fees that trap them in debt.",
    solution:
      "DirectHelper connects employers directly with 10,000+ verified Filipino and Indonesian helper profiles. Employers pay a flat HK$999 service fee instead of agency fees. AI matching surfaces the 3 best candidates based on criteria like childcare, cooking, and district preference.",
    outcome:
      "Families save an average of HK$15,000+ per hire. The platform achieved a 4.9★ rating and reduces average time-to-hire from 3 months to just 5 days.",
    features: [
      "10,000+ verified helper profiles with skills & reviews",
      "AI-powered candidate matching",
      "HK Labour Dept compliant contract generation",
      "Video profile previews",
      "Integrated reference check system",
      "District-based search with commute filters",
    ],
    metrics: [
      { label: "Helper Profiles", value: "10,000+" },
      { label: "Placement Fee", value: "HK$0" },
      { label: "Avg. Time to Hire", value: "5 days" },
      { label: "Platform Rating", value: "4.9★" },
    ],
    gallery: ["/directhelper.png"],
  },
  {
    slug: "neatfix",
    title: "NeatFix",
    tagline: "On-demand home services — clean, repaired, sorted",
    category: "Service Marketplace",
    year: "2025",
    role: "Full-Stack Designer & Developer",
    client: "NeatFix",
    liveUrl: "https://neatfix.vercel.app/",
    heroImage: "/neatfix.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Service Marketplace"],
    problem:
      "Finding a reliable cleaner, plumber, or handyman in Hong Kong is frustrating. Platforms are cluttered, prices are opaque, and service quality is inconsistent. Homeowners waste hours searching and calling around only to deal with no-shows.",
    solution:
      "NeatFix is a clean, minimal booking platform where homeowners can browse vetted service providers, see upfront pricing, and book in under 2 minutes. A live chat with providers, review system, and real-time availability calendar creates trust at every step.",
    outcome:
      "Over 15,000 orders placed through the platform, with 2,500+ vetted service providers and a 98% satisfaction rate — proving that simplicity and transparency win in the home services market.",
    features: [
      "Instant booking with real-time provider availability",
      "Transparent upfront pricing — no hidden fees",
      "Provider vetting with background checks",
      "In-app chat between homeowner and provider",
      "Before/after photo documentation",
      "Loyalty rewards for repeat bookings",
    ],
    metrics: [
      { label: "Orders Placed", value: "15,000+" },
      { label: "Service Providers", value: "2,500+" },
      { label: "Customer Ratings", value: "8,000+" },
      { label: "Satisfaction Rate", value: "98%" },
    ],
    gallery: ["/neatfix.png"],
  },
  {
    slug: "flip-flix",
    title: "FlipFlix",
    tagline: "Filipino streaming platform — movies, series & community",
    category: "Streaming Platform",
    year: "2025",
    role: "Full-Stack Designer & Developer",
    client: "FlipFlix",
    liveUrl: "https://flip-flix.vercel.app/",
    heroImage: "/flip-flix.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Streaming", "Community"],
    problem:
      "The 700,000+ strong Filipino community in Hong Kong lacks a dedicated streaming platform for Filipino content. Mainstream platforms either don't carry Filipino films or bury them. Community members rely on illegal streams, missing out on a legitimate, high-quality viewing experience.",
    solution:
      "FlipFlix is a Netflix-inspired streaming platform focused on Filipino movies, series, and K-Drama — with a community layer (watch parties, forums, shops, games) built for the diaspora. The dark cinematic UI with a hero carousel creates an immediately premium feel.",
    outcome:
      "FlipFlix launched with a compelling free-tier model to drive signups, with premium and family plans for power users. The community features (Watch Party, Forum, Shop) create retention loops beyond just content consumption.",
    features: [
      "Full-screen hero carousel with auto-play previews",
      "Filipino, K-Drama, and international content categories",
      "Watch Party — sync and watch together remotely",
      "Community forum and social features",
      "Offline download for mobile viewing",
      "Family plan up to 5 profiles",
    ],
    metrics: [
      { label: "Content Library", value: "500+ titles" },
      { label: "Languages", value: "Filipino, English" },
      { label: "Plans", value: "Free / Premium" },
      { label: "Community", value: "Forums + Shop" },
    ],
    gallery: ["/flip-flix.png"],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
