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
          <button onClick={() => scrollTo('#hero')} className="flex flex-col items-center hover:opacity-80 transition-opacity">
            <img 
              src="https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/e898d8133_logo_transparent1.png"
              alt="Acoperișuri Premium"
              className="h-12 w-auto"
            />
            <span className="text-white font-display font-bold text-sm tracking-wide leading-none">Acoperis Home</span>
          </button>

          {/* Desktop Nav — unified parallelogram bar extending to right edge */}
          <div className="hidden lg:flex items-center flex-1 justify-end">
            {/* Phone number */}
            <a
              href="tel:+40773082734"
              className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors tracking-wide mr-6"
            >
              <Phone className="w-4 h-4" />
              <span>+40 773 082 734</span>
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
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="https://wa.me/40773082734"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6 fill-white">
                <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.773L0 32l8.489-2.002A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.756-1.845l-.484-.287-5.04 1.188 1.216-4.91-.317-.504A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.274-9.874c-.398-.199-2.354-1.162-2.718-1.294-.365-.133-.631-.199-.897.199-.266.398-1.029 1.294-1.261 1.56-.232.266-.465.299-.863.1-.398-.199-1.681-.619-3.202-1.977-1.183-1.056-1.982-2.36-2.214-2.758-.232-.398-.025-.613.174-.811.179-.178.398-.465.597-.697.199-.232.266-.398.398-.664.133-.266.066-.498-.033-.697-.1-.199-.897-2.162-1.229-2.96-.324-.778-.653-.673-.897-.686l-.764-.013c-.266 0-.697.1-.1063.498-.365.398-1.395 1.362-1.395 3.322s1.428 3.854 1.627 4.12c.199.266 2.81 4.291 6.808 6.02.951.411 1.694.656 2.272.84.955.304 1.824.261 2.511.158.766-.114 2.354-.962 2.686-1.891.332-.929.332-1.726.232-1.891-.1-.166-.365-.266-.763-.465z"/>
              </svg>
            </a>
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
