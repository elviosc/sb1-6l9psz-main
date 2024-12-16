import { TreatmentDetail } from "@/components/treatments/treatment-detail";
import { Card } from "@/components/ui/card";

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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#6f0d44] mb-8">Cicatrizes em Peles Étnicas</h1>
      <Card className="p-6">
        <p className="text-gray-600">
          Conteúdo sobre tratamento de cicatrizes em peles étnicas...
        </p>
      </Card>
    </div>
  );
}