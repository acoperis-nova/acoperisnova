import React from 'react';
import { motion } from 'framer-motion';

const beforeAfterImages = [
  'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/b0e0d85c6_WhatsAppImage2026-04-17at182825.jpg',
  'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/8c8b1b615_WhatsAppImage2026-04-17at1828251.jpg',
];

export default function BeforeAfterSection() {
  return (
    <section className="py-16 lg:py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary text-sm font-semibold tracking-[0.25em] uppercase">Transformări Reale</span>
            <div className="w-12 h-px bg-primary" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
            Înainte & <span className="text-primary">După</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {beforeAfterImages.map((url, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="rounded-lg overflow-hidden border border-border/50"
            >
              <img
                src={url}
                alt={`Înainte și după lucrare ${i + 1}`}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
