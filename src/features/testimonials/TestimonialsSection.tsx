import { motion } from 'motion/react';
import { Stars } from 'lucide-react';
import { TESTIMONIALS } from '@/constants/testimonials';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-brand-secondary/30 relative overflow-hidden">
      <div
        className="absolute top-0 left-0 text-[10rem] font-bold text-brand-primary/[0.03] select-none pointer-events-none -translate-x-1/4 -translate-y-1/2 font-serif"
        aria-hidden="true"
      >
        LOVE
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Apa Kata Mereka Tentang Kami" subtitle="Love Stories" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 bg-white rounded-3xl shadow-sm border border-brand-border/30 flex flex-col ${
                i === 1 ? 'md:translate-y-8' : ''
              }`}
            >
              <div
                className="flex gap-1 mb-6"
                aria-label={`Rating: ${testimonial.rating} bintang`}
              >
                {Array.from({ length: testimonial.rating }).map((_, idx) => (
                  <Stars key={idx} size={14} className="fill-brand-accent text-brand-accent" />
                ))}
              </div>

              <blockquote className="text-brand-text text-lg italic mb-10 flex-grow font-serif">
                "{testimonial.review}"
              </blockquote>

              <div className="flex items-center gap-4 pt-6 border-t border-brand-border/50">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
                <div>
                  <h5 className="font-bold text-brand-dark text-sm">{testimonial.name}</h5>
                  <p className="text-[10px] text-brand-text/50 uppercase tracking-tighter">
                    {testimonial.city} • {testimonial.product}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}