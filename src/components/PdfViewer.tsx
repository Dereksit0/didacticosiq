"use client";
import { useState } from "react";

interface Props {
  link: string;
  brand: string;
}

export default function PdfViewer({ link, brand }: Props) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative flex-1 overflow-hidden bg-gray-50" style={{ minHeight: "55vh" }}>
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 z-10 gap-3">
          <div className="w-11 h-11 rounded-full border-4 border-gray-200 border-t-[#008180] animate-spin" />
          <p className="text-sm text-gray-400 font-medium">Cargando catálogo...</p>
        </div>
      )}
      <iframe
        key={link}
        src={link}
        title={`Catálogo ${brand}`}
        className="w-full border-0"
        style={{ height: "65vh" }}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
