import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DidacticosIQ — Material Didáctico y Juguetes Educativos al Mayoreo",
  description:
    "Distribuidora líder en material didáctico y juguetes educativos al mayoreo. Más de 500 productos para escuelas, consultorios y especialistas. Envíos a todo México.",
  keywords: [
    "material didáctico",
    "juguetes educativos",
    "mayoreo",
    "escuelas",
    "terapia ocupacional",
    "psicopedagogía",
    "México",
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${montserrat.variable} h-full antialiased`}>
      <head>
        {/* Prefetch catalogs in background so PDF opens instantly on click */}
        <link rel="prefetch" href="/pdfs/didacticosiq.pdf" as="fetch" crossOrigin="anonymous" />
        <link rel="prefetch" href="/pdfs/edudak.pdf" as="fetch" crossOrigin="anonymous" />
        <link rel="prefetch" href="https://6054acef-3ce5-4546-abe7-d3aa92677601.filesusr.com/ugd/8cbde4_ed58914008164b89a036194f4cecbff1.pdf" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
