import { TreatmentDetail } from "@/components/treatments/treatment-detail";

export function AcnePage() {
  return (
    <TreatmentDetail
      title="Acne em Peles Negras"
      subtitle="Tratamento especializado para acne com foco na prevenção de manchas e cicatrizes"
      description="O tratamento da acne em peles negras requer cuidados específicos devido à maior tendência a hiperpigmentação pós-inflamatória e formação de queloides. Nossa abordagem combina controle da acne ativa com prevenção de sequelas, utilizando protocolos seguros e eficazes."
      benefits={[
        "Controle efetivo da acne ativa",
        "Prevenção de manchas pós-acne",
        "Redução do risco de cicatrizes",
        "Tratamento das manchas existentes",
        "Protocolo personalizado de skincare",
        "Acompanhamento dermatológico especializado"
      ]}
      duration="40 a 60 minutos por sessão"
      recovery="24 a 48 horas"
      results="2 a 6 meses para controle completo"
      image="https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_9160-scaled.jpg"
      beforeAfterImages={[
        {
          before: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5915-scaled.jpg",
          after: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5927-scaled.jpg"
        }
      ]}
    />
  );
}