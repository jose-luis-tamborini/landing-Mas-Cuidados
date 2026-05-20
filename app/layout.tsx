import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
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
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P37TCDNK');`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P37TCDNK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Script
          id="asisteclick-button-fix"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function() {
  function fix() {
    var btn = document.getElementById('asisteclick_button_css');
    if (!btn) return false;
    btn.style.setProperty('display', 'inline-flex', 'important');
    btn.style.setProperty('align-items', 'center', 'important');
    btn.style.setProperty('gap', '8px', 'important');
    return true;
  }
  if (!fix()) {
    var obs = new MutationObserver(function(_, o) { if (fix()) o.disconnect(); });
    obs.observe(document.body, { childList: true, subtree: true });
  }
})();`,
          }}
        />
      </body>
    </html>
  );
}
