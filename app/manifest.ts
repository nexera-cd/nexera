import type { MetadataRoute } from 'next';

const LOGO_URL =
  'https://4ydwi7yoayrluee7.public.blob.vercel-storage.com/Nexera/1792945147233.jpg';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'NEXERA — Écosystèmes Numériques & Ingénierie Logicielle',
    short_name: 'NEXERA',
    description:
      'NEXERA conçoit des écosystèmes logiciels sur mesure, portfolios professionnels livrés en 3 jours, logiciels PC et plateformes SaaS.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F8FAF9',
    theme_color: '#00F076',
    icons: [
      {
        src: LOGO_URL,
        sizes: '48x48',
        type: 'image/jpeg',
        purpose: 'any',
      },
      {
        src: LOGO_URL,
        sizes: '96x96',
        type: 'image/jpeg',
        purpose: 'any',
      },
      {
        src: LOGO_URL,
        sizes: '192x192',
        type: 'image/jpeg',
        purpose: 'any',
      },
      {
        src: LOGO_URL,
        sizes: '512x512',
        type: 'image/jpeg',
        purpose: 'maskable',
      },
    ],
  };
}
