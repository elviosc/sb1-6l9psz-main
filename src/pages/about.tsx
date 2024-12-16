import { Card } from "@/components/ui/card";

export function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#6f0d44] mb-8">Sobre</h1>
      <Card className="p-6">
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-4">
            A Dra. Luciana Maluf é uma dermatologista altamente qualificada, com mais de 20 anos de experiência na área. 
            Especializada em dermatologia clínica e cirúrgica, ela tem se dedicado ao tratamento de diversas condições 
            dermatológicas, com foco especial em peles étnicas e brasileiras.
          </p>
          <p className="text-gray-600 mb-4">
            Formada pela Universidade de São Paulo (USP), com especialização pelo Hospital das Clínicas FMUSP, 
            a Dra. Luciana mantém-se constantemente atualizada com as mais recentes técnicas e tratamentos em dermatologia.
          </p>
          <p className="text-gray-600">
            Seu consultório no Itaim Bibi oferece uma ampla gama de tratamentos dermatológicos, sempre utilizando 
            tecnologias de ponta e uma abordagem personalizada para cada paciente.
          </p>
        </div>
      </Card>
    </div>
  );
}
