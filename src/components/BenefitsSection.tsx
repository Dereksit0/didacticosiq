import ScrollReveal from "./ScrollReveal";

const benefits = [
  {
    emoji: "🌿",
    title: "Material No Tóxico",
    description:
      "Todos nuestros productos cumplen estrictas normas de seguridad. Pinturas al agua, materiales libres de BPA y normas NOM certificadas.",
    color: "#25d366",
    bgColor: "#dcfce7",
  },
  {
    emoji: "👩‍🏫",
    title: "Asesoría Profesional",
    description:
      "Nuestro equipo te orienta para elegir el material más adecuado según la edad y las necesidades específicas de cada persona, desde bebés hasta adultos.",
    color: "#4db8ff",
    bgColor: "#dbeafe",
  },
  {
    emoji: "🏅",
    title: "Calidad y Garantía",
    description:
      "Fabricados con materiales de alta calidad, resistentes al uso intensivo en aulas, terapias y hogar. Productos con garantía respaldada.",
    color: "#ff8c42",
    bgColor: "#ffedd5",
  },
  {
    emoji: "🚚",
    title: "Entrega Inmediata",
    description:
      "Stock permanente disponible. Pedidos listos en 24 horas para la ciudad y envíos express a toda la república.",
    color: "#008180",
    bgColor: "#ccfbf1",
  },
];

export default function BenefitsSection() {
  return (
    <section
      className="py-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(140deg, #002e2e 0%, #004f4f 40%, #008180 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white rounded-full px-4 py-2 text-sm font-bold mb-4 border border-white/20">
              <span>⭐</span> ¿Por qué elegirnos?
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Beneficios{" "}
              <span className="text-[#ffb800]">DidacticosIQ</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Más de 23 años siendo la opción preferida de maestros, terapeutas
              y directores en toda la república mexicana. Material para todas las edades.
            </p>
          </div>
        </ScrollReveal>

        {/* Benefit cards */}
        <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, idx) => (
            <ScrollReveal key={b.title} delay={idx * 100} className="w-full h-full">
              <div className="card-hover bg-white rounded-3xl p-7 text-center shadow-lg h-full flex flex-col">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-5 shadow-inner"
                  style={{ backgroundColor: b.bgColor }}
                >
                  {b.emoji}
                </div>
                <h3 className="font-black text-lg text-[#004f4f] mb-3">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{b.description}</p>
                <div
                  className="w-10 h-1 rounded-full mx-auto mt-5"
                  style={{ backgroundColor: b.color }}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
