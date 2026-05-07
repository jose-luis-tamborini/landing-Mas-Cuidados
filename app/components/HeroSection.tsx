"use client";

import { CldImage } from "next-cloudinary";
import { motion } from "framer-motion";
import { submitContactForm } from "@/app/actions";

// Cloudinary public IDs — replace with actual uploaded asset IDs
const HERO_BG_IMAGE  = "mas-cuidados/hero-background";   // background photo (elderly care)
const LOGO_IMAGE     = "mas-cuidados/logo-white";         // white MásCuidados logo

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <CldImage
          src={HERO_BG_IMAGE}
          alt="Fondo cuidadoras"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a0a2e]/85 via-[#3d1e6e]/70 to-[#3d1e6e]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left — branding & headline */}
          <motion.div
            className="flex-1 text-white"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {/* Logo */}
            <motion.div variants={fadeUp} className="mb-6">
              <div className="flex items-center gap-3">
                <CldImage
                  src={LOGO_IMAGE}
                  alt="MásCuidados logo"
                  width={48}
                  height={48}
                  className="rounded-md"
                />
                <span className="text-2xl font-bold tracking-wide">
                  <span className="text-white">Más</span>
                  <span className="text-[#D63384]">Cuidados</span>
                </span>
              </div>
              <p className="text-xs text-white/60 mt-1 pl-1 uppercase tracking-widest">
                cuando más nos necesitas
              </p>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4"
            >
              Cuidadoras y acompañantes{" "}
              <span className="text-violet-300">capacitados</span> para{" "}
              <span className="text-[#D63384]">Sanatorios</span> y{" "}
              <span className="text-[#D63384]">Domicilios</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-white/80 text-base sm:text-lg leading-relaxed max-w-md"
            >
              Atención 24 hs, respuesta inmediata y la experiencia de un equipo
              que acompaña con compromiso desde 2010.
            </motion.p>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            className="w-full lg:w-[420px] shrink-0"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <div className="bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-7">
              <h2 className="text-[#7B4FA6] font-bold text-xl mb-1 text-center">
                Solicitar{" "}
                <span className="text-[#D63384]">una cuidadora</span>
              </h2>
              <p className="text-gray-400 text-xs text-center mb-5">
                Completá el formulario y te asesoramos
              </p>

              <form action={submitContactForm} className="flex flex-col gap-3">
                <input
                  name="nombre"
                  type="text"
                  required
                  placeholder="Tu nombre completo"
                  className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7B4FA6]/40 transition"
                />
                <input
                  name="telefono"
                  type="tel"
                  required
                  placeholder="Teléfono / WhatsApp"
                  className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7B4FA6]/40 transition"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email (opcional)"
                  className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7B4FA6]/40 transition"
                />
                <input
                  name="localidad"
                  type="text"
                  required
                  placeholder="Ciudad / Localidad"
                  className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7B4FA6]/40 transition"
                />
                <select
                  name="servicio"
                  required
                  defaultValue=""
                  className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7B4FA6]/40 transition"
                >
                  <option value="" disabled>
                    ¿Qué servicio necesitás?
                  </option>
                  <option value="domicilio">Cuidadora a domicilio</option>
                  <option value="sanatorio">Cuidadora en sanatorio</option>
                  <option value="acompanante">Acompañante terapéutico</option>
                  <option value="enfermeria">Enfermería</option>
                </select>

                <button
                  type="submit"
                  className="mt-1 bg-[#D63384] hover:bg-[#b02070] text-white font-semibold rounded-lg py-3 text-sm transition-colors duration-200 shadow-md hover:shadow-lg active:scale-[0.98]"
                >
                  Quiero que me contacten
                </button>
              </form>

              <p className="text-gray-400 text-[10px] text-center mt-3 leading-snug">
                Al enviar aceptás nuestros términos y política de privacidad.
                Tu información es confidencial.
              </p>

              {/* Trust badges */}
              <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-gray-100">
                <span className="text-[10px] text-gray-400 flex items-center gap-1">
                  🔒 Datos seguros
                </span>
                <span className="text-[10px] text-gray-400 flex items-center gap-1">
                  ⚡ Respuesta inmediata
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
