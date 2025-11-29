'use client';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      {/* <TestimonialsSection /> */}
      <SkillsSection />
      <AboutSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
