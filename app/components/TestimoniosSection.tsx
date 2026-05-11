import { CldImage } from 'next-cloudinary';

// Cloudinary public ID — background photo for the testimonios section
const TEST_BG = 'xp_bg_ejuakv';

const testimonios = [
  {
    quote:
      'En menos de dos horas ya teníamos una profesional con mi mamá en el sanatorio. La atención y el trato fueron excelentes.',
    name: 'FAMILIA RODRÍGUEZ',
    loc: 'ROSARIO',
  },
  {
    quote:
      'La plataforma digital me permite ver los informes desde Buenos Aires mientras mi padre está en Córdoba. Una tranquilidad enorme.',
    name: 'MARTÍN G.',
    loc: 'BUENOS AIRES',
  },
  {
    quote:
      '16 años acompañando familias como la mía. La supervisión permanente y la rapidez de respuesta marcan la diferencia.',
    name: 'FAMILIA PEREYRA',
    loc: 'CÓRDOBA',
  },
];

export default function TestimoniosSection() {
  return (
    <section className="testimonials">
      {/* Background photo */}
      <div className="test-bg">
        <CldImage
          src={TEST_BG}
          alt=""
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>

      <div className="test-content">
        <div className="test-head reveal">
          <h2>LO QUE DICEN LAS FAMILIAS</h2>
          <p>
            Experiencias reales de quienes confiaron en{' '}
            <strong>Más Cuidados</strong>
          </p>
        </div>

        <div className="test-cards">
          {testimonios.map((t, i) => (
            <div key={i} className="test-card reveal">
              <p className="test-quote">&ldquo;{t.quote}&rdquo;</p>
              <p className="test-meta">
                <span className="test-name">{t.name}</span>
                <span className="test-sep">|</span>
                <span className="test-loc">{t.loc}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
