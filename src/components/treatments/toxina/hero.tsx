import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight } from "lucide-react";

export function ToxinaHero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      <div className="absolute inset-0">
        <div className="relative h-full">
          <img
            src="https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5938-scaled.jpg"
            alt="Tratamento com Toxina Botulínica"
            className="absolute w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#6f0d44] via-[#6f0d44]/90 to-transparent" />
        </div>
      </div>

      <div className="relative container mx-auto px-4 h-full">
        <div className="flex flex-col justify-center h-full min-h-[85vh] max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 text-white">
              <span className="text-sm">Tratamento Premium</span>
              <ArrowRight className="h-4 w-4" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-light text-white tracking-tight">
              Toxina
              <br />
              <span className="font-semibold">Botulínica</span>
            </h1>

            <p className="text-xl text-white/90 max-w-xl leading-relaxed">
              Suavize linhas de expressão e previna o envelhecimento com 
              resultados naturais e tecnologia de ponta.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button
                size="lg"
                className="bg-white text-[#6f0d44] hover:bg-white/90 text-lg h-14 px-8"
                asChild
              >
                <a href="/contact/appointment">
                  Agende sua Consulta
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg h-14 px-8"
                asChild
              >
                <a href="#saiba-mais">
                  Saiba Mais
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <div className="text-2xl font-light text-white mb-1">30-45</div>
                <div className="text-white/80 text-sm">Minutos de Procedimento</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <div className="text-2xl font-light text-white mb-1">4-6</div>
                <div className="text-white/80 text-sm">Meses de Duração</div>
              </div>
              <div className="hidden sm:block bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <div className="text-2xl font-light text-white mb-1">+15</div>
                <div className="text-white/80 text-sm">Anos de Experiência</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex justify-center p-2">
          <motion.div
            className="w-1 h-3 bg-white/50 rounded-full"
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}