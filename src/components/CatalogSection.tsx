import ScrollReveal from "./ScrollReveal";
import { CATALOG_LINK } from "@/lib/constants";

const features = [
  { icon: "🎯", text: "Material Montessori" },
  { icon: "🧠", text: "Terapia Ocupacional" },
  { icon: "📚", text: "Material de Aula" },
  { icon: "🏃", text: "Juegos de Patio" },
  { icon: "🔢", text: "Matemáticas Manipulativas" },
  { icon: "🗣️", text: "Terapia de Lenguaje" },
];

export default function CatalogSection() {
  return (
    <section id="catalogo" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-[#eaf0ef] text-[#008180] rounded-full px-4 py-2 text-sm font-bold mb-6">
              <span>📖</span> Catálogo 2026
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-[#004f4f] leading-tight mb-5">
              Explora Nuestro
              <br />
              <span className="text-[#008180]">Catálogo Premium</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-3">
              Explora más de{" "}
              <strong className="text-[#008180]">500 productos</strong>{" "}
              diseñados para potenciar el{" "}
              <strong>desarrollo cognitivo y la creatividad</strong> de niños en
              todas las etapas de su desarrollo.
            </p>

            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Desde material Montessori hasta herramientas especializadas para
              terapeutas y psicopedagogos — nuestro catálogo es la guía
              definitiva para educadores en México.
            </p>

            {/* Feature chips */}
            <div className="grid grid-cols-2 gap-3 mb-9">
              {features.map((item) => (
                <div key={item.text} className="flex items-center gap-2.5">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm font-semibold text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>

            <a
              href={CATALOG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-bounce inline-flex items-center gap-3 bg-[#008180] text-white font-black text-base px-8 py-4 rounded-2xl shadow-lg hover:bg-[#006665] hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <span className="text-xl">⬇️</span>
              DESCARGAR CATÁLOGO GRATIS
            </a>
          </ScrollReveal>

          {/* Right: Book visual */}
          <ScrollReveal delay={150} className="flex items-center justify-center">
            <a
              href={CATALOG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-8 md:mt-0 block group"
            >
              {/* Shadow under book */}
              <div
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-56 h-8 rounded-full opacity-25"
                style={{ background: "radial-gradient(ellipse, #000, transparent)" }}
              />

              {/* Main catalog cover */}
              <div
                className="catalog-book relative w-60 sm:w-72 h-80 sm:h-96 rounded-2xl overflow-hidden cursor-pointer shadow-2xl transition-transform group-hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(160deg, #008180 0%, #004f4f 100%)",
                  transform: "perspective(900px) rotateY(-10deg)",
                  boxShadow: "22px 22px 44px rgba(0,0,0,0.25)",
                }}
              >
                {/* Book spine shadow */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-7"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(0,0,0,0.35), transparent)",
                  }}
                />

                {/* Sheen highlight */}
                <div
                  className="absolute top-0 right-0 w-24 h-full"
                  style={{
                    background:
                      "linear-gradient(270deg, rgba(255,255,255,0.08), transparent)",
                  }}
                />

                {/* Cover content */}
                <div className="relative p-6 h-full flex flex-col z-10">
                  <div className="flex justify-between items-start mb-5">
                    <div>
                      <p className="text-white/60 text-xs font-bold uppercase tracking-[0.15em]">
                        Catálogo
                      </p>
                      <p className="text-[#ffb800] text-3xl font-black leading-none">2026</p>
                    </div>
                    <div className="bg-[#ffb800] text-[#002e2e] text-xs font-black px-2.5 py-1 rounded-lg shadow">
                      NUEVO
                    </div>
                  </div>

                  <div className="text-6xl mb-3 drop-shadow-lg">🎒</div>

                  <div className="font-black text-2xl text-white leading-tight mb-1">
                    DIDACTICOS
                    <span className="text-[#ffb800]">IQ</span>
                  </div>
                  <p className="text-white/65 text-xs mb-4">
                    Material Educativo al Mayoreo
                  </p>

                  <div className="mt-auto">
                    <div className="grid grid-cols-3 gap-1.5">
                      {["🧩", "📐", "🎨", "🔢", "🏆", "🎯"].map((emoji, i) => (
                        <div
                          key={i}
                          className="bg-white/12 rounded-lg p-2 text-center text-xl"
                        >
                          {emoji}
                        </div>
                      ))}
                    </div>
                    <p className="text-white/50 text-xs text-center mt-3">
                      +500 productos educativos
                    </p>
                  </div>
                </div>
              </div>

              {/* Back page */}
              <div
                className="absolute top-2 -right-3 -z-10 w-60 sm:w-72 h-80 sm:h-96 rounded-2xl transition-transform group-hover:translate-x-1"
                style={{
                  background: "linear-gradient(160deg, #005858 0%, #002f2f 100%)",
                  transform: "perspective(900px) rotateY(-7deg)",
                }}
              />
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
