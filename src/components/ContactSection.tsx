import ScrollReveal from "./ScrollReveal";
import { WA_LINK, MAPS_LINK } from "@/lib/constants";

const hours = [
  { day: "Lunes – Viernes", time: "8:30 am – 6:00 pm" },
  { day: "Sábado", time: "8:30 am – 3:00 pm" },
  { day: "Domingo", time: "Cerrado" },
];

const contactItems = [
  { icon: "📱", label: "WhatsApp Menudeo", value: "+52 220 179 2153", href: WA_LINK, target: "_blank" },
  { icon: "📞", label: "Teléfono Mayoreo", value: "222 231 4611", href: "tel:+522222314611" },
  { icon: "📍", label: "Ubicación", value: "Ver en Google Maps", href: MAPS_LINK, target: "_blank" },
  { icon: "📖", label: "Catálogo", value: "Ver catálogos", href: "#catalogo" },
];

export default function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-[#eaf0ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-white text-[#008180] rounded-full px-4 py-2 text-sm font-bold mb-4 shadow-sm">
              <span>📍</span> Visítanos
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-[#004f4f] mb-4">
              VISÍTANOS O{" "}
              <span className="text-[#008180]">HAZ TU PEDIDO</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Estamos listos para atenderte presencialmente o por WhatsApp.
              ¡Tu pedido de mayoreo está a un mensaje de distancia!
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Map visual */}
          <ScrollReveal>
            <div
              className="relative rounded-3xl overflow-hidden shadow-xl"
              style={{ minHeight: "420px" }}
            >
              {/* Map-like background */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(160deg, #d1fae5 0%, #cffafe 100%)" }}
              />

              {/* Road lines */}
              <div className="absolute inset-0 overflow-hidden opacity-60">
                <div className="absolute top-[38%] left-0 right-0 h-6 bg-white/70 rounded-sm" />
                <div className="absolute top-[66%] left-0 right-0 h-4 bg-white/50 rounded-sm" />
                <div className="absolute left-[32%] top-0 bottom-0 w-5 bg-white/70 rounded-sm" />
                <div className="absolute left-[62%] top-0 bottom-0 w-4 bg-white/50 rounded-sm" />
                {/* Block shapes */}
                <div className="absolute top-[8%] left-[8%] w-20 h-12 bg-green-200/60 rounded-lg" />
                <div className="absolute top-[8%] left-[40%] w-16 h-10 bg-teal-200/60 rounded-lg" />
                <div className="absolute top-[8%] right-[8%] w-14 h-14 bg-emerald-200/60 rounded-lg" />
                <div className="absolute bottom-[12%] left-[10%] w-16 h-10 bg-cyan-200/60 rounded-lg" />
                <div className="absolute bottom-[12%] right-[10%] w-20 h-12 bg-teal-200/60 rounded-lg" />
              </div>

              {/* Pin + Info card */}
              <div className="relative h-full flex flex-col items-center justify-center p-8 text-center" style={{ minHeight: "420px" }}>
                <div className="animate-pin text-6xl mb-1">📍</div>
                {/* Pin shadow */}
                <div
                  className="w-12 h-3 rounded-full opacity-20 mb-5"
                  style={{ background: "radial-gradient(ellipse, #000, transparent)" }}
                />

                <div className="bg-white rounded-2xl px-6 py-5 shadow-xl max-w-xs">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2.5 h-2.5 bg-[#008180] rounded-full" />
                    <p className="font-black text-[#004f4f] text-lg">DidacticosIQ</p>
                  </div>
                  <p className="text-gray-500 text-sm mb-4">
                    Distribuidora de Material Educativo al Mayoreo
                  </p>
                  <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-bounce w-full flex items-center justify-center gap-2 bg-[#008180] text-white font-bold py-2.5 rounded-xl text-sm hover:bg-[#006665] transition-all shadow hover:shadow-md"
                  >
                    <span>🗺️</span>
                    Abrir en Google Maps
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact info */}
          <ScrollReveal delay={150}>
            <div className="flex flex-col gap-5 h-full">
              {/* Hours card */}
              <div className="bg-white rounded-3xl p-7 shadow-md">
                <h3 className="font-black text-xl text-[#004f4f] mb-5 flex items-center gap-2">
                  <span className="text-2xl">🕐</span>
                  Horarios de Atención
                </h3>
                <div className="space-y-3">
                  {hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                    >
                      <span className="font-semibold text-gray-700 text-sm">{h.day}</span>
                      <span
                        className={`text-sm font-bold ${
                          h.day === "Domingo" ? "text-red-400" : "text-[#008180]"
                        }`}
                      >
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact links card */}
              <div className="bg-white rounded-3xl p-7 shadow-md">
                <h3 className="font-black text-xl text-[#004f4f] mb-5 flex items-center gap-2">
                  <span className="text-2xl">📞</span>
                  Contáctanos
                </h3>
                <div className="space-y-3">
                  {contactItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.target || "_self"}
                      rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#eaf0ef] transition-colors group"
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">
                          {item.label}
                        </p>
                        <p className="text-[#008180] font-bold text-sm group-hover:underline">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-bounce flex items-center justify-center gap-3 bg-[#25d366] text-white font-black text-base px-7 py-4 rounded-2xl shadow-lg hover:bg-[#1fb855] hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <WhatsAppIcon />
                Cotizar por WhatsApp ahora
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
