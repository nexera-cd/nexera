export type Language = 'fr' | 'en';

export interface Translations {
  nav: {
    services: string;
    projects: string;
    innovation: string;
    about: string;
    contact: string;
    whatsappDirect: string;
    startProject: string;
  };
  hero: {
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stat1Label: string;
    stat1Val: string;
    stat2Label: string;
    stat2Val: string;
    stat3Label: string;
    stat3Val: string;
    stat4Label: string;
    stat4Val: string;
    pillarsTitle: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    paymentBadge: string;
    paymentNote: string;
    deliveryTime: string;
    stackLabel: string;
    orderViaWhatsApp: string;
    items: {
      id: string;
      title: string;
      desc: string;
      details: string[];
      tags: string[];
      icon: string;
    }[];
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    visitOnline: string;
    caseStudy: string;
    deliveredBadge: string;
    techStack: string;
  };
  innovation: {
    badge: string;
    title: string;
    subtitle: string;
    p1Title: string;
    p1Desc: string;
    p2Title: string;
    p2Desc: string;
    p3Title: string;
    p3Desc: string;
    p4Title: string;
    p4Desc: string;
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    manifestoTitle: string;
    manifestoQuote: string;
    manifestoDesc: string;
    value1Title: string;
    value1Desc: string;
    value2Title: string;
    value2Desc: string;
    value3Title: string;
    value3Desc: string;
    value4Title: string;
    value4Desc: string;
    teamTitle: string;
    teamDesc: string;
  };
  map: {
    badge: string;
    title: string;
    subtitle: string;
    remoteBadge: string;
    remoteNotice: string;
    city: string;
    chatWhatsApp: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    fullName: string;
    email: string;
    phone: string;
    serviceSelect: string;
    message: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successDesc: string;
    whatsappDirect: string;
    whatsappDirectDesc: string;
    emailOfficial: string;
    phoneOfficial: string;
    socialsTitle: string;
  };
  footer: {
    description: string;
    realizedBy: string;
    locationNote: string;
    quickLinks: string;
    servicesTitle: string;
    allRightsReserved: string;
    statusOperational: string;
  };
}

