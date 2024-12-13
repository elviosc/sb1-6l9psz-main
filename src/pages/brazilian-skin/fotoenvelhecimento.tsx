import { TreatmentDetail } from "@/components/treatments/treatment-detail";

export function FotoenvelhecimentoPage() {
  return (
    <TreatmentDetail
      title="Tratamento do Fotoenvelhecimento"
      subtitle="Tecnologia avançada para reverter os danos solares em peles brasileiras"
      description="O fotoenvelhecimento é uma das principais preocupações da pele brasileira, devido à intensa exposição solar em nosso clima tropical. Nosso protocolo exclusivo combina diferentes tecnologias e ativos para tratar e prevenir os sinais do envelhecimento causado pelo sol, devolvendo juventude e viço à pele de forma segura e eficaz."
      benefits={[
        "Redução de manchas solares",
        "Melhora da textura e firmeza",
        "Uniformização do tom da pele",
        "Estímulo de colágeno",
        "Proteção contra danos futuros",
        "Rejuvenescimento natural"
      ]}
      duration="45 a 60 minutos por sessão"
      recovery="24 a 72 horas"
      results="3 a 6 meses"
      image="https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5927-scaled.jpg"
      beforeAfterImages={[
        {
          before: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5938-scaled.jpg",
          after: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_9160-scaled.jpg"
        }
      ]}
    />
  );
}