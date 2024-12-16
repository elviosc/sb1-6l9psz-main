import { TreatmentDetail } from "@/components/treatments/treatment-detail";
import { Card } from "@/components/ui/card";

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
      beforeAfterImages={[
        {
          before: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5938-scaled.jpg",
          after: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/CCHI8115.jpg"
        }
      ]}
    />
  );
}

export function EthnicSkinHyperpigmentationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#6f0d44] mb-8">Hiperpigmentação em Peles Étnicas</h1>
      <Card className="p-6">
        <p className="text-gray-600">
          Conteúdo sobre tratamento de hiperpigmentação em peles étnicas...
        </p>
      </Card>
    </div>
  );
}