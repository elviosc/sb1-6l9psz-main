import { motion } from "framer-motion";

export function AestheticInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-white/50 backdrop-blur-sm rounded-lg p-8 mb-16"
    >
      <p className="text-gray-600 leading-relaxed">
        Todos os procedimentos são utilizados individualmente ou em combinação, de acordo 
        com o diagnóstico e plano de tratamento personalizado para: manchas, flacidez, 
        rejuvenescimento, anti-aging, danos solares, cicatrizes de acne, cicatrizes 
        pós cirúrgicas, estrias, celulite etc.
      </p>
    </motion.div>
  );
}