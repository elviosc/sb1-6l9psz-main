import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const materials = [
  {
    image: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5915-scaled.jpg",
    title: "Guia Completo de Skincare",
    description: "Descubra os segredos para uma pele radiante com nosso protocolo personalizado de cuidados diários."
  },
  {
    image: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5927-scaled.jpg",
    title: "Rejuvenescimento Facial",
    description: "Conheça as técnicas mais avançadas para preservar a jovialidade da sua pele de forma natural."
  },
  {
    image: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_9160-scaled.jpg",
    title: "Harmonização Facial",
    description: "Entenda como realçar sua beleza natural com procedimentos minimamente invasivos."
  }
];

export function Materials() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#fff5f3]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#6f0d44] mb-4">
            Conteúdo Exclusivo
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Mantenha-se atualizado com nossos materiais especialmente desenvolvidos para te ajudar no dia a dia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {materials.map((material, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={material.image}
                  alt={material.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#6f0d44] mb-2">
                {material.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{material.description}</p>
              <Button 
                variant="ghost" 
                className="text-[#6f0d44] hover:text-[#8b1155] p-0 group"
              >
                <span className="group-hover:mr-2 transition-all">Leia mais</span>
                <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}