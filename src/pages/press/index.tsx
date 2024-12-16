import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface PressItem {
  title: string;
  image: string;
  link?: string;
  video?: string;
  publishedAt: string;
}

const pressItems: PressItem[] = [
  {
    title: "Epilação a laser em peles étnicas: os benefícios dessa tecnologia",
    image: "https://lucianamaluf.com.br/wp-content/uploads/2024/04/saude75.png",
    link: "https://lucianamaluf.com.br/wp-content/uploads/2024/04/Saude-1585.pdf",
    publishedAt: "12/04/2024 às 11:22"
  },
  {
    title: "Journal of Dermatology & Cosmetology",
    image: "https://lucianamaluf.com.br/wp-content/uploads/2023/09/Journal-of-Dermatology-Cosmetology-Agosto-2023.jpg",
    link: "https://lucianamaluf.com.br/wp-content/uploads/2023/09/Trab-I.pdf",
    publishedAt: "11/09/2023 às 14:57"
  },
  {
    title: "cosmetics-10-00105_230718_212455",
    image: "https://lucianamaluf.com.br/wp-content/uploads/2023/07/cosmetics.png",
    publishedAt: "21/07/2023 às 19:06"
  },
  {
    title: "Journal of Dermatology & Cosmetology",
    image: "https://lucianamaluf.com.br/wp-content/uploads/2023/06/artigo-MedCrave-Dra-Luciana-Maluf.jpg",
    publishedAt: "16/06/2023 às 10:45"
  },
  {
    title: "Portal & Revista Influence 29/11",
    image: "https://lucianamaluf.com.br/wp-content/uploads/2023/06/artigo-MedCrave-Dra-Luciana-Maluf.jpg",
    publishedAt: "09/12/2020 às 14:39"
  },
  {
    title: "Revista semanal MAIS INFLUENTE digital 22/11",
    image: "https://lucianamaluf.com.br/wp-content/uploads/2020/11/Revista-semanal-MAIS-INFLUENTE-digital-Dra_Luciana_Maluf.jpg",
    publishedAt: "22/11/2020 às 10:08"
  },
  {
    title: "Artigo Revista Caras Dez/2019",
    image: "https://lucianamaluf.com.br/wp-content/uploads/2020/01/Cópia-de-Caras.png",
    publishedAt: "23/01/2020 às 15:34"
  },
  {
    title: "Artigo Revista Caras Out/2019",
    image: "https://lucianamaluf.com.br/wp-content/uploads/2020/01/Caras.png",
    publishedAt: "23/01/2020 às 15:33"
  },
  {
    title: "Artigo Revista Caras Mai/2019",
    image: "https://lucianamaluf.com.br/wp-content/uploads/2019/05/Tratada.png",
    publishedAt: "15/05/2019 às 14:30"
  },
  {
    title: "Artigo Revista Caras Fev/2019",
    image: "https://lucianamaluf.com.br/wp-content/uploads/2019/02/WhatsApp-Image-2019-02-03-at-17.30.11.jpeg",
    publishedAt: "04/02/2019 às 16:08"
  },
  {
    title: "Programa Amaury Jr. Ago/2017",
    image: "https://img.youtube.com/vi/6mgr8GjDKDs/maxresdefault.jpg",
    video: "https://www.youtube.com/embed/6mgr8GjDKDs",
    publishedAt: "28/08/2017 às 18:18"
  },
  {
    title: "Artigo revista Caras Fev/2017",
    image: "https://lucianamaluf.com.br/wp-content/uploads/2017/08/EnvelhecimentoMãoPescoço2-1.jpg",
    link: "http://lucianamaluf.com.br/wp-content/uploads/2017/05/Caras-Os-meses-frios-procedimentos-estéticos.pdf",
    publishedAt: "31/05/2017 às 16:19"
  },
  {
    title: "Artigo Revista Caras Jan/2017",
    image: "http://lucianamaluf.com.br/wp-content/uploads/2017/03/Aprenda-a-defender-sua-pele-das-extravagancias-e-exessos-do-verao-new.jpg",
    link: "http://lucianamaluf.com.br/wp-content/uploads/2017/03/Aprenda-a-defender-sua-pele-das-extravagancias-e-exessos-do-verao-new.jpg",
    publishedAt: "04/03/2017 às 02:06"
  }
];

export default function PressPage() {
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
            Confira as últimas aparições da Dra. Luciana Maluf na mídia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pressItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  {item.video ? (
                    <iframe
                      src={item.video}
                      className="absolute inset-0 w-full h-full"
                      allowFullScreen
                      title={item.title}
                    />
                  ) : (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    />
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-[#6f0d44] mb-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">{item.publishedAt}</p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6f0d44] hover:text-[#6f0d44]/80 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
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
