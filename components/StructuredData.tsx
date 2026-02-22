export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jonathan Austria Paita",
    url: "https://jonathanpaita.com",
    image: "https://jonathanpaita.com/og-image.jpg",
    jobTitle: "Bartender & F&B Operations Manager",
    description:
      "Experienced Bartender, F&B Operations Manager, and Web Developer with 15+ years of expertise",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hong Kong",
      addressCountry: "HK",
    },
    email: "jonathan.paita@gmail.com",
    alumniOf: {
      "@type": "Organization",
      name: "The Hong Kong Polytechnic University",
    },
    sameAs: [
      "https://www.linkedin.com/in/jonathan-paita",
      "https://github.com/JAP369",
    ],
    knowsAbout: [
      "Bartending",
      "F&B Operations",
      "Restaurant Management",
      "Web Development",
      "Graphic Design",
      "Customer Service",
    ],
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
