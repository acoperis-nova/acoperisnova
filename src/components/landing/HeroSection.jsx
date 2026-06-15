import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HERO_IMAGE = 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/39570a1a3_generated_image.png';

export default function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.25);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 w-full h-[130%] -top-[15%]"
        style={{ transform: `translateY(${offsetY}px)` }}
      >
        <img
          src={HERO_IMAGE}
          alt="Muncitori care montează acoperiș"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/50" />
      </div>

      {/* Content — full width, no grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 pb-24">
        <div className="w-full">
          {/* Title — diagonal layout */}
          <div
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-foreground leading-[1.05] mb-8 uppercase"
            style={{ fontFamily: 'var(--font-inter)', letterSpacing: '-0.02em' }}
          >
            {/* Line 1: ACOPERIȘURI — left aligned */}
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                Acoperișuri
              </motion.div>
            </div>
            {/* Line 2: CARE DEFINESC — centered */}
            <div className="overflow-hidden text-center">
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                care definesc
              </motion.div>
            </div>
            {/* Line 3: ORIZONTUL — right aligned, red */}
            <div className="overflow-hidden text-right">
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-primary"
              >
                orizontul.
              </motion.div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="text-primary text-lg lg:text-xl max-w-xl leading-relaxed mb-10 font-black mx-auto text-center tracking-widest uppercase"
          >
            Oferim servicii de urgență 24/7 București & Ilfov
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <motion.button
              onClick={() => scrollTo('#contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="relative px-8 py-4 bg-primary text-primary-foreground font-black rounded-sm text-base tracking-widest uppercase overflow-hidden group"
            >
              <span className="relative z-10">Solicită Ofertă Gratuită</span>
              <motion.span
                className="absolute inset-0 bg-white/10"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>

            <motion.button
              onClick={() => scrollTo('#servicii')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 border-2 border-border text-foreground font-bold rounded-sm text-base tracking-widest uppercase hover:border-primary hover:text-primary transition-colors duration-300"
            >
              Descoperă Serviciile
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 cursor-pointer text-muted-foreground hover:text-primary transition-colors"
          onClick={() => scrollTo('#servicii')}
        >
          <span className="text-xs tracking-[0.2em] uppercase font-bold">Descoperă</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
