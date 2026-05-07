"use client";
import { useState, useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const WA_PROYECTOS =
  "https://wa.me/522222314611?text=%C2%A1Hola%20DidacticosIQ!%20Tengo%20una%20idea%20o%20proyecto%20y%20me%20gustar%C3%ADa%20que%20me%20ayuden%20a%20dise%C3%B1arlo%20y%20fabricarlo.";

const steps = [
  {
    icon: "💡",
    title: "Lo Diseñamos",
    description:
      "Tu idea toma forma. Nuestro equipo diseña el juguete o material didáctico a tu medida, con los colores, medidas y características que necesitas.",
    color: "#ffb800",
    bgColor: "#fff8e1",
  },
  {
    icon: "🏭",
    title: "Lo Fabricamos",
    description:
      "Producimos con materiales de alta calidad, seguros y duraderos. Cumplimos normas NOM y estándares de seguridad para todas las edades.",
    color: "#008180",
    bgColor: "#e0f7f7",
  },
  {
    icon: "🎁",
    title: "Lo Entregamos",
    description:
      "Recibes tu producto terminado, listo para JUGAR. Empaquetado profesionalmente y entregado en el tiempo acordado.",
    color: "#ff8c42",
    bgColor: "#fff3e0",
  },
];

const useCases = [
  { icon: "🧸", text: "Juguetes personalizados" },
  { icon: "📚", text: "Material didáctico a medida" },
  { icon: "🏫", text: "Kits escolares institucionales" },
  { icon: "🧩", text: "Juegos de mesa educativos" },
  { icon: "🎨", text: "Material Montessori exclusivo" },
  { icon: "🔬", text: "Laboratorios de ciencias" },
];

export default function CustomProjectSection() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section
      id="proyectos"
      className="py-20 overflow-hidden relative"
      style={{
        background:
          "linear-gradient(150deg, #002e2e 0%, #003d3d 30%, #004f4f 70%, #005858 100%)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #ffb800, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #4db8ff, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "38px 38px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#ffb800]/20 text-[#ffb800] rounded-full px-4 py-2 text-sm font-bold mb-5 border border-[#ffb800]/30">
              <span>✨</span> Fabricación a la Medida
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              ¿Tienes una{" "}
              <span className="text-[#ffb800]">idea</span> o{" "}
              <span className="text-[#4db8ff]">proyecto</span>?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xl sm:text-2xl font-black mb-6">
              <span className="text-[#ffb800] flex items-center gap-2">
                💡 Lo Diseñamos
              </span>
              <span className="text-white/30 hidden sm:block">→</span>
              <span className="text-[#4db8ff] flex items-center gap-2">
                🏭 Lo Fabricamos
              </span>
              <span className="text-white/30 hidden sm:block">→</span>
              <span className="text-[#25d366] flex items-center gap-2">
                🎁 Lo Entregamos listo para{" "}
                <span className="text-[#ffb800]">JUGAR</span>
              </span>
            </div>
            <p className="text-white/65 text-lg max-w-3xl mx-auto leading-relaxed">
              No solo distribuimos — también fabricamos. Si tienes en mente un
              juguete, material didáctico o producto educativo personalizado,
              nuestro equipo lo convierte en realidad.
            </p>
          </div>
        </ScrollReveal>

        {/* Step cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-14">
          {steps.map((step, idx) => (
            <ScrollReveal key={step.title} delay={idx * 120}>
              <div
                className="card-hover relative rounded-3xl p-8 text-center h-full flex flex-col"
                style={{ backgroundColor: step.bgColor }}
              >
                {/* Step number */}
                <div
                  className="absolute top-4 right-5 text-xs font-black opacity-40"
                  style={{ color: step.color }}
                >
                  0{idx + 1}
                </div>
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-5 shadow-inner"
                  style={{ backgroundColor: step.color + "22" }}
                >
                  {step.icon}
                </div>
                <h3
                  className="font-black text-xl mb-3"
                  style={{ color: step.color }}
                >
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  {step.description}
                </p>
                <div
                  className="w-10 h-1 rounded-full mx-auto mt-5"
                  style={{ backgroundColor: step.color }}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Video Section */}
        <ScrollReveal>
          <div className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl mb-14 border border-white/12 bg-black relative group">
            <video 
              ref={videoRef}
              src="/fabricamos.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-auto object-cover"
            />
            {/* Custom Sound Toggle Button */}
            <button
              onClick={toggleMute}
              className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-3 backdrop-blur-sm transition-all shadow-lg sm:opacity-100 opacity-80 flex items-center gap-2 border border-white/20"
              aria-label={isMuted ? "Activar sonido" : "Desactivar sonido"}
            >
              {isMuted ? (
                <>
                  <span className="text-xl">🔇</span>
                  <span className="text-xs font-bold uppercase tracking-wider pr-1 hidden sm:inline">Activar Sonido</span>
                </>
              ) : (
                <>
                  <span className="text-xl">🔊</span>
                  <span className="text-xs font-bold uppercase tracking-wider pr-1 hidden sm:inline">Silenciar</span>
                </>
              )}
            </button>
          </div>
        </ScrollReveal>

        {/* Use cases grid */}
        <ScrollReveal>
          <div className="bg-white/8 backdrop-blur-sm rounded-3xl p-8 border border-white/12 mb-10">
            <h3 className="text-white font-black text-xl text-center mb-6">
              ¿Qué podemos fabricar para ti?
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {useCases.map((uc) => (
                <div
                  key={uc.text}
                  className="flex flex-col items-center gap-2 bg-white/8 rounded-2xl p-4 text-center"
                >
                  <span className="text-3xl">{uc.icon}</span>
                  <span className="text-white/80 text-xs font-semibold leading-tight">
                    {uc.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
          <div className="text-center">
            <p className="text-white/50 text-sm mb-4">
              Contáctanos y cuéntanos tu idea — sin compromiso
            </p>
            <a
              href={WA_PROYECTOS}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-bounce inline-flex items-center gap-3 bg-[#ffb800] text-[#002e2e] font-black text-base px-9 py-5 rounded-2xl shadow-xl hover:bg-[#ffc933] hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <span className="text-2xl">💬</span>
              Cuéntanos tu proyecto
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
