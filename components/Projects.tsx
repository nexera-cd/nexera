'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  Sparkles,
  Globe,
  ExternalLink,
  CheckCircle2,
  Clock,
  Layers,
  MessageSquare,
} from 'lucide-react';
import type { Language } from '@/lib/translations';
import { translations } from '@/lib/translations';
import type { ProjectItem } from '@/lib/projectsData';
import { projectsData } from '@/lib/projectsData';
import ProjectModal from './ProjectModal';

interface ProjectsProps {
  lang: Language;
  isDark: boolean;
  onRequestQuote: (projectTitle: string) => void;
}

export default function Projects({ lang, isDark, onRequestQuote }: ProjectsProps) {
  const t = translations[lang].projects;
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-14 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            <Sparkles className="w-3.5 h-3.5 text-[#00D065]" />
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

        {/* Real Showcase Grid (Featuring Donat Omengelo Portfolio) */}
        <div className="mt-10 sm:mt-12 max-w-4xl mx-auto">
          {projectsData.map((proj) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className={`rounded-3xl p-6 sm:p-8 border transition-all duration-300 relative overflow-hidden ${
                isDark
                  ? 'bg-[#0B120E] border-[#00F076]/30 shadow-xl'
                  : 'bg-white border-emerald-500/25 shadow-xl shadow-slate-100'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${
                      isDark
                        ? 'bg-black/40 border-[#00F076]/30 text-[#00F076]'
                        : 'bg-emerald-50 border-emerald-200 text-emerald-800'
                    }`}
                  >
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <span
                      className={`text-[11px] font-mono tracking-wider px-2.5 py-1 rounded-md border font-semibold ${
                        isDark
                          ? 'bg-[#00F076]/10 text-[#00F076] border-[#00F076]/20'
                          : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                      }`}
                    >
                      {proj.categoryLabel[lang]}
                    </span>
                    <h3
                      className={`text-xl sm:text-2xl font-black tracking-tight mt-1 ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {proj.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#00F076]/15 text-[#00D065] border border-[#00F076]/30">
                    <span className="w-2 h-2 rounded-full bg-[#00F076] animate-pulse" />
                    {t.deliveredBadge}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-7">
                  <p
                    className={`text-sm sm:text-base leading-relaxed ${
                      isDark ? 'text-gray-300' : 'text-slate-700'
                    }`}
                  >
                    {proj.overview[lang]}
                  </p>

                  <div className="mt-5 grid grid-cols-3 gap-2 p-3 rounded-2xl border bg-slate-50 dark:bg-black/40 border-slate-200 dark:border-gray-800 text-center">
                    {proj.metrics.map((m, idx) => (
                      <div key={idx}>
                        <span
                          className={`text-sm sm:text-base font-bold font-mono block ${
                            isDark ? 'text-[#00F076]' : 'text-emerald-700'
                          }`}
                        >
                          {m.value}
                        </span>
                        <span
                          className={`text-[10px] font-semibold block ${
                            isDark ? 'text-gray-400' : 'text-slate-500'
                          }`}
                        >
                          {m.label[lang]}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {proj.technologies.map((t) => (
                      <span
                        key={t}
                        className={`text-xs font-mono px-2.5 py-1 rounded-lg border font-semibold ${
                          isDark
                            ? 'bg-gray-900 text-gray-300 border-gray-800'
                            : 'bg-slate-100 text-slate-700 border-slate-200'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="lg:col-span-5 flex flex-col gap-3">
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3.5 px-5 rounded-2xl font-bold text-xs uppercase tracking-wider text-black bg-[#00F076] hover:bg-[#05DF72] flex items-center justify-center gap-2 shadow-lg shadow-[#00F076]/25 transition-transform hover:scale-[1.02]"
                  >
                    <span>{t.visitOnline}</span>
                    <ExternalLink className="w-4 h-4 fill-black" />
                  </a>

                  <button
                    onClick={() => setActiveProject(proj)}
                    className={`w-full py-3 px-5 rounded-2xl text-xs font-semibold border flex items-center justify-center gap-2 transition-colors ${
                      isDark
                        ? 'border-gray-800 bg-[#0E1612] text-gray-300 hover:text-white'
                        : 'border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    <span>{t.caseStudy}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#00D065]" />
                  </button>

                  <a
                    href={`https://wa.me/243988771923?text=${encodeURIComponent(
                      `Bonjour NEXERA, j'ai vu votre réalisation "${proj.title}" et j'aimerais commander un portfolio similaire livré en 3 jours.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full py-3 px-5 rounded-2xl text-xs font-semibold border flex items-center justify-center gap-2 transition-colors ${
                      isDark
                        ? 'border-emerald-500/30 text-emerald-400 bg-emerald-950/20 hover:bg-emerald-950/40'
                        : 'border-emerald-300 text-emerald-800 bg-emerald-50 hover:bg-emerald-100'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4 text-[#00D065]" />
                    <span>Commander un portfolio similaire</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        lang={lang}
        isDark={isDark}
        onRequestQuote={onRequestQuote}
      />
    </section>
  );
}
