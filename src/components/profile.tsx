import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap, Stethoscope, Newspaper, Globe, Building2, Users, Medal, Presentation } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const achievements = [
  {
    icon: GraduationCap,
    title: "Formação Acadêmica",
    items: [
      "Medicina pela PUC de Campinas",
      "Especialização em Clínica Geral pela Santa Casa de Misericórdia de São Paulo",
      "Especialização em Dermatologia pela Faculdade de Medicina do ABC",
      "Fellow com Dr. Eliot Battle em Washington DC (2014)"
    ]
  },
  {
    icon: Award,
    title: "Certificações",
    items: [
      "Membro da Sociedade Brasileira de Dermatologia (SBD)",
      "Membro da Sociedade Brasileira de Cirurgia Dermatológica (SBCD)",
      "Membro da American Academy of Dermatology (AAD)",
      "CREMESP 113.699 e RQE 34.552"
    ]
  },
  {
    icon: Building2,
    title: "Experiência",
    items: [
      "Médica Dermatologista no Hospital Sírio Libanês por 10 anos",
      "Médica Preceptora do Ambulatório de Laserterapia - FMABC por 9 anos",
      "Participação ativa em congressos internacionais",
      "Mais de 20 anos de experiência clínica"
    ]
  },
  {
    icon: Newspaper,
    title: "Mídia e Publicações",
    items: [
      "Colunista da Revista CARAS",
      "Participações no Bem-Estar e Fantástico (TV Globo)",
      "Programa Consulta ao Doutor (RIT TV)",
      "Diversos artigos publicados em revistas científicas"
    ]
  }
];

const publications = [
  {
    title: "Artigos Científicos",
    items: [
      "Campos V, Maluf L, et al. Estudo Comparativo: Tratamento do Rejuvenescimento de Mãos utilizando a Luz Intensa Pulsada isolada ou associada ao Laser Fracionado Não Ablativo 1340nm. SurgCosmetDermatol 2016;8(1): 22-7.",
      "Chan I Lym, Cohen S, et al. Characteristics and management of Asian skin. International Journal of Dermatology, 2018.",
      "Maluf LC, Barros JA, Machado Filho CD. Mastocitose. An Bras Dermatol. 2009;84(3):213-25",
      "Livro: Tratado de Cirurgia Dermatológica, Cosmiatria e Laser (2013) - Cap.2: Assepsia, Antissepsia e Esterilização."
    ]
  }
];

const lectures = [
  "Aula de 'Peles Étnicas' para o Curso de Especialização em Dermatocosmiatria, FMABC (2019)",
  "Melanoses, Ceratoses Seborréicas Planas e Leucodermias - 10º Simpósio de Cosmiatria e Laser da SBD (2017)",
  "Peeling em Região Periorbitária - VII Simpósio de Cirurgia Periorbital (2017)",
  "Luz Intensa Pulsada - Curso de Especialização em Dermatocosmiatria, FMABC (2015)"
];

export function Profile() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#fff5f8]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#6f0d44] mb-6">
            Perfil Profissional
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            A Dra. Lu, como é carinhosamente chamada por seus pacientes e amigos, é paulistana, 
            casada, e médica há 20 anos, com especialização em dermatologia e clínica médica geral.
          </p>
        </motion.div>

        {/* Profile Image and Introduction */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#6f0d44] rounded-lg transform rotate-3" />
            <img
              src="https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5938-scaled.jpg"
              alt="Dra. Luciana Maluf"
              className="relative rounded-lg shadow-xl transform -rotate-3 transition-transform hover:rotate-0 duration-500 w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="prose prose-lg">
              <p className="text-gray-600 leading-relaxed">
                Mais do que uma especialização da medicina, a dermatologia surgiu como uma forma 
                de cuidar e ajudar as pessoas num aspecto considerado sutil, mas que é extremamente 
                importante para a saúde física, emocional e social: a autoestima.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Determinada, detalhista, perfeccionista. Predicados que a levaram a procurar os 
                melhores centros de dermatologia nacionais e internacionais para especializações 
                em técnicas como o uso dos diversos tipos de lasers terapêuticos e a farmacologia 
                da moderna cosmiatria.
              </p>
              <p className="text-gray-600 leading-relaxed">
                A Dra. Luciana Maluf divide seu tempo entre seus pacientes na clínica no Itaim Bibi, 
                em congressos e cursos internacionais, que a proporcionam a reciclagem de conhecimentos 
                e aperfeiçoamentos de suas técnicas.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white/50 backdrop-blur-sm border-none hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <achievement.icon className="h-6 w-6 text-[#6f0d44]" />
                    <CardTitle className="text-[#6f0d44]">
                      {achievement.title}
                    </CardTitle>
                  </div>
                  <CardDescription>
                    <ul className="space-y-2">
                      {achievement.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-gray-600">
                          <span className="text-[#6f0d44] mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Publications and Lectures */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-6 w-6 text-[#6f0d44]" />
              <h2 className="text-2xl font-bold text-[#6f0d44]">Publicações Selecionadas</h2>
            </div>
            <div className="space-y-4">
              {publications[0].items.map((item, index) => (
                <p key={index} className="text-gray-600 flex items-start gap-2">
                  <span className="text-[#6f0d44] mt-1">•</span>
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Presentation className="h-6 w-6 text-[#6f0d44]" />
              <h2 className="text-2xl font-bold text-[#6f0d44]">Palestras e Cursos Destacados</h2>
            </div>
            <div className="space-y-4">
              {lectures.map((lecture, index) => (
                <p key={index} className="text-gray-600 flex items-start gap-2">
                  <span className="text-[#6f0d44] mt-1">•</span>
                  <span>{lecture}</span>
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}