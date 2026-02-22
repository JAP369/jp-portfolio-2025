"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import MusicPlayer from "@/components/MusicPlayer";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
      <MusicPlayer />
    </ThemeProvider>
  );
}
