'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  CheckCircle2,
  Cpu,
  ArrowRight,
  MessageSquare,
} from 'lucide-react';
import type { Language } from '@/lib/translations';
import { translations } from '@/lib/translations';
import type { ProjectItem } from '@/lib/projectsData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  lang: Language;
  isDark: boolean;
  onRequestQuote: (projectTitle: string) => void;
}

export default function ProjectModal({
  project,
  onClose,
  lang,
  isDark,
  onRequestQuote,
}: ProjectModalProps) {
  if (!project) return null;
  const t = translations[lang].projects;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto backdrop-blur-md bg-black/75">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className={`relative w-full max-w-3xl rounded-3xl p-6 sm:p-8 border shadow-2xl overflow-hidden my-auto max-h-[90vh] overflow-y-auto ${
            isDark
              ? 'bg-[#0A100D] border-[#00F076]/30 text-[#ECFDF5]'
              : 'bg-white border-emerald-500/30 text-slate-900'
          }`}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className={`absolute top-5 right-5 p-2 rounded-full border transition-colors ${
              isDark
                ? 'border-gray-800 bg-[#121A15] text-gray-300 hover:text-white hover:border-[#00F076]'
                : 'border-slate-200 bg-slate-50 text-slate-700 hover:text-black hover:border-emerald-500'
            }`}
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="pr-10">
            <span
              className={`inline-block px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider border ${
                isDark
                  ? 'bg-[#00F076]/10 text-[#00F076] border-[#00F076]/30'
                  : 'bg-emerald-50 text-emerald-800 border-emerald-300'
              }`}
            >
              {project.categoryLabel[lang]}
            </span>
            <h3
              className={`mt-2 text-2xl sm:text-3xl font-black tracking-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              {project.title}
            </h3>
            <p
              className={`mt-1 text-sm font-semibold ${
                isDark ? 'text-[#00F076]' : 'text-emerald-700'
              }`}
            >
              {project.tagline}
            </p>
          </div>

          {/* Metrics Row */}
          <div
            className={`mt-6 grid grid-cols-3 gap-3 p-4 rounded-2xl border ${
              isDark
                ? 'bg-black/40 border-gray-800'
                : 'bg-slate-50 border-slate-200'
            }`}
          >
            {project.metrics.map((m, idx) => (
              <div key={idx} className="text-center">
                <span
                  className={`text-lg sm:text-xl font-mono font-extrabold ${
                    isDark ? 'text-[#00F076]' : 'text-emerald-700'
                  }`}
                >
                  {m.value}
                </span>
                <span
                  className={`block text-[11px] font-medium ${
                    isDark ? 'text-gray-400' : 'text-slate-600'
                  }`}
                >
                  {m.label[lang]}
                </span>
              </div>
            ))}
          </div>

          {/* Overview */}
          <div className="mt-6">
            <h4
              className={`text-xs font-mono uppercase tracking-wider mb-1.5 font-bold ${
                isDark ? 'text-gray-400' : 'text-slate-500'
              }`}
            >
              Présentation du Projet
            </h4>
            <p
              className={`text-sm leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-slate-700'
              }`}
            >
              {project.overview[lang]}
            </p>
          </div>

          {/* Architecture */}
          <div
            className={`mt-5 p-4 rounded-xl border ${
              isDark
                ? 'bg-[#00F076]/5 border-[#00F076]/20'
                : 'bg-emerald-50/80 border-emerald-200'
            }`}
          >
            <h4
              className={`text-xs font-mono uppercase tracking-wider font-bold flex items-center gap-1.5 mb-1 ${
                isDark ? 'text-[#00F076]' : 'text-emerald-900'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              Architecture & Choix d’Ingénierie
            </h4>
            <p
              className={`text-xs sm:text-sm leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-slate-700'
              }`}
            >
              {project.architecture[lang]}
            </p>
          </div>

          {/* Features / Capabilities */}
          <div className="mt-5">
            <h4
              className={`text-xs font-mono uppercase tracking-wider mb-2.5 font-bold ${
                isDark ? 'text-gray-400' : 'text-slate-500'
              }`}
            >
              Fonctionnalités Clés & Résilience
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features[lang].map((f, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2
                    className={`w-4 h-4 shrink-0 mt-0.5 ${
                      isDark ? 'text-[#00F076]' : 'text-emerald-600'
                    }`}
                  />
                  <span
                    className={`text-xs font-medium ${
                      isDark ? 'text-gray-300' : 'text-slate-700'
                    }`}
                  >
                    {f}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div
            className={`mt-6 pt-4 border-t ${
              isDark ? 'border-gray-800' : 'border-slate-200'
            }`}
          >
            <span
              className={`text-xs font-mono block mb-2 font-semibold ${
                isDark ? 'text-gray-400' : 'text-slate-500'
              }`}
            >
              {t.techStack}
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`px-2.5 py-1 rounded-md text-xs font-mono font-medium border ${
                    isDark
                      ? 'bg-[#0E1712] border-gray-800 text-gray-300'
                      : 'bg-slate-100 border-slate-200 text-slate-800'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div
            className={`mt-8 pt-4 border-t flex flex-col sm:flex-row items-center justify-between gap-3 ${
              isDark ? 'border-gray-800' : 'border-slate-200'
            }`}
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-[#00F076] hover:bg-[#05DF72] flex items-center justify-center gap-2 shadow-lg shadow-[#00F076]/30 transition-transform hover:scale-[1.02]"
            >
              <span>Voir le site en direct</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={`https://wa.me/243988771923?text=${encodeURIComponent(
                `Bonjour NEXERA, je souhaite commander un portfolio similaire à "${project.title}" livré en 3 jours.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className={`w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold border flex items-center justify-center gap-2 transition-colors ${
                isDark
                  ? 'border-gray-700 bg-black/40 text-gray-300 hover:text-white'
                  : 'border-slate-300 bg-slate-50 text-slate-700 hover:text-slate-900'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#00D065]" />
              <span>Commander sur WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
