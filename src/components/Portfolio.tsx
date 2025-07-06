import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import LoadingScreen from './LoadingScreen';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import ServicesSection from './ServicesSection';
import ExperienceSection from './ExperienceSection';
import TestimonialsSection from './TestimonialsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import { Toaster } from "@/components/ui/toaster";

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Add padding-top to account for fixed navigation
  useEffect(() => {
    if (!isLoading) {
      // Add hero section id
      const heroSection = document.querySelector('[class*="min-h-screen"]');
      if (heroSection) {
        heroSection.id = 'hero';
      }
    }
  }, [isLoading]);

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-0"> {/* Remove pt-16 since hero section is full height */}
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ServicesSection />
        <ExperienceSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Portfolio;