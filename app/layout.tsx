import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MusicPlayer from "@/components/MusicPlayer";
import StructuredData from "@/components/StructuredData";
import { ThemeProvider } from "@/context/ThemeContext";

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
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
          <MusicPlayer />
        </ThemeProvider>
      </body>
    </html>
  );
}
