import { Heart, Stars, Users } from 'lucide-react';
import type { Stat } from '@/types';

export const STATS: Stat[] = [
  { label: 'Pernikahan Sukses', value: '250+', icon: Heart },
  { label: 'Partner Vendor', value: '40', icon: Users },
  { label: 'Rating Klien', value: '4.9/5', icon: Stars },
];