import { TreatmentDetail } from "@/components/treatments/treatment-detail";

export function HarmonizacaoFacialPage() {
  return (
    <TreatmentDetail
      title="Harmonização Facial"
      subtitle="Arte e ciência na busca pelo equilíbrio facial perfeito"
      description="A Harmonização Facial é uma combinação estratégica de procedimentos estéticos que visa equilibrar e realçar os traços do rosto, respeitando a individualidade de cada pessoa. Utilizamos técnicas avançadas e produtos de última geração para criar resultados naturais e harmoniosos, sempre preservando suas características únicas."
      benefits={[
        "Planejamento facial personalizado",
        "Combinação de diferentes técnicas",
        "Resultados naturais e harmoniosos",
        "Valorização dos traços individuais",
        "Rejuvenescimento global",
        "Acompanhamento longitudinal"
      ]}
      duration="60 a 120 minutos"
      recovery="5 a 7 dias"
      results="12 a 24 meses"
      image="https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5915-scaled.jpg"
    />
  );
}