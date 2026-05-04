import { AnimatePresence, motion } from 'motion/react';
import { BUSINESS_INFO } from '@/constants/business';
import { buildGeneralLink } from '@/utils/whatsapp';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FloatingWhatsAppProps {
  visible: boolean;
}

export function FloatingWhatsApp({ visible }: FloatingWhatsAppProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed bottom-8 right-8 z-[60]"
        >
          <div className="relative group">
            <div className="absolute bottom-full right-0 mb-3 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 w-48">
              <div className="bg-white text-gray-800 text-xs font-bold py-3 px-4 rounded-2xl shadow-xl border border-gray-100 flex items-center">
                <span className="flex-1 text-center">Ada pertanyaan? Chat kami sekarang!</span>
                <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white rotate-45 border-r border-b border-gray-100" />
              </div>
            </div>
            <a
              href={buildGeneralLink(`Halo ${BUSINESS_INFO.name}, saya mau bertanya...`)}
              className="w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
              aria-label="Chat via WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}