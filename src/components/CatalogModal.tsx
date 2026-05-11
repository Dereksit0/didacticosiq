"use client";
import { useEffect } from "react";
import PdfViewer from "./PdfViewer";

interface CatalogItem {
  brand: string;
  link: string;
  gradient: string;
}

interface Props {
  catalog: CatalogItem | null;
  onClose: () => void;
}

function quoteLink(brand: string) {
  return `https://wa.me/522201792153?text=${encodeURIComponent(
    `¡Hola DidacticosIQ! Estuve revisando el catálogo de ${brand} y me interesa solicitar una cotización. ¿Me pueden orientar?`
  )}`;
}

function helpLink(brand: string) {
  return `https://wa.me/522201792153?text=${encodeURIComponent(
    `¡Hola DidacticosIQ! Estuve revisando el catálogo de ${brand} y no encontré lo que busco. ¿Me pueden ayudar a encontrar el producto ideal?`
  )}`;
}

function WaIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
    </svg>
  );
}

function FullscreenIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/>
      <path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/>
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  );
}

export default function CatalogModal({ catalog, onClose }: Props) {
  useEffect(() => {
    if (!catalog) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [catalog, onClose]);

  if (!catalog) return null;

  const pdfName = `catalogo-${catalog.brand.toLowerCase().replace(/\s+/g, "-")}.pdf`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/65 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl flex flex-col overflow-hidden"
        style={{ maxHeight: "92vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-3.5 flex-shrink-0"
          style={{ background: catalog.gradient }}
        >
          <div className="flex items-center gap-2">
            <span className="text-white/70 text-xs font-bold uppercase tracking-widest">Catálogo</span>
            <span className="text-white/40">•</span>
            <span className="text-white font-black text-lg leading-none">{catalog.brand}</span>
          </div>
          <div className="flex items-center gap-2">
            {/* Download — always visible in header */}
            <a
              href={catalog.link}
              download={pdfName}
              aria-label="Descargar PDF"
              title="Descargar PDF"
              className="text-white/80 hover:text-white bg-white/10 hover:bg-white/25 rounded-full w-9 h-9 flex items-center justify-center transition-colors"
            >
              <DownloadIcon />
            </a>
            <button
              onClick={onClose}
              aria-label="Cerrar"
              className="text-white/80 hover:text-white bg-white/10 hover:bg-white/25 rounded-full w-9 h-9 flex items-center justify-center transition-colors text-lg font-bold"
            >
              ✕
            </button>
          </div>
        </div>

        {/* PDF viewer — key forces full reset when switching catalogs */}
        <PdfViewer key={catalog.link} link={catalog.link} brand={catalog.brand} />

        {/* Footer — mobile */}
        <div className="sm:hidden flex flex-col gap-2 px-4 py-3.5 border-t border-gray-100 bg-white flex-shrink-0">
          <a
            href={quoteLink(catalog.brand)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fba5a] text-white font-bold text-sm py-3 rounded-xl transition-colors shadow-sm"
          >
            <WaIcon />
            Solicitar cotización
          </a>
          <div className="flex gap-2">
            <a
              href={helpLink(catalog.brand)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 bg-[#eaf0ef] hover:bg-[#d0e4e4] text-[#004f4f] font-bold text-xs py-2.5 rounded-xl transition-colors"
            >
              <SearchIcon />
              ¿No lo encontraste?
            </a>
            <a
              href={catalog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-[#008180] border border-gray-200 hover:border-[#008180] py-2.5 rounded-xl transition-colors"
            >
              <FullscreenIcon />
              Pantalla completa
            </a>
          </div>
        </div>

        {/* Footer — desktop */}
        <div className="hidden sm:flex items-center justify-between gap-3 px-5 py-3.5 border-t border-gray-100 bg-white flex-shrink-0">
          <a
            href={catalog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-[#008180] border border-gray-200 hover:border-[#008180] px-3 py-2 rounded-lg transition-colors"
          >
            <FullscreenIcon />
            Ver en pantalla completa
          </a>
          <div className="flex items-center gap-2">
            <a
              href={helpLink(catalog.brand)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#eaf0ef] hover:bg-[#d0e4e4] text-[#004f4f] font-bold text-sm px-4 py-2.5 rounded-xl transition-colors"
            >
              <SearchIcon />
              ¿No lo encontraste?
            </a>
            <a
              href={quoteLink(catalog.brand)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1fba5a] text-white font-bold text-sm px-4 py-2.5 rounded-xl transition-colors shadow-sm"
            >
              <WaIcon />
              Solicitar cotización
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
