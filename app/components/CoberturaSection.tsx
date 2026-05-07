"use client";

import { CldImage } from "next-cloudinary";
import { motion } from "framer-motion";

// Cloudinary public ID — replace with actual uploaded asset ID
const MAPA_ARGENTINA = "mas-cuidados/mapa-argentina"; // SVG/PNG map of Argentina with highlighted provinces

const ciudades = ["CABA", "Rosario", "Córdoba", "Santa Fe", "Paraná"];

export default function CoberturaSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Text side */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F1F2E] uppercase tracking-wide mb-2">
              Estamos en
            </h2>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
              {ciudades.map((c) => (
                <span
                  key={c}
                  className="bg-[#7B4FA6] text-white text-sm font-semibold px-4 py-1.5 rounded-full"
                >
                  {c}
                </span>
              ))}
            </div>

            <p className="text-gray-600 text-base leading-relaxed mb-4">
              ¿Necesitás un cuidador hoy?
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm mx-auto lg:mx-0">
              Completá el formulario y te ayudamos a coordinar el cuidado que
              necesitás, lo antes posible.
            </p>

            <motion.a
              href="#hero"
              className="inline-block bg-[#D63384] hover:bg-[#b02070] text-white font-bold rounded-full py-3 px-8 text-sm transition-colors duration-200 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Quiero un cuidador ahora
            </motion.a>
          </motion.div>

          {/* Map */}
          <motion.div
            className="w-64 sm:w-80 lg:w-96 shrink-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <CldImage
              src={MAPA_ARGENTINA}
              alt="Cobertura en Argentina"
              width={400}
              height={580}
              className="object-contain w-full h-auto drop-shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
