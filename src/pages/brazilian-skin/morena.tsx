import { TreatmentDetail } from "@/components/treatments/treatment-detail";
import { Card } from "@/components/ui/card";

export function MorenaSkinPage() {
  return (
    <TreatmentDetail
      title="Pele Morena"
      subtitle="Tratamentos especializados para peles morenas brasileiras"
      description="A pele morena brasileira possui características únicas que requerem cuidados específicos. Nossos protocolos são desenvolvidos considerando a maior produção de melanina, tendência à oleosidade e necessidades particulares de hidratação, garantindo resultados seguros e eficazes."
      benefits={[
        "Controle da oleosidade sem ressecar",
        "Uniformização do tom da pele",
        "Prevenção de manchas pós-inflamatórias",
        "Tratamentos seguros e específicos",
        "Protocolos personalizados de skincare",
        "Manutenção da luminosidade natural"
      ]}
      duration="45 a 60 minutos por sessão"
      recovery="24 a 48 horas"
      results="Progressivos ao longo do tratamento"
      image="https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5915-scaled.jpg"
      beforeAfterImages={[
        {
          before: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5927-scaled.jpg",
          after: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5938-scaled.jpg"
        }
      ]}
    />
  );
}

export function BrazilianSkinMorenaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#6f0d44] mb-8">Pele Morena</h1>
      <Card className="p-6">
        <p className="text-gray-600">
          Conteúdo sobre cuidados com pele morena...
        </p>
      </Card>
    </div>
  );
}