import { TreatmentDetail } from "@/components/treatments/treatment-detail";

export function LaserPage() {
  return (
    <TreatmentDetail
      title="Tecnologias Laser Avançadas"
      subtitle="Tratamentos de alta precisão com equipamentos de última geração"
      description="Nossa clínica oferece um arsenal completo de tecnologias laser, cada uma específica para diferentes necessidades. Desde rejuvenescimento e tratamento de manchas até remoção de tatuagens e cicatrizes, utilizamos os equipamentos mais modernos e seguros do mercado, com protocolos personalizados para cada tipo de pele."
      benefits={[
        "Tratamentos altamente precisos",
        "Protocolos personalizados",
        "Múltiplas indicações terapêuticas",
        "Segurança para todos os tipos de pele",
        "Resultados cientificamente comprovados",
        "Tecnologia de ponta"
      ]}
      duration="30 a 60 minutos por sessão"
      recovery="24 a 72 horas"
      results="Progressivos ao longo das sessões"
      image="https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5927-scaled.jpg"
    />
  );
}