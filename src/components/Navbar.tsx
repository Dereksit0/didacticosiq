"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { WA_LINK } from "@/lib/constants";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#catalogo", label: "Catálogo" },
  { href: "#categorias", label: "Categorías" },
  { href: "#tienda", label: "Nuestra Tienda" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/96 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="#inicio" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 bg-[#008180] rounded-xl flex items-center justify-center text-white font-black text-lg shadow-md group-hover:scale-110 transition-transform duration-200">
            D
          </div>
          <div className="leading-none">
            <span
              className={`font-black text-xl tracking-tight ${
                scrolled ? "text-[#004f4f]" : "text-white"
              }`}
            >
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
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/97 backdrop-blur-md px-5 pb-6 pt-4 flex flex-col gap-4 shadow-xl border-t border-gray-100">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#004f4f] font-semibold text-base hover:text-[#008180] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25d366] text-white font-bold text-sm px-5 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-[#1fb855] transition-all shadow-md"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
