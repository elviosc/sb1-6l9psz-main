import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export function LaserPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#fff5f8]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <div className="relative w-full h-full">
            <img
              src="https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5915-scaled.jpg"
              alt="Tratamentos a Laser"
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
                <span className="text-sm">Tecnologia Avançada</span>
                <ChevronRight className="h-4 w-4" />
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 text-white tracking-tight">
                Tratamentos
                <br />
                <span className="font-semibold">a Laser</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-2xl mb-8 text-white/90 font-light leading-relaxed"
            >
              Tecnologia de ponta para rejuvenescimento, tratamento de manchas, cicatrizes e outras condições da pele.
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
                O Procedimento
              </h2>
              <div className="prose prose-lg">
                <p className="text-gray-600 leading-relaxed">
                  Os tratamentos a laser representam o que há de mais moderno em tecnologia dermatológica. Com diferentes tipos de laser disponíveis, podemos tratar uma ampla variedade de condições da pele de forma precisa e eficaz.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Cada tipo de laser é especificamente projetado para atender diferentes necessidades, desde o rejuvenescimento facial até o tratamento de manchas, cicatrizes e lesões vasculares. O procedimento é personalizado para cada paciente, garantindo os melhores resultados.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-[#6f0d44] mb-2">
                    <ChevronRight className="w-5 h-5" />
                    <span className="font-medium">Duração</span>
                  </div>
                  <p className="text-gray-600">30 a 60 minutos</p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-[#6f0d44] mb-2">
                    <ChevronRight className="w-5 h-5" />
                    <span className="font-medium">Recuperação</span>
                  </div>
                  <p className="text-gray-600">2 a 7 dias</p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-[#6f0d44] mb-2">
                    <ChevronRight className="w-5 h-5" />
                    <span className="font-medium">Resultados</span>
                  </div>
                  <p className="text-gray-600">Progressivos</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-[#6f0d44] mb-6 mt-16">
                Benefícios do Tratamento
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Rejuvenescimento da pele',
                  'Redução de manchas',
                  'Tratamento de cicatrizes',
                  'Melhora da textura da pele',
                  'Redução de poros dilatados',
                  'Resultados duradouros',
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
                Contraindicações
              </h2>
              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg space-y-4">
                {[
                  'Gestantes e lactantes',
                  'Uso de medicamentos fotossensibilizantes',
                  'Infecções ativas na área a ser tratada',
                  'Histórico recente de exposição solar',
                  'Doenças autoimunes em atividade',
                  'Tendência a queloides',
                ].map((contraindication) => (
                  <div key={contraindication} className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[#6f0d44] mt-1" />
                    <span className="text-gray-600">{contraindication}</span>
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
