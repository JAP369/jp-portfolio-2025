import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import Providers from "@/components/Providers";
import WhatsAppCTA from "@/components/WhatsAppCTA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jonathanpaita.com"),
  title: {
    default: "Jonathan Paita | Bartender & F&B Operations Manager",
    template: "%s | Jonathan Paita",
  },
  description:
    "Jonathan Paita's Portfolio - Experienced Bartender, F&B Operations Manager, and Web Developer with 15+ years of expertise in hospitality, bartending, graphic design, and web development. Based in Hong Kong.",
  keywords: [
    "Jonathan Paita",
    "Bartender Hong Kong",
    "F&B Operations Manager",
    "Web Developer",
    "Graphic Designer",
    "Hospitality Professional",
    "Cocktail Expert",
    "Restaurant Management",
    "Hong Kong",
    "Portfolio",
  ],
  authors: [{ name: "Jonathan Austria Paita" }],
  creator: "Jonathan Austria Paita",
  publisher: "Jonathan Austria Paita",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jonathanpaita.com",
    title: "Jonathan Paita | Bartender & F&B Operations Manager",
    description:
      "Experienced Bartender, F&B Operations Manager, and Web Developer with 15+ years of expertise in hospitality. Based in Hong Kong.",
    siteName: "Jonathan Paita Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jonathan Paita Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jonathan Paita | Bartender & F&B Operations Manager",
    description:
      "Experienced Bartender, F&B Operations Manager, and Web Developer with 15+ years of expertise.",
    images: ["/og-image.jpg"],
    creator: "@jonathanpaita",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <StructuredData />
        <link rel='manifest' href='/manifest.json' />
        <meta name='theme-color' content='#06b6d4' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta
          name='apple-mobile-web-app-status-bar-style'
          content='black-translucent'
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
        <WhatsAppCTA />
        {/* Google AdSense — Script must live in body, not head */}
        {process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID}`}
            crossOrigin='anonymous'
            strategy='lazyOnload'
          />
        )}
      </body>
    </html>
  );
}
