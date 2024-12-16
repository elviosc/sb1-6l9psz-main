import { TreatmentDetail } from "@/components/treatments/treatment-detail";

export function BrazilianSkinMiscigenadaPage() {
  return (
    <TreatmentDetail
      title="Pele Miscigenada"
      subtitle="Protocolos específicos para a diversidade da pele brasileira"
      description="A miscigenação brasileira resulta em peles únicas que combinam características de diferentes etnias. Nossos tratamentos são adaptados para atender às necessidades específicas de cada tipo de pele, considerando sua composição única e respostas particulares aos procedimentos."
      benefits={[
        "Tratamentos personalizados por fototipo",
        "Protocolos seguros para todos os tons",
        "Controle de oleosidade e manchas",
        "Preservação das características naturais",
        "Prevenção de alterações pigmentares",
        "Acompanhamento personalizado"
      ]}
      duration="40 a 60 minutos por sessão"
      recovery="24 a 72 horas"
      results="2 a 6 meses"
      image="https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_9160-scaled.jpg"
      beforeAfterImages={[
        {
          before: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5915-scaled.jpg",
          after: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/CCHI8115.jpg"
        }
      ]}
    />
  );
}