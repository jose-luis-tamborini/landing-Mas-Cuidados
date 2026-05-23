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
