import { Instagram, MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '@/constants/business';
import { NAV_ITEMS } from '@/constants/navigation';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-brand-secondary py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <span className="font-serif text-3xl font-bold tracking-tighter block mb-6">
              Kisah<span className="text-brand-accent">Kita.</span>
            </span>
            <p className="text-brand-secondary/80 text-sm leading-relaxed max-w-sm">
              Cerita cinta Anda adalah inspirasi kami. Mari merayakannya dengan cara yang paling
              teratur, elegan, dan penuh rasa.
            </p>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-brand-accent text-xs tracking-widest uppercase">
              Quick Links
            </h5>
            <ul className="space-y-4 text-sm text-brand-secondary/80">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-brand-accent transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-brand-accent text-xs tracking-widest uppercase">
              Connect
            </h5>
            <div className="flex flex-col gap-4 text-sm text-brand-secondary/80">
              <a
                href={`https://instagram.com/${BUSINESS_INFO.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-brand-accent transition-colors"
              >
                <Instagram size={16} /> @{BUSINESS_INFO.instagram}
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.wa}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-brand-accent transition-colors"
              >
                <Phone size={16} /> {BUSINESS_INFO.phone}
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={16} /> {BUSINESS_INFO.city}, ID
              </span>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-brand-secondary/80 uppercase tracking-widest">
            © {currentYear} {BUSINESS_INFO.name} Wedding Planner. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] text-brand-secondary/80 uppercase tracking-widest">
            <a href="#" className="hover:text-brand-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}