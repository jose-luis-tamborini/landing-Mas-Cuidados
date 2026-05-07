"use client";

import { CldImage } from "next-cloudinary";
import { motion } from "framer-motion";

// Cloudinary public ID — replace with actual uploaded asset ID
const FAMILIA_IMG = "mas-cuidados/testimonios/familia-principal"; // happy family on sofa

const testimonios = [
  {
    id:     "testimonio-1",
    texto:
      "Son más de los que nos prometieron. Excelente predisposición y calidad humana en cada cuidadora que nos enviaron.",
    autor:  "Emilia Rodríguez",
    ciudad: "Buenos Aires",
  },
  {
    id:     "testimonio-2",
    texto:
      "La plataforma digital facilita muchísimo la comunicación. Sentimos un seguimiento permanente de nuestro familiar.",
    autor:  "Martín C.",
    ciudad: "Córdoba",
  },
  {
    id:     "testimonio-3",
    texto:
      "Gracias a su equipo de cuidadores mi mamá recibe atención permanente. Son verdaderos profesionales.",
    autor:  "Familia Tettini",
    ciudad: "Córdoba",
  },
];

export default function TestimoniosSection() {
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
            Lo que dicen las{" "}
            <span className="text-[#7B4FA6]">familias</span>
          </h2>
          <p className="text-gray-500 mt-2 text-base">
            Experiencias reales de quienes confiaron en Más Cuidados
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Testimonios */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {testimonios.map((t, i) => (
              <motion.div
                key={t.id}
                className="bg-[#F3E8FF] rounded-2xl p-6 flex flex-col gap-4 shadow-sm"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                {/* Stars */}
                <div className="flex gap-0.5 text-[#7B4FA6] text-base">
                  {"★★★★★".split("").map((s, j) => (
                    <span key={j}>{s}</span>
                  ))}
                </div>
                {/* Quote */}
                <p className="text-gray-700 text-sm leading-relaxed italic">
                  &ldquo;{t.texto}&rdquo;
                </p>
                {/* Author */}
                <div className="mt-auto">
                  <p className="font-bold text-[#1F1F2E] text-sm">{t.autor}</p>
                  <p className="text-gray-400 text-xs">{t.ciudad}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Family photo */}
          <motion.div
            className="w-full lg:w-80 shrink-0 rounded-2xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CldImage
              src={FAMILIA_IMG}
              alt="Familia feliz en MásCuidados"
              width={400}
              height={320}
              className="object-cover w-full h-64 lg:h-80"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
