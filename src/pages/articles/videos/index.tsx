import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Calendar } from "lucide-react";

const videos = [
  {
    title: "Cuidados com a Pele no Verão",
    description: "Dicas essenciais para proteger sua pele durante o verão.",
    date: "Janeiro 2024",
    thumbnail: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5915-scaled.jpg",
    videoUrl: "#"
  },
  {
    title: "Harmonização Facial Natural",
    description: "Como alcançar resultados naturais em procedimentos estéticos.",
    date: "Dezembro 2023",
    thumbnail: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5927-scaled.jpg",
    videoUrl: "#"
  },
  {
    title: "Tratamentos para Manchas",
    description: "Conheça as principais opções para tratar manchas na pele.",
    date: "Novembro 2023",
    thumbnail: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5938-scaled.jpg",
    videoUrl: "#"
  }
];

export function VideosPage() {
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
            Vídeos
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Assista a conteúdos exclusivos sobre dermatologia e cuidados com a pele
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white/50 backdrop-blur-sm border-none hover:shadow-lg transition-all duration-300">
                <div className="relative group">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full aspect-video object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-[#6f0d44]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-[#6f0d44]">{video.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{video.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    {video.date}
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