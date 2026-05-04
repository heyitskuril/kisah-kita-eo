import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';
import { GALLERY_ITEMS } from '@/constants/gallery';
import { BUSINESS_INFO } from '@/constants/business';
import { SectionHeading } from '@/components/ui/SectionHeading';

function getGridClass(size: 'large' | 'medium' | 'small'): string {
  if (size === 'large') return 'md:col-span-2 md:row-span-2';
  if (size === 'medium') return 'md:col-span-2';
  return '';
}

export function GallerySection() {
  return (
    <section className="py-24 bg-white" id="galeri">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Abadikan Setiap Detik Keajaiban"
          subtitle="Our Portfolio"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[700px]">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`relative overflow-hidden rounded-2xl group min-h-[250px] md:min-h-0 ${getGridClass(item.size)}`}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/30 transition-colors duration-500" />
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white text-xs font-bold tracking-widest uppercase">
                  ✦ {item.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={`https://instagram.com/${BUSINESS_INFO.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-2.5 md:px-8 md:py-3 bg-brand-secondary text-brand-dark rounded-full font-bold hover:bg-brand-primary hover:text-white transition-all text-sm md:text-base"
          >
            <Instagram size={20} /> Lihat Portfolio di Instagram
          </a>
        </div>
      </div>
    </section>
  );
}