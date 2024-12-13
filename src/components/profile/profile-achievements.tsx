import { motion } from "framer-motion";
import { Award, GraduationCap, Building2, Newspaper } from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

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

export function ProfileAchievements() {
  return (
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
              <div className="space-y-2">
                {achievement.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-2 text-gray-600">
                    <span className="text-[#6f0d44] mt-1">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </CardHeader>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}