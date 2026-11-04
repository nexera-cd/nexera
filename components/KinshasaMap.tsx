'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  MessageSquare,
  Globe,
  Clock,
  Compass,
  CheckCircle2,
} from 'lucide-react';
import type { Language } from '@/lib/translations';
import { translations } from '@/lib/translations';

interface KinshasaMapProps {
  lang: Language;
  isDark: boolean;
}

export default function KinshasaMap({ lang, isDark }: KinshasaMapProps) {
  const t = translations[lang].map;
  const [mapView, setMapView] = useState<'interactive' | 'satellite'>('interactive');

  return (
    <section id="map" className="py-14 sm:py-20 relative overflow-hidden">
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
            <Compass className="w-3.5 h-3.5 text-[#00D065]" />
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

        {/* Map Container & Info Card */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: Interactive Aesthetic Kinshasa Map View */}
          <div
            className={`lg:col-span-8 rounded-3xl border overflow-hidden relative shadow-xl min-h-[360px] sm:min-h-[420px] flex flex-col justify-between ${
              isDark
                ? 'border-[#00F076]/30 bg-[#090E0B]'
                : 'border-emerald-500/25 bg-white shadow-slate-200/50'
            }`}
          >
            {/* Map Style Controls */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
              <button
                onClick={() => setMapView('interactive')}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all backdrop-blur-md border ${
                  mapView === 'interactive'
                    ? 'bg-[#00F076] text-black border-[#00F076] shadow-md font-bold'
                    : isDark
                    ? 'bg-black/70 text-gray-300 border-gray-700 hover:text-white'
                    : 'bg-white/90 text-slate-800 border-slate-300 hover:text-black shadow-sm'
                }`}
              >
                Carte Dynamique
              </button>
              <button
                onClick={() => setMapView('satellite')}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all backdrop-blur-md border ${
                  mapView === 'satellite'
                    ? 'bg-[#00F076] text-black border-[#00F076] shadow-md font-bold'
                    : isDark
                    ? 'bg-black/70 text-gray-300 border-gray-700 hover:text-white'
                    : 'bg-white/90 text-slate-800 border-slate-300 hover:text-black shadow-sm'
                }`}
              >
                Vue Satellite
              </button>
            </div>

            {/* Embedded Map */}
            <div className="w-full h-full min-h-[360px] sm:min-h-[420px] relative">
              <iframe
                title="Localisation NEXERA Kinshasa RDC"
                src={
                  mapView === 'interactive'
                    ? 'https://maps.google.com/maps?q=-4.325,15.322&z=12&output=embed'
                    : 'https://maps.google.com/maps?q=-4.325,15.322&t=k&z=13&output=embed'
                }
                className={`w-full h-full border-0 absolute inset-0 ${
                  isDark && mapView === 'interactive'
                    ? 'contrast-125 brightness-90 hue-rotate-[145deg] invert'
                    : ''
                }`}
                loading="lazy"
                allowFullScreen
              />

              {/* Glowing Beacon Overlay Marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 flex flex-col items-center">
                <div className="relative flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-[#00F076] opacity-75" />
                  <div className="w-9 h-9 rounded-full bg-[#00F076] text-black flex items-center justify-center font-black shadow-xl shadow-[#00F076]/50 border-2 border-black">
                    <MapPin className="w-5 h-5 fill-black" />
                  </div>
                </div>
                <div className="mt-2 px-2.5 py-1 rounded-md bg-black/90 text-[11px] font-mono font-bold text-[#00F076] border border-[#00F076]/50 shadow-lg backdrop-blur-sm">
                  NEXERA • KINSHASA (RDC)
                </div>
              </div>
            </div>

            {/* Bottom Bar overlay */}
            <div
              className={`p-3 backdrop-blur-md border-t flex items-center justify-between text-xs font-mono z-20 ${
                isDark
                  ? 'bg-black/80 border-gray-800 text-gray-300'
                  : 'bg-white/95 border-slate-200 text-slate-800'
              }`}
            >
              <span
                className={`flex items-center gap-1.5 font-bold ${
                  isDark ? 'text-[#00F076]' : 'text-emerald-700'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-[#00F076] animate-pulse" />
                Kinshasa Hub • 100% En Ligne
              </span>
              <span className="hidden sm:inline text-slate-500 font-semibold">
                GMT+1 (Heure de Kinshasa)
              </span>
            </div>
          </div>

          {/* Right: Remote Modal & Direct WhatsApp Channel */}
          <div
            className={`lg:col-span-4 rounded-3xl p-6 sm:p-7 border flex flex-col justify-between ${
              isDark
                ? 'bg-[#0B130F] border-[#00F076]/30 shadow-xl'
                : 'bg-white border-emerald-500/25 shadow-xl shadow-slate-200/50'
            }`}
          >
            <div>
              <div
                className={`flex items-center gap-2 text-xs font-mono font-bold mb-2 ${
                  isDark ? 'text-[#00F076]' : 'text-emerald-700'
                }`}
              >
                <Globe className="w-4 h-4" />
                <span>Modalité Opérationnelle</span>
              </div>

              <h3
                className={`text-xl font-black ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                NEXERA Kinshasa
              </h3>
              <p
                className={`mt-1 text-sm font-bold ${
                  isDark ? 'text-emerald-400' : 'text-emerald-700'
                }`}
              >
                {t.remoteBadge}
              </p>
              <p
                className={`text-xs mt-0.5 ${
                  isDark ? 'text-gray-400' : 'text-slate-500'
                }`}
              >
                {t.city}
              </p>

              <div className="mt-6 space-y-3.5">
                <div
                  className={`p-3.5 rounded-xl border ${
                    isDark
                      ? 'bg-black/40 border-gray-800'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00D065] shrink-0 mt-0.5" />
                    <div>
                      <span
                        className={`text-xs font-bold block ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        Gestion des Prestations
                      </span>
                      <p
                        className={`text-[11px] leading-snug mt-0.5 ${
                          isDark ? 'text-gray-300' : 'text-slate-600'
                        }`}
                      >
                        {t.remoteNotice}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className={`p-3.5 rounded-xl border ${
                    isDark
                      ? 'bg-black/40 border-gray-800'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-[#00D065] shrink-0 mt-0.5" />
                    <div>
                      <span
                        className={`text-xs font-bold block ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        Disponibilité & Échanges
                      </span>
                      <p
                        className={`text-[11px] leading-snug mt-0.5 ${
                          isDark ? 'text-gray-300' : 'text-slate-600'
                        }`}
                      >
                        Du Lundi au Samedi via WhatsApp & e-mail.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Call to Action */}
            <div className="mt-8">
              <a
                href="https://wa.me/243988771923?text=Bonjour%20NEXERA%2C%20je%20souhaite%20démarrer%20un%20échange%20pour%20un%20projet%20digital."
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-[#00F076] hover:bg-[#05DF72] flex items-center justify-center gap-2 shadow-lg shadow-[#00F076]/25 transition-transform hover:scale-[1.02]"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                <span>Échanger sur WhatsApp (+243 988 771 923)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
