import { motion } from 'motion/react';
import { Check, Phone } from 'lucide-react';
import type { Package } from '@/types';
import { buildPackageLink } from '@/utils/whatsapp';

interface PackageCardProps {
  pkg: Package;
  featured?: boolean;
  animationDelay?: number;
}

export function PackageCard({ pkg, featured = false, animationDelay = 0 }: PackageCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: animationDelay }}
      className={`group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-brand-border/30 ${
        featured ? 'lg:scale-105 lg:z-10' : ''
      }`}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 bg-brand-primary/90 backdrop-blur-md text-white text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase">
          {pkg.category}
        </div>
        {pkg.badge && (
          <div className="absolute top-4 right-4 bg-brand-accent text-brand-dark text-[10px] font-black tracking-widest px-3 py-1 rounded-full uppercase shadow-lg">
            {pkg.badge}
          </div>
        )}
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-serif font-bold text-brand-dark group-hover:text-brand-primary transition-colors mb-4">
          {pkg.name}
        </h3>
        <p className="text-brand-text/60 text-sm mb-6 line-clamp-2 leading-relaxed">
          {pkg.description}
        </p>

        <ul className="space-y-3 mb-8" aria-label={`Fitur ${pkg.name}`}>
          {pkg.features.map((feat) => (
            <li key={feat} className="flex items-center gap-2 text-xs font-medium text-brand-text/70">
              <Check size={14} className="text-brand-accent shrink-0" />
              {feat}
            </li>
          ))}
        </ul>

        <div className="pt-6 border-t border-brand-border flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-brand-text/40 block mb-1">
              Mulai Dari
            </span>
            <span className="text-xl font-bold text-brand-primary">{pkg.price}</span>
          </div>
          <a
            href={buildPackageLink(pkg.name, pkg.waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-brand-secondary rounded-full text-brand-primary hover:bg-brand-primary hover:text-white transition-all transform group-hover:rotate-12"
            aria-label={`Tanya paket ${pkg.name} via WhatsApp`}
          >
            <Phone size={20} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}