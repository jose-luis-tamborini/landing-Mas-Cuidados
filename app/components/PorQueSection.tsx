import { CldImage } from 'next-cloudinary';

// Cloudinary public IDs — reemplazá cada uno con el ID real cuando subas los íconos
const ICONS = [
  {
    id: 'rta_rapida_o3yttp',
    alt: 'Respuesta Rápida',
    line1: 'Respuesta',
    line2: 'Rápida',
    desc: 'Activamos el servicio en el menor tiempo posible.',
  },
  {
    id: 'equipo_prof_zxmvi9',
    alt: 'Equipo Profesional',
    line1: 'Equipo',
    line2: 'Profesional',
    desc: 'Atención profesional pensada para cada necesidad.',
  },
  {
    id: 'guardia_tel_g5f9z4',
    alt: 'Guardia Telefónica 24/7',
    line1: 'Guardia',
    line2: 'Telefónica 24/7',
    desc: 'Disponibilidad completa en todo momento.',
  },
  {
    id: 'atencion_pers_llc267',
    alt: 'Atención Personalizada',
    line1: 'Atención',
    line2: 'Personalizada',
    desc: 'Planes adaptados a cada paciente y situación.',
  },
];

export default function PorQueSection() {
  return (
    <>
      {/* ---- Por qué elegirnos ---- */}
      <section className="why" id="porque">
        <div className="reveal">
          <h2 className="section-title upper">¿POR QUÉ ELEGIR MÁS CUIDADOS?</h2>
        </div>

        <div className="why-grid">
          {ICONS.map((item, i) => (
            <div key={i} className="why-card reveal">
              <div className="why-icon">
                <CldImage
                  src={item.id}
                  alt={item.alt}
                  width={40}
                  height={40}
                  style={{ objectFit: 'contain', height: 'auto' }}
                />
              </div>
              <p className="why-title">
                {item.line1}
                <br />
                {item.line2}
              </p>
              <p className="why-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---- CABA coverage banner ---- */}
      <section className="caba-section">
        <div className="caba-inner">
          <div className="caba-text reveal">
            <h3 className="caba-locations">
              ESTAMOS EN CABA, ROSARIO, CÓRDOBA, SANTA FE, PARANÁ
            </h3>
            <hr className="caba-divider" />
            <p className="caba-q">¿NECESITÁS UN CUIDADOR HOY?</p>
            <p className="caba-p">
              Completá el formulario y te ayudamos a coordinar el cuidado que
              necesitás, lo antes posible.
            </p>
            <a href="#contacto" className="btn-pink caba-btn">
              QUIERO UN CUIDADOR AHORA
            </a>
          </div>

          <div className="caba-map">
            <CldImage
              src="mapa_arg_xafnsr"
              alt="Mapa de cobertura"
              width={423}
              height={555}
              priority
              style={{ width: '444px', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
