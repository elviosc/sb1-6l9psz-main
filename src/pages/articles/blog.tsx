import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

// Blog posts data
const posts = [
  {
    title: "Cuidados com a pele durante o verão",
    description: "Descubra as melhores práticas para proteger sua pele durante os meses mais quentes do ano.",
    image: "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?q=80&w=800",
    date: "2024-12-16",
    category: "Proteção Solar",
    readTime: "5 min"
  },
  {
    title: "Tratamentos para manchas na pele",
    description: "Conheça os tratamentos mais eficazes para diferentes tipos de manchas e hiperpigmentação.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800",
    date: "2024-12-14",
    category: "Tratamentos",
    readTime: "7 min"
  },
  {
    title: "Rotina de skincare: guia completo",
    description: "Um guia passo a passo para criar uma rotina de cuidados com a pele eficiente e personalizada.",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800",
    date: "2024-12-10",
    category: "Skincare",
    readTime: "10 min"
  },
  {
    title: "Prevenção do envelhecimento precoce",
    description: "Dicas e recomendações para manter a pele jovem e saudável por mais tempo.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800",
    date: "2024-12-08",
    category: "Anti-aging",
    readTime: "6 min"
  },
  {
    title: "Acne: causas e tratamentos",
    description: "Entenda as principais causas da acne e conheça os tratamentos mais indicados para cada caso.",
    image: "https://images.unsplash.com/photo-1612528443702-f6741f70a049?q=80&w=800",
    date: "2024-12-05",
    category: "Acne",
    readTime: "8 min"
  },
  {
    title: "Hidratação para peles sensíveis",
    description: "Aprenda a escolher os melhores produtos e técnicas para hidratar peles sensíveis.",
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=800",
    date: "2024-12-01",
    category: "Hidratação",
    readTime: "5 min"
  }
];

export function BlogPage() {
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
            Blog
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Fique por dentro das últimas novidades em dermatologia e cuidados com a pele
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white/50 backdrop-blur-sm border-none hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-[#6f0d44]/10 text-[#6f0d44] hover:bg-[#6f0d44]/20">
                      {post.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-[#6f0d44] text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {format(new Date(post.date), "d 'de' MMMM, yyyy", { locale: ptBR })}
                    </span>
                    <Button 
                      variant="ghost" 
                      className="text-[#6f0d44] hover:text-[#8b1155] p-0 group"
                    >
                      <span className="group-hover:mr-2 transition-all">Ler mais</span>
                      <span className="group-hover:translate-x-1 transition-transform inline-block ml-1">→</span>
                    </Button>
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
