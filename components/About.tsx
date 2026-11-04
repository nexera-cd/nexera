'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  CheckCircle2,
  Code2,
  Zap,
  Target,
  RefreshCw,
} from 'lucide-react';
import type { Language } from '@/lib/translations';
import { translations } from '@/lib/translations';

interface AboutProps {
  lang: Language;
  isDark: boolean;
}

export default function About({ lang, isDark }: AboutProps) {
  const t = translations[lang].about;

  const values = [
    {
      title: t.value1Title,
      desc: t.value1Desc,
      icon: Code2,
      accent: '#00D065',
    },
    {
      title: t.value2Title,
      desc: t.value2Desc,
      icon: ShieldCheck,
      accent: '#0284c7',
    },
    {
      title: t.value3Title,
      desc: t.value3Desc,
      icon: Zap,
      accent: '#059669',
    },
    {
      title: t.value4Title,
      desc: t.value4Desc,
      icon: RefreshCw,
      accent: '#d97706',
    },
  ];

  return (
    <section id="about" className="py-14 sm:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${
              isDark
                ? 'text-[#00F076] border border-[#00F076]/30 bg-[#00F076]/10'
                : 'text-emerald-800 border border-emerald-300 bg-emerald-50'
            }`}
          >
            <Target className="w-3.5 h-3.5 text-[#00D065]" />
            <span>{t.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            {t.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`mt-4 text-sm sm:text-base lg:text-lg ${
              isDark ? 'text-gray-300' : 'text-slate-600'
            }`}
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Manifesto Spotlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`mt-10 sm:mt-12 rounded-3xl p-7 sm:p-11 border relative overflow-hidden ${
            isDark
              ? 'bg-gradient-to-r from-[#0C1611] via-[#09110D] to-[#070D0A] border-[#00F076]/30 shadow-2xl'
              : 'bg-white border-emerald-500/25 shadow-xl shadow-slate-200/50'
          }`}
        >
          <div className="max-w-3xl">
            <span
              className={`text-xs font-mono uppercase tracking-widest font-bold block mb-3 ${
                isDark ? 'text-[#00F076]' : 'text-emerald-700'
              }`}
            >
              {t.manifestoTitle}
            </span>
            <blockquote
              className={`text-xl sm:text-2xl font-black leading-relaxed tracking-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              &ldquo;{t.manifestoQuote}&rdquo;
            </blockquote>
            <p
              className={`mt-4 text-sm sm:text-base leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-slate-700'
              }`}
            >
              {t.manifestoDesc}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00F076] text-black font-black flex items-center justify-center font-mono shadow-md">
                NX
              </div>
              <div>
                <span
                  className={`text-sm font-bold block ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Direction Technique NEXERA
                </span>
                <span
                  className={`text-xs font-mono font-medium ${
                    isDark ? 'text-[#00F076]' : 'text-emerald-700'
                  }`}
                >
                  Kinshasa, République Démocratique du Congo
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4 Core Engineering Values Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                whileHover={{ y: -4 }}
                className={`rounded-2xl p-6 border flex flex-col justify-between transition-all duration-300 ${
                  isDark
                    ? 'bg-[#0A110E] border-[#00F076]/20 hover:border-[#00F076]/50 shadow-md'
                    : 'bg-white border-emerald-500/20 hover:border-emerald-500 shadow-md hover:shadow-lg shadow-slate-100'
                }`}
              >
                <div>
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 shadow-inner ${
                      isDark
                        ? 'bg-black/40 border-[#00F076]/30'
                        : 'bg-slate-50 border-slate-200'
                    }`}
                    style={{ color: val.accent }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3
                    className={`text-base font-bold tracking-tight ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {val.title}
                  </h3>
                  <p
                    className={`mt-2 text-xs leading-relaxed ${
                      isDark ? 'text-gray-300' : 'text-slate-600'
                    }`}
                  >
                    {val.desc}
                  </p>
                </div>
                <div
                  className={`mt-4 pt-3 border-t text-[10px] font-mono font-semibold ${
                    isDark ? 'border-gray-800 text-gray-500' : 'border-slate-100 text-slate-400'
                  }`}
                >
                  VALEUR 0{idx + 1}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
