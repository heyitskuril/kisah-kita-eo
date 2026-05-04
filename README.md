# Kisah Kita — Wedding & Event Planner

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-1B1B1F?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-0F172A?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](#)

---

**Kisah Kita** is a premium landing page built for a Wedding & Event Organizer business based in Yogyakarta. The project centers on a storytelling-first approach — where every design decision and copy line reflects the philosophy that a wedding is more than an event, it is a narrative.

Live URL: [Kisah Kita EO](https://kisah-kita-eo.vercel.app)

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | React | 19 |
| Build Tool | Vite | 6 |
| Language | TypeScript | 5.8 |
| Styling | Tailwind CSS | 4 |
| Animation | Motion (Framer Motion) | 12 |
| Icons | Lucide React | latest |
| Fonts | Cormorant Garamond + Jost | Google Fonts |

---

## Project Goals

1. **Portfolio Showcase** : Demonstrating expertise in building premium service-industry landing pages with high design quality and proper code architecture.
2. **SME Digitalization** : A case study in giving Indonesian local EO businesses a digital presence that matches the quality of their service.
3. **Reusable Boilerplate** : A modular, feature-based architecture ready to be adapted for any wedding organizer or event planner client.

---

## Key Features

- **Cinematic Hero** : Fullscreen parallax hero with scroll-driven image movement.
- **Scroll Progress Bar** : Visual reading progress indicator at the top of the viewport.
- **Mobile-First Responsive** : Slide-in mobile navigation with full-screen overlay.
- **Package Catalog** : Featured card layout with badge system and direct WhatsApp order links.
- **Bento Gallery Grid** : Asymmetric image grid with hover reveal effect.
- **Native FAQ Accordion** : HTML `<details>` element, zero JavaScript overhead.
- **Animated Process Timeline** : Step-by-step journey with scroll-triggered progress line.
- **Floating WhatsApp Button** : Appears after 500px scroll with pre-filled message context.
- **SEO Foundation** : Semantic HTML, meta tags, Open Graph, and local Indonesian keywords.

---

## Project Architecture

```text
kisah-kita-eo/
├── public/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Scroll-aware glass navbar + mobile overlay
│   │   │   └── Footer.tsx          # Site-wide footer with quick links
│   │   └── ui/
│   │       ├── FloatingWhatsApp.tsx  # Floating CTA button
│   │       ├── SectionHeading.tsx    # Reusable animated section title
│   │       └── WhatsAppIcon.tsx      # Inline SVG WA icon
│   ├── features/
│   │   ├── hero/                   # Cinematic fullscreen hero
│   │   ├── stats/                  # Brand proof achievement row
│   │   ├── about/                  # Narrative split with founder quote
│   │   ├── packages/               # Wedding package catalog + cards
│   │   ├── advantages/             # Dark contrast feature section
│   │   ├── gallery/                # Bento grid portfolio
│   │   ├── testimonials/           # Asymmetric testimonial mosaic
│   │   ├── process/                # Animated journey timeline
│   │   ├── faq/                    # Native accordion FAQ
│   │   └── contact/                # Map + contact info
│   ├── constants/                  # All static data, zero inline data
│   │   ├── business.ts             # Single source of truth for business info
│   │   ├── navigation.ts
│   │   ├── packages.ts
│   │   ├── testimonials.ts
│   │   ├── steps.ts
│   │   ├── stats.ts
│   │   ├── gallery.ts
│   │   ├── faqs.ts
│   │   └── advantages.ts
│   ├── hooks/
│   │   └── useScrollDetection.ts   # Reusable scroll state hook
│   ├── types/
│   │   └── index.ts                # All shared TypeScript interfaces
│   ├── utils/
│   │   └── whatsapp.ts             # WhatsApp link builder utilities
│   ├── App.tsx                     # Composition root only
│   ├── main.tsx
│   └── index.css                   # Tailwind + custom design tokens
├── index.html
├── vite.config.ts
└── tsconfig.json
```

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/heyitskuril/kisah-kita-eo.git
cd kisah-kita-eo

# Scaffold the project structure (first time only)
bash scaffold.sh

# Install dependencies
npm install

# Run development server
npm run dev

# Type check
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Customization

All business data is centralized in `src/constants/business.ts`. Adapting this project for a new client requires updating that file and the data files in `/constants` — no component files need to be touched.

```typescript
// src/constants/business.ts
export const BUSINESS_INFO = {
  name: 'Kisah Kita',
  phone: '08985175971',
  wa: '628985175971',
  address: 'Jl. Prawirotaman No.45, Kec. Mergangsan',
  city: 'Yogyakarta',
  hours: '09.00 - 18.00 (Setiap Hari)',
  instagram: 'heyitskuril',
  // ...
} as const;
```

To swap the WhatsApp number across the entire site, change `wa` in one place. Every link updates automatically through `src/utils/whatsapp.ts`.

---

## Design System

The visual identity is defined as CSS custom properties in `src/index.css` via Tailwind's `@theme` directive.

| Token | Value | Usage |
|---|---|---|
| `brand-primary` | `#2C4A3E` | Buttons, headings, active states |
| `brand-secondary` | `#F7F3EE` | Page backgrounds, card fills |
| `brand-accent` | `#D4AF37` | Gold highlights, dividers, badges |
| `brand-dark` | `#1A1A1A` | Footer, dark sections, text |
| `font-serif` | Cormorant Garamond | Headings, quotes, display text |
| `font-sans` | Jost | Body, labels, UI elements |

---

## Deployment

This project deploys to Vercel with zero configuration. Push to `main` triggers automatic production deployment.

```bash
# Install Vercel CLI (optional)
npm i -g vercel

# Deploy to production
vercel --prod
```

---

## Author

**Kuril Web Developer**
<br/>
Empowering Indonesian MSMEs and local brands to go digital.

- WhatsApp: [+62 898-5175-971](https://wa.me/628985175971)
- Instagram: [@heyitskuril](https://instagram.com/heyitskuril)
- Portfolio: [Kuril.dev](https://kuril.dev)
---

## Note

This is a concept project created for portfolio purposes and is not an official website for a registered commercial brand. The business data used is fictional and for demonstration only.
