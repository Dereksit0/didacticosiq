"use client";
import { useState } from "react";

interface Props {
  link: string;
  brand: string;
}

function buildViewerSrc(link: string): string {
  const [url, hash] = link.split("#");
  const pageMatch = hash?.match(/page=(\d+)/);
  const page = pageMatch ? pageMatch[1] : "1";
  return `/pdfviewer.html?file=${encodeURIComponent(url)}&page=${page}`;
}

export default function PdfViewer({ link, brand }: Props) {
  const [loading, setLoading] = useState(true);
  const src = buildViewerSrc(link);

  return (
    <div className="relative flex-1 overflow-hidden bg-gray-50" style={{ minHeight: "55vh" }}>
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 z-10 gap-3">
          <div className="w-11 h-11 rounded-full border-4 border-gray-200 border-t-[#008180] animate-spin" />
          <p className="text-sm text-gray-400 font-medium">Cargando catálogo...</p>
        </div>
      )}
      <iframe
        key={src}
        src={src}
        title={`Catálogo ${brand}`}
        className="w-full border-0"
        style={{ height: "65vh" }}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
