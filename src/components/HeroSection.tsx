import { WA_LINK, CATALOG_LINK } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(140deg, #002e2e 0%, #004f4f 25%, #008180 65%, #009e9d 100%)",
      }}
    >
      {/* ── Decorative background blobs ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div
          className="absolute -top-28 -right-28 w-[420px] h-[420px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,184,0,0.18), transparent 70%)" }}
        />
        <div
          className="absolute top-1/4 right-[22%] w-16 h-16 rounded-full opacity-30 animate-float"
          style={{ background: "#4db8ff" }}
        />
        <div
          className="absolute bottom-1/3 left-[10%] w-10 h-10 rounded-full opacity-25 animate-float-2"
          style={{ background: "#ff8c42" }}
        />
        <div
          className="absolute top-[45%] right-[35%] w-7 h-7 rounded-full opacity-35 animate-float"
          style={{ background: "#ff4757", animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-[22%] right-[18%] w-12 h-12 rounded-full opacity-20 animate-float-2"
          style={{ background: "#ffb800", animationDelay: "2s" }}
        />
        <div
          className="absolute top-[18%] left-[30%] w-6 h-6 rounded-full opacity-20 animate-float"
          style={{ background: "#25d366", animationDelay: "1.5s" }}
        />
        {/* dot-grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "38px 38px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-28 md:py-32 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* ── Left: Text ── */}
        <div className="animate-hero-entrance">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-7">
            <span className="w-2 h-2 bg-[#ffb800] rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-semibold tracking-wide">
              Distribuidora Líder en México
            </span>
          </div>

          <h1 className="text-[2.6rem] sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.1] mb-7">
            APRENDER
            <br />
            <span className="text-[#ffb800]">JUGANDO</span>
            <br />
            <span className="text-white/90 text-[2rem] sm:text-4xl lg:text-5xl">
              ES CRECER CON
            </span>
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #4db8ff 0%, #ffb800 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              INTELIGENCIA
            </span>
          </h1>

          <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg">
            Material didáctico especializado para{" "}
            <strong className="text-white">todas las edades</strong> — escuelas, consultorios,
            terapeutas, padres de familia y público en general.
            Mayoreo y menudeo con envíos a todo México.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#catalogo"
              className="btn-bounce inline-flex items-center justify-center gap-3 bg-[#ffb800] text-[#002e2e] font-black text-base px-7 py-4 rounded-2xl shadow-xl hover:bg-[#ffc933] hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <span className="text-xl">📚</span>
              Ver catálogos
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-bounce inline-flex items-center justify-center gap-3 bg-[#25d366] text-white font-bold text-base px-7 py-4 rounded-2xl shadow-xl hover:bg-[#1fb855] hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <WhatsAppIcon />
              Cotizar ahora
            </a>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/20">
            {[
              { value: "500+", label: "Productos" },
              { value: "15+", label: "Años de exp." },
              { value: "Todo MX", label: "Envíos nacionales" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-[#ffb800]">{s.value}</div>
                <div className="text-white/65 text-xs sm:text-sm font-medium mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Illustration card ── */}
        <div
          className="hidden md:flex items-center justify-center animate-scale-in"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="relative w-full max-w-sm">
            <div
              className="relative rounded-3xl p-8 text-center shadow-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.06) 100%)",
                backdropFilter: "blur(14px)",
                border: "1px solid rgba(255,255,255,0.22)",
              }}
            >
              <div className="text-8xl mb-5 block animate-float">🧸</div>
              <div className="flex justify-center gap-4 text-5xl mb-4">
                <span className="animate-float" style={{ animationDelay: "0.5s" }}>🎨</span>
                <span className="animate-float-2" style={{ animationDelay: "1s" }}>🧩</span>
                <span className="animate-float" style={{ animationDelay: "1.5s" }}>📐</span>
              </div>
              <div className="flex justify-center gap-4 text-4xl mb-6">
                <span className="animate-float-2">🔢</span>
                <span className="animate-float" style={{ animationDelay: "0.7s" }}>🎯</span>
                <span className="animate-float-2" style={{ animationDelay: "1.2s" }}>🏆</span>
              </div>
              <div
                className="rounded-xl px-4 py-2 inline-block"
                style={{ background: "rgba(255,255,255,0.1)" }}
              >
                <p className="text-white font-black text-lg">¡Más de 500 productos!</p>
                <p className="text-white/60 text-sm">Para cada etapa del aprendizaje</p>
              </div>
            </div>

            {/* Floating micro-badges */}
            <div
              className="absolute -top-4 -right-4 bg-[#ffb800] text-[#002e2e] rounded-2xl px-3 py-1.5 font-black text-xs shadow-lg animate-float"
              style={{ animationDelay: "0.5s" }}
            >
              ✓ Precios Mayoreo
            </div>
            <div
              className="absolute -bottom-4 -left-4 bg-[#4db8ff] text-white rounded-2xl px-3 py-1.5 font-bold text-xs shadow-lg animate-float-2"
              style={{ animationDelay: "1.2s" }}
            >
              🚚 Envíos a todo México
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 44C1200 40 1320 24 1380 16L1440 8V80H0Z"
            fill="#eaf0ef"
          />
        </svg>
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
