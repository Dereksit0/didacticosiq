"use client";
import ScrollReveal from "./ScrollReveal";
import { useCatalogModal } from "./CatalogModalProvider";
import { WA_LINK, WA_MAYOREO_LINK } from "@/lib/constants";

const EDUDAK = "/pdfs/edudak.pdf";
const EDUDAK_GRADIENT = "linear-gradient(160deg, #4db8ff 0%, #0070c0 100%)";

interface CatalogItem { brand: string; link: string; gradient: string }
interface CategoryItem { label: string; modal?: CatalogItem }

const categories = [
  {
    emoji: "🏫",
    title: "Escuelas",
    subtitle: "Directores y Docentes",
    description:
      "Mobiliario escolar ergonómico, juegos de patio, material de aula y recursos visuales para enriquecer cada espacio de aprendizaje.",
    items: [
      { label: "Mobiliario de aula",   modal: { brand: "Mobiliario de Aula",   link: `${EDUDAK}#page=173`, gradient: EDUDAK_GRADIENT } },
      { label: "Juegos de patio",      modal: { brand: "Juegos de Patio",      link: `${EDUDAK}#page=5`,   gradient: EDUDAK_GRADIENT } },
      { label: "Material Montessori",  modal: { brand: "Material Montessori",  link: `${EDUDAK}#page=103`, gradient: EDUDAK_GRADIENT } },
      { label: "Recursos visuales",    modal: { brand: "Recursos Visuales",    link: `${EDUDAK}#page=166`, gradient: EDUDAK_GRADIENT } },
    ] as CategoryItem[],
    accent: "#ff4757",
    lightBg: "#fff5f5",
    ctaLink: WA_LINK,
  },
  {
    emoji: "🧠",
    title: "Especialistas",
    subtitle: "Profesionales de la Salud",
    description:
      "Herramientas especializadas para Psicopedagogía, Terapia Ocupacional, Terapia de Lenguaje y Estimulación Temprana.",
    items: [
      { label: "Terapia Ocupacional",   modal: { brand: "Terapia Ocupacional",   link: `${EDUDAK}#page=94`,  gradient: EDUDAK_GRADIENT } },
      { label: "Psicopedagogía",        modal: { brand: "Psicopedagogía",        link: `${EDUDAK}#page=94`,  gradient: EDUDAK_GRADIENT } },
      { label: "Terapia de Lenguaje",   modal: { brand: "Terapia de Lenguaje",   link: `${EDUDAK}#page=65`,  gradient: EDUDAK_GRADIENT } },
      { label: "Estimulación Temprana", modal: { brand: "Estimulación Temprana", link: `${EDUDAK}#page=181`, gradient: EDUDAK_GRADIENT } },
    ] as CategoryItem[],
    accent: "#4db8ff",
    lightBg: "#f0f8ff",
    ctaLink: WA_LINK,
  },
  {
    emoji: "📦",
    title: "Mayoreo",
    subtitle: "Distribuidores y Empresas",
    description:
      "Planes especiales para distribuidores y compras por volumen. Precios preferenciales para papelerías, librerías y tiendas.",
    items: [
      { label: "Precios de mayoreo"  },
      { label: "Pedidos por volumen" },
      { label: "Asesoría comercial"  },
      { label: "Facturación"         },
    ] as CategoryItem[],
    accent: "#ffb800",
    lightBg: "#fffbeb",
    ctaLink: WA_MAYOREO_LINK,
  },
];

export default function CategoriesSection() {
  const { openModal } = useCatalogModal();

  return (
    <section id="categorias" className="py-20 bg-[#eaf0ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-white text-[#008180] rounded-full px-4 py-2 text-sm font-bold mb-4 shadow-sm">
              <span>🎯</span> Nuestras Categorías
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-[#004f4f] mb-4">
              Soluciones para{" "}
              <span className="text-[#008180]">Cada Necesidad</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Desde el aula hasta el consultorio, contamos con el material
              educativo ideal para cada especialista.
            </p>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="flex flex-col gap-6 md:grid md:grid-cols-3 lg:gap-8">
          {categories.map((cat, idx) => (
            <ScrollReveal key={cat.title} delay={idx * 120} className="w-full h-full">
              <div
                className="card-hover bg-white rounded-3xl overflow-hidden shadow-md h-full flex flex-col"
                style={{ borderTop: `4px solid ${cat.accent}` }}
              >
                {/* Card top */}
                <div
                  className="p-8 text-center"
                  style={{ background: `linear-gradient(160deg, ${cat.lightBg}, white)` }}
                >
                  <div className="text-7xl mb-4">{cat.emoji}</div>
                  <span
                    className="text-white text-xs font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: cat.accent }}
                  >
                    {cat.subtitle}
                  </span>
                  <h3 className="text-2xl font-black text-[#004f4f] mt-4">{cat.title}</h3>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{cat.description}</p>

                  <ul className="space-y-2 mb-6 flex-1">
                    {cat.items.map((item) => (
                      <li key={item.label} className="flex items-center gap-2 text-sm">
                        <span
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: cat.accent }}
                        />
                        {item.modal ? (
                          <button
                            onClick={() => openModal(item.modal!)}
                            className="text-gray-700 font-medium text-left underline underline-offset-2 decoration-gray-300 hover:decoration-gray-600 hover:text-gray-900 transition-colors inline-flex items-center gap-1"
                          >
                            {item.label}
                            <span className="text-gray-400 text-[11px]" aria-hidden="true">→</span>
                          </button>
                        ) : (
                          <span className="text-gray-700 font-medium">{item.label}</span>
                        )}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={cat.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 font-bold text-sm py-3 rounded-xl transition-all hover:shadow-md hover:-translate-y-0.5"
                    style={{
                      backgroundColor: cat.accent,
                      color: cat.accent === "#ffb800" ? "#002e2e" : "white",
                    }}
                  >
                    Solicitar cotización →
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
