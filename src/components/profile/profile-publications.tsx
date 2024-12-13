import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const publications = [
  "Campos V, Maluf L, et al. Estudo Comparativo: Tratamento do Rejuvenescimento de Mãos utilizando a Luz Intensa Pulsada isolada ou associada ao Laser Fracionado Não Ablativo 1340nm. SurgCosmetDermatol 2016;8(1): 22-7.",
  "Chan I Lym, Cohen S, et al. Characteristics and management of Asian skin. International Journal of Dermatology, 2018.",
  "Maluf LC, Barros JA, Machado Filho CD. Mastocitose. An Bras Dermatol. 2009;84(3):213-25",
  "Livro: Tratado de Cirurgia Dermatológica, Cosmiatria e Laser (2013) - Cap.2: Assepsia, Antissepsia e Esterilização.",
  "Participação como Revisora Médica da Tradução pela Sociedade Brasileira de Cirurgia Dermatológica dos informativos da SkinCancer Foundation (2011)",
  "Chan I Lym, Simão Cohen, et al: Characteristics of Asian skin–revision (Journal of Dermatology & Cosmetology – MedCrave, 2018)"
];

export function ProfilePublications() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-white/50 backdrop-blur-sm rounded-lg p-8 mb-8"
    >
      <div className="flex items-center gap-3 mb-6">
        <BookOpen className="h-6 w-6 text-[#6f0d44]" />
        <h2 className="text-2xl font-bold text-[#6f0d44]">Publicações Científicas</h2>
      </div>
      <div className="space-y-4">
        {publications.map((publication, index) => (
          <p key={index} className="text-gray-600 flex items-start gap-2">
            <span className="text-[#6f0d44] mt-1">•</span>
            <span>{publication}</span>
          </p>
        ))}
      </div>
    </motion.div>
  );
}