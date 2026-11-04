'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Smartphone,
  Laptop,
  Layers,
  CheckCircle,
  ArrowRight,
  Code2,
  Zap,
  CreditCard,
  Clock,
  MessageSquare,
} from 'lucide-react';
import type { Language } from '@/lib/translations';
import { translations } from '@/lib/translations';

interface ServicesProps {
  lang: Language;
  isDark: boolean;
  onSelectService: (serviceTitle: string) => void;
}

export default function Services({ lang, isDark, onSelectService }: ServicesProps) {
  const t = translations[lang].services;
  const [activeTab, setActiveTab] = useState<string>('web-mobile-portfolio');

  const iconMap: Record<string, React.ElementType> = {
    Smartphone,
    Laptop,
    Layers,
  };

  const activeService = t.items.find((item) => item.id === activeTab) || t.items[0];
  const ActiveIcon = iconMap[activeService.icon] || Code2;

  const teamTechnologies = [
    'React',
    'Next.js',
    'Node.js',
    'Python',
    'Flutter',
    'Tailwind CSS',
    'PostgreSQL',
    'Git / GitHub',
    'Vercel',
  ];

  return (
    <section id="services" className="py-14 sm:py-20 relative overflow-hidden">
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
            <Zap className="w-3.5 h-3.5 text-[#00D065]" />
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

        {/* Highlight Banner: Mobile Money & 3-Day Delivery Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mt-8 sm:mt-10 rounded-2xl p-4 sm:p-5 border flex flex-col md:flex-row items-center justify-between gap-4 ${
            isDark
              ? 'bg-[#0A120E] border-[#00F076]/30 text-white'
              : 'bg-emerald-50/90 border-emerald-300 text-emerald-950 shadow-sm'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00F076] text-black flex items-center justify-center shrink-0 font-bold shadow-md">
              <CreditCard className="w-5 h-5 fill-black" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00D065] block">
                {t.paymentBadge}
              </span>
              <p className="text-xs sm:text-sm font-semibold leading-snug">
                {t.paymentNote}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/40 border border-[#00F076]/30 shrink-0 font-mono text-xs">
            <Clock className="w-4 h-4 text-[#00F076]" />
            <span className="text-[#00F076] font-bold">Livraison 3 Jours Max</span>
          </div>
        </motion.div>

        {/* 3 Interactive Service Selectors */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {t.items.map((srv) => {
            const Icon = iconMap[srv.icon] || Code2;
            const isSelected = activeTab === srv.id;
            return (
              <button
                key={srv.id}
                onClick={() => setActiveTab(srv.id)}
                className={`flex items-center gap-3 p-4 rounded-2xl border text-left transition-all duration-200 ${
                  isSelected
                    ? isDark
                      ? 'border-[#00F076] bg-[#00F076]/15 text-[#00F076] shadow-lg shadow-[#00F076]/20'
                      : 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold shadow-md shadow-emerald-600/10'
                    : isDark
                    ? 'border-gray-800 bg-[#0B110E] text-gray-400 hover:text-gray-200 hover:border-gray-700'
                    : 'border-slate-200 bg-white text-slate-700 hover:text-slate-900 hover:border-emerald-300 shadow-sm'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isSelected
                      ? 'bg-[#00F076] text-black font-bold shadow-md'
                      : isDark
                      ? 'bg-gray-900 text-gray-300'
                      : 'bg-emerald-50 text-emerald-800'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold block leading-snug">
                    {srv.title}
                  </span>
                  <span className="text-[11px] opacity-75 font-mono">
                    En savoir plus →
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Service Box */}
        <motion.div
          key={activeService.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className={`mt-6 rounded-3xl p-6 sm:p-10 border transition-all duration-300 ${
            isDark
              ? 'bg-gradient-to-br from-[#0D1612] via-[#09100D] to-[#060A08] border-[#00F076]/30 shadow-2xl'
              : 'bg-white border-emerald-500/25 shadow-xl shadow-slate-200/60'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00F076] to-[#059669] flex items-center justify-center text-black font-bold shadow-lg shadow-[#00F076]/30">
                    <ActiveIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#00D065] font-bold">
                      Offre Spécifique
                    </span>
                    <h3
                      className={`text-xl sm:text-2xl font-black tracking-tight ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {activeService.title}
                    </h3>
                  </div>
                </div>

                <p
                  className={`text-sm sm:text-base leading-relaxed ${
                    isDark ? 'text-gray-300' : 'text-slate-600'
                  }`}
                >
                  {activeService.desc}
                </p>

                {/* Deliverables Checklist */}
                <div className="mt-6 space-y-2.5">
                  {activeService.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div
                        className={`mt-0.5 w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                          isDark
                            ? 'bg-[#00F076]/20 border-[#00F076]'
                            : 'bg-emerald-100 border-emerald-600'
                        }`}
                      >
                        <CheckCircle
                          className={`w-2.5 h-2.5 ${
                            isDark ? 'text-[#00F076]' : 'text-emerald-700'
                          }`}
                        />
                      </div>
                      <span
                        className={`text-xs sm:text-sm font-medium ${
                          isDark ? 'text-gray-300' : 'text-slate-700'
                        }`}
                      >
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Tags */}
              <div
                className={`mt-8 pt-6 border-t ${
                  isDark ? 'border-gray-800/40' : 'border-gray-100'
                }`}
              >
                <span
                  className={`text-xs font-mono block mb-2.5 font-semibold ${
                    isDark ? 'text-gray-400' : 'text-slate-500'
                  }`}
                >
                  {t.stackLabel}
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeService.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs font-mono px-3 py-1 rounded-lg border font-semibold ${
                        isDark
                          ? 'border-[#00F076]/30 bg-[#00F076]/10 text-[#00F076]'
                          : 'border-emerald-200 bg-emerald-50 text-emerald-800'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Card: Direct WhatsApp Order Action */}
            <div className="lg:col-span-5">
              <div
                className={`rounded-2xl p-6 sm:p-7 border relative overflow-hidden text-xs ${
                  isDark
                    ? 'bg-[#060907] border-gray-800 text-gray-300'
                    : 'bg-slate-900 border-slate-800 text-slate-200 shadow-xl'
                }`}
              >
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-800">
                  <span className="font-mono text-[#00F076] font-bold">
                    NEXERA • Commande Directe
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono font-bold tracking-wider">
                    LIVRAISON EXPRESS
                  </span>
                </div>

                <div className="space-y-3 font-mono text-[11px]">
                  <div className="flex items-center justify-between text-gray-300">
                    <span>DÉLAI DE LIVRAISON :</span>
                    <span className="text-[#00F076] font-bold">3 JOURS MAX</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-300">
                    <span>MODE DE PAIEMENT :</span>
                    <span className="text-cyan-400 font-bold">MOBILE MONEY (USD / FC)</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-300">
                    <span>CANAUX ACCEPTÉS :</span>
                    <span className="text-white">Orange, Airtel, Afric, M-Pesa</span>
                  </div>

                  <div className="mt-4 p-3 rounded-xl bg-black/60 border border-gray-800 text-[11px] leading-relaxed text-emerald-300">
                    ✓ Validation des informations avec l’équipe
                    <br />
                    ✓ Développement & personnalisation
                    <br />
                    ✓ Mise en ligne et remise des accès
                  </div>

                  <a
                    href={`https://wa.me/243988771923?text=${encodeURIComponent(
                      `Bonjour NEXERA, je souhaite commander l'offre suivante : ${activeService.title}`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 w-full py-3.5 rounded-xl font-bold text-center text-xs uppercase tracking-wider text-black bg-[#00F076] hover:bg-[#05DF72] flex items-center justify-center gap-2 shadow-lg shadow-[#00F076]/25 transition-transform hover:scale-[1.02]"
                  >
                    <MessageSquare className="w-4 h-4 fill-black" />
                    <span>Commander sur WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Global Stack Master List */}
        <div className="mt-12 text-center">
          <span
            className={`text-xs font-mono font-bold uppercase tracking-wider block mb-3 ${
              isDark ? 'text-gray-400' : 'text-slate-500'
            }`}
          >
            Technologies & Outils déployés par les équipes NEXERA :
          </span>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {teamTechnologies.map((tech) => (
              <span
                key={tech}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold border ${
                  isDark
                    ? 'bg-[#0E1612] border-gray-800 text-gray-300'
                    : 'bg-white border-slate-200 text-slate-800 shadow-sm'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
