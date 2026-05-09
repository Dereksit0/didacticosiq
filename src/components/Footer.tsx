import Link from "next/link";
import { WA_LINK, CATALOG_LINK, MAPS_LINK } from "@/lib/constants";

const productLinks = [
  "Material Montessori",
  "Terapia Ocupacional",
  "Material de Aula",
  "Juegos de Patio",
  "Mayoreo y Distribución",
];

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Ver Catálogos", href: "#catalogo" },
  { label: "Categorías", href: "#categorias" },
  { label: "Nuestra Tienda", href: "#tienda" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#002e2e" }} className="text-white">
      {/* Top wave */}
      <div className="leading-none" style={{ background: "#eaf0ef" }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0 0L60 10C120 20 240 40 360 46C480 52 600 46 720 38C840 30 960 20 1080 22C1200 24 1320 42 1380 50L1440 58V60H0V0Z"
            fill="#002e2e"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-11 h-11 bg-[#008180] rounded-xl flex items-center justify-center text-white font-black text-xl shadow">
                D
              </div>
              <span className="font-black text-2xl">
                Didacticos<span className="text-[#ffb800]">IQ</span>
              </span>
            </div>

            <p className="text-white/65 leading-relaxed mb-6 max-w-sm text-sm">
              Distribuidora líder en material didáctico y juguetes educativos al
              mayoreo. Apoyando la educación de México desde hace más de 15
              años.
            </p>

            <div className="flex gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25d366] text-white w-11 h-11 rounded-xl flex items-center justify-center hover:bg-[#1fb855] transition-colors shadow-md"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
              <a
                href={CATALOG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#008180] text-white w-11 h-11 rounded-xl flex items-center justify-center hover:bg-[#006665] transition-colors shadow-md"
                aria-label="Catálogo"
              >
                <span className="text-lg">📚</span>
              </a>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ff4757] text-white w-11 h-11 rounded-xl flex items-center justify-center hover:bg-[#e0354e] transition-colors shadow-md"
                aria-label="Ubicación"
              >
                <span className="text-lg">📍</span>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-black text-[#ffb800] mb-5 uppercase text-xs tracking-widest">
              Productos
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((item) => (
                <li key={item}>
                  <a
                    href={CATALOG_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/65 text-sm hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation + Contact */}
          <div>
            <h4 className="font-black text-[#ffb800] mb-5 uppercase text-xs tracking-widest">
              Navegación
            </h4>
            <ul className="space-y-2.5 mb-7">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/65 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-black text-[#ffb800] mb-3 uppercase text-xs tracking-widest">
              Contacto
            </h4>
            <ul className="space-y-1.5 text-white/65 text-sm">
              <li>📱 Menudeo: +52 220 179 2153</li>
              <li>📞 Mayoreo: 222 231 4611</li>
              <li>🕐 Lun–Vie: 8:30am – 6pm</li>
              <li>🕐 Sáb: 8:30am – 3pm</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-sm">
            © 2026 DidacticosIQ. Todos los derechos reservados.
          </p>
          <p className="text-white/40 text-sm">
            Material educativo al mayoreo · México 🇲🇽
          </p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
