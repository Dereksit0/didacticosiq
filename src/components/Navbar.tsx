"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { WA_LINK } from "@/lib/constants";

const navLinks = [
  { href: "#inicio",     label: "Inicio",        icon: "🏠" },
  { href: "#catalogo",   label: "Catálogo",       icon: "📖" },
  { href: "#categorias", label: "Categorías",     icon: "🎯" },
  { href: "#tienda",     label: "Nuestra Tienda", icon: "🏪" },
  { href: "#contacto",   label: "Contacto",       icon: "📞" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquear scroll del fondo cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-white/96 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 bg-[#008180] rounded-xl flex items-center justify-center text-white font-black text-lg shadow-md group-hover:scale-110 transition-transform duration-200">
              D
            </div>
            <div className="leading-none">
              <span className={`font-black text-xl tracking-tight ${scrolled ? "text-[#004f4f]" : "text-white"}`}>
                Didacticos
              </span>
              <span className="font-black text-xl text-[#ffb800]">IQ</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-5 lg:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-semibold text-sm transition-colors hover:text-[#ffb800] ${
                  scrolled ? "text-[#004f4f]" : "text-white/90"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25d366] text-white font-bold text-sm px-4 py-2.5 rounded-full flex items-center gap-2 hover:bg-[#1fb855] transition-all hover:scale-105 shadow-md"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Cotizar ahora
            </a>
          </div>

          {/* Hamburger */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-[#004f4f] hover:bg-gray-100" : "text-white hover:bg-white/20"
            }`}
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${isOpen ? "visible" : "invisible pointer-events-none"}`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
          onClick={close}
        />

        {/* Slide-in panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[82vw] max-w-[320px] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Panel header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-[#008180] rounded-xl flex items-center justify-center text-white font-black text-base shadow">
                D
              </div>
              <span className="font-black text-lg text-[#004f4f]">
                Didacticos<span className="text-[#ffb800]">IQ</span>
              </span>
            </div>
            <button
              onClick={close}
              aria-label="Cerrar menú"
              className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 px-3 py-5 flex flex-col gap-1 overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className="flex items-center gap-3.5 px-4 py-3.5 rounded-2xl text-[#004f4f] font-semibold hover:bg-[#eaf0ef] hover:text-[#008180] transition-all group"
              >
                <span className="text-xl w-7 text-center">{link.icon}</span>
                <span className="flex-1 text-[15px]">{link.label}</span>
                <svg
                  width="15" height="15" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  className="text-gray-300 group-hover:text-[#008180] group-hover:translate-x-0.5 transition-all"
                >
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </Link>
            ))}
          </nav>

          {/* Divider + info */}
          <div className="px-5 py-3 bg-gray-50 border-t border-gray-100">
            <p className="text-[11px] text-gray-400 text-center">
              🕐 Lun–Vie 8:30am–6pm &nbsp;·&nbsp; Sáb 8:30am–3pm
            </p>
          </div>

          {/* CTA */}
          <div className="px-4 pt-3 pb-8">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="w-full bg-[#25d366] hover:bg-[#1fb855] text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2.5 text-[15px] transition-colors shadow-lg"
              style={{ boxShadow: "0 8px 24px rgba(37,211,102,0.30)" }}
            >
              <WhatsAppIcon className="w-5 h-5" />
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
