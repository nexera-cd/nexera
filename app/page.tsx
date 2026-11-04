'use client';

import React, { useState, useEffect } from 'react';
import type { Language } from '@/lib/translations';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import InnovationLab from '@/components/InnovationLab';
import About from '@/components/About';
import KinshasaMap from '@/components/KinshasaMap';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';

export default function HomePage() {
  const [lang, setLang] = useState<Language>('fr');
  const [isDark, setIsDark] = useState<boolean>(false);
  const [contactPrefill, setContactPrefill] = useState<string>('');

  // Sync theme with html root for CSS styling
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleSelectService = (serviceTitle: string) => {
    setContactPrefill(
      lang === 'fr'
        ? `Bonjour NEXERA, je souhaite échanger au sujet de votre expertise : ${serviceTitle}.`
        : `Hello NEXERA, I would like to consult your team regarding: ${serviceTitle}.`
    );
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestQuote = (projectTitle: string) => {
    setContactPrefill(
      lang === 'fr'
        ? `Bonjour NEXERA, j'ai vu votre réalisation "${projectTitle}" et j'aimerais concevoir un écosystème similaire adapté à mon entreprise.`
        : `Hello NEXERA, I reviewed your project "${projectTitle}" and I would like to architect a similar solution for my enterprise.`
    );
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 relative selection:bg-[#00F076]/30 selection:text-[#00F076] ${
        isDark
          ? 'bg-[#070A08] text-[#ECFDF5] bg-grid-cyber'
          : 'bg-[#F8FAF9] text-[#0F172A] bg-grid-cyber-light'
      }`}
    >
      {/* Sticky Responsive Navigation Bar */}
      <Navbar
        lang={lang}
        onLanguageChange={setLang}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
      />

      <main className="relative">
        {/* Section 1: Accueil (Hero, Immersion & 3 Piliers) */}
        <Hero
          lang={lang}
          isDark={isDark}
        />

        {/* Section 2: Services (L'Offre Globale Détaillée) */}
        <Services
          lang={lang}
          isDark={isDark}
          onSelectService={handleSelectService}
        />

        {/* Section 3: Projets & Réalisations (La Preuve par l'Exemple) */}
        <Projects
          lang={lang}
          isDark={isDark}
          onRequestQuote={handleRequestQuote}
        />

        {/* Section 4: Laboratoire R&D / Innovation (La Différence Tech & Pipeline) */}
        <InnovationLab lang={lang} isDark={isDark} />

        {/* Section 5: À Propos (L'ADN & La Vision - Kinshasa Hub) */}
        <About lang={lang} isDark={isDark} />

        {/* Section 6: Carte Interactive Google Maps & Localisation Kinshasa */}
        <KinshasaMap lang={lang} isDark={isDark} />

        {/* Section 7: Contact (Conversion Épurée) */}
        <Contact
          lang={lang}
          isDark={isDark}
          prefilledMessage={contactPrefill}
        />
      </main>

      {/* Footer with mandatory "Site réalisé par Nexera" & Kinshasa RDC coordinates */}
      <Footer
        lang={lang}
        isDark={isDark}
      />

      {/* Floating Action WhatsApp with ping animation */}
      <WhatsAppFloatingButton lang={lang} />
    </div>
  );
}
