"use client";

import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";

// Cloudinary public IDs — replace with actual uploaded asset IDs
const LOGOS: { id: string; alt: string; publicId: string }[] = [
  { id: "sivos",      alt: "SIVOS",        publicId: "mas-cuidados/logos/sivos"      },
  { id: "imedical",   alt: "IMED MEDICAL", publicId: "mas-cuidados/logos/imedical"   },
  { id: "galeno",     alt: "GALENO",       publicId: "mas-cuidados/logos/galeno"     },
  { id: "pami",       alt: "PAMI",         publicId: "mas-cuidados/logos/pami"       },
  { id: "federada",   alt: "Federada",     publicId: "mas-cuidados/logos/federada"   },
  { id: "fiscal",     alt: "Fiscal",       publicId: "mas-cuidados/logos/fiscal"     },
];

export default function EmpresasStrip() {
  return (
    <section className="bg-white py-10 border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-center text-sm font-bold tracking-widest text-gray-500 uppercase mb-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Empresas que confían en nosotros
        </motion.h2>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, staggerChildren: 0.08 }}
        >
          {LOGOS.map((logo, i) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            >
              <CldImage
                src={logo.publicId}
                alt={logo.alt}
                width={100}
                height={40}
                className="object-contain h-10 w-auto"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
