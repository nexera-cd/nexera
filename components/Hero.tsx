'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Smartphone,
  Laptop,
  Layers,
  Clock,
  Sparkles,
  CreditCard,
  CheckCircle2,
  MessageSquare,
} from 'lucide-react';
import type { Language } from '@/lib/translations';
import { translations } from '@/lib/translations';

interface HeroProps {
  lang: Language;
  isDark: boolean;
}

export default function Hero({ lang, isDark }: HeroProps) {
  const t = translations[lang].hero;

  const pillars = [
    {
      icon: Smartphone,
      title: t.pillar1Title,
      desc: t.pillar1Desc,
      tag: 'React • Flutter • Next.js',
      accent: '#00D065',
    },
    {
      icon: Laptop,
      title: t.pillar2Title,
      desc: t.pillar2Desc,
      tag: 'Python • Node.js • PC',
      accent: '#0284c7',
    },
    {
      icon: Layers,
      title: t.pillar3Title,
      desc: t.pillar3Desc,
      tag: 'Cloud • SaaS • E-Commerce',
      accent: '#059669',
    },
  ];

  const stats = [
    { val: t.stat1Val, label: t.stat1Label, icon: Clock },
    { val: t.stat2Val, label: t.stat2Label, icon: CheckCircle2 },
    { val: t.stat3Val, label: t.stat3Label, icon: Sparkles },
    { val: t.stat4Val, label: t.stat4Label, icon: CreditCard },
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-14 lg:pt-12 lg:pb-20">
      {/* Background Ambient Lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] pointer-events-none select-none overflow-hidden -z-10">
        <div
          className={`absolute top-10 left-1/4 w-96 h-96 rounded-full blur-[130px] ${
            isDark ? 'bg-[#00F076]/15' : 'bg-emerald-400/20'
          }`}
        />
        <div
          className={`absolute top-28 right-1/4 w-80 h-80 rounded-full blur-[110px] ${
            isDark ? 'bg-emerald-500/10' : 'bg-teal-300/20'
          }`}
        />
        <div
          className={`absolute inset-0 ${
            isDark
              ? 'bg-gradient-to-b from-transparent via-[#070A08]/50 to-[#070A08]'
              : 'bg-gradient-to-b from-transparent via-white/40 to-[#F8FAF9]'
          }`}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto pt-2 sm:pt-4"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12]">
            <span className={isDark ? 'text-white' : 'text-slate-900'}>
              {t.titleStart}{' '}
            </span>
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00D065] via-[#059669] to-[#00F076] drop-shadow-sm font-extrabold">
              {t.titleHighlight}
              <motion.span
                className="absolute left-0 bottom-1 w-full h-[3px] bg-gradient-to-r from-[#00F076] to-transparent rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </span>
            <span className={isDark ? 'text-white' : 'text-slate-900'}>
              {t.titleEnd}
            </span>
          </h1>

          <p
            className={`mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed font-normal ${
              isDark ? 'text-gray-300' : 'text-slate-700'
            }`}
          >
            {t.subtitle}
          </p>
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto"
        >
          <a
            href="https://wa.me/243988771923?text=Bonjour%20NEXERA%2C%20je%20souhaite%20lancer%20un%20projet%20digital."
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm tracking-wider uppercase text-black bg-[#00F076] hover:bg-[#05DF72] shadow-xl shadow-[#00F076]/25 flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            <MessageSquare className="w-4 h-4 fill-black" />
            <span>{t.ctaPrimary}</span>
          </a>

          <a
            href="#services"
            className={`w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm tracking-wide border flex items-center justify-center gap-2 transition-all duration-300 ${
              isDark
                ? 'border-[#00F076]/30 bg-[#0E1712] text-[#ECFDF5] hover:border-[#00F076] hover:bg-[#00F076]/10'
                : 'border-emerald-600/30 bg-white text-slate-800 hover:bg-emerald-50 hover:border-emerald-500 shadow-sm'
            }`}
          >
            <span>{t.ctaSecondary}</span>
            <ArrowRight className="w-4 h-4 text-[#00D065]" />
          </a>
        </motion.div>

        {/* Real Key Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-12 sm:mt-14"
        >
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-3 p-4 sm:p-5 rounded-2xl border backdrop-blur-xl ${
              isDark
                ? 'bg-[#0B120E]/85 border-[#00F076]/20 shadow-lg shadow-black/40'
                : 'bg-white/95 border-emerald-500/25 shadow-lg shadow-slate-200/50'
            }`}
          >
            {stats.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className={`flex flex-col items-center text-center p-3 rounded-xl transition-all ${
                    isDark ? 'hover:bg-[#121F18]/50' : 'hover:bg-emerald-50/70'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-[#00D065] mb-1">
                    <Icon className="w-4 h-4" />
                    <span
                      className={`text-lg sm:text-xl font-black tracking-tight font-mono ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {s.val}
                    </span>
                  </div>
                  <span
                    className={`text-xs font-semibold ${
                      isDark ? 'text-gray-400' : 'text-slate-600'
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* The 3 Pillars Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="mt-14 sm:mt-18"
        >
          <div className="text-center mb-8">
            <span className="text-xs uppercase font-mono tracking-widest text-[#00D065] font-bold">
              Excellence & Ingénierie
            </span>
            <h2
              className={`text-2xl sm:text-3xl font-extrabold tracking-tight mt-1 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              {t.pillarsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className={`relative group rounded-2xl p-6 sm:p-7 border flex flex-col justify-between transition-all duration-300 ${
                    isDark
                      ? 'bg-gradient-to-b from-[#0D1712] to-[#080D0A] border-[#00F076]/20 hover:border-[#00F076]/60 shadow-lg'
                      : 'bg-white border-emerald-500/25 hover:border-emerald-500 shadow-md hover:shadow-xl shadow-slate-100'
                  }`}
                >
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#00F076] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center border shadow-inner group-hover:scale-105 transition-transform ${
                          isDark
                            ? 'bg-black/40 border-[#00F076]/30'
                            : 'bg-emerald-50 border-emerald-200'
                        }`}
                        style={{ color: p.accent }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span
                        className={`text-[11px] font-mono tracking-wider px-2.5 py-1 rounded-md border font-semibold ${
                          isDark
                            ? 'bg-[#00F076]/10 text-[#00F076] border-[#00F076]/20'
                            : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                        }`}
                      >
                        {p.tag}
                      </span>
                    </div>

                    <h3
                      className={`text-lg font-bold tracking-tight transition-colors ${
                        isDark
                          ? 'text-white group-hover:text-[#00F076]'
                          : 'text-slate-900 group-hover:text-emerald-700'
                      }`}
                    >
                      {p.title}
                    </h3>

                    <p
                      className={`mt-2.5 text-xs sm:text-sm leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-slate-600'
                      }`}
                    >
                      {p.desc}
                    </p>
                  </div>

                  <div
                    className={`mt-6 pt-4 border-t flex items-center justify-between ${
                      isDark ? 'border-gray-800/60' : 'border-gray-100'
                    }`}
                  >
                    <a
                      href={`https://wa.me/243988771923?text=${encodeURIComponent(
                        `Bonjour NEXERA, je souhaite échanger au sujet de votre pôle : ${p.title}`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-[#00D065] hover:text-[#05DF72] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Commander sur WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <span
                      className={`text-xs font-mono font-semibold ${
                        isDark ? 'text-gray-500' : 'text-slate-400'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
