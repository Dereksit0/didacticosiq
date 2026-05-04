import ScrollReveal from "./ScrollReveal";
import { MAPS_LINK } from "@/lib/constants";

const items = [
  {
    label: "Sala de Aprendizaje",
    emoji: "🎨",
    colorA: "#f97316",
    colorB: "#f59e0b",
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    label: "Juguetes Educativos",
    emoji: "🧩",
    colorA: "#38bdf8",
    colorB: "#3b82f6",
    colSpan: "col-span-1",
  },
  {
    label: "Mobiliario Escolar",
    emoji: "🪑",
    colorA: "#34d399",
    colorB: "#059669",
    colSpan: "col-span-1",
  },
  {
    label: "Material Montessori",
    emoji: "🔢",
    colorA: "#a78bfa",
    colorB: "#7c3aed",
    colSpan: "col-span-1",
  },
  {
    label: "Terapia Ocupacional",
    emoji: "🧠",
    colorA: "#22d3ee",
    colorB: "#008180",
    colSpan: "col-span-1",
  },
  {
    label: "Exhibición de Productos",
    emoji: "📦",
    colorA: "#fbbf24",
    colorB: "#f97316",
    colSpan: "col-span-1 md:col-span-2",
  },
];

export default function GallerySection() {
  return (
    <section id="tienda" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#eaf0ef] text-[#008180] rounded-full px-4 py-2 text-sm font-bold mb-4">
              <span>🏪</span> Nuestra Tienda
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-[#004f4f] mb-4">
              CONOCE NUESTRO{" "}
              <span className="text-[#008180]">ESPACIO</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Visítanos y descubre un espacio lleno de color, aprendizaje y
              posibilidades infinitas para niños y educadores.
            </p>
          </div>
        </ScrollReveal>

        {/* Mosaic grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {items.map((item) => (
            <div
              key={item.label}
              className={`${item.colSpan} gallery-cell group relative rounded-2xl overflow-hidden h-40 sm:h-52 md:h-56 cursor-pointer`}
            >
              {/* Gradient bg */}
              <div
                className="gallery-bg absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${item.colorA} 0%, ${item.colorB} 100%)`,
                }}
              />

              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300" />

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center p-4 text-white">
                <span className="text-5xl sm:text-6xl mb-2 drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {item.emoji}
                </span>
              </div>

              {/* Label bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 sm:p-4">
                <p className="font-bold text-xs sm:text-sm text-white text-center drop-shadow">
                  {item.label}
                </p>
              </div>

              {/* Corner dot */}
              <div className="absolute top-3 right-3 w-2 h-2 bg-white rounded-full opacity-50" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div className="text-center mt-10">
            <p className="text-gray-500 mb-5 text-base">
              ¿Quieres ver más productos en persona?
            </p>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-bounce inline-flex items-center gap-2 bg-[#008180] text-white font-bold px-6 py-3.5 rounded-xl hover:bg-[#006665] hover:shadow-lg hover:-translate-y-0.5 transition-all shadow-md"
            >
              <span>📍</span>
              Ver ubicación en Google Maps
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
