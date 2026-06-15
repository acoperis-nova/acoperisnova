import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Alexandru Popescu',
    location: 'București, Sector 1',
    text: 'Echipa a fost excepțională de la început până la final. Acoperișul nostru arată spectaculos, iar calitatea materialelor este vizibilă. Recomand cu toată încrederea!',
    project: 'Învelitoare ceramică — Vilă rezidențială',
  },
  {
    name: 'Maria Ionescu',
    location: 'Voluntari, Ilfov',
    text: 'Am ales această firmă pentru renovarea completă a acoperișului. Au respectat termenele, prețul și calitatea promisă. Suntem foarte mulțumiți de rezultat.',
    project: 'Renovare completă acoperiș',
  },
  {
    name: 'Andrei Dumitrescu',
    location: 'Otopeni, Ilfov',
    text: 'Profesionalism desăvârșit. Au venit cu soluții la care nu ne-am fi gândit și au transformat mansarda într-un spațiu extraordinar. Garanția extinsă ne oferă liniște.',
    project: 'Mansardare și izolație termică',
  },
  {
    name: 'Elena Stanciu',
    location: 'Pipera, București',
    text: 'Lucrare impecabilă la acoperișul plat al birourilor noastre. Zero infiltrații de 3 ani. Răspuns rapid și echipă foarte organizată.',
    project: 'Hidroizolație acoperiș plat — Clădire comercială',
  },
];

const videoTestimonials = [
  'https://player.cloudinary.com/embed/?cloud_name=dgnlmvzgk&public_id=WhatsApp_Video_2026-04-14_at_18.15.13_1_v3tvxl',
  'https://player.cloudinary.com/embed/?cloud_name=dgnlmvzgk&public_id=WhatsApp_Video_2026-04-14_at_18.15.13_unmd3c',
  'https://player.cloudinary.com/embed/?cloud_name=dgnlmvzgk&public_id=WhatsApp_Video_2026-04-14_at_18.15.12_ita8mr',
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="testimoniale" className="py-24 lg:py-32 relative bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary text-sm font-semibold tracking-[0.25em] uppercase">
              Testimoniale
            </span>
            <div className="w-12 h-px bg-primary" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
            Ce spun <span className="text-primary">clienții noștri</span>
          </h2>
        </motion.div>

        {/* Video Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {videoTestimonials.map((url, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-lg overflow-hidden border border-border/50 bg-card aspect-video"
            >
              <iframe
                src={url}
                className="w-full h-full"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              />
            </motion.div>
          ))}
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto relative">
          <Quote className="absolute -top-4 -left-2 w-20 h-20 text-primary/10" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="bg-card border border-border/50 rounded-lg p-8 lg:p-12 text-center relative"
            >
              <p className="text-foreground text-lg lg:text-xl leading-relaxed mb-8 font-light italic">
                "{t.text}"
              </p>
              <div className="w-16 h-px bg-primary mx-auto mb-6" />
              <div>
                <div className="font-display text-lg font-bold text-foreground">{t.name}</div>
                <div className="text-muted-foreground text-sm mt-1">{t.location}</div>
                <div className="text-primary text-sm font-medium mt-2">{t.project}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-primary w-8' : 'bg-border hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
