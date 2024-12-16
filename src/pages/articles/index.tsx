import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Newspaper, Video, BookOpen } from "lucide-react";

const sections = [
  {
    title: "Imprensa",
    description: "Confira as aparições da Dra. Luciana Maluf na mídia e entrevistas.",
    icon: Newspaper,
    href: "/articles/press"
  },
  {
    title: "Vídeos",
    description: "Assista a vídeos informativos sobre procedimentos e cuidados com a pele.",
    icon: Video,
    href: "/articles/videos"
  },
  {
    title: "Blog",
    description: "Leia artigos sobre dermatologia, tratamentos e cuidados com a pele.",
    icon: BookOpen,
    href: "/articles/blog/all"
  }
];

export function ArticlesPage() {
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
            Artigos e Mídia
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Mantenha-se informado com conteúdo exclusivo sobre dermatologia e cuidados com a pele
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white/50 backdrop-blur-sm border-none hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <section.icon className="h-8 w-8 text-[#6f0d44] mb-4" />
                  <CardTitle className="text-[#6f0d44]">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{section.description}</p>
                  <Button 
                    variant="ghost" 
                    className="text-[#6f0d44] hover:text-[#8b1155] p-0 group"
                    asChild
                  >
                    <a href={section.href}>
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