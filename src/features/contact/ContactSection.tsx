import { Clock, Instagram, MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '@/constants/business';
import { buildGeneralLink } from '@/utils/whatsapp';
import { SectionHeading } from '@/components/ui/SectionHeading';

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    title: 'Alamat Kantor',
    value: `${BUSINESS_INFO.address}, ${BUSINESS_INFO.city}`,
  },
  {
    icon: Clock,
    title: 'Jam Operasional',
    value: BUSINESS_INFO.hours,
  },
  {
    icon: Phone,
    title: 'WhatsApp Office',
    value: BUSINESS_INFO.phone,
  },
];

export function ContactSection() {
  return (
    <section className="py-24 bg-white" id="kontak">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionHeading
              title="Kunjungi Studio Kami untuk Diskusi"
              subtitle="Our Studio"
            />

            <div className="space-y-8">
              {CONTACT_ITEMS.map((item) => (
                <div key={item.title} className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-secondary flex items-center justify-center text-brand-primary shrink-0">
                    <item.icon size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-brand-text/60 leading-relaxed">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex gap-4">
              <a
                href={`https://instagram.com/${BUSINESS_INFO.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-brand-secondary rounded-full text-brand-primary hover:bg-brand-primary hover:text-white transition-all"
                aria-label="Instagram Kisah Kita"
              >
                <Instagram size={24} />
              </a>
              <a
                href={buildGeneralLink('Halo Kisah Kita, saya ingin bertanya.')}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-brand-secondary rounded-full text-brand-primary hover:bg-brand-primary hover:text-white transition-all"
                aria-label="WhatsApp Kisah Kita"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>

          <div className="h-[450px] rounded-3xl overflow-hidden shadow-2xl border-8 border-brand-secondary/30 relative">
            <iframe
              src={BUSINESS_INFO.mapsEmbedSrc}
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
              loading="lazy"
              title={`Peta Lokasi ${BUSINESS_INFO.name}`}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute top-4 left-4 p-3 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-brand-border pointer-events-none">
              <div className="flex items-center gap-2 text-brand-primary font-bold text-xs">
                <MapPin size={14} aria-hidden="true" /> Prawirotaman Village
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}