import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

export function FacialHarmonizationArticlePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-[#fff5f8] to-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-[#6f0d44] mb-6">
                Harmonização Facial
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Descubra como a harmonização facial pode realçar sua beleza natural de forma 
                personalizada e equilibrada, respeitando suas características únicas.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#6f0d44] rounded-lg transform rotate-3" />
                <img
                  src="https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5927-scaled.jpg"
                  alt="Harmonização Facial"
                  className="relative rounded-lg shadow-xl transform -rotate-3 transition-transform hover:rotate-0 duration-500 w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
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
                O que é Harmonização Facial?
              </h2>
              <div className="prose prose-lg">
                <p className="text-gray-600 leading-relaxed">
                  A harmonização facial é um conjunto de procedimentos estéticos que visam 
                  equilibrar e harmonizar os traços do rosto, proporcionando resultados 
                  naturais e personalizados para cada paciente.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Através de técnicas avançadas e produtos de alta qualidade, é possível 
                  realçar a beleza natural, corrigir assimetrias e melhorar proporções 
                  faciais de forma segura e eficaz.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-[#6f0d44] mb-2">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">Duração</span>
                  </div>
                  <p className="text-gray-600">60 a 120 minutos</p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-[#6f0d44] mb-2">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">Recuperação</span>
                  </div>
                  <p className="text-gray-600">3 a 7 dias</p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-[#6f0d44] mb-2">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">Resultados</span>
                  </div>
                  <p className="text-gray-600">12 a 24 meses</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-[#6f0d44]">
                Principais Benefícios
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-[#6f0d44] mt-1" />
                  <span className="text-gray-600">Correção de assimetrias faciais</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-[#6f0d44] mt-1" />
                  <span className="text-gray-600">Definição do contorno facial</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-[#6f0d44] mt-1" />
                  <span className="text-gray-600">Preenchimento de áreas com perda de volume</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-[#6f0d44] mt-1" />
                  <span className="text-gray-600">Suavização de linhas de expressão</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-[#6f0d44] mt-1" />
                  <span className="text-gray-600">Resultados naturais e duradouros</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-24 bg-gradient-to-b from-[#fff5f8] to-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-[#6f0d44] mb-6">
              Agende sua Avaliação
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Venha descobrir como a harmonização facial pode realçar sua beleza natural. 
              Agende uma consulta personalizada hoje mesmo.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#6f0d44] hover:bg-[#6f0d44]/90"
            >
              <a href="/contact/appointment">
                Agendar Agora
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default FacialHarmonizationArticlePage;
