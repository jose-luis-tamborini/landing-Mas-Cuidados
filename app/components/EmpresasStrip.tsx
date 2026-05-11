import { CldImage } from 'next-cloudinary';

// Cloudinary public IDs — reemplazá cada uno con el ID real cuando subas los logos
const LOGOS = [
  { id: 'logo_osde_h2bmem', alt: 'Logo OSDE' },
  { id: 'logo_swissmedical_d1rzfz', alt: 'Logo Swiss Medical' },
  { id: 'logo_galeno_a7ywjs', alt: 'Logo Galeno' },
  { id: 'logo_PAMI_axku9c', alt: 'Logo Pami' },
  { id: 'logo_federada_cwh7gv', alt: 'Logo Federada' },
  { id: 'logo_Esencial_oil23f', alt: 'Logo Esencial' },
];

export default function EmpresasStrip() {
  return (
    <section className="trust">
      <p className="trust-title">EMPRESAS QUE CONFÍAN EN NOSOTROS</p>
      <div className="trust-bar">
        {LOGOS.map((logo, i) => (
          <div key={i} className="logo-cell">
            <CldImage
              src={logo.id}
              alt={logo.alt}
              width={120}
              height={44}
              style={{ objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
