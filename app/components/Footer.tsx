"use client";

import { CldImage } from "next-cloudinary";

// Cloudinary public ID — replace with actual uploaded asset ID
const LOGO_DARK = "mas-cuidados/logo-dark"; // colored MásCuidados logo for light background

export default function Footer() {
  return (
    <footer className="bg-[#1F1F2E] text-white pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <CldImage
                src={LOGO_DARK}
                alt="MásCuidados"
                width={40}
                height={40}
                className="rounded-md"
              />
              <span className="font-bold text-lg">
                <span className="text-white">Más</span>
                <span className="text-[#D63384]">Cuidados</span>
              </span>
            </div>
            <p className="text-white/60 text-xs leading-relaxed">
              Servicio profesional de cuidado domiciliario para adultos mayores
              y personas con necesidades especiales.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#7B4FA6] flex items-center justify-center text-sm transition-colors"
              >
                📷
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#7B4FA6] flex items-center justify-center text-sm transition-colors"
              >
                📘
              </a>
              <a
                href="https://wa.me/5491100000000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#25D366] flex items-center justify-center text-sm transition-colors"
              >
                💬
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-white/70 mb-4">
              Servicios
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Cuidadora a domicilio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cuidadora en sanatorio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Acompañante terapéutico</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Enfermería</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Beneficios premium</a></li>
            </ul>
          </div>

          {/* Cobertura */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-white/70 mb-4">
              Cobertura
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>CABA</li>
              <li>Rosario</li>
              <li>Córdoba</li>
              <li>Santa Fe</li>
              <li>Paraná</li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-white/70 mb-4">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2">
                <span>📞</span>
                <a href="tel:+5491100000000" className="hover:text-white transition-colors">
                  +54 9 11 0000-0000
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>📧</span>
                <a href="mailto:info@mascuidados.com.ar" className="hover:text-white transition-colors">
                  info@mascuidados.com.ar
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Buenos Aires, Argentina</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} MásCuidados. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white/70 transition-colors">Política de privacidad</a>
            <a href="#" className="hover:text-white/70 transition-colors">Términos y condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
