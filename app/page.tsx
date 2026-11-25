"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { softwares, Software } from "../data/softwares";
import {
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
  Play,
  Layers,
  Cpu,
  ShieldCheck,
  Terminal,
  Zap,
  Globe,
  X,
  ZoomIn,
  Eye,
  ArrowRight,
} from "lucide-react";

const WHATSAPP_NUMBER = "212658204441";

function ImageLightbox({
  src,
  alt,
  onClose,
}: {
  src: string | null;
  alt: string;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!src) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden"
      >
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900/95 border-b border-slate-800">
          <span className="text-xs md:text-sm font-medium text-slate-200 truncate">
            {alt}
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

        <div className="bg-slate-950 flex items-center justify-center p-3 md:p-6 max-h-[82vh]">
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-[75vh] object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

function SoftwarePreviewCard({
  soft,
  onZoom,
}: {
  soft: Software;
  onZoom: (src: string, alt: string) => void;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="w-full h-56 md:h-64 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-inner overflow-hidden flex flex-col group-hover:scale-[1.01] transition-transform duration-300">
      <div className="h-9 bg-white border-b border-slate-200/80 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </div>
        <Link
          href={`/logiciel/${soft.id}`}
          className="text-[11px] font-mono text-slate-500 hover:text-violet-600 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200/70 transition"
        >
          {soft.id}.app
        </Link>
        <div className="w-8" />
      </div>

      <div className="flex-1 relative overflow-hidden bg-slate-100">
        {soft.image && !imgError ? (
          <div
            onClick={() => onZoom(soft.image!, `Aperçu ${soft.name}`)}
            title="Cliquer pour agrandir"
            className="w-full h-full relative cursor-zoom-in"
          >
            <img
              src={soft.image}
              alt={`Aperçu ${soft.name}`}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute bottom-3 right-3 px-2.5 py-1.5 rounded-lg bg-slate-900/75 text-white text-[11px] font-medium flex items-center gap-1 backdrop-blur-sm">
              <ZoomIn className="w-3.5 h-3.5" /> Agrandir
            </span>
          </div>
        ) : (
          <Link
            href={`/logiciel/${soft.id}`}
            className="h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-50/60 via-white to-violet-50/70"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600/10 to-violet-600/10 border border-violet-200 flex items-center justify-center mb-3 text-violet-600 shadow-sm">
              <Layers className="w-6 h-6" />
            </div>
            <p className="text-xs font-semibold text-slate-700">Interface {soft.name}</p>
            <p className="text-[11px] text-violet-600 font-medium mt-1">
              Cliquer pour voir la fiche complète →
            </p>
          </Link>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");
  const [zoomedImage, setZoomedImage] = useState<{ src: string; alt: string } | null>(
    null
  );

  const categories = ["Tous", ...Array.from(new Set(softwares.map((s) => s.category)))];

  const filteredSoftwares =
    selectedCategory === "Tous"
      ? softwares
      : softwares.filter((s) => s.category === selectedCategory);

  return (
    <div className="min-h-screen relative bg-white selection:bg-violet-500/20 selection:text-violet-900">
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0" />
      <div className="fixed top-[-15%] left-1/2 -translate-x-1/2 w-[950px] h-[520px] bg-gradient-to-tr from-blue-500/15 via-violet-500/20 to-fuchsia-400/15 blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="fixed top-[20%] right-[-10%] w-[500px] h-[400px] bg-blue-400/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <ImageLightbox
        src={zoomedImage?.src || null}
        alt={zoomedImage?.alt || ""}
        onClose={() => setZoomedImage(null)}
      />

      <header className="sticky top-5 z-50 px-4">
        <nav className="max-w-4xl mx-auto h-14 px-5 rounded-full bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-violet-600 flex items-center justify-center shadow-md shadow-violet-500/25">
              <Terminal className="w-4 h-4 text-white stroke-[2.5]" />
            </div>
            <span className="font-bold tracking-tight text-slate-900 text-base">
              DEV<span className="text-violet-600 font-semibold">STUDIO</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#catalogue" className="hover:text-violet-600 transition">
              Logiciels
            </a>
            <a href="#avantages" className="hover:text-violet-600 transition">
              Architecture
            </a>
            <a href="#contact" className="hover:text-violet-600 transition">
              Support
            </a>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-semibold bg-gradient-to-r from-blue-600 to-violet-600 text-white px-4 py-2 rounded-full hover:opacity-95 transition flex items-center gap-1.5 shadow-md shadow-blue-600/20"
          >
            Contact Direct <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-28">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 border border-violet-200/80 text-violet-700 text-xs font-semibold mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-600"></span>
            </span>
            Suite logicielle professionnelle • Nouvelle génération
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-6">
            Des logiciels taillés pour la{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600">
              performance pure.
            </span>
          </h1>

          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Automatisez votre gestion quotidienne avec des applications rapides, intuitives et conçues sur mesure pour les professionnels exigeants.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#catalogue"
              className="px-7 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-semibold text-sm transition shadow-[0_12px_30px_-8px_rgba(124,58,237,0.45)] flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" /> Explorer les logiciels
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="px-7 py-4 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-sm shadow-sm transition flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-500" /> Demander une démo live
            </a>
          </div>
        </div>

        <div id="catalogue" className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Catalogue des solutions</h2>
            <p className="text-sm text-slate-500">Sélectionnez un logiciel pour voir ses capacités ou lancer un essai.</p>
          </div>

          <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-slate-100/90 border border-slate-200/80">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-7 mb-28">
          {filteredSoftwares.map((soft, index) => {
            const isFeatured = index === 0;
            const phone = soft.whatsappPhone || WHATSAPP_NUMBER;

            return (
              <div
                key={soft.id}
                className={`${
                  isFeatured ? "md:col-span-12" : "md:col-span-6"
                } group relative rounded-3xl bg-white/90 border border-slate-200/90 hover:border-violet-400/70 shadow-[0_10px_40px_-15px_rgba(15,23,42,0.08)] hover:shadow-[0_20px_50px_-15px_rgba(124,58,237,0.18)] backdrop-blur-xl p-6 md:p-8 transition-all duration-300 overflow-hidden flex flex-col justify-between`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-violet-500/[0.05] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className={`grid ${isFeatured ? "lg:grid-cols-12 gap-8 items-center" : "grid-cols-1 gap-6"}`}>
                  <div className={`${isFeatured ? "lg:col-span-7 order-1 lg:order-2 flex flex-col gap-4" : "flex flex-col gap-4"}`}>
                    <SoftwarePreviewCard
                      soft={soft}
                      onZoom={(src, alt) => setZoomedImage({ src, alt })}
                    />

                    <Link
                      href={`/logiciel/${soft.id}`}
                      className="w-full py-4 px-6 rounded-2xl bg-slate-900 hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 text-white font-bold text-sm md:text-base transition-all duration-200 shadow-md flex items-center justify-center gap-2.5"
                    >
                      <Eye className="w-5 h-5" />
                      <span>Voir détail</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className={`${isFeatured ? "lg:col-span-5 order-2 lg:order-1" : ""} flex flex-col justify-between`}>
                    <div>
                      <div className="flex items-center gap-2.5 mb-3">
                        <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200/70">
                          {soft.category}
                        </span>
                        {soft.badge && (
                          <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-violet-50 text-violet-700 border border-violet-200/70">
                            ★ {soft.badge}
                          </span>
                        )}
                      </div>

                      <Link href={`/logiciel/${soft.id}`}>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 hover:text-violet-600 transition tracking-tight mb-3">
                          {soft.name}
                        </h3>
                      </Link>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        {soft.tagline}
                      </p>

                      <ul className="space-y-2.5 mb-8">
                        {soft.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col gap-3 pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-3">
                        <a
                          href={`https://wa.me/${phone}?text=Bonjour, je souhaite obtenir une démo pour ${encodeURIComponent(
                            soft.name
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-semibold text-xs md:text-sm text-center transition shadow-md shadow-violet-500/20 flex items-center justify-center gap-2"
                        >
                          Obtenir le logiciel <ArrowUpRight className="w-4 h-4" />
                        </a>
                        <Link
                          href={`/logiciel/${soft.id}`}
                          className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-slate-800 text-xs md:text-sm font-semibold flex items-center gap-2 transition"
                        >
                          <Play className="w-4 h-4 text-violet-600" /> Fiche & Démo
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <section id="avantages" className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-slate-50/80 border border-slate-200/80">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="text-slate-900 font-bold mb-2">Exécution Ultra-Rapide</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Architecture optimisée sans latence. Vos données restent accessibles instantanément, même sans connexion Internet.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50/80 border border-slate-200/80">
            <div className="w-10 h-10 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-slate-900 font-bold mb-2">Déploiement Immédiat</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Installation en un clic sur Windows, Mac ou Mobile avec configuration assistée et prise en main rapide.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50/80 border border-slate-200/80">
            <div className="w-10 h-10 rounded-xl bg-fuchsia-100 text-fuchsia-600 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-slate-900 font-bold mb-2">Support & Mises à jour</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Assistance directe sur WhatsApp et évolutions régulières incluses pour accompagner votre croissance.
            </p>
          </div>
        </section>
      </main>

      <footer id="contact" className="relative z-10 border-t border-slate-200/80 bg-slate-50/70 backdrop-blur-lg py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-2 text-slate-700 font-semibold">
            <Globe className="w-4 h-4 text-violet-600" />
            <span>Tous nos logiciels sont testés et certifiés.</span>
          </div>
          <p>© 2026 — Développement & Solutions Logicielles.</p>
        </div>
      </footer>
    </div>
  );
}