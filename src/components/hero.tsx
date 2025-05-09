import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { VideoHero } from "./video-hero";

export function Hero() {
  return (
    <VideoHero>
      <div className="container mx-auto px-4 flex items-center min-h-screen">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 text-white tracking-tight"
          >
            Dermatologia<br />
            <span className="font-semibold">Especializada</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl mb-8 text-white/90 font-light leading-relaxed"
          >
            Cuidados personalizados para sua pele com tecnologia avançada e resultados comprovados
          </motion.p>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4 mb-8"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
              <div className="text-3xl font-semibold text-white mb-2">20+</div>
              <div className="text-sm text-white/80">Anos de Experiência</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
              <div className="text-3xl font-semibold text-white mb-2">7k+</div>
              <div className="text-sm text-white/80">Pacientes Atendidos</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-[#6f0d44] hover:bg-white/90 hover:text-[#6f0d44] rounded-full px-8"
            >
              <a href="/contact/appointment">
                Agende sua Consulta
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </VideoHero>
  );
}