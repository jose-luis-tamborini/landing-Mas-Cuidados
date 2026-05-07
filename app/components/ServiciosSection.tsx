"use client";

import { CldImage } from "next-cloudinary";
import { motion } from "framer-motion";

// Cloudinary public IDs — replace with actual uploaded asset IDs
const SERVICIO_CUIDADORA_IMG  = "mas-cuidados/servicios/cuidadora-acompanante"; // woman with elderly
const SERVICIO_PROFESIONAL_IMG = "mas-cuidados/servicios/cuidador-profesional";  // professional nurse
const SERVICIO_BENEFICIOS_IMG  = "mas-cuidados/servicios/beneficios-premium";    // family/team photo

const servicios = [
  {
    id:     "cuidadora",
    imagen: SERVICIO_CUIDADORA_IMG,
    titulo: "Cuidadora / Acompañante",
    bullets: [
      "Cobertura en domicilio y sanatorios",
      "Coordinación rápida y eficiente",
      "Cuidadoras capacitadas",
      "Supervisión de enfermería",
      "Auditoría médica",
    ],
    cta:   "Solicitar tu cuidadora",
    color: "bg-[#7B4FA6]",
  },
  {
    id:     "profesional",
    imagen: SERVICIO_PROFESIONAL_IMG,
    titulo: "Cuidador Profesional",
    bullets: [
      "Higiene y confort, asistencia diaria",
      "Administración de medicación",
      "Acompañamiento y seguimiento",
      "Apoyo en terapia y rehabilitación",
      "Seguridad y cuidado del entorno",
    ],
    cta:   "Solicitar servicio ahora",
    color: "bg-[#D63384]",
  },
  {
    id:     "beneficios",
    imagen: SERVICIO_BENEFICIOS_IMG,
    titulo: "Beneficios Premium Incluidos",
    bullets: [
      "Cuidadora o Enfermería",
      "Consultas médicas por videollamada",
      "Recetas de análisis clínicos",
      "Solicitud de análisis clínicos, digital inmediato",
      "Ecografía y rayos X a domicilio",
      "Enfermera en nuestros servicios",
    ],
    cta:   null,
    color: "bg-[#7B4FA6]",
  },
];

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  }),
};

export default function ServiciosSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F1F2E] uppercase tracking-wide">
            Nuestro servicio de{" "}
            <span className="text-[#7B4FA6]">cuidado inmediato</span>
          </h2>
          <p className="text-gray-500 mt-3 text-base">
            En{" "}
            <span className="font-semibold text-[#7B4FA6]">Más Cuidados</span>{" "}
            activamos el servicio{" "}
            <span className="font-semibold text-[#D63384]">en el día</span>, con
            cuidadores capacitados y respaldo profesional.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((s, i) => (
            <motion.div
              key={s.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg flex flex-col group hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <CldImage
                  src={s.imagen}
                  alt={s.titulo}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-6 bg-white">
                <h3 className="text-[#7B4FA6] font-bold text-lg mb-4 uppercase tracking-wide">
                  {s.titulo}
                </h3>
                <ul className="space-y-2 flex-1">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-[#D63384] mt-0.5 shrink-0">–</span>
                      {b}
                    </li>
                  ))}
                </ul>

                {s.cta && (
                  <button
                    className={`mt-6 ${s.color} text-white text-sm font-semibold rounded-full py-2.5 px-6 hover:opacity-90 transition-opacity`}
                  >
                    {s.cta}
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
