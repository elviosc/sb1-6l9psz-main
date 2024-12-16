import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function FiosPDOAreas() {
  const areas = [
    "Face",
    "Pescoço",
    "Papada",
    "Braços",
    "Abdômen",
    "Coxas",
    "Glúteos",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-[#6f0d44] mb-6">
            Áreas de Aplicação
          </h2>
          <p className="text-lg text-gray-600">
            Os fios de PDO podem ser aplicados em diversas áreas do corpo, proporcionando
            lifting e rejuvenescimento natural.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {areas.map((area, index) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/50 backdrop-blur-sm p-4 rounded-lg flex items-center gap-3"
            >
              <CheckCircle2 className="w-5 h-5 text-[#6f0d44]" />
              <span className="text-gray-700">{area}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
