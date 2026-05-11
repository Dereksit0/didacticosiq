"use client";
import ScrollReveal from "./ScrollReveal";
import { useCatalogModal } from "./CatalogModalProvider";
import { CATALOG_LINK } from "@/lib/constants";

const EDUKARTE_LINK = "/pdfs/edukarte.pdf";
const EDUDAK_LINK = "/pdfs/edudak.pdf";

interface CatalogItem {
  id: string;
  brand: string;
  year: string;
  tagline: string;
  description: string;
  emoji: string;
  emojis: string[];
  link: string;
  gradient: string;
  darkGradient: string;
  accent: string;
  badge: string;
  badgeColor: string;
  badgeText: string;
}

const catalogs: CatalogItem[] = [
  {
    id: "edudak",
    brand: "Edudak Fabrica",
    year: "2026",
    tagline: "Desarrollo Cognitivo",
    description:
      "La línea Edudak está especializada en material para desarrollo cognitivo, terapia y estimulación en todas las etapas.",
    emoji: "🧠",
    emojis: ["🧩", "🔢", "🔬", "🎯", "🏆", "🔤"],
    link: EDUDAK_LINK,
    gradient: "linear-gradient(160deg, #4db8ff 0%, #0070c0 100%)",
    darkGradient: "linear-gradient(160deg, #005a9e 0%, #003580 100%)",
    accent: "#4db8ff",
    badge: "TERAPIA & COGNICIÓN",
    badgeColor: "#e3f2fd",
    badgeText: "#004080",
  },
  {
    id: "didactiosiq",
    brand: "DidacticosIQ",
    year: "2026",
    tagline: "Catálogo Principal",
    description:
      "Nuestro catálogo principal con más de 500 productos educativos, juguetes y material didáctico para todas las edades.",
    emoji: "🎒",
    emojis: ["🧸", "📚", "🎯", "🧩", "🏃", "🗣️"],
    link: CATALOG_LINK,
    gradient: "linear-gradient(160deg, #008180 0%, #004f4f 100%)",
    darkGradient: "linear-gradient(160deg, #005858 0%, #002f2f 100%)",
    accent: "#ffb800",
    badge: "+500 PRODUCTOS",
    badgeColor: "#fff8e1",
    badgeText: "#7a5200",
  },
  {
    id: "edukarte",
    brand: "Edukarte Fabrica",
    year: "2026",
    tagline: "Material Educativo Creativo",
    description:
      "Descubre nuestra línea Edukarte con materiales enfocados en arte, creatividad y expresión para todas las edades.",
    emoji: "🎨",
    emojis: ["🖍️", "🎭", "🖌️", "📐", "🌈", "✏️"],
    link: EDUKARTE_LINK,
    gradient: "linear-gradient(160deg, #ff6b6b 0%, #ee5a24 100%)",
    darkGradient: "linear-gradient(160deg, #c0392b 0%, #922b21 100%)",
    accent: "#ff6b6b",
    badge: "ARTE & CREATIVIDAD",
    badgeColor: "#fff3cd",
    badgeText: "#9c3a00",
  },
];

export default function CatalogSection() {
  const { openModal } = useCatalogModal();

  return (
    <section id="catalogo" className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-[#eaf0ef] text-[#008180] rounded-full px-4 py-2 text-sm font-bold mb-4">
                <span>📖</span> Nuestros Catálogos 2026
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-[#004f4f] leading-tight mb-5">
                Explora Nuestros{" "}
                <span className="text-[#008180]">3 Catálogos</span>
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Tres líneas de productos diseñadas para cubrir todas las
                necesidades educativas — para todas las edades, desde bebés hasta
                adultos.
              </p>
            </div>
          </ScrollReveal>

          {/* Catalog grid */}
          <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {catalogs.map((cat, idx) => (
              <ScrollReveal key={cat.id} delay={idx * 120} className="w-full">
                <div
                  className="group block relative cursor-pointer"
                  onClick={() => openModal(cat)}
                >
                  {/* Shadow below book */}
                  <div
                    className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-52 h-7 rounded-full opacity-20 transition-opacity group-hover:opacity-35"
                    style={{
                      background: "radial-gradient(ellipse, #000, transparent)",
                    }}
                  />

                  {/* Book cover */}
                  <div
                    className="catalog-book relative rounded-2xl overflow-hidden shadow-2xl transition-all group-hover:scale-[1.03] group-hover:-translate-y-1"
                    style={{
                      background: cat.gradient,
                      transform: "perspective(900px) rotateY(-8deg)",
                      boxShadow: "18px 18px 40px rgba(0,0,0,0.22)",
                      minHeight: "360px",
                    }}
                  >
                    {/* Book spine */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-7"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(0,0,0,0.35), transparent)",
                      }}
                    />
                    {/* Sheen */}
                    <div
                      className="absolute top-0 right-0 w-24 h-full"
                      style={{
                        background:
                          "linear-gradient(270deg, rgba(255,255,255,0.08), transparent)",
                      }}
                    />

                    {/* Content */}
                    <div className="relative p-6 h-full flex flex-col z-10" style={{ minHeight: "360px" }}>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="text-white/60 text-xs font-bold uppercase tracking-[0.15em]">
                            Catálogo
                          </p>
                          <p className="text-white text-2xl font-black leading-none">
                            {cat.year}
                          </p>
                        </div>
                        <div
                          className="text-xs font-black px-2.5 py-1 rounded-lg shadow"
                          style={{
                            backgroundColor: cat.badgeColor,
                            color: cat.badgeText,
                          }}
                        >
                          {cat.badge}
                        </div>
                      </div>

                      <div className="text-5xl mb-3 drop-shadow-lg">{cat.emoji}</div>

                      <div className="font-black text-2xl text-white leading-tight mb-1">
                        {cat.brand}
                      </div>
                      <p className="text-white/65 text-xs mb-5">{cat.tagline}</p>

                      <div className="mt-auto">
                        <div className="grid grid-cols-3 gap-1.5 mb-3">
                          {cat.emojis.map((e, i) => (
                            <div
                              key={i}
                              className="bg-white/12 rounded-lg p-2 text-center text-xl"
                            >
                              {e}
                            </div>
                          ))}
                        </div>

                        {/* View CTA */}
                        <div className="flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 transition-colors rounded-xl py-2.5 text-white font-bold text-sm">
                          <span>👁️</span> Ver Catálogo
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back page shadow */}
                  <div
                    className="catalog-back absolute top-2 -right-3 -z-10 w-full rounded-2xl transition-transform group-hover:translate-x-1"
                    style={{
                      background: cat.darkGradient,
                      transform: "perspective(900px) rotateY(-5deg)",
                      minHeight: "360px",
                    }}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom text */}
          <ScrollReveal>
            <p className="text-center text-gray-400 text-sm mt-14">
              Material didáctico para{" "}
              <strong className="text-[#008180]">todas las edades</strong> —
              bebés, niños, jóvenes y adultos. Más de 23 años apoyando la
              educación en México.
            </p>
          </ScrollReveal>
        </div>
      </section>
  );
}
