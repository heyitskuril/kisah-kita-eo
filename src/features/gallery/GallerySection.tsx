import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';
import { GALLERY_ITEMS } from '@/constants/gallery';
import { BUSINESS_INFO } from '@/constants/business';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function GallerySection() {
  return (
    <section className="py-24 bg-white" id="galeri">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Abadikan Setiap Detik Keajaiban"
          subtitle="Our Portfolio"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-[200px] gap-4">
          {GALLERY_ITEMS.map((item, i) => {
            let spanClass = '';

            if (i === 0) spanClass = 'md:col-span-3 md:row-span-2'; 
            else if (i === 1) spanClass = 'md:col-span-3 md:row-span-2';
            else if (i === 2) spanClass = 'md:col-span-2 md:row-span-2';
            else if (i === 3) spanClass = 'md:col-span-2 md:row-span-2';
            else spanClass = 'md:col-span-2 md:row-span-2';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`relative overflow-hidden rounded-2xl group ${spanClass}`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />

                {/* Caption */}
                <div className="absolute bottom-4 left-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white text-xs font-semibold tracking-wide">
                    {item.alt}
                  </p>
                </div>
              </motion.div>
            );
          })}
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