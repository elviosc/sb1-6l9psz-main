import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const results = [
  {
    before: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5915-scaled.jpg",
    after: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5927-scaled.jpg",
    area: "Região dos Olhos"
  },
  {
    before: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5938-scaled.jpg",
    after: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_9160-scaled.jpg",
    area: "Testa"
  }
];

export function ToxinaGallery() {
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
          <h2 className="text-3xl font-bold text-[#6f0d44] mb-6">
            Resultados Reais
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Confira os resultados obtidos por nossos pacientes com o tratamento 
            de toxina botulínica.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-4 cursor-pointer"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="block text-sm text-[#6f0d44] mb-2">Antes</span>
                      <img
                        src={result.before}
                        alt={`Antes - ${result.area}`}
                        className="rounded-lg w-full aspect-square object-cover"
                      />
                    </div>
                    <div>
                      <span className="block text-sm text-[#6f0d44] mb-2">Depois</span>
                      <img
                        src={result.after}
                        alt={`Depois - ${result.area}`}
                        className="rounded-lg w-full aspect-square object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-center text-[#6f0d44] font-medium">
                    {result.area}
                  </p>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <span className="block text-sm text-[#6f0d44] mb-2">Antes</span>
                    <img
                      src={result.before}
                      alt={`Antes - ${result.area}`}
                      className="rounded-lg w-full"
                    />
                  </div>
                  <div>
                    <span className="block text-sm text-[#6f0d44] mb-2">Depois</span>
                    <img
                      src={result.after}
                      alt={`Depois - ${result.area}`}
                      className="rounded-lg w-full"
                    />
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}