import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Más Cuidados – Cuidadoras y Acompañantes para Sanatorios y Domicilios",
  description:
    "Atención 24 hs, respuesta inmediata y la experiencia de un equipo que acompaña con compromiso desde 2010. Cuidadoras capacitadas en CABA, Rosario, Córdoba, Santa Fe y Paraná.",
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
