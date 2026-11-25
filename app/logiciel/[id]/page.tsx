"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { softwares } from "../../../data/softwares";
import {
  ArrowLeft,
  CheckCircle2,
  Download,
  ExternalLink,
  MessageCircle,
  ShieldCheck,
  Copy,
  Check,
  Sparkles,
  HelpCircle,
  XCircle,
  Quote,
  Car,
  X,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

function GalleryLightbox({
  images,
  activeIndex,
  title,
  onClose,
  onSelectIndex,
}: {
  images: string[];
  activeIndex: number | null;
  title: string;
  onClose: () => void;
  onSelectIndex: (idx: number) => void;
}) {
  useEffect(() => {
    if (activeIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && images.length > 1) {
        onSelectIndex((activeIndex + 1) % images.length);
      }
      if (e.key === "ArrowLeft" && images.length > 1) {
        onSelectIndex((activeIndex - 1 + images.length) % images.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, images.length, onClose, onSelectIndex]);

  if (activeIndex === null || !images[activeIndex]) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} capture ${activeIndex + 1}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden"
      >
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900/95 border-b border-slate-800">
          <span className="text-xs md:text-sm font-medium text-slate-200 truncate">
            {title} — Image {activeIndex + 1} / {images.length}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer l'image"
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative bg-slate-950 flex items-center justify-center p-3 md:p-6 max-h-[82vh]">
          {images.length > 1 && (
            <button
              type="button"
              onClick={() =>
                onSelectIndex((activeIndex - 1 + images.length) % images.length)
              }
              aria-label="Image précédente"
              className="absolute left-3 md:left-5 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          <img
            src={images[activeIndex]}
            alt={`${title} capture ${activeIndex + 1}`}
            className="max-w-full max-h-[75vh] object-contain rounded-lg"
          />

          {images.length > 1 && (
            <button
              type="button"
              onClick={() => onSelectIndex((activeIndex + 1) % images.length)}
              aria-label="Image suivante"
              className="absolute right-3 md:right-5 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function GalleryImageCard({
  src,
  alt,
  onClick,
}: {
  src: string;
  alt: string;
  onClick: () => void;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <button
      type="button"
      onClick={onClick}
      title="Cliquer pour agrandir"
      className="group relative text-left rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-sm cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-violet-500"
    >
      <img
        src={src}
        alt={alt}
        onError={() => setFailed(true)}
        className="w-full h-52 object-cover object-top group-hover:scale-105 transition-transform duration-300"
      />
      <span className="absolute bottom-3 right-3 px-2.5 py-1.5 rounded-lg bg-slate-900/75 text-white text-[11px] font-medium flex items-center gap-1 backdrop-blur-sm">
        <ZoomIn className="w-3.5 h-3.5" /> Agrandir
      </span>
    </button>
  );
}

function SoftwareDetailContent() {
  const params = useParams<{ id: string }>();
  const [copied, setCopied] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const software = softwares.find((s) => s.id === params.id);

  if (!software) {
    return (
      <div className="min-h-screen bg-white text-slate-900 flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-2xl font-bold mb-3">Logiciel introuvable</h1>
        <Link
          href="/"
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold"
        >
          Retour au catalogue
        </Link>
      </div>
    );
  }

  const phone = software.whatsappPhone || "212658204441";
  const whatsappDemoText = encodeURIComponent(
    `Bonjour, je souhaite demander une démonstration gratuite pour ${software.brandName || software.name}.`
  );
  const whatsappQuoteText = encodeURIComponent(
    `Bonjour, je souhaite recevoir un devis / une offre adaptée pour ${software.brandName || software.name}.`
  );

  const handleCopyPitch = async () => {
    if (!software.pitchCopy) return;
    await navigator.clipboard.writeText(software.pitchCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const hasBenefitsTable = software.modules?.some((m) => Boolean(m.benefit));
  const galleryImages =
    software.gallery && software.gallery.length > 0
      ? software.gallery
      : software.image
      ? [software.image]
      : [];

  return (
    <div className="min-h-screen relative bg-white text-slate-900 selection:bg-violet-500/20 selection:text-violet-900">
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0" />
      <div className="fixed top-[-15%] left-1/2 -translate-x-1/2 w-[950px] h-[500px] bg-gradient-to-tr from-blue-500/15 via-violet-500/20 to-fuchsia-400/15 blur-[130px] rounded-full pointer-events-none z-0" />

      <GalleryLightbox
        images={galleryImages}
        activeIndex={lightboxIndex}
        title={software.brandName || software.name}
        onClose={() => setLightboxIndex(null)}
        onSelectIndex={(idx) => setLightboxIndex(idx)}
      />

      <header className="sticky top-4 z-50 px-4 pt-4">
        <nav className="max-w-5xl mx-auto h-14 px-5 rounded-full bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-violet-600 transition"
              title="Retour au catalogue"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Catalogue</span>
            </Link>
            <span className="text-slate-300">|</span>
            <div className="flex items-center gap-2 font-extrabold tracking-tight text-slate-900 text-base">
              <Car className="w-4 h-4 text-violet-600" />
              <span>{software.brandName || software.name}</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#fonctionnalites" className="hover:text-violet-600 transition">
              Fonctionnalités
            </a>
            <a href="#avantages" className="hover:text-violet-600 transition">
              Avantages
            </a>
            {software.pricingSection && (
              <a href="#tarifs" className="hover:text-violet-600 transition">
                Tarifs
              </a>
            )}
            {software.faqs && software.faqs.length > 0 && (
              <a href="#faq" className="hover:text-violet-600 transition">
                FAQ
              </a>
            )}
          </div>

          <a
            href={`https://wa.me/${phone}?text=${whatsappDemoText}`}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-semibold bg-gradient-to-r from-blue-600 to-violet-600 text-white px-4 py-2 rounded-full hover:opacity-95 transition shadow-sm"
          >
            Demander une démo
          </a>
        </nav>
      </header>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-10">
        <div className="rounded-3xl border border-slate-200/90 bg-white/95 backdrop-blur-xl p-6 md:p-12 shadow-[0_10px_40px_-15px_rgba(15,23,42,0.08)] mb-12">
          <div className="flex flex-wrap items-center gap-2.5 mb-5">
            {software.badge && (
              <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-violet-50 text-violet-700 border border-violet-200">
                ★ {software.badge}
              </span>
            )}
            <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
              {software.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-5 leading-tight">
            {software.description}
          </h1>

          <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed">
            {software.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a
              href={`https://wa.me/${phone}?text=${whatsappDemoText}`}
              target="_blank"
              rel="noreferrer"
              className="py-3.5 px-6 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 hover:opacity-95 text-white font-semibold text-sm flex items-center gap-2 shadow-md shadow-violet-500/25 transition"
            >
              <Sparkles className="w-4 h-4" />
              {software.primaryCtaLabel || "Demander une démonstration gratuite"}
            </a>

            {software.demoUrl ? (
              <a
                href={software.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="py-3.5 px-6 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm flex items-center gap-2 transition"
              >
                <ExternalLink className="w-4 h-4 text-cyan-400" />
                {software.secondaryCtaLabel || "Voir le logiciel en action"}
              </a>
            ) : (
              <a
                href={`https://wa.me/${phone}?text=${whatsappQuoteText}`}
                target="_blank"
                rel="noreferrer"
                className="py-3.5 px-6 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm flex items-center gap-2 transition"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" /> Contacter sur WhatsApp pour un devis
              </a>
            )}

            {software.downloadUrl && (
              <a
                href={software.downloadUrl}
                download
                className="py-3.5 px-5 rounded-2xl bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-slate-800 font-semibold text-sm flex items-center gap-2 transition"
              >
                <Download className="w-4 h-4 text-blue-600" /> Installateur
              </a>
            )}
          </div>

          {software.heroBadges && software.heroBadges.length > 0 && (
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-5 border-t border-slate-100 text-xs md:text-sm font-semibold text-slate-700">
              {software.heroBadges.map((item, idx) => (
                <span key={idx} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          )}

          {software.summaryHighlight && (
            <div className="mt-6 rounded-2xl bg-gradient-to-r from-blue-50/80 to-violet-50/80 border border-violet-200/70 p-4 text-sm text-slate-700 leading-relaxed">
              {software.summaryHighlight}
            </div>
          )}
        </div>

        {galleryImages.length > 0 && (
          <section className="mb-14">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6">
              Aperçu de l&apos;interface {software.brandName || software.name}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {galleryImages.map((src, idx) => (
                <GalleryImageCard
                  key={idx}
                  src={src}
                  alt={`${software.name} capture ${idx + 1}`}
                  onClick={() => setLightboxIndex(idx)}
                />
              ))}
            </div>
          </section>
        )}

        {software.problemSection && (
          <section className="mb-14 rounded-3xl border border-slate-200/90 bg-slate-50/70 p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
              {software.problemSection.title}
            </h2>
            <p className="text-sm md:text-base text-slate-600 mb-6">
              {software.problemSection.subtitle}
            </p>

            <div className="grid md:grid-cols-2 gap-5 mb-6">
              {software.problemSection.items.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-rose-200/70 p-5 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-slate-900 text-base mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 text-white px-6 py-4 text-sm md:text-base font-semibold text-center shadow-sm">
              {software.problemSection.transition}
            </div>
          </section>
        )}

        {software.pillars && software.pillars.length > 0 && (
          <section id="avantages" className="mb-14">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6">
              Pourquoi choisir {software.brandName || software.name} ?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {software.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-white/90 p-6 shadow-sm"
                >
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <CheckCircle2 className="w-5 h-5 text-violet-600 shrink-0" />
                    <h3 className="font-bold text-slate-900 text-lg">{pillar.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {software.modules && software.modules.length > 0 ? (
          <section id="fonctionnalites" className="mb-14">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
                {software.modulesSectionTitle ||
                  (hasBenefitsTable
                    ? "Fonctionnalités Clés par Pôle d'Activité"
                    : "Modules clés")}
              </h2>
              {software.modulesSectionSubtitle && (
                <p className="text-sm md:text-base text-slate-600">
                  {software.modulesSectionSubtitle}
                </p>
              )}
            </div>

            {hasBenefitsTable ? (
              <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-600">
                        <th className="py-4 px-5">Pôle Métier</th>
                        <th className="py-4 px-5">Ce que {software.name} fait</th>
                        <th className="py-4 px-5">Bénéfice au quotidien</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/70 text-sm">
                      {software.modules.map((mod, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/70 transition">
                          <td className="py-4 px-5 font-bold text-slate-900 whitespace-nowrap align-top">
                            <span className="mr-2">{mod.icon}</span>
                            {mod.title}
                          </td>
                          <td className="py-4 px-5 text-slate-600 leading-relaxed align-top">
                            {mod.description}
                          </td>
                          <td className="py-4 px-5 font-medium text-violet-700 align-top">
                            {mod.benefit}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-5">
                {software.modules.map((mod, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200/90 bg-white/95 p-6 shadow-sm hover:border-violet-300 transition"
                  >
                    <h3 className="font-bold text-slate-900 text-base md:text-lg mb-2 flex items-center gap-2.5">
                      <span>{mod.icon}</span>
                      <span>{mod.title}</span>
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{mod.description}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        ) : (
          <section id="fonctionnalites" className="mb-14 rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
            <h2 className="font-bold text-slate-900 mb-4">Points clés</h2>
            <ul className="space-y-3">
              {software.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {software.stepsSection && (
          <section className="mb-14">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6">
              {software.stepsSection.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {software.stepsSection.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/70 p-6 shadow-sm"
                >
                  <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 mb-3">
                    {step.number}
                  </span>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {software.comparisonSection && (
          <section id="avantages" className="mb-14">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6">
              {software.comparisonSection.title}
            </h2>
            <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-600">
                      <th className="py-4 px-5">Fonctionnalité</th>
                      <th className="py-4 px-5">Gestion Papier / Excel</th>
                      <th className="py-4 px-5">Logiciels classiques complexes</th>
                      <th className="py-4 px-5 text-violet-700 bg-violet-50/60">
                        {software.brandName || software.name}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/70 text-sm">
                    {software.comparisonSection.rows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 transition">
                        <td className="py-4 px-5 font-bold text-slate-900">{row.feature}</td>
                        <td className="py-4 px-5 text-slate-500">{row.paper}</td>
                        <td className="py-4 px-5 text-slate-500">{row.classic}</td>
                        <td className="py-4 px-5 font-bold text-violet-700 bg-violet-50/30">
                          ✓ {row.ours}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {software.testimonialsSection && (
          <section className="mb-14">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6">
              {software.testimonialsSection.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {software.testimonialsSection.items.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-slate-200/90 bg-white p-6 md:p-8 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <Quote className="w-7 h-7 text-violet-500/40 mb-3" />
                    <p className="text-sm md:text-base text-slate-700 italic leading-relaxed mb-5">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100">
                    <p className="font-bold text-slate-900 text-sm">{item.author}</p>
                    <p className="text-xs text-slate-500">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {software.pricingSection && (
          <section id="tarifs" className="mb-14">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
                {software.pricingSection.title}
              </h2>
              <p className="text-sm md:text-base text-slate-600">
                {software.pricingSection.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {software.pricingSection.tiers.map((tier, idx) => {
                const packMsg = encodeURIComponent(
                  `Bonjour, je souhaite connaître le tarif pour ${tier.name} (${software.brandName || software.name}).`
                );

                return (
                  <div
                    key={idx}
                    className={`rounded-3xl p-6 md:p-7 flex flex-col justify-between transition ${
                      tier.highlighted
                        ? "border-2 border-violet-600 bg-gradient-to-b from-violet-50/40 via-white to-white shadow-xl shadow-violet-500/10"
                        : "border border-slate-200/90 bg-white shadow-sm"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        {tier.badge ? (
                          <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white">
                            {tier.badge}
                          </span>
                        ) : (
                          <span />
                        )}
                      </div>
                      <h3 className="text-lg font-extrabold text-slate-900 mb-1">
                        {tier.name}
                      </h3>
                      <p className="text-xs font-medium text-slate-500 mb-5">
                        {tier.subtitle}
                      </p>
                      <ul className="space-y-3 mb-7">
                        {tier.features.map((feat, fIdx) => (
                          <li
                            key={fIdx}
                            className="flex items-start gap-2.5 text-sm text-slate-700"
                          >
                            <CheckCircle2 className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={`https://wa.me/${phone}?text=${packMsg}`}
                      target="_blank"
                      rel="noreferrer"
                      className={`w-full py-3 px-4 rounded-xl text-sm font-semibold text-center transition ${
                        tier.highlighted
                          ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:opacity-95 shadow-md shadow-violet-500/20"
                          : "bg-slate-900 text-white hover:bg-slate-800"
                      }`}
                    >
                      {tier.ctaLabel}
                    </a>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {software.faqs && software.faqs.length > 0 && (
          <section id="faq" className="mb-14">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-2.5">
              <HelpCircle className="w-6 h-6 text-violet-600" />
              Questions fréquentes
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {software.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-white/95 p-6 shadow-sm"
                >
                  <h3 className="font-bold text-slate-900 text-base mb-2.5">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {software.ctaFinal && (
          <section className="rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 text-white p-8 md:p-12 mb-10 shadow-lg shadow-violet-500/20 text-center">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-3">
              {software.ctaFinal.title}
            </h2>
            {software.ctaFinal.subtitle && (
              <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto mb-7 leading-relaxed">
                {software.ctaFinal.subtitle}
              </p>
            )}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`https://wa.me/${phone}?text=${whatsappDemoText}`}
                target="_blank"
                rel="noreferrer"
                className="py-3.5 px-6 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 font-semibold text-sm flex items-center gap-2 transition"
              >
                <Sparkles className="w-4 h-4 text-violet-600" />
                {software.ctaFinal.primaryLabel}
              </a>
              <a
                href={`https://wa.me/${phone}?text=${whatsappQuoteText}`}
                target="_blank"
                rel="noreferrer"
                className="py-3.5 px-6 rounded-2xl bg-slate-950/30 hover:bg-slate-950/40 border border-white/25 text-white font-semibold text-sm flex items-center gap-2 transition"
              >
                <MessageCircle className="w-4 h-4" />
                {software.ctaFinal.secondaryLabel}
              </a>
            </div>
          </section>
        )}

        {software.pitchCopy && (
          <section className="rounded-3xl border border-violet-200/80 bg-gradient-to-br from-blue-50/60 via-white to-violet-50/70 p-6 md:p-8 mb-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Argumentaire prêt pour Réseaux Sociaux & WhatsApp
                </h2>
                <p className="text-xs text-slate-500">
                  Copiez ce texte pour vos publications Facebook, Instagram, TikTok ou WhatsApp.
                </p>
              </div>
              <button
                onClick={handleCopyPitch}
                className="px-4 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 flex items-center gap-2 shadow-sm transition"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" /> Copié !
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-violet-600" /> Copier le texte
                  </>
                )}
              </button>
            </div>
            <pre className="whitespace-pre-wrap font-sans text-sm text-slate-700 bg-white/90 rounded-2xl border border-slate-200/80 p-5 leading-relaxed">
              {software.pitchCopy}
            </pre>
          </section>
        )}

        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 pt-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Conçu pour le marché marocain • Support & accompagnement inclus</span>
          </div>
          {software.demoUrl && (
            <a
              href={software.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-violet-600 hover:underline"
            >
              Lien démo direct <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SoftwareDetailPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center text-sm text-slate-500">
          Chargement de la fiche logiciel...
        </div>
      }
    >
      <SoftwareDetailContent />
    </Suspense>
  );
}