import { motion } from "framer-motion";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const images = [
  {
    src: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5915-scaled.jpg",
    alt: "Recepção da Clínica"
  },
  {
    src: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5927-scaled.jpg",
    alt: "Sala de Procedimentos"
  },
  {
    src: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5938-scaled.jpg",
    alt: "Consultório"
  },
  {
    src: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_9160-scaled.jpg",
    alt: "Sala de Laser"
  },
  {
    src: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/CCHI8115.jpg",
    alt: "Área de Espera"
  }
];

export function ClinicGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-[#fff5f8] to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#6f0d44] mb-6">
            Conheça Nossa Estrutura
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Um ambiente moderno e acolhedor, projetado para proporcionar a melhor 
            experiência em tratamentos dermatológicos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group cursor-pointer"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-[#6f0d44]/0 group-hover:bg-[#6f0d44]/20 transition-colors duration-300 rounded-lg" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-medium text-lg">{image.alt}</p>
                  </div>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto rounded-lg"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}