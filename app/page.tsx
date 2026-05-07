import HeroSection        from "@/app/components/HeroSection";
import EmpresasStrip      from "@/app/components/EmpresasStrip";
import ServiciosSection   from "@/app/components/ServiciosSection";
import PorQueSection      from "@/app/components/PorQueSection";
import CoberturaSection   from "@/app/components/CoberturaSection";
import MetricasSection    from "@/app/components/MetricasSection";
import TestimoniosSection from "@/app/components/TestimoniosSection";
import Footer             from "@/app/components/Footer";

export default function HomePage() {
  return (
    <main id="hero">
      <HeroSection />
      <EmpresasStrip />
      <ServiciosSection />
      <PorQueSection />
      <CoberturaSection />
      <MetricasSection />
      <TestimoniosSection />
      <Footer />
    </main>
  );
}
