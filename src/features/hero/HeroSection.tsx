import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown, ChevronRight, Stars } from 'lucide-react';
import { BUSINESS_INFO } from '@/constants/business';
import { buildGeneralLink } from '@/utils/whatsapp';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export function HeroSection() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);

  const consultationLink = buildGeneralLink(
    'Halo, saya ingin reservasi untuk first meeting.',
  );

  return (
    <header className="relative h-[100vh] flex items-center overflow-hidden bg-brand-dark">
      <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=85&fit=crop"
          alt="Wedding ceremony background"
          className="w-full h-full object-cover opacity-60 scale-110"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/40" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-3xl"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-brand-accent/20 border border-brand-accent/30 text-brand-accent text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm"
          >
            <Stars size={14} /> Wedding & Event Planner Yogyakarta
          </motion.div>

          <motion.h1 variants={fadeUp} className="heading-display text-white mb-6">
            {BUSINESS_INFO.tagline.split(', ').map((part, i) => (
              <span key={i} className={`block ${i > 0 ? 'text-brand-accent' : ''}`}>
                {part}
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-white/80 text-lg md:text-xl mb-10 max-w-xl font-light leading-relaxed"
          >
            Karena pernikahan adalah karya seni yang menceritakan perjalanan Anda. Kami
            mewujudkannya dengan ketenangan dan presisi.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <a
              href="#layanan"
              className="btn-primary flex items-center justify-center gap-2 text-sm md:text-base"
            >
              Pilih Katalog Paket <ChevronRight size={18} />
            </a>
            <a
              href={consultationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 md:px-8 md:py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-medium hover:bg-white/20 transition-all flex items-center justify-center gap-2 text-sm md:text-base"
            >
              Konsultasi Gratis
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <ChevronDown size={20} />
      </motion.div>
    </header>
  );
}