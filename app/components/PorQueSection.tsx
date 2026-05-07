"use client";

import { motion } from "framer-motion";

const features = [
  {
    id:      "rapida",
    emoji:   "⚡",
    titulo:  "Respuesta Rápida",
    desc:    "Activamos el servicio el mismo día. Sin demoras.",
  },
  {
    id:      "profesional",
    emoji:   "👩‍⚕️",
    titulo:  "Equipo Profesional",
    desc:    "Cuidadoras capacitadas, supervisadas por enfermería y médicos.",
  },
  {
    id:      "guardia",
    emoji:   "🕐",
    titulo:  "Guardia Telefónica 24/7",
    desc:    "Estamos disponibles las 24 hs, los 365 días del año.",
  },
  {
    id:      "atencion",
    emoji:   "❤️",
    titulo:  "Atención Personalizada",
    desc:    "Cada paciente es único. Adaptamos el servicio a cada familia.",
  },
];

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
};

export default function PorQueSection() {
  return (
    <section className="bg-[#E8D5F5] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          className="text-center text-2xl sm:text-3xl font-extrabold text-[#1F1F2E] uppercase tracking-wide mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          ¿Por qué elegir{" "}
          <span className="text-[#7B4FA6]">Más Cuidados</span>?
        </motion.h2>

        {/* Feature grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((f) => (
            <motion.div
              key={f.id}
              variants={itemVariants}
              className="flex flex-col items-center text-center gap-3"
            >
              {/* Icon circle */}
              <div className="w-16 h-16 rounded-full bg-[#7B4FA6] flex items-center justify-center shadow-md text-2xl">
                {f.emoji}
              </div>
              <h3 className="font-bold text-[#1F1F2E] text-sm sm:text-base">
                {f.titulo}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-snug">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
