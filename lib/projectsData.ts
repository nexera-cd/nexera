export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: 'web-portfolio';
  categoryLabel: { fr: string; en: string };
  metrics: { label: { fr: string; en: string }; value: string }[];
  overview: {
    fr: string;
    en: string;
  };
  architecture: {
    fr: string;
    en: string;
  };
  technologies: string[];
  features: {
    fr: string[];
    en: string[];
  };
  liveUrl: string;
  gradient: string;
  iconName: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: 'donat-omengelo',
    title: 'Portfolio de Donat Omengelo',
    tagline: 'Site vitrine responsive & moderne pour expert en communication et marketing',
    category: 'web-portfolio',
    categoryLabel: { fr: 'Site Web / Portfolio Professionnel', en: 'Showcase Website / Portfolio' },
    metrics: [
      { label: { fr: 'Statut du projet', en: 'Project Status' }, value: 'Livré & En Ligne' },
      { label: { fr: 'Délai de réalisation', en: 'Delivery Time' }, value: '3 Jours' },
      { label: { fr: 'Adaptabilité écran', en: 'Screen Adaptation' }, value: '100% Responsive' },
    ],
    overview: {
      fr: 'Site vitrine responsive et moderne conçu et livré par NEXERA pour mettre en valeur les compétences, l’expertise et les services de Donat Omengelo, spécialiste en communication et marketing.',
      en: 'A modern and fully responsive showcase website crafted and delivered by NEXERA to highlight the skills, expertise, and services of Donat Omengelo, communications and marketing specialist.',
    },
    architecture: {
      fr: 'Développement avec React et Tailwind CSS, architecture mobile-first avec fluidité visuelle et hébergement haute performance sur Vercel.',
      en: 'Engineered with React and Tailwind CSS, clean mobile-first architecture with smooth responsiveness, hosted on high-performance Vercel edge infrastructure.',
    },
    technologies: ['React', 'Tailwind CSS', 'Vercel', 'JavaScript', 'HTML5/CSS3'],
    features: {
      fr: [
        'Interface moderne épurée pensée mobile-first',
        'Présentation claire des services et du parcours professionnel',
        'Formulaire de contact et accès direct WhatsApp',
        'Vitesse de chargement optimale et hébergement sécurisé',
      ],
      en: [
        'Sleek modern mobile-first interface',
        'Structured presentation of services and professional background',
        'Contact capabilities and direct WhatsApp access',
        'Instant loading speed and secured edge hosting',
      ],
    },
    liveUrl: 'https://donat-omengelo.vercel.app',
    gradient: 'from-emerald-500/20 via-[#00F076]/10 to-teal-950/40',
    iconName: 'Globe',
  },
];
