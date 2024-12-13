import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const treatments = [
  {
    title: "Fios de PDO",
    description: "Tecnologia avançada para lifting facial não cirúrgico. Estimula colágeno e promove sustentação natural da pele.",
    badge: "Inovador",
    icon: "🔬",
    link: "/treatments/fios-pdo"
  },
  {
    title: "Toxina Botulínica",
    description: "Suavização de linhas de expressão e rugas com resultados naturais e duradouros. Procedimento seguro e minimamente invasivo.",
    badge: "Mais Procurado",
    icon: "✨",
    link: "/treatments/toxina-botulinica"
  },
  {
    title: "Preenchimento",
    description: "Harmonização facial com ácido hialurônico de última geração. Resultados personalizados para realçar sua beleza natural.",
    badge: "Premium",
    icon: "💫",
    link: "/treatments/preenchimento"
  },
  {
    title: "Tecnologias Laser",
    description: "Tratamentos de alta precisão para rejuvenescimento, manchas e cicatrizes. Equipamentos de última geração com resultados comprovados.",
    badge: "Tecnologia Avançada",
    icon: "⚡",
    link: "/treatments/laser"
  }
];

export function TreatmentsList() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#fff5f3] to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#6f0d44] mb-4">
            Tratamentos Especializados
          </h2>
          <div className="text-gray-600 max-w-2xl mx-auto text-lg">
            Combinamos ciência e tecnologia para oferecer os tratamentos mais avançados em dermatologia estética e clínica
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((treatment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 border-none bg-white/50 backdrop-blur-sm h-full flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="secondary" className="bg-[#6f0d44]/10 text-[#6f0d44] hover:bg-[#6f0d44]/20">
                      {treatment.badge}
                    </Badge>
                    <span className="text-2xl">{treatment.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#6f0d44] group-hover:text-[#8b1155] transition-colors mb-3">
                    {treatment.title}
                  </h3>
                  <div className="text-gray-600 leading-relaxed">
                    {treatment.description}
                  </div>
                </CardHeader>
                <CardContent className="pt-0 mt-auto">
                  <Button 
                    variant="ghost" 
                    className="text-[#6f0d44] hover:text-white hover:bg-[#6f0d44] active:bg-[#8b1155] p-0 group flex items-center transition-all duration-300"
                    asChild
                  >
                    <a href={treatment.link}>
                      <span className="group-hover:mr-2 transition-all">Saiba mais</span>
                      <span className="group-hover:translate-x-1 transition-transform inline-block ml-1">→</span>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}