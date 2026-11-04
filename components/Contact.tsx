'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Send,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import type { Language } from '@/lib/translations';
import { translations } from '@/lib/translations';

interface ContactProps {
  lang: Language;
  isDark: boolean;
  prefilledMessage?: string;
}

export default function Contact({ lang, isDark, prefilledMessage }: ContactProps) {
  const t = translations[lang].contact;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceSelect: 'Développement Web, Mobile & Portfolios',
    message: prefilledMessage || '',
  });

  const [prevPrefilled, setPrevPrefilled] = useState(prefilledMessage);
  if (prefilledMessage !== prevPrefilled) {
    setPrevPrefilled(prefilledMessage);
    setFormData((prev) => ({ ...prev, message: prefilledMessage || '' }));
  }

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const openWhatsAppWithForm = () => {
    const text = encodeURIComponent(
      `Bonjour NEXERA,\nJe suis ${formData.name || 'un client'}.\n- Email : ${formData.email || 'N/A'}\n- Téléphone : ${formData.phone || 'N/A'}\n- Service : ${formData.serviceSelect}\n- Détails : ${formData.message || 'Demande de renseignement pour un projet'}`
    );
    window.open(`https://wa.me/243988771923?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-14 sm:py-20 relative overflow-hidden">
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
            <Send className="w-3.5 h-3.5 text-[#00D065]" />
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

        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Official Contact Hub */}
          <div className="lg:col-span-5 space-y-4">
            {/* Direct WhatsApp Card */}
            <a
              href="https://wa.me/243988771923?text=Bonjour%20NEXERA%2C%20je%20souhaite%20planifier%20un%20appel%20pour%20un%20projet%20digital."
              target="_blank"
              rel="noreferrer"
              className={`block p-6 rounded-3xl border transition-all duration-300 hover:scale-[1.01] ${
                isDark
                  ? 'bg-gradient-to-br from-[#0B1410] to-[#070D09] border-[#00F076]/30 shadow-lg'
                  : 'bg-white border-emerald-500/25 shadow-xl shadow-slate-200/50'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#00F076] text-black flex items-center justify-center font-bold shadow-md shadow-[#00F076]/30">
                  <MessageSquare className="w-5 h-5 fill-black" />
                </div>
                <div>
                  <span
                    className={`text-[11px] font-mono font-bold block uppercase ${
                      isDark ? 'text-[#00F076]' : 'text-emerald-700'
                    }`}
                  >
                    Canal Prioritaire Instantané
                  </span>
                  <span
                    className={`text-base font-bold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {t.whatsappDirect}
                  </span>
                </div>
              </div>
              <p
                className={`text-xs leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-slate-600'
                }`}
              >
                {t.whatsappDirectDesc}
              </p>
              <div
                className={`mt-4 flex items-center justify-between text-xs font-mono font-bold ${
                  isDark ? 'text-[#00F076]' : 'text-emerald-700'
                }`}
              >
                <span>{lang === 'fr' ? 'Démarrer l’échange' : 'Start conversation'}</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>

            {/* Official Phone */}
            <div
              className={`p-6 rounded-3xl border ${
                isDark
                  ? 'bg-[#0A100D] border-gray-800'
                  : 'bg-white border-emerald-500/20 shadow-md shadow-slate-100'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center ${
                    isDark
                      ? 'bg-gray-900 border-gray-800 text-[#00F076]'
                      : 'bg-emerald-50 border-emerald-200 text-emerald-800'
                  }`}
                >
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span
                    className={`text-[11px] font-mono block uppercase ${
                      isDark ? 'text-gray-400' : 'text-slate-500 font-semibold'
                    }`}
                  >
                    Ligne Téléphonique Officielle
                  </span>
                  <a
                    href="tel:+243988771923"
                    className={`text-base font-bold transition-colors ${
                      isDark
                        ? 'text-white hover:text-[#00F076]'
                        : 'text-slate-900 hover:text-emerald-700'
                    }`}
                  >
                    +243 988 771 923
                  </a>
                </div>
              </div>
            </div>

            {/* Official Email */}
            <div
              className={`p-6 rounded-3xl border ${
                isDark
                  ? 'bg-[#0A100D] border-gray-800'
                  : 'bg-white border-emerald-500/20 shadow-md shadow-slate-100'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center ${
                    isDark
                      ? 'bg-gray-900 border-gray-800 text-[#00F076]'
                      : 'bg-emerald-50 border-emerald-200 text-emerald-800'
                  }`}
                >
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span
                    className={`text-[11px] font-mono block uppercase ${
                      isDark ? 'text-gray-400' : 'text-slate-500 font-semibold'
                    }`}
                  >
                    Email Principal
                  </span>
                  <a
                    href="mailto:nexera.cd@gmail.com"
                    className={`text-base font-bold transition-colors ${
                      isDark
                        ? 'text-white hover:text-[#00F076]'
                        : 'text-slate-900 hover:text-emerald-700'
                    }`}
                  >
                    nexera.cd@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Official Social Networks: Instagram & Facebook */}
            <div
              className={`p-6 rounded-3xl border ${
                isDark
                  ? 'bg-[#0A100D] border-gray-800'
                  : 'bg-white border-emerald-500/20 shadow-md shadow-slate-100'
              }`}
            >
              <span
                className={`text-xs font-mono font-bold block mb-3 uppercase ${
                  isDark ? 'text-gray-300' : 'text-slate-700'
                }`}
              >
                {t.socialsTitle}
              </span>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://www.instagram.com/nexera.cd?cplk=ajZtNjRhazE0YjM1"
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-xl border flex items-center justify-between text-xs font-bold transition-colors ${
                    isDark
                      ? 'bg-[#0E1612] border-gray-800 text-gray-200 hover:text-[#00F076] hover:border-[#00F076]/40'
                      : 'bg-slate-50 border-slate-200 text-slate-800 hover:text-emerald-700 hover:border-emerald-300'
                  }`}
                >
                  <span>Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61595723167901"
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-xl border flex items-center justify-between text-xs font-bold transition-colors ${
                    isDark
                      ? 'bg-[#0E1612] border-gray-800 text-gray-200 hover:text-[#00F076] hover:border-[#00F076]/40'
                      : 'bg-slate-50 border-slate-200 text-slate-800 hover:text-emerald-700 hover:border-emerald-300'
                  }`}
                >
                  <span>Facebook</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Responsive Clean Form */}
          <div
            className={`lg:col-span-7 rounded-3xl p-6 sm:p-10 border shadow-2xl relative ${
              isDark
                ? 'bg-[#0A110E] border-[#00F076]/30'
                : 'bg-white border-emerald-500/25 shadow-xl shadow-slate-200/50'
            }`}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#00F076]/20 border border-[#00F076] text-[#00F076] mx-auto flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3
                  className={`text-2xl font-black ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {t.successTitle}
                </h3>
                <p
                  className={`mt-2 text-sm max-w-md mx-auto leading-relaxed ${
                    isDark ? 'text-gray-300' : 'text-slate-600'
                  }`}
                >
                  {t.successDesc}
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        serviceSelect: 'Développement Web, Mobile & Portfolios',
                        message: '',
                      });
                    }}
                    className={`px-6 py-2.5 rounded-xl text-xs font-semibold border ${
                      isDark
                        ? 'border-gray-800 text-gray-300 hover:text-white'
                        : 'border-slate-300 text-slate-700 hover:text-black'
                    }`}
                  >
                    Envoyer un autre message
                  </button>

                  <button
                    onClick={openWhatsAppWithForm}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#00F076] flex items-center gap-2 shadow-md shadow-[#00F076]/20"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Ouvrir sur WhatsApp</span>
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label
                      className={`text-xs font-mono font-bold block mb-1.5 ${
                        isDark ? 'text-gray-300' : 'text-slate-700'
                      }`}
                    >
                      {t.fullName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Votre nom ou entreprise"
                      className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none transition-colors ${
                        isDark
                          ? 'bg-[#060A08] border-gray-800 text-white focus:border-[#00F076]'
                          : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 shadow-sm'
                      }`}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      className={`text-xs font-mono font-bold block mb-1.5 ${
                        isDark ? 'text-gray-300' : 'text-slate-700'
                      }`}
                    >
                      {t.email} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="nom@exemple.com"
                      className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none transition-colors ${
                        isDark
                          ? 'bg-[#060A08] border-gray-800 text-white focus:border-[#00F076]'
                          : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 shadow-sm'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone / WhatsApp */}
                  <div>
                    <label
                      className={`text-xs font-mono font-bold block mb-1.5 ${
                        isDark ? 'text-gray-300' : 'text-slate-700'
                      }`}
                    >
                      {t.phone} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+243 ..."
                      className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none transition-colors ${
                        isDark
                          ? 'bg-[#060A08] border-gray-800 text-white focus:border-[#00F076]'
                          : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 shadow-sm'
                      }`}
                    />
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label
                      className={`text-xs font-mono font-bold block mb-1.5 ${
                        isDark ? 'text-gray-300' : 'text-slate-700'
                      }`}
                    >
                      {t.serviceSelect}
                    </label>
                    <select
                      value={formData.serviceSelect}
                      onChange={(e) =>
                        setFormData({ ...formData, serviceSelect: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none transition-colors ${
                        isDark
                          ? 'bg-[#060A08] border-gray-800 text-white focus:border-[#00F076]'
                          : 'bg-white border-slate-300 text-slate-900 focus:border-emerald-600 shadow-sm'
                      }`}
                    >
                      <option value="Développement Web, Mobile & Portfolios">
                        Développement Web, Mobile & Portfolios
                      </option>
                      <option value="Ingénierie Logicielle PC & Automatisation">
                        Ingénierie Logicielle PC & Automatisation
                      </option>
                      <option value="Plateformes & Incubateur SaaS">
                        Plateformes & Incubateur SaaS
                      </option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    className={`text-xs font-mono font-bold block mb-1.5 ${
                      isDark ? 'text-gray-300' : 'text-slate-700'
                    }`}
                  >
                    {t.message} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Décrivez votre besoin : type de site ou logiciel, fonctionnalités, délais souhaités..."
                    className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none transition-colors resize-none ${
                      isDark
                        ? 'bg-[#060A08] border-gray-800 text-white focus:border-[#00F076]'
                        : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 shadow-sm'
                    }`}
                  />
                </div>

                {/* Submit & WhatsApp Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-[#00F076] hover:bg-[#05DF72] flex items-center justify-center gap-2 shadow-xl shadow-[#00F076]/30 transition-transform hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4 text-black" />
                    <span>{isSubmitting ? t.submitting : t.submit}</span>
                  </button>

                  <button
                    type="button"
                    onClick={openWhatsAppWithForm}
                    className={`px-5 py-3.5 rounded-xl text-xs font-bold border flex items-center justify-center gap-2 transition-colors ${
                      isDark
                        ? 'border-gray-800 bg-[#0E1612] text-gray-300 hover:text-white'
                        : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50 shadow-sm'
                    }`}
                    title="Envoyer directement sur WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4 text-[#00D065]" />
                    <span className="hidden sm:inline">Transmettre sur WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
