import { TreatmentDetail } from "@/components/treatments/treatment-detail";
import { PageHero } from "@/components/ui/page-hero";
import { Check } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function HyperpigmentationPage() {
  return (
    <TreatmentDetail
      title="Manchas e Hiperpigmentação"
      subtitle="Tratamento especializado para uniformização do tom em peles étnicas"
      description="A hiperpigmentação é uma preocupação comum em peles étnicas, podendo ocorrer por diversos fatores como inflamação, exposição solar e hormônios. Nosso protocolo utiliza tecnologias seguras e eficazes para reduzir manchas e uniformizar o tom da pele, sempre respeitando suas características naturais e prevenindo hiperpigmentação pós-inflamatória."
      benefits={[
        "Uniformização segura do tom",
        "Redução de manchas pós-inflamatórias",
        "Prevenção de hiperpigmentação",
        "Melhora da textura e luminosidade",
        "Protocolo de proteção específico",
        "Tratamentos complementares personalizados"
      ]}
      duration="45 a 60 minutos por sessão"
      recovery="24 a 72 horas"
      results="3 a 6 meses"
      image="https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5927-scaled.jpg"
    />
  );
}

export function EthnicSkinHyperpigmentationPage() {
  return (
    <>
      <PageHero
        title="Hiperpigmentação"
        subtitle="Pele Étnica"
        description="Tratamentos especializados para manchas e descolorações em peles negras, com foco na uniformização segura do tom da pele."
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
                O que é Hiperpigmentação?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                A hiperpigmentação é uma condição comum em peles étnicas, caracterizada pelo escurecimento de áreas da pele devido ao aumento da produção de melanina. Pode ser causada por diversos fatores, incluindo exposição solar, inflamação, hormônios e certas condições médicas.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#6f0d44] mb-6">
                Nosso Tratamento
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Oferecemos tratamentos personalizados e seguros para hiperpigmentação em peles étnicas, utilizando tecnologias avançadas e protocolos específicos que respeitam as características únicas de cada tipo de pele.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#6f0d44] mb-4">
                    Tecnologias Utilizadas
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#6f0d44] mr-2 mt-1" />
                      <span>Lasers específicos para peles étnicas</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#6f0d44] mr-2 mt-1" />
                      <span>Peelings químicos suaves e controlados</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#6f0d44] mr-2 mt-1" />
                      <span>Microagulhamento com ativos clareadores</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#6f0d44] mb-4">
                    Benefícios
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#6f0d44] mr-2 mt-1" />
                      <span>Uniformização do tom da pele</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#6f0d44] mr-2 mt-1" />
                      <span>Redução de manchas escuras</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#6f0d44] mr-2 mt-1" />
                      <span>Melhora da textura da pele</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#6f0d44] text-white p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Agende sua Consulta
              </h3>
              <p className="mb-6 text-white/90">
                Faça uma avaliação personalizada e descubra o melhor tratamento para sua pele.
              </p>
              <Link to="/contact/appointment">
                <Button size="lg" className="bg-white text-[#6f0d44] hover:bg-white/90">
                  Agendar Avaliação
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