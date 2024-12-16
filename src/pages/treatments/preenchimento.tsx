import { TreatmentDetail } from "@/components/treatments/treatment-detail";

export function PreenchimentoPage() {
  return (
    <TreatmentDetail
      title="Preenchimento com Ácido Hialurônico"
      subtitle="Harmonização facial com produtos premium e técnica avançada"
      description="O preenchimento com ácido hialurônico é um procedimento versátil que permite restaurar volumes, suavizar sulcos e melhorar contornos faciais. Utilizamos produtos de última geração, com tecnologia VyCross e técnicas avançadas para resultados naturais e duradouros, sempre respeitando a anatomia e as características individuais."
      benefits={[
        "Restauração de volumes",
        "Harmonização dos contornos",
        "Hidratação profunda",
        "Resultados imediatos",
        "Procedimento reversível",
        "Técnica minimamente invasiva"
      ]}
      duration="45 a 60 minutos"
      recovery="24 a 72 horas"
      results="12 a 18 meses"
      image="https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5938-scaled.jpg"
    />
  );
}