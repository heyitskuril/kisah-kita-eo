import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({ title, subtitle, centered = false }: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeUp}
      className={`mb-12 md:mb-20 ${centered ? 'text-center' : ''}`}
    >
      {subtitle && (
        <span className="text-brand-accent font-medium tracking-widest uppercase text-xs mb-3 block">
          ✦ {subtitle}
        </span>
      )}
      <h2 className="section-title">{title}</h2>
      <div className={`h-1 w-20 bg-brand-accent mt-4 ${centered ? 'mx-auto' : ''}`} />
    </motion.div>
  );
}