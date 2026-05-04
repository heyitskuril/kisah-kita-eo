import { motion, useScroll, useTransform } from 'motion/react';
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/features/hero/HeroSection';
import { AboutSection } from '@/features/about/AboutSection';
import { PackagesSection } from '@/features/packages/PackagesSection';
import { AdvantagesSection } from '@/features/advantages/AdvantagesSection';
import { GallerySection } from '@/features/gallery/GallerySection';
import { TestimonialsSection } from '@/features/testimonials/TestimonialsSection';
import { ProcessSection } from '@/features/process/ProcessSection';
import { FaqSection } from '@/features/faq/FaqSection';
import { ContactSection } from '@/features/contact/ContactSection';
import { useScrollDetection } from '@/hooks/useScrollDetection';

export default function App() {
  const { isScrolled, showFloatingActions } = useScrollDetection();
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="relative overflow-x-hidden">
      <motion.div
        style={{ scaleX, transformOrigin: 'left' }}
        className="fixed top-0 left-0 right-0 h-1 bg-brand-accent z-[100]"
        aria-hidden="true"
      />

      <Navbar isScrolled={isScrolled} />

      <main>
        <HeroSection />
        <AboutSection />
        <PackagesSection />
        <AdvantagesSection />
        <GallerySection />
        <TestimonialsSection />
        <ProcessSection />
        <FaqSection />
        <ContactSection />
      </main>

      <Footer />

      <FloatingWhatsApp visible={showFloatingActions} />
    </div>
  );
}