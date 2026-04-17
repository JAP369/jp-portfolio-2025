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
import CocktailShowcaseSection from "@/components/CocktailShowcaseSection";
import AdSense from "@/components/AdSense";

export default function Home() {
  return (
    <main className='min-h-screen bg-[#020617] text-white overflow-x-hidden'>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <CocktailShowcaseSection />

      {/* Ad unit — between Projects & Skills */}
      <div className='max-w-4xl mx-auto px-6 py-4'>
        <AdSense slot='1234567890' className='w-full' />
      </div>

      <AdditionalExperienceSection />
      {/* <TestimonialsSection /> */}
      <SkillsSection />
      <AboutSection />
      <ExperienceSection />
      {/* <FreelanceServicesSection /> */}

      {/* Ad unit — before Contact */}
      <div className='max-w-4xl mx-auto px-6 py-4'>
        <AdSense slot='0987654321' className='w-full' />
      </div>

      <ContactSection />
    </main>
  );
}
