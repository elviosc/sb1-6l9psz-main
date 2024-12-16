import { TreatmentDetail } from "@/components/treatments/treatment-detail";
import { Card } from "@/components/ui/card";

export function MelasmaPage() {
  return (
    <TreatmentDetail
      title="Tratamento de Melasma"
      subtitle="Abordagem especializada para manchas em peles étnicas"
      description="O melasma é uma condição que afeta principalmente peles étnicas, exigindo uma abordagem especializada e cuidadosa. Nosso protocolo exclusivo combina tecnologias avançadas e tratamentos tópicos personalizados para resultados seguros e eficazes, respeitando as características únicas de cada tipo de pele e minimizando riscos de hiperpigmentação pós-inflamatória."
      benefits={[
        "Tratamento personalizado por fototipo",
        "Tecnologias seguras para peles melanodérmicas",
        "Redução gradual das manchas",
        "Prevenção de hiperpigmentação",
        "Protocolo home care especializado",
        "Acompanhamento contínuo"
      ]}
      duration="30 a 45 minutos por sessão"
      recovery="24 a 48 horas"
      results="3 a 6 meses"
      image="https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5927-scaled.jpg"
    />
  );
}

export function EthnicSkinMelasmaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#6f0d44] mb-8">Melasma em Peles Étnicas</h1>
      <Card className="p-6">
        <p className="text-gray-600">
          Conteúdo sobre tratamento de melasma em peles étnicas...
        </p>
      </Card>
    </div>
  );
}