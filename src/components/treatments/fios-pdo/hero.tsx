import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function FiosPDOHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center">
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <img
            src="https://lucianamaluf.com.br/wp-content/uploads/2024/04/Fios-de-PDO-Polidioxanona-–-o-que-sao-e-como-funcionam.jpg"
            alt="Tratamento com Fios de PDO"
            className="absolute w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#6f0d44]/95 to-[#6f0d44]/80" />
        </div>
      </div>

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-light mb-6 text-white tracking-tight">
            Fios de PDO
            <br />
            <span className="font-semibold">High-Tech</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Rejuvenescimento e lifting facial não cirúrgico com tecnologia avançada.
            Resultados naturais e duradouros através da bioestimulação de colágeno.
          </p>
          <Button
            size="lg"
            className="bg-white text-[#6f0d44] hover:bg-white/90 text-base md:text-lg px-8"
            asChild
          >
            <a href="/contact/appointment">
              Agende sua Consulta
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
