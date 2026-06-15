import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Acasă', href: '#hero' },
  { label: 'Servicii', href: '#servicii' },
  { label: 'Testimoniale', href: '#testimoniale' },
  { label: 'Contact', href: '#contact' },
];

function NavButton({ label, href, active, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative px-5 h-full text-sm font-bold tracking-[0.12em] uppercase overflow-hidden"
      style={{ fontFamily: 'var(--font-inter)' }}
    >
      {/* Fill from center-left and center-right → black on hover/active */}
      <AnimatePresence>
        {(hovered || active) && (
          <>
            <motion.span
              key="left"
              className="absolute inset-y-0 left-0"
              style={{ background: 'hsl(0,0%,8%)' }}
              initial={{ width: 0 }}
              animate={{ width: '50%' }}
              exit={{ width: 0 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            />
            <motion.span
              key="right"
              className="absolute inset-y-0 right-0"
              style={{ background: 'hsl(0,0%,8%)' }}
              initial={{ width: 0 }}
              animate={{ width: '50%' }}
              exit={{ width: 0 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            />
          </>
        )}
      </AnimatePresence>
      <span className="relative z-10 text-white">{label}</span>
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      // Detect active section
      for (const link of [...navLinks].reverse()) {
        const el = document.querySelector(link.href);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(link.href);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(href);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/97 backdrop-blur-xl border-b border-border shadow-lg shadow-black/30'
          : 'bg-background/60 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto pl-6 lg:pl-8 pr-0 overflow-visible">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => scrollTo('#hero')} className="flex items-center hover:opacity-80 transition-opacity">
            <img 
              src="https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/e898d8133_logo_transparent1.png"
              alt="Acoperișuri Premium"
              className="h-12 w-auto"
            />
          </button>

          {/* Desktop Nav — unified parallelogram bar extending to right edge */}
          <div className="hidden lg:flex items-center flex-1 justify-end">
            {/* Phone number */}
            <a
              href="tel:+40786188957"
              className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors tracking-wide mr-6"
            >
              <Phone className="w-4 h-4" />
              <span>0786 188 957</span>
            </a>
            {/* Parallelogram nav bar — clips right to page edge */}
            <div
              className="relative flex items-stretch h-10"
              style={{
                background: 'hsl(0,80%,55%)',
                clipPath: 'polygon(16px 0%, 100% 0%, 100% 100%, 0% 100%)',
                marginRight: '-2rem',
                paddingRight: '2rem',
              }}
            >
              {navLinks.map((link, index) => (
                <React.Fragment key={link.href}>
                  {index > 0 && (
                    <div className="w-px self-stretch my-1.5" style={{ background: 'rgba(255,255,255,0.18)' }} />
                  )}
                  <NavButton
                    label={link.label}
                    href={link.href}
                    active={activeSection === link.href}
                    onClick={() => scrollTo(link.href)}
                  />
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-foreground p-2"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <div className="px-6 py-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`block w-full text-left py-3 font-bold text-base tracking-wide uppercase border-b border-border/50 transition-colors ${
                    activeSection === link.href ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('#contact')}
                className="mt-4 w-full px-6 py-3 bg-primary text-primary-foreground font-bold rounded-sm text-center uppercase tracking-widest"
              >
                Solicită Ofertă
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
