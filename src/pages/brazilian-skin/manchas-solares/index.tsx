import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { SEO } from "@/components/SEO";

export function BrazilianSkinManchasSolaresPage() {
  return (
    <>
      <SEO
        title="Tratamento de Manchas Solares | Especialista em Pele Brasileira"
        description="Tratamentos avançados e seguros para manchas solares na pele brasileira. Clareamento eficaz com tecnologia de ponta e protocolos personalizados pela Dra. Luciana Maluf."
        keywords={[
          'manchas solares',
          'tratamento manchas',
          'clareamento de manchas',
          'pele brasileira',
          'hiperpigmentação',
          'melasma',
          'laser para manchas',
          'tratamento com laser',
          'clareamento de pele',
          'dermatologista manchas'
        ]}
        type="article"
        image="https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5915-scaled.jpg"
      />
      <div className="min-h-screen bg-gradient-to-b from-white to-[#fff5f8]">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <div className="relative w-full h-full">
              <img
                src="https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5915-scaled.jpg"
                alt="Tratamento para Manchas Solares"
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
                  Manchas
                  <br />
                  <span className="font-semibold">Solares</span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-2xl mb-8 text-white/90 font-light leading-relaxed"
              >
                Tratamentos avançados e seguros para clarear e prevenir manchas solares na pele brasileira.
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
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-[#6f0d44] mb-8">
                  Sobre as Manchas Solares
                </h2>
                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed text-lg">
                    As manchas solares são alterações na pigmentação da pele causadas pela exposição excessiva ao sol. Na pele brasileira, devido à nossa exposição solar intensa e características genéticas, essas manchas podem ser mais frequentes e evidentes.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Nossos tratamentos são desenvolvidos especialmente para tratar e prevenir manchas solares, respeitando as características únicas da pele brasileira.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-[#6f0d44] mb-8 mt-24">
                  Tratamentos Disponíveis
                </h2>
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#6f0d44] mb-4">Laser Clareador</h3>
                    <p className="text-gray-600">
                      Tecnologia avançada para clareamento seguro e eficaz das manchas.
                    </p>
                  </div>
                  <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#6f0d44] mb-4">Peeling Específico</h3>
                    <p className="text-gray-600">
                      Peelings formulados para tratar manchas sem agredir a pele.
                    </p>
                  </div>
                  <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#6f0d44] mb-4">Microagulhamento</h3>
                    <p className="text-gray-600">
                      Tratamento que estimula a renovação celular e clareamento.
                    </p>
                  </div>
                  <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#6f0d44] mb-4">Cosméticos Avançados</h3>
                    <p className="text-gray-600">
                      Produtos específicos para potencializar os resultados.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-[#6f0d44] mb-8">
                  Benefícios dos Tratamentos
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    'Clareamento gradual',
                    'Uniformização do tom',
                    'Prevenção de novas manchas',
                    'Pele mais luminosa',
                    'Resultados duradouros',
                    'Tratamento seguro',
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

                <h2 className="text-3xl font-bold text-[#6f0d44] mb-8 mt-24">
                  Nossa Abordagem
                </h2>
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#6f0d44] mb-4">Avaliação Detalhada</h3>
                    <p className="text-gray-600">
                      Análise do tipo e profundidade das manchas para melhor tratamento.
                    </p>
                  </div>
                  <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#6f0d44] mb-4">Protocolo Personalizado</h3>
                    <p className="text-gray-600">
                      Combinação de tratamentos adaptados ao seu tipo de pele.
                    </p>
                  </div>
                  <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#6f0d44] mb-4">Tecnologia de Ponta</h3>
                    <p className="text-gray-600">
                      Equipamentos modernos para resultados superiores.
                    </p>
                  </div>
                  <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#6f0d44] mb-4">Acompanhamento</h3>
                    <p className="text-gray-600">
                      Monitoramento contínuo da evolução do tratamento.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-[#6f0d44] mb-8">
                  Cuidados Essenciais
                </h2>
                <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg space-y-4">
                  {[
                    'Proteção solar reforçada',
                    'Hidratação adequada',
                    'Uso de antioxidantes',
                    'Cuidados pós-procedimento',
                    'Manutenção preventiva',
                    'Fotoproteção diária',
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
    </>
  );
}
