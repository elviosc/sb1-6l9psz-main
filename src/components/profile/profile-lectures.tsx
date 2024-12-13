import { motion } from "framer-motion";
import { Presentation } from "lucide-react";

const lectures = [
  "Aula de 'Peles Étnicas' para o Curso de Especialização em Dermatocosmiatria, FMABC (jan/2019)",
  "Aula de 'Melanoses, Ceratoses Seborréicas Planas e Leucodermias' - 10º Simpósio de Cosmiatria e Laser da SBD (nov/2017)",
  "Curso Prático: Laser 3 e Laser 4 - XXIX Congresso Brasileiro de Cirurgia Dermatológica (jun/2017)",
  "Aula de 'Peeling em Região Periorbitária' - VII Simpósio de Cirurgia Periorbital (set/2017)",
  "Aula Teórico-Prática de Laser - Curso de Especialização em Dermatocosmiatria, FMABC (maio/2016)",
  "Aula de 'Luz Intensa Pulsada' - Curso de Especialização em Dermatocosmiatria, FMABC (jul/2015)"
];

export function ProfileLectures() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-white/50 backdrop-blur-sm rounded-lg p-8"
    >
      <div className="flex items-center gap-3 mb-6">
        <Presentation className="h-6 w-6 text-[#6f0d44]" />
        <h2 className="text-2xl font-bold text-[#6f0d44]">Palestras e Cursos Destacados</h2>
      </div>
      <div className="space-y-4">
        {lectures.map((lecture, index) => (
          <p key={index} className="text-gray-600 flex items-start gap-2">
            <span className="text-[#6f0d44] mt-1">•</span>
            <span>{lecture}</span>
          </p>
        ))}
      </div>
    </motion.div>
  );
}