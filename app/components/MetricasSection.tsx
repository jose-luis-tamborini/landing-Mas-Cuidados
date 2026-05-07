"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const metricas = [
  { id: "pacientes",  valor: 5000,  sufijo: "+",   label: "Nuestras familias" },
  { id: "anos",       valor: 14,    sufijo: " años", label: "Nuestra historia" },
  { id: "controles",  valor: 1000,  sufijo: "+",   label: "Controles en gestión" },
  { id: "afiliados",  valor: 1700,  sufijo: "+",   label: "+1700 afiliados activos" },
];

function AnimatedNumber({ value, sufijo }: { value: number; sufijo: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString("es-AR"));
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          animate(count, value, { duration: 1.8, ease: "easeOut" });
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [count, value]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {sufijo}
    </span>
  );
}

export default function MetricasSection() {
  return (
    <section className="bg-[#E8D5F5] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-center text-2xl sm:text-3xl font-extrabold text-[#1F1F2E] uppercase tracking-wide mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Desde el año{" "}
          <span className="text-[#7B4FA6]">2010</span> cuidando familias
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          {metricas.map((m, i) => (
            <motion.div
              key={m.id}
              className="flex flex-col items-center text-center bg-white rounded-2xl py-8 px-4 shadow-sm"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-[#7B4FA6] leading-none mb-2">
                <AnimatedNumber value={m.valor} sufijo={m.sufijo} />
              </span>
              <span className="text-gray-500 text-xs sm:text-sm font-medium text-center leading-snug">
                {m.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
