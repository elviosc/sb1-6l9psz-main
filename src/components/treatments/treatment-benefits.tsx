import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface TreatmentBenefitsProps {
  benefits: string[];
}

export function TreatmentBenefits({ benefits }: TreatmentBenefitsProps) {
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
            Benefícios do Tratamento
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 bg-white/50 backdrop-blur-sm rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <CheckCircle2 className="w-6 h-6 text-[#6f0d44] mt-1 flex-shrink-0" />
              <span className="text-gray-600">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}