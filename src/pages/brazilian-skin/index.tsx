import { motion } from "framer-motion";
import { TreatmentCard } from "@/components/treatments/treatment-card";

const brazilianSkinTreatments = [
  {
    title: "Pele Morena",
    description: "Tratamentos específicos para peles morenas, focando em uniformização do tom e controle da oleosidade com segurança.",
    badge: "Personalizado",
    icon: "✨",
    link: "/brazilian-skin/morena",
    index: 0
  },
  {
    title: "Pele Miscigenada",
    description: "Protocolos adaptados para as características únicas da pele brasileira miscigenada, com foco em luminosidade e textura.",
    badge: "Especializado",
    icon: "🌟",
    link: "/brazilian-skin/miscigenada",
    index: 1
  },
  {
    title: "Fotoenvelhecimento",
    description: "Tratamento do envelhecimento causado pela exposição solar, comum em peles brasileiras, com tecnologias seguras e eficazes.",
    badge: "Avançado",
    icon: "☀️",
    link: "/brazilian-skin/fotoenvelhecimento",
    index: 2
  },
  {
    title: "Manchas Solares",
    description: "Tratamento especializado para manchas causadas pelo sol, com protocolos específicos para peles brasileiras.",
    badge: "Premium",
    icon: "⭐",
    link: "/brazilian-skin/manchas-solares",
    index: 3
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
            Tratamentos desenvolvidos especialmente para as características únicas da pele brasileira, 
            respeitando nossa diversidade e particularidades. Protocolos personalizados que 
            consideram fototipos, miscigenação e necessidades específicas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {brazilianSkinTreatments.map((treatment) => (
            <TreatmentCard key={treatment.title} {...treatment} />
          ))}
        </div>
      </div>
    </section>
  );
}