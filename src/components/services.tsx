import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Services() {
  const services = [
    {
      title: "Toxina Botulínica",
      description: "Tratamento para rugas e linhas de expressão com resultados naturais."
    },
    {
      title: "Fios de PDO",
      description: "Bioestimuladores tensores para rejuvenescimento facial."
    },
    {
      title: "Preenchimento",
      description: "Restauração de volume e contorno facial com ácido hialurônico."
    },
    {
      title: "Tecnologias Laser",
      description: "Tratamentos avançados para manchas, cicatrizes e rejuvenescimento."
    }
  ];

  return (
    <section id="tratamentos" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#db503c] mb-12">
          Nossos Tratamentos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-[#c33325]">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}