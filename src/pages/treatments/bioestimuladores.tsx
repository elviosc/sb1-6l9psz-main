import { TreatmentDetail } from "@/components/treatments/treatment-detail";

export function BioestimuladoresPage() {
  return (
    <TreatmentDetail
      title="Bioestimuladores de Colágeno"
      subtitle="Rejuvenescimento natural através da estimulação do colágeno"
      description="Os bioestimuladores são a nova geração de tratamentos para rejuvenescimento facial e corporal. Atuam estimulando a produção natural de colágeno pela pele, proporcionando resultados progressivos e duradouros. São indicados para melhorar a qualidade da pele, tratar flacidez e restaurar o volume facial perdido com o envelhecimento."
      benefits={[
        "Estímulo natural de colágeno",
        "Melhora progressiva da flacidez",
        "Restauração do volume facial",
        "Resultados de longa duração",
        "Tratamento minimamente invasivo",
        "Protocolo personalizado"
      ]}
      duration="60 a 90 minutos"
      recovery="3 a 5 dias"
      results="4 a 24 meses"
      image="https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5938-scaled.jpg"
    />
  );
}