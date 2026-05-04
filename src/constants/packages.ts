import type { Package } from '@/types';

export const PACKAGES: Package[] = [
  {
    id: 1,
    name: 'Wedding Planning & Management',
    category: 'Management',
    description:
      'Jasa perencanaan menyeluruh sejak 6-12 bulan sebelum hari H. Cocok untuk pasangan sibuk yang menginginkan konsep yang terarah.',
    price: 'Rp 15.000.000',
    image: '/images/services/01-wedding-planning-and-management.webp',
    badge: 'Terlaris',
    waMessage: 'Halo Kisah Kita, saya tertarik dengan paket Wedding Planning & Management.',
    features: [
      'Konsep & Tema Storytelling',
      'Budgeting Management',
      'Vendor Sourcing & Negotiation',
      'Tim 10 orang di Hari H',
    ],
  },
  {
    id: 2,
    name: 'All-in Royal Wedding Package',
    category: 'Full Package',
    description:
      'Pernikahan mewah tanpa pusing. Sudah termasuk Venue Heritage, Catering Premium, MUA ternama Jogja, dan Dekorasi Megah.',
    price: 'Rp 150.000.000',
    image: '/images/services/02-allin-royal-wedding-package.webp',
    badge: 'Rekomendasi',
    waMessage: 'Halo Kisah Kita, saya ingin tanya detail All-in Royal Wedding Package.',
    features: [
      'Venue Luxury Heritage',
      'Catering 500 pax',
      'Premium MUA & Attire',
      'Cinematic Documentation',
    ],
  },
  {
    id: 3,
    name: 'Intimate Wedding Session',
    category: 'Intimate',
    description:
      'Sesi romantis untuk keluarga dan sahabat terdekat (max 100 pax). Menghadirkan suasana Jogja yang kental dan hangat.',
    price: 'Rp 20.000.000',
    image: '/images/services/03-wedding-intimate.webp',
    badge: 'Best Value',
    waMessage: 'Halo Kisah Kita, saya ingin konsultasi Intimate Wedding.',
    features: [
      'Venue Semi-Outdoor',
      'Intimate Decor',
      'Acoustic Music',
      'Digital Invitation Free',
    ],
  },
];