import { motion } from 'motion/react';
import { FAQS } from '@/constants/faqs';
import { buildGeneralLink } from '@/utils/whatsapp';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FaqItem } from './FaqItem';

export function FaqSection() {
  return (
    <section className="py-24 bg-brand-secondary/30" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          title="Mungkin Ini Yang Anda Tanyakan"
          subtitle="F.A.Q"
          centered
        />

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <FaqItem faq={faq} />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 p-6 md:p-8 bg-brand-primary rounded-3xl text-center text-brand-secondary">
          <h4 className="text-xl md:text-2xl font-serif mb-3 md:mb-4">
            Masih Butuh Penjelasan?
          </h4>
          <p className="text-sm text-brand-secondary/80 mb-6 md:mb-8">
            Tim admin kami siap membantu menjelaskan detail paket via chat personal.
          </p>
          <a
            href={buildGeneralLink('Halo, saya masih bingung soal FAQ...')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2.5 md:px-10 md:py-3.5 bg-brand-accent text-brand-dark rounded-full font-bold hover:scale-105 transition-all text-sm md:text-base"
          >
            Tanya Langsung Lewat WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}