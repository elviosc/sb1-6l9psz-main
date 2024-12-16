import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function BrazilianSkinMorenaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#fff5f8]">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 w-full h-full">
          <div className="relative w-full h-full">
            <img
              src="https://lucianamaluf.com.br/wp-content/uploads/2024/05/Quais-as-caracteristicas-de-uma-Pele-Etnica.png"
              alt="Tratamentos para Pele Morena"
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
              Pele
              <br />
              <span className="font-semibold">Morena</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Tratamentos personalizados para a beleza única da pele morena brasileira, 
              com foco em resultados naturais e seguros.
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

      {/* Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-[#6f0d44] mb-6">
                Tratamentos Especializados
              </h2>
              <div className="prose prose-lg">
                <p className="text-gray-600 leading-relaxed">
                  Nossa clínica oferece tratamentos desenvolvidos especialmente para as características únicas da pele morena brasileira. Combinamos tecnologias avançadas e protocolos personalizados para garantir resultados eficazes e seguros.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Cada procedimento é adaptado considerando a melanina natural da sua pele, garantindo resultados harmoniosos e naturais.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-[#6f0d44] mb-6 mt-16">
                Principais Tratamentos
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-16">
                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#6f0d44] mb-4">Uniformização da Pele</h3>
                  <p className="text-gray-600">
                    Tratamentos específicos para uniformizar o tom da pele e reduzir manchas.
                  </p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#6f0d44] mb-4">Controle da Oleosidade</h3>
                  <p className="text-gray-600">
                    Protocolos para equilibrar a produção de oleosidade sem ressecar a pele.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
