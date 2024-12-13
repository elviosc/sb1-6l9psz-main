import { motion } from "framer-motion";

export function ProfileHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl mx-auto text-center mb-16"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-[#6f0d44] mb-6">
        Perfil Profissional
      </h1>
      <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
        A Dra. Lu, como é carinhosamente chamada por seus pacientes e amigos, é paulistana, 
        casada, e médica há 20 anos, com especialização em dermatologia e clínica médica geral.
      </p>
    </motion.div>
  );
}