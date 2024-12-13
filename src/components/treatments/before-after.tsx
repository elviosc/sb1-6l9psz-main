import { motion } from "framer-motion";

interface BeforeAfterProps {
  images: {
    before: string;
    after: string;
  }[];
}

export function BeforeAfter({ images }: BeforeAfterProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#6f0d44] mb-4">
            Resultados Reais
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Confira os resultados obtidos por nossos pacientes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="block text-sm text-[#6f0d44] mb-2">Antes</span>
                  <img
                    src={image.before}
                    alt="Antes do tratamento"
                    className="rounded-lg w-full aspect-square object-cover"
                  />
                </div>
                <div>
                  <span className="block text-sm text-[#6f0d44] mb-2">Depois</span>
                  <img
                    src={image.after}
                    alt="Depois do tratamento"
                    className="rounded-lg w-full aspect-square object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}