import { motion } from 'motion/react';
import { WEDDING_STEPS } from '@/constants/steps';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function ProcessSection() {
  return (
    <section className="py-24 bg-white" id="proses">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Perjalanan Menuju Hari Bahagia"
          subtitle="The Journey"
          centered
        />

        <div className="relative">
          <div className="hidden lg:block absolute top-[5.5rem] left-[15%] right-[15%] h-[2px] bg-brand-border z-0">
            <motion.div
              className="h-full bg-brand-accent"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {WEDDING_STEPS.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-brand-primary font-bold text-2xl border-2 border-transparent group-hover:border-brand-accent group-hover:scale-110 transition-all duration-500 shadow-xl font-serif">
                  {step.id}
                </div>
                <span className="text-[10px] font-bold text-brand-accent block mb-2 uppercase tracking-widest">
                  {step.time}
                </span>
                <h4 className="text-xl font-serif font-bold text-brand-dark mb-4">
                  {step.title}
                </h4>
                <p className="text-sm text-brand-text/80 leading-relaxed max-w-[200px] mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}