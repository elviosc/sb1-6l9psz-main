import { TreatmentDetail } from "@/components/treatments/treatment-detail";

export function BrazilianSkinMorenaPage() {
  return (
    <TreatmentDetail
      title="Pele Morena"
      subtitle="Tratamentos especializados para peles morenas brasileiras"
      description="A pele morena brasileira possui características únicas que requerem cuidados específicos. Nossos protocolos são desenvolvidos considerando a maior produção de melanina, tendência à oleosidade e necessidades particulares de hidratação, garantindo resultados seguros e eficazes. Utilizamos tecnologias e produtos selecionados especialmente para atender às necessidades da pele morena, promovendo saúde, beleza e uniformidade."
      benefits={[
        "Protocolos específicos para fototipos III e IV",
        "Controle da oleosidade sem ressecar",
        "Uniformização do tom da pele",
        "Prevenção de manchas",
        "Tratamentos seguros e eficazes",
        "Manutenção da luminosidade natural"
      ]}
      duration="45 a 60 minutos por sessão"
      recovery="24 a 48 horas"
      results="Progressivos ao longo do tratamento"
      image="https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5927-scaled.jpg"
    />
  );
}

export const BrazilianSkinMorena = BrazilianSkinMorenaPage;
export default BrazilianSkinMorenaPage;