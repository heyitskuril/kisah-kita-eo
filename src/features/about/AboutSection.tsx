import { motion } from 'motion/react';
import { Check, ChevronRight, Quote } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

const SELLING_POINTS = [
  {
    title: 'Heritage Specialists',
    description: 'Ahli dalam mengelola pernikahan di venue heritage Yogyakarta.',
  },
  {
    title: 'Transparent Budgeting',
    description: 'Sistem manajemen anggaran yang terbuka tanpa biaya tersembunyi.',
  },
  {
    title: 'Cinematic Vision',
    description: 'Memastikan setiap angle acara Anda secantik film layar lebar.',
  },
];

export function AboutSection() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden" id="tentang">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)' }}
            >
              <img
                src="https://images.unsplash.com/photo-1541250848049-b4f71413cc30?w=800&q=80"
                alt="Tim Kisah Kita"
                className="w-full aspect-[4/5] object-cover scale-x-[-1]"
                loading="lazy"
              />
            </motion.div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-secondary rounded-full -z-0 opacity-50" />
            <div className="absolute top-20 -left-10 w-20 h-20 bg-brand-accent/20 rounded-full blur-2xl animate-pulse" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 z-20 bg-brand-dark text-white p-6 rounded-2xl shadow-xl max-w-[240px]"
            >
              <Quote className="text-brand-accent mb-4" size={24} aria-hidden="true" />
              <p className="text-sm italic font-light leading-relaxed mb-4">
                "Setiap pasangan punya nada yang unik. Tugas kami adalah mengaransemennya menjadi
                simfoni yang indah."
              </p>
              <p className="text-xs font-bold tracking-widest uppercase text-brand-secondary/60">
                — Founder, Kisah Kita
              </p>
            </motion.div>
          </div>

          <div>
            <SectionHeading
              title="Kami Percaya Bahwa Setiap Detail Punya Cerita"
              subtitle="Filosofi Kami"
            />
            <p className="text-brand-text/70 text-lg mb-8 leading-relaxed">
              Di Kisah Kita, kami menjunjung tinggi nilai-nilai{' '}
              <span className="text-brand-dark font-semibold">Organised Tranquility</span>. Kami
              paham bahwa perencanaan pernikahan bisa melelahkan, itulah sebabnya kami hadir untuk
              menjadi tim yang paling menenangkan Anda di lapangan.
            </p>

            <ul className="space-y-6 mb-10">
              {SELLING_POINTS.map((point) => (
                <li key={point.title} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary mt-1 shrink-0">
                    <Check size={14} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark">{point.title}</h4>
                    <p className="text-sm text-brand-text/60">{point.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="#layanan"
              className="inline-flex items-center gap-2 font-bold text-brand-primary border-b-2 border-brand-accent/30 pb-1 hover:border-brand-accent transition-all group"
            >
              Lihat Bagaimana Kami Bekerja{' '}
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}