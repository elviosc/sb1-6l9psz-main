import { TreatmentDetail } from "@/components/treatments/treatment-detail";

export function ManchasSolaresPage() {
  return (
    <TreatmentDetail
      title="Tratamento de Manchas Solares"
      subtitle="Protocolos especializados para hiperpigmentação em peles brasileiras"
      description="As manchas solares são uma preocupação frequente na pele brasileira, especialmente devido à nossa exposição solar intensa. Desenvolvemos protocolos específicos que combinam tecnologias avançadas e ativos despigmentantes para tratar e prevenir manchas solares de forma segura e eficaz, respeitando as características únicas da pele brasileira."
      benefits={[
        "Clareamento gradual e seguro",
        "Prevenção de novas manchas",
        "Uniformização do tom da pele",
        "Proteção solar reforçada",
        "Tratamentos complementares",
        "Resultados duradouros"
      ]}
      duration="30 a 45 minutos por sessão"
      recovery="24 a 48 horas"
      results="2 a 4 meses"
      image="https://lucianamaluf.com.br/wp-content/uploads/2024/11/CCHI8115.jpg"
      beforeAfterImages={[
        {
          before: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5927-scaled.jpg",
          after: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5938-scaled.jpg"
        }
      ]}
    />
  );
}