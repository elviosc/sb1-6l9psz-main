import { motion } from "framer-motion";

export function AestheticIntro() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto text-center mb-16"
    >
      <p className="text-lg text-gray-600 leading-relaxed">
        Depois de uma anamnese completa, que envolverá a análise de seus hábitos, cuidados 
        e histórico familiar, além de uma cuidadosa análise com o uso de equipamentos para 
        um perfeito diagnóstico, vamos proceder ao seu plano de tratamento personalizado.
      </p>
    </motion.div>
  );
}