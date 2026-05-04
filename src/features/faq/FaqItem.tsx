import { ChevronDown } from 'lucide-react';
import type { Faq } from '@/types';

interface FaqItemProps {
  faq: Faq;
}

export function FaqItem({ faq }: FaqItemProps) {
  return (
    <div className="bg-white rounded-2xl border border-brand-border/50 overflow-hidden">
      <details className="group">
        <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-brand-dark hover:text-brand-primary select-none transition-colors">
          {faq.question}
          <ChevronDown
            size={20}
            className="text-brand-accent group-open:rotate-180 transition-transform duration-300 shrink-0 ml-4"
            aria-hidden="true"
          />
        </summary>
        <div className="px-6 pb-6 text-sm text-brand-text/80 leading-relaxed border-t border-brand-border/30 pt-4">
          {faq.answer}
        </div>
      </details>
    </div>
  );
}