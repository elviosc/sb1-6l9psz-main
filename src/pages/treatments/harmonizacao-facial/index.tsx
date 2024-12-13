import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export function HarmonizacaoFacialPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#fff5f8]">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src="/images/harmonizacao-facial-hero.jpg"
            alt="Harmonização Facial"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Harmonização Facial
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Realce sua beleza natural com procedimentos personalizados e resultados harmoniosos
              </p>
              <Link to="/contact/appointment">
                <Button size="lg" className="bg-[#6f0d44] hover:bg-[#8b1155] text-white">
                  Agende sua Consulta
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
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
                O que é Harmonização Facial?
              </h2>
              <p className="text-gray-700 mb-8">
                A harmonização facial é um conjunto de procedimentos estéticos que visam equilibrar os traços do rosto, proporcionando resultados naturais e harmoniosos. Cada tratamento é personalizado de acordo com as características e necessidades individuais de cada paciente.
              </p>

              <h2 className="text-3xl font-bold text-[#6f0d44] mb-6">
                Procedimentos Disponíveis
              </h2>
              <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                <li>Preenchimento com ácido hialurônico</li>
                <li>Toxina botulínica</li>
                <li>Bioestimuladores de colágeno</li>
                <li>Skinbooster</li>
                <li>Fios de PDO</li>
                <li>Sculptra</li>
              </ul>

              <h2 className="text-3xl font-bold text-[#6f0d44] mb-6">
                Benefícios
              </h2>
              <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                <li>Resultados naturais e harmoniosos</li>
                <li>Procedimentos minimamente invasivos</li>
                <li>Recuperação rápida</li>
                <li>Tratamentos personalizados</li>
                <li>Melhora da autoestima</li>
                <li>Rejuvenescimento facial</li>
              </ul>

              <h2 className="text-3xl font-bold text-[#6f0d44] mb-6">
                O Procedimento
              </h2>
              <p className="text-gray-700 mb-8">
                Durante a consulta, realizamos uma avaliação detalhada das suas características faciais e expectativas. Com base nisso, desenvolvemos um plano de tratamento personalizado que pode incluir diferentes procedimentos combinados. Utilizamos produtos de alta qualidade e técnicas avançadas para garantir os melhores resultados.
              </p>

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
