import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export function BrazilianSkinMorenaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#fff5f8]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <div className="relative w-full h-full">
            <img
              src="https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5915-scaled.jpg"
              alt="Tratamentos para Pele Morena"
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
              <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 text-white mb-6">
                <span className="text-sm">Tratamento Especializado</span>
                <ChevronRight className="h-4 w-4" />
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 text-white tracking-tight">
                Pele
                <br />
                <span className="font-semibold">Morena</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-2xl mb-8 text-white/90 font-light leading-relaxed"
            >
              Tratamentos personalizados para a beleza única da pele morena brasileira, com foco em resultados naturais e seguros.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-8"
            >
              <Link to="/contact/appointment">
                <Button size="lg" className="bg-white text-[#6f0d44] hover:bg-white/90 text-lg h-14 px-8">
                  Agende sua Avaliação
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
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
                    Protocolos para equilibrar a produção de oleosidade sem ressecar.
                  </p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#6f0d44] mb-4">Tratamento de Acne</h3>
                  <p className="text-gray-600">
                    Cuidados específicos para acne em pele morena, prevenindo manchas.
                  </p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#6f0d44] mb-4">Rejuvenescimento</h3>
                  <p className="text-gray-600">
                    Procedimentos seguros para renovação e rejuvenescimento da pele.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-[#6f0d44] mb-6">
                Benefícios dos Tratamentos
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Pele mais uniforme',
                  'Controle da oleosidade',
                  'Luminosidade natural',
                  'Prevenção de manchas',
                  'Resultados duradouros',
                  'Protocolos seguros',
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-4 p-6 bg-white/50 backdrop-blur-sm rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <ChevronRight className="w-5 h-5 text-[#6f0d44] mt-1" />
                    <span className="text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-[#6f0d44] mb-6 mt-16">
                Nossa Abordagem
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-16">
                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#6f0d44] mb-4">Avaliação Personalizada</h3>
                  <p className="text-gray-600">
                    Análise detalhada das características da sua pele e necessidades específicas.
                  </p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#6f0d44] mb-4">Protocolos Exclusivos</h3>
                  <p className="text-gray-600">
                    Tratamentos desenvolvidos especialmente para pele morena brasileira.
                  </p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#6f0d44] mb-4">Tecnologia Avançada</h3>
                  <p className="text-gray-600">
                    Equipamentos e produtos selecionados para resultados seguros.
                  </p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#6f0d44] mb-4">Acompanhamento</h3>
                  <p className="text-gray-600">
                    Monitoramento contínuo dos resultados e ajustes necessários.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-[#6f0d44] mb-6">
                Cuidados Essenciais
              </h2>
              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg space-y-4">
                {[
                  'Proteção solar específica',
                  'Hidratação adequada',
                  'Limpeza suave e eficaz',
                  'Produtos não comedogênicos',
                  'Cuidados pós-procedimento',
                  'Manutenção regular',
                ].map((care) => (
                  <div key={care} className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[#6f0d44] mt-1" />
                    <span className="text-gray-600">{care}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Link to="/contact/appointment">
                  <Button size="lg" className="bg-[#6f0d44] hover:bg-[#8b1155] text-white">
                    Agende sua Avaliação
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
