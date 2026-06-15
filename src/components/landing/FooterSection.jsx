import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function FooterSection() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/e898d8133_logo_transparent1.png"
                alt="Acoperișuri Premium"
                className="h-12 w-auto"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wide">
              Navigare
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Acasă', href: '#hero' },
                { label: 'Servicii', href: '#servicii' },
                { label: 'De ce noi', href: '#de-ce-noi' },
                { label: 'Testimoniale', href: '#testimoniale' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wide">
              Servicii
            </h4>
            <ul className="space-y-3">
              {['Învelitori ceramice', 'Învelitori metalice', 'Acoperișuri plate', 'Jgheaburi & burlane', 'Renovare acoperiș', 'Izolație & mansardare'].map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('#contact')}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wide">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+40786188957" className="flex items-center gap-3 text-muted-foreground text-sm hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                  0786 188 957
                </a>
              </li>


            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Acoperișuri Premium. Toate drepturile rezervate.
          </p>
          <p className="text-muted-foreground text-xs">
            Calitate · Garanție · Profesionalism
          </p>
        </div>
      </div>
    </footer>
  );
}
