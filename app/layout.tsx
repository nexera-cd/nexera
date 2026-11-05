import type { Metadata, Viewport } from 'next';
import './globals.css';

const SITE_URL = 'https://nexera-cd.vercel.app';
const LOGO_URL =
  'https://4ydwi7yoayrluee7.public.blob.vercel-storage.com/Nexera/1792945147233.jpg';

export const viewport: Viewport = {
  themeColor: '#00F076',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'NEXERA — Écosystèmes Numériques & Ingénierie Logicielle',
    template: '%s | NEXERA',
  },
  description:
    'NEXERA est une entreprise technologique innovante concevant des écosystèmes logiciels sur mesure, des applications web & mobiles, des portfolios professionnels livrés en 3 jours, des logiciels PC et des plateformes SaaS.',
  keywords: [
    'NEXERA',
    'Nexera Kinshasa',
    'Nexera CD',
    'Développement Web Kinshasa',
    'Création de site internet Kinshasa',
    'Création de site web RDC',
    'Agence web Kinshasa',
    'Portfolio professionnel Kinshasa',
    'Ingénierie logicielle RDC',
    'Applications mobiles Kinshasa',
    'Logiciels PC sur mesure',
    'Plateformes SaaS RDC',
    'Développeur web Kinshasa',
    'Mobile Money Orange Airtel Afric M-Pesa',
  ],
  authors: [{ name: 'NEXERA', url: SITE_URL }],
  creator: 'NEXERA',
  publisher: 'NEXERA',
  applicationName: 'NEXERA',
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: LOGO_URL,
        sizes: '48x48',
        type: 'image/jpeg',
      },
      {
        url: LOGO_URL,
        sizes: '96x96',
        type: 'image/jpeg',
      },
      {
        url: LOGO_URL,
        sizes: '144x144',
        type: 'image/jpeg',
      },
      {
        url: LOGO_URL,
        sizes: '192x192',
        type: 'image/jpeg',
      },
      {
        url: LOGO_URL,
        sizes: '512x512',
        type: 'image/jpeg',
      },
    ],
    shortcut: ['/favicon.ico', LOGO_URL],
    apple: [
      {
        url: LOGO_URL,
        sizes: '180x180',
        type: 'image/jpeg',
      },
    ],
  },
  openGraph: {
    title: 'NEXERA — Écosystèmes Numériques & Ingénierie Logicielle',
    description:
      'Propulser l’avenir numérique des entreprises et des créateurs grâce à des écosystèmes logiciels sur mesure. Portfolios livrés en 3 jours, solutions PC & SaaS.',
    url: SITE_URL,
    siteName: 'NEXERA',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: LOGO_URL,
        secureUrl: LOGO_URL,
        width: 800,
        height: 800,
        alt: 'Logo officiel NEXERA — Entreprise Technologique',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEXERA — Écosystèmes Numériques & Ingénierie Logicielle',
    description:
      'Propulser l’avenir numérique des entreprises et des créateurs grâce à des écosystèmes logiciels sur mesure. Portfolios livrés en 3 jours, solutions PC & SaaS.',
    images: [LOGO_URL],
    creator: '@nexera_cd',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'NEXERA',
      description:
        'Entreprise technologique concevant des écosystèmes logiciels sur mesure, applications web et mobiles, logiciels PC et plateformes SaaS.',
      inLanguage: 'fr-FR',
      publisher: {
        '@id': `${SITE_URL}/#organization`,
      },
    },
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': `${SITE_URL}/#organization`,
      name: 'NEXERA',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: LOGO_URL,
        caption: 'Logo officiel NEXERA',
      },
      image: LOGO_URL,
      telephone: '+243988771923',
      email: 'nexera.cd@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kinshasa',
        addressCountry: 'CD',
      },
      sameAs: [
        'https://www.instagram.com/nexera.cd?cplk=ajZtNjRhazE0YjM1',
        'https://www.facebook.com/profile.php?id=61595723167901',
      ],
      priceRange: '$$',
      knowsAbout: [
        'Développement Web',
        'Applications Mobiles',
        'Portfolios Professionnels Express',
        'Ingénierie Logicielle PC',
        'Plateformes SaaS',
        'Mobile Money (Orange, Airtel, Afric, M-Pesa)',
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="light scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Google Search Favicon Guidelines (multiples of 48px square & /favicon.ico) */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/jpeg" sizes="48x48" href={LOGO_URL} />
        <link rel="icon" type="image/jpeg" sizes="96x96" href={LOGO_URL} />
        <link rel="icon" type="image/jpeg" sizes="144x144" href={LOGO_URL} />
        <link rel="icon" type="image/jpeg" sizes="192x192" href={LOGO_URL} />
        <link rel="icon" type="image/jpeg" sizes="512x512" href={LOGO_URL} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href={LOGO_URL} />
        <link rel="manifest" href="/manifest.webmanifest" />

        {/* WhatsApp & OpenGraph explicit image tags */}
        <meta property="og:image" content={LOGO_URL} />
        <meta property="og:image:secure_url" content={LOGO_URL} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />
        <meta
          property="og:image:alt"
          content="Logo officiel NEXERA — Entreprise Technologique"
        />

        {/* Structured Data (JSON-LD) for Search Engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#F8FAF9] text-[#0F172A] antialiased selection:bg-[#00F076]/30 selection:text-emerald-900 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
