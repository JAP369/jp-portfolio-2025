"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import MusicPlayer from "@/components/MusicPlayer";
import BackToTop from "@/components/BackToTop";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
      <MusicPlayer />
      <BackToTop />
    </ThemeProvider>
  );
}
