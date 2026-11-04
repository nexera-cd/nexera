'use client';

import React from 'react';
import Image from 'next/image';
import {
  MapPin,
  ExternalLink,
} from 'lucide-react';
import type { Language } from '@/lib/translations';
import { translations } from '@/lib/translations';

interface FooterProps {
  lang: Language;
  isDark: boolean;
}

export default function Footer({ lang, isDark }: FooterProps) {
  const t = translations[lang].footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`border-t transition-colors duration-300 relative overflow-hidden ${
        isDark
          ? 'bg-[#050806] border-[#00F076]/15 text-gray-300'
          : 'bg-[#F1F5F2] border-emerald-500/20 text-slate-700'
      }`}
    >
      {/* Decorative top accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#00F076] to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-md shadow-[#00F076]/20 shrink-0 border border-emerald-500/30 bg-black">
                <Image
                  src="https://4ydwi7yoayrluee7.public.blob.vercel-storage.com/Nexera/1792945147233.jpg"
                  alt="NEXERA Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span
                  className={`font-black text-2xl tracking-wider font-mono uppercase ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  NEXERA
                </span>
                <span className="text-[10px] tracking-widest text-[#00D065] font-bold uppercase block">
                  Écosystèmes Logiciels & SaaS
                </span>
              </div>
            </div>

            <p
              className={`text-xs sm:text-sm max-w-sm leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-slate-600'
              }`}
            >
              {t.description}
            </p>

            {/* Location & Status Badge */}
            <div className="pt-2 flex flex-col gap-2 font-mono text-xs">
              <div
                className={`flex items-center gap-2 font-semibold ${
                  isDark ? 'text-emerald-400' : 'text-emerald-800'
                }`}
              >
                <MapPin className="w-4 h-4 text-[#00D065]" />
                <span>Kinshasa, République Démocratique du Congo (RDC)</span>
              </div>

              <div
                className={`flex items-center gap-2 font-bold ${
                  isDark ? 'text-[#00F076]' : 'text-emerald-700'
                }`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F076] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F076]" />
                </span>
                <span>{t.statusOperational}</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <span
              className={`text-xs font-mono uppercase tracking-wider font-bold block ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              {t.quickLinks}
            </span>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <a
                  href="#services"
                  className={
                    isDark
                      ? 'hover:text-[#00F076] transition-colors'
                      : 'text-slate-600 hover:text-emerald-700 transition-colors'
                  }
                >
                  Nos Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={
                    isDark
                      ? 'hover:text-[#00F076] transition-colors'
                      : 'text-slate-600 hover:text-emerald-700 transition-colors'
                  }
                >
                  Réalisations
                </a>
              </li>
              <li>
                <a
                  href="#innovation"
                  className={
                    isDark
                      ? 'hover:text-[#00F076] transition-colors'
                      : 'text-slate-600 hover:text-emerald-700 transition-colors'
                  }
                >
                  Notre Différence
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={
                    isDark
                      ? 'hover:text-[#00F076] transition-colors'
                      : 'text-slate-600 hover:text-emerald-700 transition-colors'
                  }
                >
                  À Propos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={
                    isDark
                      ? 'hover:text-[#00F076] transition-colors'
                      : 'text-slate-600 hover:text-emerald-700 transition-colors'
                  }
                >
                  Contact & Cadrage
                </a>
              </li>
            </ul>
          </div>

          {/* Services Pillars */}
          <div className="lg:col-span-3 space-y-3">
            <span
              className={`text-xs font-mono uppercase tracking-wider font-bold block ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              {t.servicesTitle}
            </span>
            <ul
              className={`space-y-2 text-xs ${
                isDark ? 'text-gray-400' : 'text-slate-600 font-medium'
              }`}
            >
              <li>• Développement Web, Mobile & Portfolios</li>
              <li>• Ingénierie Logicielle PC & Automatisation</li>
              <li>• Incubateur & Plateformes SaaS</li>
              <li>• Paiements Mobile Money (Orange, Airtel, Afric, M-Pesa)</li>
              <li>• Livraison en 3 jours pour portfolios</li>
            </ul>
          </div>

          {/* Contact Direct Info & Official Socials */}
          <div className="lg:col-span-2 space-y-3">
            <span
              className={`text-xs font-mono uppercase tracking-wider font-bold block ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Canaux Officiels
            </span>
            <div className="space-y-2 text-xs">
              <a
                href="mailto:nexera.cd@gmail.com"
                className={`block transition-colors break-all font-semibold ${
                  isDark
                    ? 'text-gray-300 hover:text-[#00F076]'
                    : 'text-slate-800 hover:text-emerald-700'
                }`}
              >
                nexera.cd@gmail.com
              </a>
              <a
                href="https://wa.me/243988771923"
                target="_blank"
                rel="noreferrer"
                className={`block font-bold hover:underline ${
                  isDark ? 'text-[#00F076]' : 'text-emerald-700'
                }`}
              >
                WhatsApp Direct
              </a>

              <div className="pt-2 flex flex-col gap-1.5 font-semibold text-[11px]">
                <a
                  href="https://www.instagram.com/nexera.cd?cplk=ajZtNjRhazE0YjM1"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-[#00D065] hover:underline"
                >
                  <span>Instagram @nexera.cd</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61595723167901"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-[#00D065] hover:underline"
                >
                  <span>Page Facebook</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory Bottom Mention Section */}
        <div
          className={`mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${
            isDark ? 'border-gray-800/80' : 'border-slate-200'
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span className={isDark ? 'text-gray-400' : 'text-slate-600 font-medium'}>
              © {currentYear} NEXERA. {t.allRightsReserved}
            </span>
            <span className="hidden sm:inline text-gray-400">•</span>
            {/* MANDATORY PROMINENT MENTION */}
            <div
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-bold font-mono border ${
                isDark
                  ? 'bg-[#00F076]/10 border-[#00F076]/30 text-[#00F076]'
                  : 'bg-emerald-100 border-emerald-300 text-emerald-900'
              }`}
            >
              <span>{t.realizedBy}</span>
            </div>
          </div>

          <div
            className={`font-mono text-[11px] text-center sm:text-right ${
              isDark ? 'text-gray-400' : 'text-slate-600 font-semibold'
            }`}
          >
            <span>{t.locationNote}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
