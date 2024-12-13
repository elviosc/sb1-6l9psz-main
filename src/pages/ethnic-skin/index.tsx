import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Award, Users, Star } from "lucide-react";

const ethnicSkinTreatments = [
  {
    title: "Acne em Peles Étnicas",
    description: "Tratamento especializado para acne em peles melanodérmicas, evitando manchas e cicatrizes queloides.",
    icon: Star,
    href: "/ethnic-skin/acne"
  },
  {
    title: "Melasma",
    description: "Tratamento personalizado para manchas escuras na pele, comum em peles étnicas.",
    icon: Star,
    href: "/ethnic-skin/melasma"
  },
  {
    title: "Manchas e Hiperpigmentação",
    description: "Tratamentos seguros e eficazes para uniformização do tom da pele.",
    icon: Star,
    href: "/ethnic-skin/hyperpigmentation"
  },
  {
    title: "Cicatrizes e Queloides",
    description: "Protocolos específicos para prevenção e tratamento de cicatrizes.",
    icon: Star,
    href: "/ethnic-skin/scars"
  }
];

export function EthnicSkinPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 w-full h-full">
          <div className="relative w-full h-full">
            <img
              src="https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5938-scaled.jpg"
              alt="Tratamentos para Peles Étnicas"
              className="absolute w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#6f0d44]/95 to-[#6f0d44]/80" />
          </div>
        </div>

        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 text-white mb-6">
              <Award className="h-5 w-5" />
              <span className="text-sm">Especialista em Peles Étnicas</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light mb-6 text-white tracking-tight">
              Tratamento de
              <br />
              <span className="font-semibold">Peles Étnicas</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Tratamentos especializados e personalizados para peles negras e étnicas, 
              com protocolos específicos que respeitam as características únicas de cada tipo de pele.
            </p>
            <Button
              size="lg"
              className="bg-white text-[#6f0d44] hover:bg-white/90 text-base md:text-lg px-8"
              asChild
            >
              <a href="/contact/appointment">
                Agende sua Consulta
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-gradient-to-b from-white to-[#fff5f8]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto mb-16"
          >
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              A pele é o órgão que nos envolve e que também reflete nossas origens culturais, 
              a influência do meio ambiente e de nossos hábitos ao longo dos tempos. Cada grupo 
              étnico guarda suas peculiaridades genéticas na pele e nos cabelos – o que requer 
              cuidados específicos, grande conhecimento e experiência na aplicação dos tratamentos 
              necessários.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              A Dra. Luciana Maluf tem vários anos de treinamento avançado em laser e demais 
              terapias para tratamento de estrias, manchas e flacidez em peles de diversas etnias. 
              Recentemente esteve em Washington, nos EUA, para aprimorar sua técnica de tratamento 
              a laser na 'Cultura Clinic', do Dr. Eliot Battle, especialista que é referência 
              internacional no tratamento de peles étnicas.
            </p>
          </motion.div>

          {/* Treatments Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {ethnicSkinTreatments.map((treatment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white/50 backdrop-blur-sm border-none hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <treatment.icon className="h-8 w-8 text-[#6f0d44] mb-4" />
                    <CardTitle className="text-[#6f0d44]">{treatment.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">{treatment.description}</p>
                    <Button 
                      variant="ghost" 
                      className="text-[#6f0d44] hover:text-[#8b1155] p-0 group"
                      asChild
                    >
                      <a href={treatment.href}>
                        <span className="group-hover:mr-2 transition-all">Saiba mais</span>
                        <span className="group-hover:translate-x-1 transition-transform inline-block ml-1">→</span>
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Expertise Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#6f0d44] rounded-lg transform rotate-3" />
                <img
                  src="https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5927-scaled.jpg"
                  alt="Dra. Luciana Maluf - Especialista em Peles Étnicas"
                  className="relative rounded-lg shadow-xl transform -rotate-3 transition-transform hover:rotate-0 duration-500 w-full"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#6f0d44]">
                  Experiência Internacional
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  A aplicação de laser para retirada de manchas e pelos em peles negras 
                  requer técnica minuciosa para que os resultados sejam ótimos. Nossa equipe 
                  possui treinamento especializado e utiliza as mais avançadas tecnologias 
                  para garantir resultados seguros e eficazes.
                </p>
                <Button
                  className="bg-[#6f0d44] hover:bg-[#6f0d44]/90"
                  asChild
                >
                  <a href="/contact/appointment">
                    Agende uma Avaliação
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}