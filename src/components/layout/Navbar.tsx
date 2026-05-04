import { AnimatePresence, motion } from 'motion/react';
import { Instagram, Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { BUSINESS_INFO } from '@/constants/business';
import { NAV_ITEMS } from '@/constants/navigation';
import { buildGeneralLink } from '@/utils/whatsapp';

interface NavbarProps {
  isScrolled: boolean;
}

export function Navbar({ isScrolled }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const consultationLink = buildGeneralLink(
    'Halo Kisah Kita, saya ingin konsultasi awal pernikahan.',
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'glass-nav py-3 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2">
            <span
              className={`font-serif text-2xl font-bold tracking-tighter transition-colors ${
                isScrolled ? 'text-brand-dark' : 'text-brand-dark md:text-brand-secondary'
              }`}
            >
              Kisah<span className="text-brand-accent">Kita.</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium tracking-wide hover:text-brand-accent transition-colors ${
                  isScrolled ? 'text-brand-text' : 'text-brand-secondary'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href={consultationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-brand-primary text-brand-secondary rounded-full text-sm font-semibold hover:scale-105 transition-transform"
            >
              Chat Sekarang
            </a>
          </div>

          <button
            className={`md:hidden p-2 transition-colors ${isScrolled ? 'text-brand-dark' : 'text-brand-secondary'}`}
            onClick={() => setIsMenuOpen(true)}
            aria-label="Buka menu navigasi"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-brand-dark text-brand-secondary p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-serif text-2xl font-bold">
                Kisah<span className="text-brand-accent">Kita.</span>
              </span>
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Tutup menu"
              >
                <X size={32} />
              </button>
            </div>

            <nav className="flex flex-col gap-8 text-3xl font-serif">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-brand-accent border-b border-brand-secondary/10 pb-4 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-auto space-y-6">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-3 text-xl hover:text-brand-accent transition-colors"
              >
                <Phone size={20} /> {BUSINESS_INFO.phone}
              </a>
              <a
                href={`https://instagram.com/${BUSINESS_INFO.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-brand-accent transition-colors"
              >
                <Instagram size={24} />
                <span className="font-medium">@{BUSINESS_INFO.instagram}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}