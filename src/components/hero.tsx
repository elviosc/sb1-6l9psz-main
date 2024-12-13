import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <img
            src="https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5938-scaled.jpg"
            alt="Dra. Luciana Maluf em sua clínica"
            className="absolute w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#6f0d44]/60 to-[#6f0d44]/40" />
        </div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 w-1 h-32 bg-white/30" />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 text-white tracking-tight">
              Dermatologia
              <br />
              <span className="font-semibold">Especializada</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl mb-8 text-white/90 font-light leading-relaxed"
          >
            Cuidados personalizados para sua pele com tecnologia avançada e resultados comprovados
          </motion.p>

          {/* Stats Cards - Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4 mb-8 md:hidden"
          >
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20">
              <div className="text-3xl font-light text-white mb-2">20+</div>
              <div className="text-white/80 text-sm">Anos de Experiência</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20">
              <div className="text-3xl font-light text-white mb-2">7k+</div>
              <div className="text-white/80 text-sm">Pacientes Atendidos</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-white text-[#6f0d44] hover:bg-white/90 hover:text-[#6f0d44] text-base md:text-lg px-6 md:px-8 transition-all duration-300 group w-full sm:w-auto"
              asChild
            >
              <a href="/contact/appointment">
                Agende sua Consulta
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-[#6f0d44] text-white hover:bg-[#8b1155] border-none text-base md:text-lg px-6 md:px-8 transition-all duration-300 w-full sm:w-auto"
              asChild
            >
              <a href="/treatments">
                Conheça os Tratamentos
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Stats Cards - Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden md:flex absolute bottom-8 md:bottom-32 right-4 lg:right-32 flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <div className="bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-lg border border-white/20 w-48">
            <div className="text-3xl md:text-4xl font-light text-white mb-2">20+</div>
            <div className="text-white/80 text-sm">Anos de Experiência</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-lg border border-white/20 w-48">
            <div className="text-3xl md:text-4xl font-light text-white mb-2">7k+</div>
            <div className="text-white/80 text-sm">Pacientes Atendidos</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
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