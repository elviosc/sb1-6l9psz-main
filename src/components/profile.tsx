import { Award, BookOpen, GraduationCap, Newspaper, Building2, Presentation } from "lucide-react";
import { Card } from "@/components/ui/card";

const achievements = [
  {
    icon: Award,
    title: "Especialização",
    items: ["Dermatologia Clínica e Cirúrgica"]
  },
  {
    icon: BookOpen,
    title: "Formação",
    items: ["Medicina - Universidade de São Paulo (USP)"]
  },
  {
    icon: GraduationCap,
    title: "Pós-Graduação",
    items: ["Dermatologia - Hospital das Clínicas FMUSP"]
  },
  {
    icon: Newspaper,
    title: "Publicações",
    items: ["Artigos em revistas científicas internacionais"]
  },
  {
    icon: Building2,
    title: "Clínica",
    items: ["Atendimento personalizado em ambiente moderno"]
  },
  {
    icon: Presentation,
    title: "Palestras",
    items: ["Participação em congressos nacionais e internacionais"]
  }
];

export function Profile() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#6f0d44] mb-8">Dra. Luciana Maluf</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="p-6">
              <achievement.icon className="h-8 w-8 text-[#6f0d44] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
              <ul>
                {achievement.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-600">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}