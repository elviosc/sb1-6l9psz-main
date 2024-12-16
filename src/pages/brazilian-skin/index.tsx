import { motion } from "framer-motion";
import { TreatmentCard } from "@/components/treatments/treatment-card";

const brazilianSkinTreatments = [
  {
    title: "Pele Morena",
    description: "Tratamentos específicos para peles morenas, considerando suas características únicas.",
    image: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/pele-morena.jpg",
    href: "/brazilian-skin/morena"
  },
  {
    title: "Pele Miscigenada",
    description: "Cuidados especializados para peles miscigenadas, respeitando sua diversidade.",
    image: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/pele-miscigenada.jpg",
    href: "/brazilian-skin/miscigenada"
  },
  {
    title: "Fotoenvelhecimento",
    description: "Tratamento e prevenção do envelhecimento causado pela exposição solar.",
    image: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/fotoenvelhecimento.jpg",
    href: "/brazilian-skin/fotoenvelhecimento"
  },
  {
    title: "Manchas Solares",
    description: "Tratamentos avançados para manchas causadas pela exposição solar.",
    image: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/manchas-solares.jpg",
    href: "/brazilian-skin/manchas-solares"
  }
];

export function BrazilianSkinPage() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#fff5f8]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#6f0d44] mb-6">
            Peles Brasileiras
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Tratamentos especializados para as características únicas das peles brasileiras.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {brazilianSkinTreatments.map((treatment, index) => (
            <TreatmentCard
              key={treatment.href}
              {...treatment}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}