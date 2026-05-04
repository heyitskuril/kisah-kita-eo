import { BUSINESS_INFO } from '@/constants/business';

export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS_INFO.wa}?text=${encoded}`;
}

export function buildPackageLink(packageName: string, customMessage?: string): string {
  const message = customMessage ?? `Halo ${BUSINESS_INFO.name}, saya tertarik dengan paket ${packageName}.`;
  return buildWhatsAppLink(message);
}

export function buildGeneralLink(message: string): string {
  return buildWhatsAppLink(message);
}