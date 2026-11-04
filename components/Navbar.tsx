'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  Menu,
  X,
  Globe,
  Sun,
  Moon,
  MessageSquare,
  ArrowUpRight,
} from 'lucide-react';
import Image from 'next/image';
import type { Language } from '@/lib/translations';
import { translations } from '@/lib/translations';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function Navbar({
  lang,
  onLanguageChange,
  isDark,
  onToggleTheme,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  const navLinks = [
    { href: '#services', label: t.services },
    { href: '#projects', label: t.projects },
    { href: '#innovation', label: t.innovation },
    { href: '#about', label: t.about },
    { href: '#contact', label: t.contact },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-colors duration-300 backdrop-blur-md border-b ${
          isDark
            ? 'bg-[#070A08]/85 border-[#00F076]/15 text-[#ECFDF5]'
            : 'bg-[#F8FAF9]/90 border-emerald-500/20 text-[#0F172A]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Logo Brand with official image */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-md shadow-[#00F076]/20 transition-transform duration-300 group-hover:scale-105 shrink-0 border border-emerald-500/30 bg-black">
              <Image
                src="https://4ydwi7yoayrluee7.public.blob.vercel-storage.com/Nexera/1792945147233.jpg"
                alt="NEXERA Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                priority
              />
            </div>
            <div className="flex items-center gap-1.5">
              <span
                className={`font-black text-xl tracking-wider uppercase font-mono ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                NEXERA
              </span>
              <span className="w-2 h-2 rounded-full bg-[#00F076] animate-pulse" />
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isDark
                    ? 'text-gray-300 hover:text-[#00F076] hover:bg-[#00F076]/10'
                    : 'text-slate-700 hover:text-emerald-700 hover:bg-emerald-50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions (Lang, Theme, WhatsApp CTA) */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={() => onLanguageChange(lang === 'fr' ? 'en' : 'fr')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold uppercase border transition-colors ${
                isDark
                  ? 'border-gray-800 bg-[#0F1713] text-gray-300 hover:border-[#00F076]/40 hover:text-[#00F076]'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-emerald-500 hover:text-emerald-700 shadow-sm'
              }`}
              title="Changer de langue / Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#00D065]" />
              <span>{lang === 'fr' ? 'EN' : 'FR'}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={onToggleTheme}
              className={`p-2 rounded-lg border transition-colors ${
                isDark
                  ? 'border-gray-800 bg-[#0F1713] text-amber-400 hover:border-[#00F076]/40'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-emerald-500 hover:text-emerald-700 shadow-sm'
              }`}
              title={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Direct WhatsApp CTA Button */}
            <a
              href="https://wa.me/243988771923?text=Bonjour%20NEXERA%2C%20je%20souhaite%20discuter%20d%27un%20projet%20digital."
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-[#00F076] hover:bg-[#05DF72] shadow-lg shadow-[#00F076]/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-black" />
              <span>{t.whatsappDirect}</span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onLanguageChange(lang === 'fr' ? 'en' : 'fr')}
              className={`px-2 py-1.5 rounded-md text-xs font-bold uppercase border ${
                isDark
                  ? 'border-gray-800 bg-[#0F1713] text-[#00F076]'
                  : 'border-slate-200 bg-white text-emerald-700 shadow-sm'
              }`}
            >
              {lang === 'fr' ? 'EN' : 'FR'}
            </button>

            <button
              onClick={onToggleTheme}
              className={`p-2 rounded-md border ${
                isDark
                  ? 'border-gray-800 bg-[#0F1713] text-amber-400'
                  : 'border-slate-200 bg-white text-slate-700 shadow-sm'
              }`}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border ${
                isDark
                  ? 'border-[#00F076]/30 text-[#00F076] bg-[#00F076]/10'
                  : 'border-emerald-500/30 text-emerald-800 bg-emerald-50'
              }`}
              aria-label="Ouvrir le menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-x-0 top-18 z-40 md:hidden p-5 border-b shadow-2xl backdrop-blur-xl ${
              isDark
                ? 'bg-[#090E0B]/95 border-[#00F076]/20 text-[#ECFDF5]'
                : 'bg-[#FFFFFF]/95 border-emerald-500/20 text-[#0F172A]'
            }`}
          >
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl font-medium text-base transition-colors ${
                    isDark
                      ? 'text-gray-200 hover:bg-[#00F076]/10 hover:text-[#00F076]'
                      : 'text-slate-800 hover:bg-emerald-50 hover:text-emerald-700'
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="https://wa.me/243988771923?text=Bonjour%20NEXERA%2C%20je%20souhaite%20lancer%20un%20projet%20digital."
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3.5 rounded-xl font-bold text-center text-sm uppercase tracking-wider text-black bg-[#00F076] shadow-lg shadow-[#00F076]/30 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-black" />
                  <span>{t.whatsappDirect}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
