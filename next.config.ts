import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/pdfs/:file",
        headers: [
          { key: "Content-Disposition", value: "inline" },
          // 1-year immutable cache — PDFs are versioned by filename
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          // Range requests let the PDF viewer fetch only the pages it needs
          { key: "Accept-Ranges", value: "bytes" },
        ],
      },
    ];
  },
};

export default nextConfig;
