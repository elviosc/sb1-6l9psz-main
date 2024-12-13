import { motion } from "framer-motion";

export function ProfileIntro() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-[#6f0d44] rounded-lg transform rotate-3" />
        <img
          src="https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5938-scaled.jpg"
          alt="Dra. Luciana Maluf"
          className="relative rounded-lg shadow-xl transform -rotate-3 transition-transform hover:rotate-0 duration-500 w-full"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <div className="prose prose-lg">
          <p className="text-gray-600 leading-relaxed">
            Mais do que uma especialização da medicina, a dermatologia surgiu como uma forma 
            de cuidar e ajudar as pessoas num aspecto considerado sutil, mas que é extremamente 
            importante para a saúde física, emocional e social: a autoestima.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Determinada, detalhista, perfeccionista. Predicados que a levaram a procurar os 
            melhores centros de dermatologia nacionais e internacionais para especializações 
            em técnicas como o uso dos diversos tipos de lasers terapêuticos e a farmacologia 
            da moderna cosmiatria.
          </p>
          <p className="text-gray-600 leading-relaxed">
            No exercício de seu trabalho como médica dermatologista, a boa clínica médica 
            (sua primeira especialização) está sempre atenta. Conhecimento, experiência e 
            protocolo criterioso para estabelecer o diagnóstico são os critérios que antecedem 
            o planejamento terapêutico adequado a cada um de seus pacientes.
          </p>
        </div>
      </motion.div>
    </div>
  );
}