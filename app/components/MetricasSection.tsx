import { CldImage } from 'next-cloudinary';

const CARDS = [
  {
    icon: 'sedes_r0xj3k',
    line1: 'NUESTRAS',
    line2: 'SEDES',
    alt: 'Nuestras sedes',
    desc: 'Buenos Aires, Rosario, Córdoba, Santa Fe y Paraná',
  },
  {
    icon: 'auditoria_bxp4jx',
    line1: 'AUDITORÍA',
    line2: 'MÉDICA',
    alt: 'Auditoría médica',
    desc: 'Supervisión profesional del servicio',
  },
  {
    icon: 'ctrol_gest_i4br0b',
    line1: 'CONTROL DE',
    line2: 'GESTIÓN',
    alt: 'Control de gestión',
    desc: 'Supervisión para asegurar calidad y cumplimiento',
  },
  {
    icon: 'afiliados_ukncjb',
    line1: '+11.000 AFILIADOS',
    line2: 'ACTIVOS',
    alt: '+11.000 afiliados activos',
    desc: 'Miles de familias confían en nuestro servicio',
  },
];

export default function MetricasSection() {
  return (
    <section className="stats">
      <div className="reveal">
        <h2 className="section-title upper">
          DESDE EL AÑO 2010 CUIDANDO FAMILIAS
        </h2>
      </div>

      <div className="stats-grid">
        {CARDS.map((card, i) => (
          <div key={i} className="stat-card reveal">
            <div className="stat-icon">
              <CldImage
                src={card.icon}
                alt={card.alt}
                width={36}
                height={36}
                style={{ objectFit: 'contain', height: 'auto' }}
              />
            </div>
            <p className="stat-title">
              {card.line1}
              <br />
              {card.line2}
            </p>
            <p className="stat-desc">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
