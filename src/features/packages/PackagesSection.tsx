import { PACKAGES } from '@/constants/packages';
import { buildGeneralLink } from '@/utils/whatsapp';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PackageCard } from './PackageCard';

export function PackagesSection() {
  return (
    <section className="py-24 bg-brand-secondary" id="layanan">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Pilihan Layanan Terkurasi"
          subtitle="Wedding Packages"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PACKAGES.map((pkg, i) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              featured={i === 1}
              animationDelay={i * 0.1}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-brand-text/100 mb-6 italic">
            Ingin kustomisasi paket sesuai keinginan anda?
          </p>
          <a
            href={buildGeneralLink('Halo Kisah Kita, saya ingin diskusi paket kustom.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm md:text-base"
          >
            Diskusi Paket Kustom
          </a>
        </div>
      </div>
    </section>
  );
}