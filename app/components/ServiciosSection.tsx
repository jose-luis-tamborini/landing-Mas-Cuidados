import { CldImage } from 'next-cloudinary';

// Cloudinary public IDs — service card photos (~4:3 ratio, care scenes)
const IMG_CUIDADORA = 'acompañante_nmu1wa'; // cuidadora con adulto mayor en domicilio
const IMG_PROFESIONAL = 'cuidador_uijbfd'; // cuidador profesional en sanatorio
const IMG_PREMIUM = 'telefonista_pxqwgw'; // equipo de cuidado integral

export default function ServiciosSection() {
  return (
    <section className="services" id="servicios">
      <div className="services-head reveal">
        <h2 className="section-title upper">
          NUESTRO SERVICIO DE CUIDADO INMEDIATO
        </h2>
        <p className="section-sub">
          En <strong>Más Cuidados</strong> activamos el servicio{' '}
          <strong>en el día</strong>, con cuidadores capacitados y respaldo
          profesional.
        </p>
      </div>

      <div className="service-list">
        {/* Card 1 — texto izquierda, imagen derecha */}
        <article className="service reverse reveal">
          <div className="service-img">
            <CldImage
              src={IMG_CUIDADORA}
              alt="Cuidadora acompañando a adulto mayor"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
          <div className="service-body">
            <h3
              className="service-title"
              style={{ textTransform: 'uppercase', color: '#4A007D' }}
            >
              Cuidadora / Acompañante
            </h3>
            <ul>
              <li>Cobertura en domicilio y sanatorios</li>
              <li>Coordinación rápida y eficiente</li>
              <li>Cuidadoras capacitadas</li>
              <li>Supervisión de enfermería</li>
              <li>Auditorías médicas</li>
            </ul>
            <a href="#contacto" className="btn-pink">
              SOLICITÁ TU CUIDADORA
            </a>
          </div>
        </article>

        {/* Card 2 — texto derecha, imagen izquierda */}
        <article className="service reveal">
          <div className="service-img">
            <CldImage
              src={IMG_PROFESIONAL}
              alt="Cuidador profesional en sanatorio"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
          <div className="service-body">
            <h3
              className="service-title"
              style={{ textTransform: 'uppercase', color: '#4A007D' }}
            >
              Cuidador/a profesional
            </h3>
            <ul>
              <li>Higiene y confort, asistencia diaria</li>
              <li>Administración de medicación</li>
              <li>Acompañamiento y seguimiento</li>
              <li>Apoyo en terapias y rehabilitación</li>
              <li>Seguridad y cuidado del entorno</li>
            </ul>
            <a href="#contacto" className="btn-pink">
              SOLICITAR SERVICIO AHORA
            </a>
          </div>
        </article>

        {/* Card 3 — texto izquierda, imagen derecha */}
        <article className="service reverse reveal">
          <div className="service-img">
            <CldImage
              src={IMG_PREMIUM}
              alt="Beneficios premium de Más Cuidados"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
          <div className="service-body">
            <h3
              className="service-title"
              style={{ textTransform: 'uppercase', color: '#4A007D' }}
            >
              <span style={{ fontWeight: 400 }}>Beneficios </span>
              <span style={{ fontWeight: 800 }}>Premium Incluidos</span>
            </h3>
            <ul>
              <li>Cuidador/a o Enfermero/a</li>
              <li>Consultas médicas por videollamada</li>
              <li>Recetas digitales inmediatas</li>
              <li>Solicitud de análisis clínicos digital inmediato</li>
              <li>Ecografías y rayos X a domicilio</li>
              <li>Enfermería en nuestras sedes</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
