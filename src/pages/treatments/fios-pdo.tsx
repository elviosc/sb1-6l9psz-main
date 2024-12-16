import { TreatmentDetail } from "@/components/treatments/treatment-detail";

export function FiosPDOPage() {
  return (
    <TreatmentDetail
      title="Fios PDO"
      subtitle="Lifting facial não cirúrgico com fios absorvíveis"
      description="Os Fios PDO (Polidioxanona) são uma tecnologia avançada para lifting facial não cirúrgico. São fios absorvíveis, biocompatíveis e seguros, utilizados para promover sustentação e estimular a produção de colágeno, resultando em um rejuvenescimento natural e duradouro."
      benefits={[
        "Lifting facial sem cirurgia",
        "Estímulo natural de colágeno",
        "Resultados duradouros",
        "Procedimento minimamente invasivo",
        "Recuperação rápida",
        "Efeito natural"
      ]}
      duration="30 a 60 minutos"
      recovery="3 a 7 dias"
      results="12 a 18 meses"
      image="https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5938-scaled.jpg"
      beforeAfterImages={[
        {
          before: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5915-scaled.jpg",
          after: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/CCHI8115.jpg"
        }
      ]}
    />
  );
}

export const FiosPDO = FiosPDOPage;
export default FiosPDOPage;