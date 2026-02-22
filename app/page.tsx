"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import FreelanceServicesSection from "@/components/FreelanceServicesSection";
import AdditionalExperienceSection from "@/components/AdditionalExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className='min-h-screen bg-[#020617] text-white overflow-x-hidden'>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <AdditionalExperienceSection />
      {/* <TestimonialsSection /> */}
      <SkillsSection />
      <AboutSection />
      <ExperienceSection />
      {/* <FreelanceServicesSection /> */}
      <ContactSection />
      <ThemeToggle />
    </main>
  );
}
