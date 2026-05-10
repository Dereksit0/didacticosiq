import ScrollReveal from "./ScrollReveal";
import { MAPS_LINK } from "@/lib/constants";

// Catalog URLs — Google Drive PDFs go through /api/pdf proxy which serves them
// with Content-Disposition: inline, forcing the browser's native PDF viewer to
// open them. The native viewer (Chrome/Edge/Firefox) supports #page=N navigation.
const EDUDAK_CATALOG = "/api/pdf?id=1ANsKKvh6oe0Go4fuguvWA11M__TOxFls";
const DIDACTICOSIQ_CATALOG = "/api/pdf?id=1PxW4Jo3H-w0EuhjywuBlDC6at76Is4Ze";
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
    description: "Monedas y billetes didácticos mexicanos",
    emoji: "✂️",
    colorA: "#60a5fa",
    colorB: "#1d4ed8",
    colSpan: "col-span-1",
    image: "",
    link: `${DIDACTICOSIQ_CATALOG}#page=12`,
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
    label: "Material para Maquetas",
    description: "Animales en miniatura para proyectos de ciencias y biología",
    emoji: "🦎",
    colorA: "#4ade80",
    colorB: "#15803d",
    colSpan: "col-span-1 md:col-span-2",
    image: "",
    link: `${DIDACTICOSIQ_CATALOG}#page=6`,
  },
  {
    label: "Inducción Deportiva",
    description: "Pelotas, aros, cuerdas y conos para actividad física",
    emoji: "⚽",
    colorA: "#fb923c",
    colorB: "#c2410c",
    colSpan: "col-span-1 md:col-span-2",
    image: "",
    link: `${DIDACTICOSIQ_CATALOG}#page=13`,
  },
  {
    label: "Psicomotricidad",
    description: "Aros, cuerdas, colchonetas y material de desarrollo motor",
    emoji: "🤸",
    colorA: "#a3e635",
    colorB: "#3f6212",
    colSpan: "col-span-1 md:col-span-2",
    image: "",
    link: `${EDUDAK_CATALOG}#page=10`,
  },
  {
    label: "Juegos al Aire Libre",
    description: "Juegos de patio, actividades al exterior y recreo dirigido",
    emoji: "⛹️",
    colorA: "#67e8f9",
    colorB: "#0e7490",
    colSpan: "col-span-1 md:col-span-2",
    image: "",
    link: `${EDUDAK_CATALOG}#page=35`,
  },
  {
    label: "Lectura y Escritura",
    description: "Abecedarios, silabarios, tarjetas fonéticas y grafomotricidad",
    emoji: "📖",
    colorA: "#fcd34d",
    colorB: "#92400e",
    colSpan: "col-span-1",
    image: "",
    link: `${EDUDAK_CATALOG}#page=68`,
  },
  {
    label: "Arte y Creatividad",
    description: "Pintura, modelado, manualidades y expresión artística",
    emoji: "🎨",
    colorA: "#e879f9",
    colorB: "#4a044e",
    colSpan: "col-span-1",
    image: "",
    link: `${EDUDAK_CATALOG}#page=82`,
  },
  {
    label: "Matemáticas",
    description: "Bloques lógicos, regletas, ábacos y material de conteo",
    emoji: "🔢",
    colorA: "#6ee7b7",
    colorB: "#065f46",
    colSpan: "col-span-1 md:col-span-2",
    image: "",
    link: `${EDUDAK_CATALOG}#page=108`,
  },
  {
    label: "Ciencias y Experimentos",
    description: "Lupas, microscopios, kits científicos y laboratorio escolar",
    emoji: "🧪",
    colorA: "#7dd3fc",
    colorB: "#0c4a6e",
    colSpan: "col-span-1 md:col-span-2",
    image: "",
    link: `${EDUDAK_CATALOG}#page=135`,
  },
  {
    label: "Socioemocional",
    description: "Juegos de emociones, convivencia escolar y bienestar",
    emoji: "💛",
    colorA: "#fca5a5",
    colorB: "#7f1d1d",
    colSpan: "col-span-1",
    image: "",
    link: `${EDUDAK_CATALOG}#page=50`,
  },
  {
    label: "Inglés",
    description: "Flashcards, dominós y materiales para aprendizaje del inglés",
    emoji: "🌎",
    colorA: "#93c5fd",
    colorB: "#1e3a5f",
    colSpan: "col-span-1",
    image: "",
    link: `${EDUDAK_CATALOG}#page=74`,
  },
  {
    label: "Motricidad Fina",
    description: "Enhebrado, recortado, modelado y ejercicios de coordinación manual",
    emoji: "✂️",
    colorA: "#ff8a80",
    colorB: "#b71c1c",
    colSpan: "col-span-1 md:col-span-2",
    image: "",
    link: `${EDUDAK_CATALOG}#page=18`,
  },
  {
    label: "Juego Simbólico",
    description: "Cocinas de juguete, disfraces, títeres y juego de roles",
    emoji: "🎭",
    colorA: "#fff176",
    colorB: "#f57f17",
    colSpan: "col-span-1",
    image: "",
    link: `${EDUDAK_CATALOG}#page=42`,
  },
  {
    label: "Convivencia y Valores",
    description: "Juegos cooperativos, educación cívica y formación en valores",
    emoji: "🤲",
    colorA: "#b9f6ca",
    colorB: "#1b5e20",
    colSpan: "col-span-1",
    image: "",
    link: `${EDUDAK_CATALOG}#page=57`,
  },
  {
    label: "Material Bilingüe",
    description: "Materiales de apoyo para enseñanza bilingüe y lengua extranjera",
    emoji: "🌐",
    colorA: "#b3e5fc",
    colorB: "#01579b",
    colSpan: "col-span-1",
    image: "",
    link: `${EDUDAK_CATALOG}#page=78`,
  },
  {
    label: "Danza y Expresión",
    description: "Material para danza, expresión corporal y ritmo",
    emoji: "💃",
    colorA: "#f48fb1",
    colorB: "#880e4f",
    colSpan: "col-span-1",
    image: "",
    link: `${EDUDAK_CATALOG}#page=87`,
  },
  {
    label: "Lengua de Señas",
    description: "Material para aprendizaje de Lengua de Señas Mexicana (LSM)",
    emoji: "🤟",
    colorA: "#b39ddb",
    colorB: "#4527a0",
    colSpan: "col-span-1",
    image: "",
    link: `${EDUDAK_CATALOG}#page=91`,
  },
  {
    label: "Geografía e Historia",
    description: "Mapas, globos terráqueos, líneas de tiempo y recursos históricos",
    emoji: "🗺️",
    colorA: "#a5d6a7",
    colorB: "#2e7d32",
    colSpan: "col-span-1",
    image: "",
    link: `${EDUDAK_CATALOG}#page=96`,
  },
  {
    label: "Vida Saludable",
    description: "Nutrición, higiene personal, hábitos saludables y cuerpo humano",
    emoji: "🥦",
    colorA: "#ccff90",
    colorB: "#33691e",
    colSpan: "col-span-1 md:col-span-2",
    image: "",
    link: `${EDUDAK_CATALOG}#page=99`,
  },
  {
    label: "Geometría",
    description: "Figuras geométricas, sólidos y material de medición",
    emoji: "📏",
    colorA: "#80d8ff",
    colorB: "#006064",
    colSpan: "col-span-1 md:col-span-2",
    image: "",
    link: `${EDUDAK_CATALOG}#page=115`,
  },
  {
    label: "Construcción y Bloques",
    description: "Bloques de construcción, LEGO educativo y ensamblaje",
    emoji: "🧱",
    colorA: "#ffcc80",
    colorB: "#bf360c",
    colSpan: "col-span-1",
    image: "",
    link: `${EDUDAK_CATALOG}#page=125`,
  },
  {
    label: "Pensamiento Lógico",
    description: "Secuencias, patrones, clasificación y razonamiento",
    emoji: "🧠",
    colorA: "#ce93d8",
    colorB: "#4a148c",
    colSpan: "col-span-1 md:col-span-2",
    image: "",
    link: `${EDUDAK_CATALOG}#page=145`,
  },
  {
    label: "Tecnología y Robótica",
    description: "Kits de robótica, programación y pensamiento computacional",
    emoji: "🤖",
    colorA: "#82b1ff",
    colorB: "#1a237e",
    colSpan: "col-span-1",
    image: "",
    link: `${EDUDAK_CATALOG}#page=155`,
  },
  {
    label: "Pizarrones y Tableros",
    description: "Pizarrones magnéticos, de tiza y tableros didácticos",
    emoji: "🖊️",
    colorA: "#b0bec5",
    colorB: "#263238",
    colSpan: "col-span-1",
    image: "",
    link: `${EDUDAK_CATALOG}#page=163`,
  },
  {
    label: "Recursos Docentes",
    description: "Sellos, tarjetas de gestión y apoyos para el maestro",
    emoji: "📋",
    colorA: "#ffe57f",
    colorB: "#ff6f00",
    colSpan: "col-span-1",
    image: "",
    link: `${EDUDAK_CATALOG}#page=166`,
  },
  {
    label: "Material de Evaluación",
    description: "Rúbricas, portafolios y herramientas de evaluación formativa",
    emoji: "📝",
    colorA: "#cfd8dc",
    colorB: "#37474f",
    colSpan: "col-span-1 md:col-span-2",
    image: "",
    link: `${EDUDAK_CATALOG}#page=170`,
  },
  {
    label: "Sillas y Mesas",
    description: "Mesas y sillas escolares para preescolar y primaria",
    emoji: "🪑",
    colorA: "#d7ccc8",
    colorB: "#4e342e",
    colSpan: "col-span-1 md:col-span-2",
    image: "",
    link: `${EDUDAK_CATALOG}#page=175`,
  },
  {
    label: "Muebles de Almacenamiento",
    description: "Repisas, casilleros y organizadores para el salón",
    emoji: "🗄️",
    colorA: "#e8eaf6",
    colorB: "#283593",
    colSpan: "col-span-1",
    image: "",
    link: `${EDUDAK_CATALOG}#page=177`,
  },
  {
    label: "Estimulación Temprana",
    description: "Sonajeros, móviles y material de estimulación 0–3 años",
    emoji: "🍼",
    colorA: "#f8bbd9",
    colorB: "#ad1457",
    colSpan: "col-span-1",
    image: "",
    link: `${EDUDAK_CATALOG}#page=181`,
  },
  {
    label: "Juguetes Sensoriales",
    description: "Texturas, sonidos, colores y experiencias multisensoriales",
    emoji: "🌈",
    colorA: "#ffab91",
    colorB: "#bf360c",
    colSpan: "col-span-1 md:col-span-2",
    image: "",
    link: `${EDUDAK_CATALOG}#page=183`,
  },
  {
    label: "Desarrollo Visual",
    description: "Móviles, contrastes y estimulación visual para bebés",
    emoji: "👁️",
    colorA: "#e1bee7",
    colorB: "#6a1b9a",
    colSpan: "col-span-1 md:col-span-2",
    image: "",
    link: `${EDUDAK_CATALOG}#page=186`,
  },
  {
    label: "Uniformes y Batas",
    description: "Bata para maestra, Bata infantil",
    emoji: "🥼",
    colorA: "#94a3b8",
    colorB: "#334155",
    colSpan: "col-span-2 md:col-span-4",
    image: "",
    link: `${DIDACTICOSIQ_CATALOG}#page=14`,
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
