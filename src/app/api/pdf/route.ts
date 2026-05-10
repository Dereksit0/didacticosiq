import { NextRequest, NextResponse } from "next/server";
import { readFile, writeFile, mkdir, stat } from "fs/promises";
import { join } from "path";

// Local filesystem cache directory (inside .next to auto-clear on rebuilds)
const CACHE_DIR = join(process.cwd(), ".next", "cache", "pdf-proxy");

// Cache TTL: 7 days in milliseconds
const CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000;

/**
 * API route that proxies a Google Drive PDF and serves it with
 * Content-Disposition: inline so the browser's native PDF viewer
 * opens it instead of downloading. This allows the #page=N
 * fragment to work correctly.
 *
 * PERFORMANCE: PDFs are cached on the local filesystem for 7 days
 * to avoid re-downloading from Google Drive on every request.
 */
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const fileId = searchParams.get("id");

  if (!fileId || !/^[a-zA-Z0-9_-]+$/.test(fileId)) {
    return NextResponse.json({ error: "Missing or invalid file id" }, { status: 400 });
  }

  try {
    // 1. Try to serve from filesystem cache first
    const cachedPdf = await getCachedPdf(fileId);
    if (cachedPdf) {
      return new NextResponse(new Uint8Array(cachedPdf), {
        headers: pdfHeaders(cachedPdf.byteLength),
      });
    }

    // 2. Download from Google Drive
    const pdfBuffer = await downloadFromGoogleDrive(fileId);

    // 3. Cache to filesystem (non-blocking)
    cachePdf(fileId, pdfBuffer).catch((err) =>
      console.error("Failed to cache PDF:", err)
    );

    return new NextResponse(new Uint8Array(pdfBuffer), {
      headers: pdfHeaders(pdfBuffer.byteLength),
    });
  } catch (error) {
    console.error("PDF proxy error:", error);
    return NextResponse.json(
      { error: "Failed to load PDF" },
      { status: 502 }
    );
  }
}

/** Standard headers for inline PDF display with aggressive caching */
function pdfHeaders(contentLength: number): Record<string, string> {
  return {
    "Content-Type": "application/pdf",
    "Content-Length": String(contentLength),
    "Content-Disposition": "inline",
    // Browser cache: 24h, CDN/edge cache: 7 days, stale-while-revalidate: 30 days
    "Cache-Control": "public, max-age=86400, s-maxage=604800, stale-while-revalidate=2592000",
    // Allows range requests for faster partial page loading in PDF viewers
    "Accept-Ranges": "bytes",
  };
}

/** Read PDF from filesystem cache if it exists and isn't expired */
async function getCachedPdf(fileId: string): Promise<Buffer | null> {
  try {
    const cachePath = join(CACHE_DIR, `${fileId}.pdf`);
    const fileStat = await stat(cachePath);

    // Check if cache is still valid
    if (Date.now() - fileStat.mtimeMs > CACHE_TTL_MS) {
      return null; // Expired
    }

    return await readFile(cachePath);
  } catch {
    return null; // File doesn't exist
  }
}

/** Write PDF to filesystem cache */
async function cachePdf(fileId: string, buffer: ArrayBuffer): Promise<void> {
  await mkdir(CACHE_DIR, { recursive: true });
  const cachePath = join(CACHE_DIR, `${fileId}.pdf`);
  await writeFile(cachePath, Buffer.from(buffer));
}

/** Download a PDF from Google Drive, handling the virus-scan confirmation page */
async function downloadFromGoogleDrive(fileId: string): Promise<ArrayBuffer> {
  // Try direct download first
  let downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
  let res = await fetch(downloadUrl, { redirect: "follow" });

  // Google Drive may return an HTML page with a confirmation link for large files
  const contentType = res.headers.get("content-type") || "";
  if (contentType.includes("text/html")) {
    const html = await res.text();

    // Try extracting the confirmation token
    const confirmMatch = html.match(/confirm=([a-zA-Z0-9_-]+)/);
    if (confirmMatch) {
      downloadUrl = `https://drive.google.com/uc?export=download&confirm=${confirmMatch[1]}&id=${fileId}`;
      res = await fetch(downloadUrl, { redirect: "follow" });
    } else {
      // Fallback to the usercontent domain with forced confirmation
      downloadUrl = `https://drive.usercontent.google.com/download?id=${fileId}&export=download&confirm=t`;
      res = await fetch(downloadUrl, { redirect: "follow" });
    }
  }

  if (!res.ok) {
    throw new Error(`Google Drive returned ${res.status}`);
  }

  // Verify we actually got a PDF
  const finalContentType = res.headers.get("content-type") || "";
  if (!finalContentType.includes("pdf") && !finalContentType.includes("octet-stream")) {
    throw new Error(`Expected PDF but got ${finalContentType}`);
  }

  return res.arrayBuffer();
}
