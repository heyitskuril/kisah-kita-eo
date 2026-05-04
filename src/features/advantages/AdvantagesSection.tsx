import { motion } from 'motion/react';
import { Clock, MapPin } from 'lucide-react';
import { ADVANTAGES } from '@/constants/advantages';

export function AdvantagesSection() {
  return (
    <section className="py-24 bg-brand-primary text-brand-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-4 block">
              Our Advantages
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              Mewujudkan Impian Dengan Cara Paling Tenang
            </h2>
            <p className="text-brand-secondary/70 text-lg mb-12">
              Kami percaya EO yang baik adalah mereka yang tidak terlihat sibuk di lapangan,
              karena semuanya sudah terencana secara presisi di balik layar.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <Clock size={32} className="text-brand-accent mb-2" aria-hidden="true" />
                <h4 className="font-bold mb-2">Respons Cepat</h4>
                <p className="text-xs text-brand-secondary/70 tracking-wide">
                  Admin siaga memberikan feedback dalam hitungan menit.
                </p>
              </div>
              <div>
                <MapPin size={32} className="text-brand-accent mb-2" aria-hidden="true" />
                <h4 className="font-bold mb-2">Local Insight</h4>
                <p className="text-xs text-brand-secondary/70 tracking-wide">
                  Relasi kuat dengan vendor-vendor terbaik di Jogja.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {ADVANTAGES.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors"
              >
                <div className="flex gap-6">
                  <item.icon
                    size={24}
                    className="text-brand-accent mt-1 shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-sm text-brand-secondary/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}