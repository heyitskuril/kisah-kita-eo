export interface NavItem {
  label: string;
  href: string;
}

export interface Package {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  badge?: 'Terlaris' | 'Baru' | 'Rekomendasi' | 'Best Value';
  waMessage: string;
  features: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  city: string;
  rating: number;
  review: string;
  avatar: string;
}

export interface WeddingStep {
  id: number;
  title: string;
  description: string;
  time: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: React.ElementType;
}

export interface GalleryItem {
  id: number;
  image: string;
  size: 'large' | 'medium' | 'small';
  alt: string;
}

export interface Faq {
  id: number;
  question: string;
  answer: string;
}

export interface Advantage {
  title: string;
  description: string;
  icon: React.ElementType;
}