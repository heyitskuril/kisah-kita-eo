import { AnimatePresence, motion } from 'motion/react';
import { buildGeneralLink } from '@/utils/whatsapp';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FloatingWhatsAppProps {
  visible: boolean;
}

export function FloatingWhatsApp({ visible }: FloatingWhatsAppProps) {
  const link = buildGeneralLink(
    'Halo, saya berkunjung dari website Kisah Kita. Ingin tanya-tanya soal paket pernikahan.',
  );

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white px-4 py-2 rounded-2xl shadow-xl text-sm font-bold text-brand-dark border border-brand-border pointer-events-none mb-1"
          >
            Ada yang bisa dibantu?
          </motion.div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform duration-300"
            aria-label="Chat via WhatsApp"
          >
            <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25" />
            <WhatsAppIcon />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}