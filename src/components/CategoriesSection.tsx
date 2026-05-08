import ScrollReveal from "./ScrollReveal";
import { WA_LINK, WA_MAYOREO_LINK } from "@/lib/constants";

const categories = [
  {
    emoji: "🏫",
    title: "Escuelas",
    subtitle: "Directores y Docentes",
    description:
      "Mobiliario escolar ergonómico, juegos de patio, material de aula y recursos visuales para enriquecer cada espacio de aprendizaje.",
    items: ["Mobiliario de aula", "Juegos de patio", "Material Montessori", "Recursos visuales"],
    accent: "#ff4757",
    lightBg: "#fff5f5",
    link: WA_LINK,
  },
  {
    emoji: "🧠",
    title: "Especialistas",
    subtitle: "Profesionales de la Salud",
    description:
      "Herramientas especializadas para Psicopedagogía, Terapia Ocupacional, Terapia de Lenguaje y Estimulación Temprana.",
    items: ["Terapia Ocupacional", "Psicopedagogía", "Terapia de Lenguaje", "Estimulación Temprana"],
    accent: "#4db8ff",
    lightBg: "#f0f8ff",
    link: WA_LINK,
  },
  {
    emoji: "📦",
    title: "Mayoreo",
    subtitle: "Distribuidores y Empresas",
    description:
      "Planes especiales para distribuidores y compras por volumen. Precios preferenciales para papelerías, librerías y tiendas.",
    items: ["Precios de mayoreo", "Pedidos por volumen", "Asesoría comercial", "Facturación"],
    accent: "#ffb800",
    lightBg: "#fffbeb",
    link: WA_MAYOREO_LINK,
  },
];

export default function CategoriesSection() {
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
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat, idx) => (
            <ScrollReveal key={cat.title} delay={idx * 120}>
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
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <span
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: cat.accent }}
                        />
                        <span className="text-gray-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={cat.link}
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
