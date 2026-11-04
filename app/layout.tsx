import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NEXERA — Écosystèmes Numériques & Ingénierie Logicielle',
  description:
    'NEXERA est une startup tech de premier plan basée à Kinshasa (RDC), concevant des écosystèmes logiciels sur mesure, applications mobiles haute performance et plateformes SaaS d\'envergure mondiale.',
  openGraph: {
    title: 'NEXERA — Écosystèmes Numériques & Ingénierie Logicielle',
    description:
      'NEXERA est une startup tech de premier plan basée à Kinshasa (RDC), concevant des écosystèmes logiciels sur mesure, applications mobiles haute performance et plateformes SaaS d\'envergure mondiale.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEXERA — Écosystèmes Numériques & Ingénierie Logicielle',
    description:
      'NEXERA est une startup tech de premier plan basée à Kinshasa (RDC), concevant des écosystèmes logiciels sur mesure, applications mobiles haute performance et plateformes SaaS d\'envergure mondiale.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="light scroll-smooth" suppressHydrationWarning>
      <body className="min-h-screen bg-[#F8FAF9] text-[#0F172A] antialiased selection:bg-[#00F076]/30 selection:text-emerald-900 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
