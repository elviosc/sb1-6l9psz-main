import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

export function FacialRejuvenationArticlePage() {
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
                Rejuvenescimento Facial
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Conheça as técnicas mais avançadas para preservar a jovialidade da sua pele de forma natural.
                Descubra como manter uma aparência jovem e saudável com procedimentos modernos e seguros.
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
                  alt="Rejuvenescimento Facial"
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
                O que é Rejuvenescimento Facial?
              </h2>
              <div className="prose prose-lg">
                <p className="text-gray-600 leading-relaxed">
                  O rejuvenescimento facial é um conjunto de tratamentos que visam melhorar a 
                  qualidade, textura e aparência da pele, combatendo os sinais do envelhecimento. 
                  Utilizamos técnicas avançadas e minimamente invasivas para estimular a produção 
                  natural de colágeno e elastina.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Cada protocolo é personalizado considerando o tipo de pele, idade e necessidades 
                  específicas de cada paciente, garantindo resultados naturais e duradouros.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-[#6f0d44] mb-2">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">Duração</span>
                  </div>
                  <p className="text-gray-600">45 a 90 minutos</p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-[#6f0d44] mb-2">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">Recuperação</span>
                  </div>
                  <p className="text-gray-600">2 a 5 dias</p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-[#6f0d44] mb-2">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">Resultados</span>
                  </div>
                  <p className="text-gray-600">6 a 12 meses</p>
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
                Benefícios do Tratamento
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-[#6f0d44] mt-1" />
                  <span className="text-gray-600">Melhora da textura e luminosidade da pele</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-[#6f0d44] mt-1" />
                  <span className="text-gray-600">Redução de linhas finas e rugas</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-[#6f0d44] mt-1" />
                  <span className="text-gray-600">Estímulo natural do colágeno</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-[#6f0d44] mt-1" />
                  <span className="text-gray-600">Uniformização do tom da pele</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-[#6f0d44] mt-1" />
                  <span className="text-gray-600">Aparência mais jovem e natural</span>
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
              Agende sua Consulta
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Converse com nossa equipe e descubra o melhor protocolo de rejuvenescimento 
              para suas necessidades.
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

export default FacialRejuvenationArticlePage;
