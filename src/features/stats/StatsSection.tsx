import { motion } from 'motion/react';
import { STATS } from '@/constants/stats';

export function StatsSection() {
  return (
    <section className="py-20 bg-brand-secondary border-y border-brand-border/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-6 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-brand-border flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                <stat.icon size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-4xl font-serif font-bold text-brand-dark leading-none mb-2">
                  {stat.value}
                </h3>
                <p className="text-sm text-brand-text/60 font-medium tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}