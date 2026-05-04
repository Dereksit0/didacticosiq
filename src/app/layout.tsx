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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
