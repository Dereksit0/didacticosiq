import ScrollReveal from "./ScrollReveal";
import { MAPS_LINK } from "@/lib/constants";

// Catalog URLs — Google Drive PDFs go through /api/pdf proxy which serves them
// with Content-Disposition: inline, forcing the browser's native PDF viewer to
// open them. The native viewer (Chrome/Edge/Firefox) supports #page=N navigation.
const EDUDAK_CATALOG = "/api/pdf?id=1ANsKKvh6oe0Go4fuguvWA11M__TOxFls";
const DIDACTICOSIQ_CATALOG = "/api/pdf?id=1QZwfOiraa9Cx6kozdybGau8DzEA6x28x";
const EDUKARTE_CATALOG = "https://6054acef-3ce5-4546-abe7-d3aa92677601.filesusr.com/ugd/8cbde4_ed58914008164b89a036194f4cecbff1.pdf";

const productCategories = [
  {
    label: "Material Didáctico y STEM",
    description: "Material didáctico, STEM, Juegos didácticos",
    emoji: "🔬",
    colorA: "#38bdf8",
    colorB: "#0369a1",
    colSpan: "col-span-1 md:col-span-2",
    image: "",
    link: `${EDUDAK_CATALOG}#page=103`,  // Saberes y Pensamiento Científico (includes STEM)
  },
  {
    label: "Educación Especial",
    description: "Educación especial, Psicomotricidad",
    emoji: "🧠",
    colorA: "#a78bfa",
    colorB: "#6d28d9",
    colSpan: "col-span-1",
    image: "",
    link: `${EDUDAK_CATALOG}#page=94`,   // Ética section includes Educación Inclusiva/Especial
  },
  {
    label: "Recursos para el Salón",
    description: "Pizarrones, Ábacos, Memorama y lotería didáctica",
    emoji: "🏫",
    colorA: "#f472b6",
    colorB: "#be185d",
    colSpan: "col-span-1",
    image: "",
    link: `${EDUDAK_CATALOG}#page=161`,  // Apoyos Didácticos y Logísticos section start
  },
  {
    label: "De lo Humano y lo Comunitario",
    description: "Educación socioemocional, Educación física",
    emoji: "🤝",
    colorA: "#fb923c",
    colorB: "#c2410c",
    colSpan: "col-span-1",
    image: "",
    link: `${EDUDAK_CATALOG}#page=5`,    // De lo Humano y lo Comunitario section start
  },
  {
    label: "Lenguajes",
    description: "Inglés, Español, Lengua indígena, Lengua de señas mexicana, Educación artística",
    emoji: "🗣️",
    colorA: "#34d399",
    colorB: "#047857",
    colSpan: "col-span-1 md:col-span-2",
    image: "",
    link: `${EDUDAK_CATALOG}#page=65`,   // Lenguajes section start
  },
  {
    label: "Saberes Científicos",
    description: "Ciencias, Matemáticas",
    emoji: "🧬",
    colorA: "#818cf8",
    colorB: "#4338ca",
    colSpan: "col-span-1",
    image: "",
    link: `${EDUDAK_CATALOG}#page=103`,  // Saberes y Pensamiento Científico
  },
  {
    label: "Ética, Naturaleza y Sociedad",
    description: "Formación cívica y ética, Vida saludable, Geografía, Historia",
    emoji: "🌍",
    colorA: "#2dd4bf",
    colorB: "#0f766e",
    colSpan: "col-span-1 md:col-span-2",
    image: "",
    link: `${EDUDAK_CATALOG}#page=94`,   // Ética, Naturaleza y Sociedad section start
  },
  {
    label: "Mobiliario",
    description: "Mobiliario para espacios educativos",
    emoji: "🪑",
    colorA: "#fbbf24",
    colorB: "#b45309",
    colSpan: "col-span-1 md:col-span-2",
    image: "",
    link: `${EDUDAK_CATALOG}#page=173`,  // Mobiliario (mesas, sillas preescolares)
  },
  {
    label: "Juegos y Juguetes",
    description: "Simulación, Construcción, Disfraces, Juegos de mesa",
    emoji: "🧩",
    colorA: "#f87171",
    colorB: "#b91c1c",
    colSpan: "col-span-1",
    image: "",
    link: `${DIDACTICOSIQ_CATALOG}#page=3`,  // Juegos de Mesa y Memoria
  },
  {
    label: "Bebés",
    description: "Estimulación auditiva, Estimulación táctil, Estimulación visual",
    emoji: "👶",
    colorA: "#facc15",
    colorB: "#a16207",
    colSpan: "col-span-1",
    image: "",
    link: `${EDUDAK_CATALOG}#page=179`,  // Productos para Bebés section start
  },
  {
    label: "Habilidad Espacial",
    description: "Rompecabezas, Geoplanos, Tangram",
    emoji: "📐",
    colorA: "#10b981",
    colorB: "#047857",
    colSpan: "col-span-1 md:col-span-2",
    image: "",
    link: `${EDUKARTE_CATALOG}#page=1`,  // Rompecabezas, Geoplanos, Tangram
  },
  {
    label: "Material Complementario",
    description: "Animales para maqueta, Monedas y billetes didácticos",
    emoji: "✂️",
    colorA: "#60a5fa",
    colorB: "#1d4ed8",
    colSpan: "col-span-1",
    image: "",
    link: `${DIDACTICOSIQ_CATALOG}#page=12`, // Educación Financiera (Monedas y Billetes)
  },
  {
    label: "Música y Movimiento",
    description: "Pandero, Tambores, Juguetes de inducción deportiva",
    emoji: "🥁",
    colorA: "#c084fc",
    colorB: "#7e22ce",
    colSpan: "col-span-1",
    image: "",
    link: `${EDUDAK_CATALOG}#page=67`,   // Instrumentos musicales (maracas, güiros) in Lenguajes
  },
  {
    label: "Clásicos y Artesanales",
    description: "Juguetes artesanales, Dado de plástico soplado, Caballito de palo",
    emoji: "🐴",
    colorA: "#fb7185",
    colorB: "#be123c",
    colSpan: "col-span-1 md:col-span-2",
    image: "",
    link: `${DIDACTICOSIQ_CATALOG}#page=9`,  // Juego Tradicional y Artesanal
  },
  {
    label: "Uniformes y Batas",
    description: "Bata para maestra, Bata infantil",
    emoji: "🥼",
    colorA: "#94a3b8",
    colorB: "#334155",
    colSpan: "col-span-2 md:col-span-4",
    image: "",
    link: `${DIDACTICOSIQ_CATALOG}#page=14`, // Textil Escolar (Bata maestra + infantil)
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
              Explora todas nuestras categorías de productos. Haz clic en
              cualquier categoría para ver el catálogo completo.
            </p>
          </div>
        </ScrollReveal>

        {/* Categories grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {productCategories.map((item) => (
            <a
              key={item.label}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${item.colSpan} gallery-cell group relative rounded-2xl overflow-hidden h-40 sm:h-52 cursor-pointer block`}
            >
              {/* Gradient bg or Image */}
              {item.image ? (
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
              ) : (
                <div
                  className="gallery-bg absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${item.colorA} 0%, ${item.colorB} 100%)`,
                  }}
                />
              )}

              {/* Dark overlay on hover (always show a bit if image is used for text contrast) */}
              <div
                className={`absolute inset-0 transition-all duration-300 ${
                  item.image
                    ? "bg-black/30 group-hover:bg-black/50"
                    : "bg-black/0 group-hover:bg-black/25"
                }`}
              />

              {/* Content (Emoji if no image) */}
              {!item.image && (
                <div className="relative h-full flex flex-col items-center justify-center p-4 text-white">
                  <span className="text-5xl sm:text-6xl mb-4 drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {item.emoji}
                  </span>
                </div>
              )}

              {/* Label bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 sm:p-4">
                <p className="font-bold text-sm sm:text-base text-white drop-shadow">
                  {item.label}
                </p>
                <p className="text-[10px] sm:text-xs text-white/80 line-clamp-1 mt-0.5">
                  {item.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div className="text-center mt-12">
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
