import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Clock, CheckCircle2, XCircle } from "lucide-react";
import { ToxinaHero } from "@/components/treatments/toxina/hero";
import { ToxinaAreas } from "@/components/treatments/toxina/areas";
import { ToxinaCare } from "@/components/treatments/toxina/care";
import { ToxinaMyths } from "@/components/treatments/toxina/myths";
import { ToxinaGallery } from "@/components/treatments/toxina/gallery";
import { ToxinaFAQ } from "@/components/treatments/toxina/faq";

export function ToxinaBotulinicaPage() {
  return (
    <>
      <ToxinaHero />

      {/* What is it and How it Works */}
      <section className="py-24 bg-gradient-to-b from-white to-[#fff5f8]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-[#6f0d44]">
                O que é Toxina Botulínica?
              </h2>
              <div className="prose prose-lg">
                <p className="text-gray-600 leading-relaxed">
                  A toxina botulínica é uma proteína purificada que age relaxando 
                  temporariamente os músculos responsáveis pelas rugas dinâmicas. 
                  É um dos procedimentos mais seguros e eficazes da medicina estética 
                  moderna, com resultados comprovados cientificamente.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  O tratamento é minimamente invasivo e realizado em consultório, 
                  com técnica precisa que preserva sua expressividade natural enquanto 
                  suaviza as linhas de expressão indesejadas.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-[#6f0d44] mb-2">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">Duração</span>
                  </div>
                  <p className="text-gray-600">30 a 45 minutos</p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-[#6f0d44] mb-2">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">Recuperação</span>
                  </div>
                  <p className="text-gray-600">24 a 48 horas</p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-[#6f0d44] mb-2">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">Resultados</span>
                  </div>
                  <p className="text-gray-600">4 a 6 meses</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#6f0d44] rounded-lg transform rotate-3" />
                <img
                  src="https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5927-scaled.jpg"
                  alt="Aplicação de Toxina Botulínica"
                  className="relative rounded-lg shadow-xl transform -rotate-3 transition-transform hover:rotate-0 duration-500 w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Areas */}
      <ToxinaAreas />

      {/* Pre and Post Care */}
      <ToxinaCare />

      {/* Myths and Facts */}
      <ToxinaMyths />

      {/* Results Gallery */}
      <ToxinaGallery />

      {/* FAQ */}
      <ToxinaFAQ />

      {/* CTA Section */}
      <section className="py-24 bg-[#6f0d44]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronta para Começar?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Agende uma consulta e descubra como a toxina botulínica pode 
              ajudar você a alcançar resultados naturais e duradouros.
            </p>
            <Button
              size="lg"
              className="bg-white text-[#6f0d44] hover:bg-white/90 text-lg px-8"
            >
              Agende sua Avaliação
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}