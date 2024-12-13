import { TreatmentDetail } from "@/components/treatments/treatment-detail";

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
      image="https://lucianamaluf.com.br/wp-content/uploads/2024/11/CCHI8115.jpg"
      beforeAfterImages={[
        {
          before: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5915-scaled.jpg",
          after: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_9160-scaled.jpg"
        }
      ]}
    />
  );
}