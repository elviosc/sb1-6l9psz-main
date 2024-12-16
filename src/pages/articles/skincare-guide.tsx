import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

export function SkincareGuideArticlePage() {
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
                Guia de Skincare
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Descubra os segredos para uma pele saudável e radiante com nosso guia 
                completo de cuidados com a pele, desenvolvido por especialistas.
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
                  alt="Guia de Skincare"
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
                A Importância do Skincare
              </h2>
              <div className="prose prose-lg">
                <p className="text-gray-600 leading-relaxed">
                  Uma rotina de skincare bem estruturada é fundamental para manter a 
                  saúde e a beleza da pele. Cada passo do seu ritual diário contribui 
                  para proteger, nutrir e regenerar sua pele.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Com os produtos e técnicas adequados, é possível prevenir o envelhecimento 
                  precoce, manter o equilíbrio da pele e tratar diversas condições 
                  dermatológicas de forma eficaz.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-[#6f0d44] mb-2">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">Rotina Básica</span>
                  </div>
                  <p className="text-gray-600">10 minutos</p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-[#6f0d44] mb-2">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">Rotina Completa</span>
                  </div>
                  <p className="text-gray-600">20 minutos</p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-[#6f0d44] mb-2">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">Resultados</span>
                  </div>
                  <p className="text-gray-600">4 a 8 semanas</p>
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
                Passos Essenciais
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-[#6f0d44] mt-1" />
                  <span className="text-gray-600">Limpeza profunda e adequada ao tipo de pele</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-[#6f0d44] mt-1" />
                  <span className="text-gray-600">Tonificação e equilíbrio do pH</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-[#6f0d44] mt-1" />
                  <span className="text-gray-600">Hidratação específica para cada necessidade</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-[#6f0d44] mt-1" />
                  <span className="text-gray-600">Proteção solar diária</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-[#6f0d44] mt-1" />
                  <span className="text-gray-600">Tratamentos específicos e máscaras</span>
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
              Agende uma Avaliação
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Descubra qual o melhor protocolo de skincare para o seu tipo de pele. 
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

export default SkincareGuideArticlePage;
