import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Newspaper, ExternalLink } from "lucide-react";

const pressItems = [
  {
    title: "Entrevista: Cuidados com a Pele no Verão",
    publication: "Revista CARAS",
    date: "Janeiro 2024",
    link: "#"
  },
  {
    title: "Novos Tratamentos em Dermatologia",
    publication: "Programa Bem-Estar (TV Globo)",
    date: "Dezembro 2023",
    link: "#"
  },
  {
    title: "Harmonização Facial: Mitos e Verdades",
    publication: "Fantástico",
    date: "Novembro 2023",
    link: "#"
  }
];

function PressPage() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#fff5f8]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#6f0d44] mb-6">
            Imprensa
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Acompanhe as aparições da Dra. Luciana Maluf na mídia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pressItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white/50 backdrop-blur-sm border-none hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Newspaper className="h-8 w-8 text-[#6f0d44] mb-4" />
                  <CardTitle className="text-[#6f0d44]">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-gray-600">{item.publication}</p>
                    <p className="text-sm text-gray-500">{item.date}</p>
                    <a 
                      href={item.link}
                      className="inline-flex items-center text-[#6f0d44] hover:text-[#8b1155] mt-4 group"
                    >
                      <span className="group-hover:mr-2 transition-all">Ver matéria</span>
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { PressPage };