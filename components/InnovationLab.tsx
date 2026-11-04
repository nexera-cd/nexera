'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Zap,
  Clock,
  CreditCard,
  Bot,
  Play,
  CheckCircle2,
  Terminal,
  Cpu,
} from 'lucide-react';
import type { Language } from '@/lib/translations';
import { translations } from '@/lib/translations';

interface InnovationLabProps {
  lang: Language;
  isDark: boolean;
}

export default function InnovationLab({ lang, isDark }: InnovationLabProps) {
  const t = translations[lang].innovation;
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationStep, setSimulationStep] = useState(0);

  const runSimulation = () => {
    setIsSimulating(true);
    setSimulationStep(1);

    setTimeout(() => {
      setSimulationStep(2);
    }, 1100);

    setTimeout(() => {
      setSimulationStep(3);
    }, 2200);

    setTimeout(() => {
      setSimulationStep(4);
      setIsSimulating(false);
    }, 3300);
  };

  const simulationLogs = [
    {
      step: 1,
      text: '[NEXERA WORKFLOW] Initialisation du cadrage portfolio en ligne...',
      type: 'info',
    },
    {
      step: 2,
      text: '[PIPELINE J+1] Génération des composants React & mise en place du responsive design...',
      type: 'info',
    },
    {
      step: 3,
      text: '[PIPELINE J+2] Intégration passerelle Mobile Money (Orange, Airtel, Afric, M-Pesa) & tests...',
      type: 'warn',
    },
    {
      step: 4,
      text: '[LIVRAISON J+3] Déploiement Vercel réussi. Projet 100% opérationnel en 3 jours chrono !',
      type: 'success',
    },
  ];

  const pillars = [
    {
      title: t.p1Title,
      desc: t.p1Desc,
      icon: Cpu,
      tag: 'Haute Performance',
      accent: '#00D065',
    },
    {
      title: t.p2Title,
      desc: t.p2Desc,
      icon: Clock,
      tag: 'Garantie 3 Jours',
      accent: '#0284c7',
    },
    {
      title: t.p3Title,
      desc: t.p3Desc,
      icon: CreditCard,
      tag: 'Mobile Money',
      accent: '#059669',
    },
    {
      title: t.p4Title,
      desc: t.p4Desc,
      icon: Bot,
      tag: 'Workflows & Agents',
      accent: '#d97706',
    },
  ];

  return (
    <section id="innovation" className="py-14 sm:py-20 relative overflow-hidden">
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

        {/* 4 Real Differentiating Points Grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className={`rounded-2xl p-6 border flex flex-col justify-between transition-all duration-300 ${
                  isDark
                    ? 'bg-[#0B130F] border-[#00F076]/25 shadow-lg'
                    : 'bg-white border-emerald-500/25 shadow-md hover:shadow-xl shadow-slate-100'
                }`}
              >
                <div>
                  <div
                    className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-4 ${
                      isDark
                        ? 'bg-black/40 border-[#00F076]/30'
                        : 'bg-slate-50 border-slate-200'
                    }`}
                    style={{ color: item.accent }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <span
                    className={`text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded border inline-block mb-2 ${
                      isDark
                        ? 'bg-[#00F076]/10 text-[#00F076] border-[#00F076]/20'
                        : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                    }`}
                  >
                    {item.tag}
                  </span>

                  <h3
                    className={`text-base font-bold tracking-tight ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`mt-2 text-xs leading-relaxed ${
                      isDark ? 'text-gray-300' : 'text-slate-600'
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pipeline Simulation Console */}
        <div
          className={`mt-10 sm:mt-12 rounded-3xl p-6 sm:p-8 border relative overflow-hidden ${
            isDark
              ? 'bg-[#060907] border-[#00F076]/30 shadow-2xl'
              : 'bg-white border-emerald-500/25 shadow-xl shadow-slate-200/50'
          }`}
        >
          <div
            className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b ${
              isDark ? 'border-gray-800' : 'border-slate-200'
            }`}
          >
            <div>
              <span
                className={`text-xs font-mono font-bold flex items-center gap-2 ${
                  isDark ? 'text-[#00F076]' : 'text-emerald-700'
                }`}
              >
                <Clock className="w-4 h-4 text-[#00D065]" />
                Pipeline d’Exécution Rapide NEXERA
              </span>
              <h4
                className={`text-base sm:text-lg font-bold mt-1 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Simulation de Livraison en 3 Jours Chrono
              </h4>
            </div>

            <button
              onClick={runSimulation}
              disabled={isSimulating}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                isSimulating
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                  : 'bg-[#00F076] text-black hover:bg-[#05DF72] shadow-lg shadow-[#00F076]/25 hover:scale-105 active:scale-95'
              }`}
            >
              <Play className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
              <span>{isSimulating ? 'Progression...' : 'Tester le pipeline 3 jours'}</span>
            </button>
          </div>

          {/* Terminal Logs */}
          <div className="mt-5 rounded-2xl p-4 bg-slate-950 border border-slate-800 font-mono text-xs text-slate-200 shadow-inner">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-400">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#00F076]" />
                nexera-delivery-engine // Kinshasa
              </span>
              <span className="text-[10px]">LIVRAISON 3 JOURS CHRONO</span>
            </div>

            <div className="space-y-2 min-h-[80px]">
              <div className="text-slate-400">
                [PIPELINE PRÊT] Cliquez sur &quot;Tester le pipeline 3 jours&quot; pour visualiser les étapes de livraison NEXERA.
              </div>

              {simulationLogs.map((log) => {
                if (simulationStep < log.step) return null;
                return (
                  <motion.div
                    key={log.step}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={
                      log.type === 'warn'
                        ? 'text-cyan-300 font-medium'
                        : log.type === 'success'
                        ? 'text-[#00F076] font-bold'
                        : 'text-emerald-300'
                    }
                  >
                    {log.text}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
