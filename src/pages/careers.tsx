import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function CareersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#6f0d44] mb-8">Carreiras</h1>
      <Card className="p-6">
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-6">
            Estamos sempre em busca de profissionais talentosos e dedicados para se juntar à nossa equipe. 
            Se você é apaixonado por dermatologia e excelência no atendimento ao paciente, confira nossas 
            oportunidades disponíveis.
          </p>
          
          <h2 className="text-xl font-semibold text-[#6f0d44] mb-4">Vagas Disponíveis</h2>
          <div className="space-y-6">
            <div className="border-b pb-4">
              <h3 className="text-lg font-medium mb-2">Recepcionista</h3>
              <p className="text-gray-600 mb-4">
                Procuramos um profissional organizado e com excelentes habilidades de comunicação para 
                gerenciar nossa recepção e atendimento aos pacientes.
              </p>
              <Button variant="outline">Candidatar-se</Button>
            </div>
            
            <div className="border-b pb-4">
              <h3 className="text-lg font-medium mb-2">Auxiliar de Dermatologia</h3>
              <p className="text-gray-600 mb-4">
                Buscamos um auxiliar com experiência em clínica dermatológica para assistência em 
                procedimentos e cuidados com pacientes.
              </p>
              <Button variant="outline">Candidatar-se</Button>
            </div>
          </div>
          
          <div className="mt-8">
            <p className="text-gray-600">
              Para se candidatar, envie seu currículo para: 
              <a href="mailto:carreiras@lucianamaluf.com.br" className="text-[#6f0d44] hover:underline">
                carreiras@lucianamaluf.com.br
              </a>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
