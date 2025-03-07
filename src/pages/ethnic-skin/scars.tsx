import { TreatmentDetail } from "@/components/treatments/treatment-detail";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/ui/page-hero";
import { Check } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function ScarsPage() {
  return (
    <TreatmentDetail
      title="Cicatrizes e Queloides"
      subtitle="Tratamento especializado para prevenção e tratamento de cicatrizes em peles étnicas"
      description="Peles étnicas têm maior predisposição à formação de cicatrizes hipertróficas e queloides. Nosso protocolo combina prevenção e tratamento, utilizando múltiplas tecnologias e técnicas para os melhores resultados possíveis."
      benefits={[
        "Prevenção de queloides",
        "Tratamento de cicatrizes existentes",
        "Redução do volume e vermelhidão",
        "Melhora da textura da pele",
        "Protocolos preventivos pós-procedimentos",
        "Acompanhamento longitudinal"
      ]}
      duration="30 a 60 minutos por sessão"
      recovery="24 a 72 horas"
      results="3 a 12 meses"
      image="https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5927-scaled.jpg"
    />
  );
}

export function EthnicSkinScarsPage() {
  return (
    <>
      <PageHero
        title="Cicatrizes"
        subtitle="Pele Étnica"
        description="Tratamento avançado para cicatrizes em peles negras, com tecnologia específica para evitar hiperpigmentação pós-inflamatória."
        image="https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5938-scaled.jpg"
      />

      <div className="bg-gradient-to-b from-white via-[#fff5f8] to-white">
        <div className="container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-12"
          >
            <div>
              <h2 className="text-3xl font-bold text-[#6f0d44] mb-6">
                Tratamento de Cicatrizes em Peles Étnicas
              </h2>
              <p className="text-gray-600 leading-relaxed">
                O tratamento de cicatrizes em peles étnicas requer cuidados especiais e técnicas específicas para garantir resultados eficazes sem causar hiperpigmentação pós-inflamatória. Nossa clínica utiliza tecnologias avançadas e protocolos personalizados para cada tipo de cicatriz e tom de pele.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#6f0d44] mb-4">
                  Tipos de Cicatrizes Tratadas
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#6f0d44] mr-2 mt-1" />
                    <span>Cicatrizes de acne</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#6f0d44] mr-2 mt-1" />
                    <span>Cicatrizes cirúrgicas</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#6f0d44] mr-2 mt-1" />
                    <span>Cicatrizes hipertróficas</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#6f0d44] mr-2 mt-1" />
                    <span>Queloides</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#6f0d44] mb-4">
                  Tecnologias Utilizadas
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#6f0d44] mr-2 mt-1" />
                    <span>Laser fracionado específico para peles étnicas</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#6f0d44] mr-2 mt-1" />
                    <span>Microagulhamento com drug delivery</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#6f0d44] mr-2 mt-1" />
                    <span>Peelings específicos</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#6f0d44] mr-2 mt-1" />
                    <span>Radiofrequência microagulhada</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#6f0d44] mb-6">
                Processo de Tratamento
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg">
                  <div className="w-12 h-12 bg-[#6f0d44] text-white rounded-full flex items-center justify-center text-xl font-semibold mb-4">
                    1
                  </div>
                  <h3 className="text-lg font-semibold text-[#6f0d44] mb-2">
                    Avaliação
                  </h3>
                  <p className="text-gray-600">
                    Análise detalhada do tipo de cicatriz e características da sua pele.
                  </p>
                </div>

                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg">
                  <div className="w-12 h-12 bg-[#6f0d44] text-white rounded-full flex items-center justify-center text-xl font-semibold mb-4">
                    2
                  </div>
                  <h3 className="text-lg font-semibold text-[#6f0d44] mb-2">
                    Planejamento
                  </h3>
                  <p className="text-gray-600">
                    Desenvolvimento de protocolo personalizado com combinação de tecnologias.
                  </p>
                </div>

                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg">
                  <div className="w-12 h-12 bg-[#6f0d44] text-white rounded-full flex items-center justify-center text-xl font-semibold mb-4">
                    3
                  </div>
                  <h3 className="text-lg font-semibold text-[#6f0d44] mb-2">
                    Tratamento
                  </h3>
                  <p className="text-gray-600">
                    Aplicação das tecnologias selecionadas com acompanhamento constante.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#6f0d44] text-white p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Agende sua Avaliação
              </h3>
              <p className="mb-6 text-white/90">
                Descubra o melhor tratamento para suas cicatrizes com uma avaliação personalizada.
              </p>
              <Link to="/contact/appointment">
                <Button size="lg" className="bg-white text-[#6f0d44] hover:bg-white/90">
                  Agendar Consulta
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}