export const translations: Record<Language, Translations> = {
  fr: {
    nav: {
      services: 'Services',
      projects: 'Réalisations',
      innovation: 'Innovation & R&D',
      about: 'À Propos',
      contact: 'Contact',
      whatsappDirect: 'WhatsApp Direct',
      startProject: 'Démarrer un Projet',
    },
    hero: {
      titleStart: 'Propulser l’avenir numérique des entreprises et des créateurs grâce à des',
      titleHighlight: 'écosystèmes logiciels sur mesure',
      titleEnd: '.',
      subtitle:
        'NEXERA est une entreprise technologique innovante qui conçoit des applications web et mobiles, des solutions logicielles pour PC, des plateformes SaaS et des écosystèmes digitaux haute performance pour les particuliers et les entreprises.',
      ctaPrimary: 'Discuter sur WhatsApp',
      ctaSecondary: 'Explorer nos offres',
      stat1Label: 'Livraison express portfolio',
      stat1Val: '3 Jours',
      stat2Label: 'Écosystèmes adaptatifs',
      stat2Val: '100% Responsive',
      stat3Label: 'Tarification claire',
      stat3Val: 'USD & FC',
      stat4Label: 'Paiements Mobile Money',
      stat4Val: 'Orange • Airtel • Afric • M-Pesa',
      pillarsTitle: 'Nos 3 Piliers d’Expertise Majeurs',
      pillar1Title: 'Développement Web & Mobile',
      pillar1Desc:
        'Conception de sites vitrines haut de gamme, de plateformes e-commerce et de portfolios professionnels ultra-réactifs (Standard, Pack Pro, Pack Showcase) avec animations immersives et fluidité mobile-first.',
      pillar2Title: 'Ingénierie Logicielle & Outils PC',
      pillar2Desc:
        'Développement de logiciels sur mesure pour ordinateurs (PC) et d’outils d’automatisation des flux de travail pour booster la productivité opérationnelle des professionnels.',
      pillar3Title: 'Plateformes & Incubateur SaaS',
      pillar3Desc:
        'Création et déploiement de solutions logicielles prêtes à l’emploi (SaaS) et de plateformes de vente en ligne mutualisées pour incuber des projets technologiques à fort impact.',
    },
    services: {
      badge: 'Nos Pôles de Compétences',
      title: 'Des Solutions Digitales Clés en Main',
      subtitle:
        'Du portfolio professionnel ultra-rapide aux logiciels métier sur mesure pour PC et plateformes SaaS.',
      paymentBadge: 'Modalités de Paiement Locales',
      paymentNote:
        'Paiements acceptés par Mobile Money uniquement (Orange Money, Airtel Money, Afric Money, M-Pesa) en USD ou Francs Congolais (FC).',
      deliveryTime: 'Livraison en 3 jours maximum après validation des informations pour les portfolios.',
      stackLabel: 'Technologies maîtrisées :',
      orderViaWhatsApp: 'Commander cette solution sur WhatsApp',
      items: [
        {
          id: 'web-mobile-portfolio',
          title: 'Développement Web, Mobile & Portfolios',
          desc: 'Sites vitrines haut de gamme, plateformes e-commerce et portfolios professionnels ultra-réactifs (Standard, Pack Pro, Pack Showcase) avec animations au défilement, mode sombre/clair et options sur mesure.',
          details: [
            'Portfolios professionnels pour experts, créateurs et indépendants',
            'Sites vitrines modernes et e-commerce responsive',
            'Animations au défilement immersives et mode sombre / clair',
            'Options intégrées : bouton WhatsApp direct, formulaire de contact, carte interactive',
          ],
          tags: ['React', 'Next.js', 'Flutter', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'],
          icon: 'Smartphone',
        },
        {
          id: 'pc-software',
          title: 'Ingénierie Logicielle PC & Automatisation',
          desc: 'Développement de logiciels sur mesure pour ordinateurs (PC) et d’outils d’automatisation des flux de travail destinés à optimiser la productivité des entreprises et des professionnels.',
          details: [
            'Logiciels PC personnalisés selon les processus métier de votre activité',
            'Scripts et robots d’automatisation des tâches répétitives',
            'Traitement et structuration rapide de données internes',
            'Architectures logicielles fiables, stables et autonomes',
          ],
          tags: ['Python', 'Node.js', 'Architectures Natives', 'Scripts Automation'],
          icon: 'Laptop',
        },
        {
          id: 'saas-incubator',
          title: 'Incubateur & Plateformes SaaS',
          desc: 'Création et déploiement de solutions logicielles prêtes à l’emploi (SaaS) et de plateformes de vente en ligne (type e-commerce mutualisé) pour incuber des projets technologiques internes et externes.',
          details: [
            'Déploiement de plateformes SaaS évolutives prêtes à l’emploi',
            'E-commerce mutualisé et outils de vente en ligne',
            'Gestion centralisée des données avec bases relationnelles sécurisées',
            'APIs RESTful performantes et connectivité cloud moderne',
          ],
          tags: ['Cloud Stack', 'PostgreSQL', 'REST APIs', 'Vercel', 'Git/GitHub'],
          icon: 'Layers',
        },
      ],
    },
    projects: {
      badge: 'Réalisation Concrète',
      title: 'Nos Réalisations Livrées',
      subtitle:
        'Découvrez nos projets en ligne conçus avec rigueur et livrés dans les délais.',
      visitOnline: 'Voir le site en direct',
      caseStudy: 'Détails du projet',
      deliveredBadge: 'Projet Livré & En Ligne',
      techStack: 'Stack Technique',
    },
    innovation: {
      badge: 'Notre Différence Tech',
      title: 'L’Approche Technologique NEXERA',
      subtitle:
        'Nous combinons rapidité d’exécution, excellence d’ingénierie et design haute fidélité.',
      p1Title: 'Approche Premiers Principes',
      p1Desc:
        'Chaque projet est pensé depuis ses fondations pour garantir une haute performance, un code propre et une expérience utilisateur sans faille.',
      p2Title: 'Livraison Express en 3 Jours',
      p2Desc:
        'Une méthode de développement agile et optimisée permettant de livrer votre portfolio professionnel complet en 3 jours chrono après validation des contenus.',
      p3Title: 'Intégration Native Mobile Money',
      p3Desc:
        'Prise en compte directe des moyens de paiement courants : Orange Money, Airtel Money, Afric Money et M-Pesa, en USD ou Francs Congolais.',
      p4Title: 'Automatisation & Agents Autonomes',
      p4Desc:
        'Expérimentation et intégration de flux d’automatisation modernes et d’agents intelligents pour décupler la productivité opérationnelle.',
    },
    about: {
      badge: 'L’ADN & La Vision',
      title: 'Bâtir des Écosystèmes Numériques Durables',
      subtitle:
        'NEXERA réunit la rigueur d’ingénierie logicielle et le design d’exception pour équiper les entreprises et créateurs d’outils à haute valeur ajoutée.',
      manifestoTitle: 'La Mission NEXERA',
      manifestoQuote:
        'Démocratiser l’accès aux technologies de pointe et bâtir des infrastructures logicielles robustes pour propulser l’économie numérique. NEXERA unit rigueur d’ingénierie et design d’exception.',
      manifestoDesc:
        'Nous accompagnons les créateurs, professionnels et entreprises dans la transition vers des outils numériques modernes, fiables et immédiatement exploitables.',
      value1Title: 'Rigueur technique & Code propre',
      value1Desc:
        'Une exigence permanente de qualité dans la structure du code, la sécurité et la maintenabilité à long terme.',
      value2Title: 'Transparence totale',
      value2Desc:
        'Des tarifs clairs en USD et Francs Congolais, des étapes de validation partagées et des délais tenus.',
      value3Title: 'Réactivité & Orientation Résultat',
      value3Desc:
        'Livraison rapide en 3 jours et communication continue et directe sur WhatsApp.',
      value4Title: 'Innovation itérative',
      value4Desc:
        'Veille active et adoption continue des meilleures technologies mondiales.',
      teamTitle: 'Direction Technique & Produit',
      teamDesc:
        'Une équipe engagée d’ingénieurs logiciels et concepteurs web dédiés à la réussite de chaque déploiement digital.',
    },
    map: {
      badge: 'Présence & Localisation',
      title: 'Basés à Kinshasa, Opérations 100% en Ligne',
      subtitle:
        'Pour vous offrir une réactivité maximale et des tarifs transparents, l’ensemble de nos services est géré à distance et en ligne.',
      remoteBadge: 'Service 100% Digital & À Distance',
      remoteNotice:
        'Prestations et échanges gérés entièrement en ligne. Pas de réception physique au bureau sans rendez-vous préalable.',
      city: 'Kinshasa, République Démocratique du Congo (RDC)',
      chatWhatsApp: 'Démarrer une consultation sur WhatsApp',
    },
    contact: {
      badge: 'Contactez-Nous Directement',
      title: 'Concrétisons Votre Projet Digital',
      subtitle:
        'Échangez directement avec notre équipe technique sur WhatsApp ou via le formulaire ci-dessous.',
      fullName: 'Votre Nom / Nom de votre structure',
      email: 'Adresse e-mail',
      phone: 'Numéro de téléphone / WhatsApp',
      serviceSelect: 'Offre ou service souhaité',
      message: 'Détails de votre besoin ou projet...',
      submit: 'Envoyer ma demande',
      submitting: 'Envoi en cours...',
      successTitle: 'Demande bien reçue !',
      successDesc:
        'Nous analysons votre besoin et vous répondons dans les plus brefs délais sur WhatsApp ou par e-mail.',
      whatsappDirect: 'WhatsApp Professionnel Direct',
      whatsappDirectDesc: 'Discutez directement avec notre équipe : réponse rapide garantie.',
      emailOfficial: 'nexera.cd@gmail.com',
      phoneOfficial: '+243 988 771 923',
      socialsTitle: 'Suivez NEXERA sur nos réseaux officiels :',
    },
    footer: {
      description:
        'NEXERA est une entreprise technologique innovante basée à Kinshasa (RDC) qui conçoit des applications web et mobiles, des solutions logicielles PC et des plateformes SaaS haute performance.',
      realizedBy: 'Site réalisé par Nexera',
      locationNote: 'Kinshasa, République Démocratique du Congo (RDC)',
      quickLinks: 'Navigation',
      servicesTitle: 'Nos Pôles',
      allRightsReserved: 'Tous droits réservés.',
      statusOperational: 'NEXERA Opérationnel • Contact direct WhatsApp',
    },
  },
  en: {
    nav: {
      services: 'Services',
      projects: 'Showcase',
      innovation: 'Innovation & R&D',
      about: 'About',
      contact: 'Contact',
      whatsappDirect: 'Direct WhatsApp',
      startProject: 'Start a Project',
    },
    hero: {
      titleStart: 'Propelling the digital future of enterprises and creators with',
      titleHighlight: 'tailored software ecosystems',
      titleEnd: '.',
      subtitle:
        'NEXERA is an innovative technology company engineering high-performance web and mobile applications, PC software tools, SaaS platforms, and digital ecosystems for individuals and enterprises.',
      ctaPrimary: 'Chat on WhatsApp',
      ctaSecondary: 'Explore Services',
      stat1Label: 'Express portfolio delivery',
      stat1Val: '3 Days',
      stat2Label: 'Adaptive ecosystems',
      stat2Val: '100% Responsive',
      stat3Label: 'Clear pricing',
      stat3Val: 'USD & CDF',
      stat4Label: 'Mobile Money payments',
      stat4Val: 'Orange • Airtel • Afric • M-Pesa',
      pillarsTitle: 'Our 3 Core Areas of Expertise',
      pillar1Title: 'Web, Mobile & Portfolio Development',
      pillar1Desc:
        'Crafting premium showcase websites, e-commerce portals, and ultra-responsive portfolios (Standard, Pro Pack, Showcase Pack) with immersive scroll animations and mobile-first fluid design.',
      pillar2Title: 'PC Software Engineering & Automation',
      pillar2Desc:
        'Developing custom desktop software (PC) and workflow automation tools designed to optimize operational productivity for businesses and professionals.',
      pillar3Title: 'SaaS Platforms & Incubation',
      pillar3Desc:
        'Building and deploying ready-to-use software solutions (SaaS) and shared online sales platforms to incubate high-impact tech initiatives.',
    },
    services: {
      badge: 'Our Core Capabilities',
      title: 'Turnkey Digital Solutions',
      subtitle:
        'From rapid professional portfolios to tailored PC software and scalable cloud platforms.',
      paymentBadge: 'Local Payment Terms',
      paymentNote:
        'Payments accepted via Mobile Money exclusively (Orange Money, Airtel Money, Afric Money, M-Pesa) in USD or Congolese Francs (CDF).',
      deliveryTime: 'Guaranteed delivery within 3 days maximum upon confirmation of content for portfolios.',
      stackLabel: 'Core technologies:',
      orderViaWhatsApp: 'Order this solution via WhatsApp',
      items: [
        {
          id: 'web-mobile-portfolio',
          title: 'Web, Mobile & Portfolio Development',
          desc: 'High-end showcase websites, e-commerce platforms, and ultra-responsive professional portfolios (Standard, Pro Pack, Showcase Pack) featuring scroll animations, dark/light mode, and custom add-ons.',
          details: [
            'Professional portfolios for specialists, creators, and consultants',
            'Modern responsive showcase and e-commerce websites',
            'Immersive scroll animations and dark / light mode',
            'Integrated features: direct WhatsApp button, contact forms, interactive maps',
          ],
          tags: ['React', 'Next.js', 'Flutter', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'],
          icon: 'Smartphone',
        },
        {
          id: 'pc-software',
          title: 'PC Software Engineering & Automation',
          desc: 'Tailored desktop software for PC and automated workflow pipelines designed to maximize operational efficiency.',
          details: [
            'Custom PC software built to match your company’s exact operational workflows',
            'Automation scripts for repetitive administrative tasks',
            'Fast processing and structuring of internal operational data',
            'Robust, stable, and autonomous local architectures',
          ],
          tags: ['Python', 'Node.js', 'Native Architectures', 'Automation Scripts'],
          icon: 'Laptop',
        },
        {
          id: 'saas-incubator',
          title: 'SaaS Incubation & Platforms',
          desc: 'Creating and deploying turnkey SaaS solutions and shared e-commerce platforms to incubate proprietary and external digital products.',
          details: [
            'Deployment of scalable, turnkey SaaS platforms',
            'Shared e-commerce and digital storefront tools',
            'Centralized data management with secured relational databases',
            'High-throughput RESTful APIs and modern cloud architecture',
          ],
          tags: ['Cloud Stack', 'PostgreSQL', 'REST APIs', 'Vercel', 'Git/GitHub'],
          icon: 'Layers',
        },
      ],
    },
    projects: {
      badge: 'Delivered Work',
      title: 'Our Proven Deliveries',
      subtitle:
        'Discover our live delivered projects built with engineering rigor and delivered on schedule.',
      visitOnline: 'Visit Live Site',
      caseStudy: 'Project Details',
      deliveredBadge: 'Delivered & Live',
      techStack: 'Tech Stack',
    },
    innovation: {
      badge: 'Our Technical Edge',
      title: 'The NEXERA Engineering Approach',
      subtitle:
        'Combining rapid execution, software engineering excellence, and modern design.',
      p1Title: 'First-Principles Engineering',
      p1Desc:
        'Every project is engineered from fundamental building blocks to guarantee high speed, clean code, and zero friction.',
      p2Title: 'Express 3-Day Delivery',
      p2Desc:
        'An agile and refined workflow allowing us to deliver your full professional portfolio in 3 days flat after content validation.',
      p3Title: 'Native Mobile Money Integration',
      p3Desc:
        'Seamless compatibility with common Mobile Money gateways: Orange Money, Airtel Money, Afric Money, and M-Pesa, in USD or CDF.',
      p4Title: 'Automation & Autonomous Agents',
      p4Desc:
        'Testing and deploying cutting-edge automation workflows and smart agents to multiply team operational throughput.',
    },
    about: {
      badge: 'DNA & Mission',
      title: 'Engineering Resilient Digital Ecosystems',
      subtitle:
        'NEXERA unites software engineering rigor and design excellence to empower enterprises and creators with high-value digital tools.',
      manifestoTitle: 'The NEXERA Mission',
      manifestoQuote:
        'Democratizing access to cutting-edge technology and building robust software infrastructure to empower businesses and creators. NEXERA merges engineering discipline with world-class design.',
      manifestoDesc:
        'We support creators, professionals, and companies in transitioning towards modern, reliable, and immediately productive digital systems.',
      value1Title: 'Technical Rigor & Clean Code',
      value1Desc:
        'Uncompromising dedication to high code quality, security, and long-term maintainability.',
      value2Title: 'Total Transparency',
      value2Desc:
        'Clear pricing in USD and CDF, transparent milestone checkpoints, and respected deadlines.',
      value3Title: 'Responsiveness & Results Orientation',
      value3Desc:
        '3-day delivery commitments and direct continuous communication over WhatsApp.',
      value4Title: 'Iterative Innovation',
      value4Desc:
        'Continuous benchmarking and adoption of global best-in-class software frameworks.',
      teamTitle: 'Technical & Product Leadership',
      teamDesc:
        'A dedicated team of software architects and web engineers committed to the success of every deployment.',
    },
    map: {
      badge: 'Location & Presence',
      title: 'Based in Kinshasa, 100% Online Operations',
      subtitle:
        'To ensure maximum responsiveness and transparent pricing, all our operations are managed remotely and online.',
      remoteBadge: '100% Digital & Remote Service',
      remoteNotice:
        'All client communication and project deliveries are handled online. No physical visits without scheduled appointment.',
      city: 'Kinshasa, Democratic Republic of the Congo (DRC)',
      chatWhatsApp: 'Start Consultation on WhatsApp',
    },
    contact: {
      badge: 'Get in Touch Directly',
      title: 'Let’s Build Your Digital Vision',
      subtitle:
        'Connect directly with our engineering team on WhatsApp or via the message form below.',
      fullName: 'Your Name / Company Name',
      email: 'Email address',
      phone: 'Phone / WhatsApp number',
      serviceSelect: 'Desired service or package',
      message: 'Project details and requirements...',
      submit: 'Send Request',
      submitting: 'Sending...',
      successTitle: 'Request Received!',
      successDesc:
        'We are reviewing your brief and will get back to you promptly on WhatsApp or via email.',
      whatsappDirect: 'Direct Professional WhatsApp',
      whatsappDirectDesc: 'Chat directly with our team for immediate assistance.',
      emailOfficial: 'nexera.cd@gmail.com',
      phoneOfficial: '+243 988 771 923',
      socialsTitle: 'Follow NEXERA on our official platforms:',
    },
    footer: {
      description:
        'NEXERA is an innovative technology company based in Kinshasa (DRC) engineering web and mobile apps, PC software tools, and high-performance SaaS platforms.',
      realizedBy: 'Site réalisé par Nexera',
      locationNote: 'Kinshasa, Democratic Republic of the Congo (DRC)',
      quickLinks: 'Navigation',
      servicesTitle: 'Our Capabilities',
      allRightsReserved: 'All rights reserved.',
      statusOperational: 'NEXERA Active • Direct WhatsApp Contact',
    },
  },
};
