import { CldImage } from 'next-cloudinary';

// Cloudinary public ID — full logo (icon + "Más Cuidados" text)
const FOOTER_LOGO = 'logo_footer_bzcimx';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="foot-inner">
          {/* Left — logo */}
          <div className="foot-logo">
            <CldImage
              src={FOOTER_LOGO}
              alt="Más Cuidados"
              width={140}
              height={140}
              style={{ objectFit: 'contain', height: 'auto' }}
            />
          </div>

          {/* Right — 3 rows */}
          <div className="foot-info">
            <div className="foot-tag">
              Servicio profesional de cuidado en Sanatorios, Hospitales y
              Domicilio para adultos mayores y pacientes con necesidades
              especiales.
            </div>

            <div className="foot-contact">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>CABA · ROSARIO · CÓRDOBA · SANTA FE · PARANÁ</span>
            </div>

            <div className="foot-contact">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <a href="tel:08003452260">0800 345 2260</a>
            </div>

            <div className="foot-copy">
              © {new Date().getFullYear()} Más Cuidados — Todos los derechos
              reservados.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
