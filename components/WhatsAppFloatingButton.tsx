'use client';

import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import type { Language } from '@/lib/translations';

interface WhatsAppFloatingButtonProps {
  lang: Language;
}

export default function WhatsAppFloatingButton({ lang }: WhatsAppFloatingButtonProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const message =
    lang === 'fr'
      ? 'Bonjour NEXERA, je souhaite échanger sur un projet digital / logiciel.'
      : 'Hello NEXERA, I would like to discuss a software / digital ecosystem project.';

  const waUrl = `https://wa.me/243988771923?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip on hover/click */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/90 border border-[#00F076]/40 text-xs font-mono text-white shadow-xl backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#00F076] animate-ping" />
            <span>
              {lang === 'fr'
                ? 'Échanger sur WhatsApp • Réponse rapide'
                : 'Chat on WhatsApp • Fast response'}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative group w-14 h-14 rounded-2xl bg-[#00F076] hover:bg-[#05DF72] flex items-center justify-center text-black shadow-2xl shadow-[#00F076]/40 transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Contacter NEXERA sur WhatsApp"
      >
        {/* Pulsating ring */}
        <span className="animate-ping absolute -inset-1 rounded-2xl bg-[#00F076] opacity-30 pointer-events-none" />
        <MessageSquare className="w-7 h-7 fill-black" />
      </a>
    </div>
  );
}
