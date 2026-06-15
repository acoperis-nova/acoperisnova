import React from 'react';
import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import ServicesSection from '../components/landing/ServicesSection';
import PartnersSection from '../components/landing/PartnersSection';
import BeforeAfterSection from '../components/landing/BeforeAfterSection';
import GallerySection from '../components/landing/GallerySection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import QuoteFormSection from '../components/landing/QuoteFormSection';
import FooterSection from '../components/landing/FooterSection';
import FloatingCTA from '../components/landing/FloatingCTA';
import ScrollProgress from '../components/landing/ScrollProgress';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <BeforeAfterSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <QuoteFormSection />
      <FooterSection />
      <FloatingCTA />
      <ScrollProgress />
    </div>
  );
}
