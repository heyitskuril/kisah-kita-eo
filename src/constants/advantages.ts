import { Check, Heart, Stars } from 'lucide-react';
import type { Advantage } from '@/types';

export const ADVANTAGES: Advantage[] = [
  {
    title: 'Storytelling Concept',
    description:
      'Setiap rangkaian acara memiliki makna filosofis yang kami gali bersama pasangan.',
    icon: Stars,
  },
  {
    title: 'Mental Care',
    description:
      'Kami tidak hanya memandu acara, tapi mendampingi mental calon pengantin agar tetap tenang.',
    icon: Heart,
  },
  {
    title: 'No Stealth Costs',
    description:
      'Kejujuran adalah pondasi. Semua biaya vendor dibayarkan langsung secara transparan.',
    icon: Check,
  },
];