import { AnimatePresence, motion } from 'motion/react';
import { BUSINESS_INFO } from '@/constants/business';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FloatingDevBadgeProps {
  visible: boolean;
}

export function FloatingDevBadge({ visible }: FloatingDevBadgeProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="fixed bottom-24 right-8 z-[55] hidden sm:flex items-center gap-4 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100/50 group cursor-default animate-bounce"
        >
          {/* Ikon WhatsApp dengan Hover Effect */}
          <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg shadow-green-100 group-hover:scale-110 transition-transform duration-300">
            <WhatsAppIcon className="w-5 h-5" />
          </div>

          {/* Konten Teks */}
          <div className="pr-4">
            <p className="text-[10px] font-extrabold text-gray-700 uppercase tracking-widest leading-none mb-2">
              Mau website seperti ini?
            </p>
            <p className="text-sm font-bold text-[#1A1A1A] leading-none">
              Hubungi Kuril Dev : {BUSINESS_INFO.phone}
            </p>
          </div>

          {/* Hidden Link Area */}
          <a
            href={`https://wa.me/${BUSINESS_INFO.developerWa || '628985175971'}`}
            className="absolute inset-0 z-10 rounded-2xl"
            aria-label="Contact Developer"
            target="_blank"
            rel="noopener noreferrer"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}