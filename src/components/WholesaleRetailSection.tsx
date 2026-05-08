"use client";
import ScrollReveal from "./ScrollReveal";
import MobileCarousel from "./MobileCarousel";
import { WA_LINK } from "@/lib/constants";

const WA_MAYOREO =
  "https://wa.me/522222314611?text=%C2%A1Hola%20DidacticosIQ!%20Me%20interesa%20una%20cotizaci%C3%B3n%20de%20MAYOREO.";

export default function WholesaleRetailSection() {
  return (
    <section
      id="mayoreo-menudeo"
      className="py-20 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #f0faf9 0%, #eaf0ef 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#008180]/10 text-[#008180] rounded-full px-4 py-2 text-sm font-bold mb-4 border border-[#008180]/20">
              <span>🏪</span> ¿Cómo quieres comprar?
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-[#004f4f] mb-4">
              Mayoreo &amp;{" "}
              <span className="text-[#008180]">Menudeo</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Tenemos opciones para todos: distribuidores, escuelas, terapeutas,
              padres de familia y público en general.
            </p>
          </div>
        </ScrollReveal>

        <MobileCarousel gapClass="gap-6" gridClass="md:grid md:grid-cols-2 md:gap-8 lg:gap-12">
          {/* ── MAYOREO ── */}
          <ScrollReveal className="w-[85vw] max-w-[85vw] sm:w-[400px] sm:max-w-[400px] md:w-auto md:max-w-none shrink-0 snap-center">
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl h-full"
              style={{
                background:
                  "linear-gradient(145deg, #002e2e 0%, #004f4f 40%, #008180 100%)",
              }}
            >
              {/* Decorative blob */}
              <div
                className="absolute -top-16 -right-16 w-56 h-56 rounded-full opacity-20"
                style={{
                  background:
                    "radial-gradient(circle, #ffb800, transparent 70%)",
                }}
              />
              <div className="relative p-8 sm:p-10 flex flex-col h-full">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#ffb800] text-[#002e2e] rounded-full px-4 py-2 text-xs font-black mb-6 w-fit shadow-lg">
                  🏭 MAYOREO
                </div>

                <h3 className="text-3xl font-black text-white mb-3">
                  Compras al{" "}
                  <span className="text-[#ffb800]">Mayoreo</span>
                </h3>
                <p className="text-white/70 text-base leading-relaxed mb-7">
                  Precios especiales para distribuidores, escuelas, institutos,
                  clínicas y empresas. Pedidos mínimos con descuentos
                  escalonados y crédito disponible.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "✅ Precios preferenciales exclusivos",
                    "✅ Facturación y crédito disponible",
                    "✅ Envíos a toda la república",
                    "✅ Asesor dedicado para tu cuenta",
                    "✅ Stock garantizado en todo momento",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-white/85 text-sm font-medium"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Phone + CTA */}
                <div className="mt-auto space-y-3">
                  <div className="flex items-center gap-3 bg-white/10 rounded-2xl px-5 py-3 border border-white/15">
                    <span className="text-2xl">📞</span>
                    <div>
                      <p className="text-white/50 text-xs font-semibold uppercase tracking-wide">
                        Línea Mayoreo
                      </p>
                      <a
                        href="tel:+522222314611"
                        className="text-[#ffb800] font-black text-lg hover:underline"
                      >
                        222 231 4611
                      </a>
                    </div>
                  </div>
                  <a
                    href={WA_MAYOREO}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-bounce flex items-center justify-center gap-3 bg-[#ffb800] text-[#002e2e] font-black text-base px-7 py-4 rounded-2xl shadow-lg hover:bg-[#ffc933] hover:shadow-xl hover:-translate-y-1 transition-all"
                  >
                    <span className="text-xl">💬</span>
                    Cotizar por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ── MENUDEO ── */}
          <ScrollReveal delay={150} className="w-[85vw] max-w-[85vw] sm:w-[400px] sm:max-w-[400px] md:w-auto md:max-w-none shrink-0 snap-center">
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl h-full"
              style={{
                background: "linear-gradient(145deg, #fff 0%, #f0faf9 100%)",
                border: "2px solid #d1fae5",
              }}
            >
              {/* Decorative blob */}
              <div
                className="absolute -top-16 -right-16 w-56 h-56 rounded-full opacity-15"
                style={{
                  background:
                    "radial-gradient(circle, #008180, transparent 70%)",
                }}
              />
              <div className="relative p-8 sm:p-10 flex flex-col h-full">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#eaf0ef] text-[#008180] rounded-full px-4 py-2 text-xs font-black mb-6 w-fit border border-[#008180]/20">
                  🛍️ MENUDEO
                </div>

                <h3 className="text-3xl font-black text-[#004f4f] mb-3">
                  Compras al{" "}
                  <span className="text-[#008180]">Menudeo</span>
                </h3>
                <p className="text-gray-500 text-base leading-relaxed mb-7">
                  Para maestros, terapeutas, padres de familia y cualquier
                  persona que busque material didáctico de calidad. Sin mínimo
                  de compra y entrega inmediata.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "✅ Sin pedido mínimo",
                    "✅ Pago en efectivo, transferencia o tarjeta",
                    "✅ Entrega en tienda o envío express",
                    "✅ Asesoría personalizada incluida",
                    "✅ Productos para todas las edades",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-gray-600 text-sm font-medium"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Phone + CTA */}
                <div className="mt-auto space-y-3">
                  <div className="flex items-center gap-3 bg-[#eaf0ef] rounded-2xl px-5 py-3 border border-[#008180]/20">
                    <span className="text-2xl">📱</span>
                    <div>
                      <p className="text-[#008180]/60 text-xs font-semibold uppercase tracking-wide">
                        WhatsApp Menudeo
                      </p>
                      <a
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#008180] font-black text-lg hover:underline"
                      >
                        +52 220 179 2153
                      </a>
                    </div>
                  </div>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-bounce flex items-center justify-center gap-3 bg-[#25d366] text-white font-black text-base px-7 py-4 rounded-2xl shadow-lg hover:bg-[#1fb855] hover:shadow-xl hover:-translate-y-1 transition-all"
                  >
                    <WhatsAppIcon />
                    Escribir por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </MobileCarousel>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
