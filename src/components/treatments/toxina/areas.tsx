import { motion } from "framer-motion";

const applicationAreas = [
  {
    name: "Testa",
    description: "Suavização de linhas horizontais",
    image: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5915-scaled.jpg"
  },
  {
    name: "Região Entre as Sobrancelhas",
    description: "Redução das linhas de expressão verticais",
    image: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5927-scaled.jpg"
  },
  {
    name: "Região dos Olhos",
    description: "Suavização dos pés de galinha",
    image: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5938-scaled.jpg"
  },
  {
    name: "Nariz",
    description: "Correção do nariz em movimento",
    image: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_9160-scaled.jpg"
  }
];

export function ToxinaAreas() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-[#6f0d44] mb-6">
            Áreas de Aplicação
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A toxina botulínica pode ser aplicada em diferentes regiões da face, 
            sempre com foco em resultados naturais e harmoniosos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {applicationAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={area.image}
                  alt={area.name}
                  className="w-full aspect-square object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6f0d44]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-[#6f0d44] mb-2">
                {area.name}
              </h3>
              <p className="text-gray-600">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}