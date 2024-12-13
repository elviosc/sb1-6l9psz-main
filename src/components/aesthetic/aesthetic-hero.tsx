import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function AestheticHero() {
  return (
    <div className="relative min-h-[60vh] flex items-center mb-16">
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <img
            src="https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5938-scaled.jpg"
            alt="Dermatologia Estética"
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
            Dermatologia
            <br />
            <span className="font-semibold">Estética</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Tratamentos personalizados com tecnologia avançada para realçar sua beleza natural
          </p>
          <Button
            size="lg"
            className="bg-white text-[#6f0d44] hover:bg-white/90 text-base md:text-lg px-8"
          >
            Agende sua Consulta
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}