import { motion } from "framer-motion";
import { TreatmentCard } from "@/components/treatments/treatment-card";

const treatments = [
  {
    title: "Toxina Botulínica",
    description: "Tratamento para rugas dinâmicas e linhas de expressão, proporcionando um resultado natural e harmonioso.",
    image: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5915-scaled.jpg",
    href: "/treatments/toxina-botulinica"
  },
  {
    title: "Bioestimuladores",
    description: "Estimulação natural da produção de colágeno para rejuvenescimento e firmeza da pele.",
    image: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5927-scaled.jpg",
    href: "/treatments/bioestimuladores"
  },
  {
    title: "Preenchimento",
    description: "Restauração de volume e contornos faciais com ácido hialurônico de última geração.",
    image: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_9160-scaled.jpg",
    href: "/treatments/preenchimento"
  },
  {
    title: "Fios de PDO",
    description: "Lifting não cirúrgico com fios de PDO para sustentação e rejuvenescimento facial.",
    image: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5938-scaled.jpg",
    href: "/treatments/fios-pdo"
  },
  {
    title: "Laser e Tecnologias",
    description: "Tratamentos avançados com laser e outras tecnologias para diversas condições da pele.",
    image: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/CCHI8115.jpg",
    href: "/treatments/laser"
  },
  {
    title: "Harmonização Facial",
    description: "Conjunto de procedimentos para harmonização e equilíbrio das características faciais.",
    image: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5938-scaled.jpg",
    href: "/treatments/harmonizacao-facial"
  }
];

export function TreatmentsPage() {
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
            Nossos Tratamentos
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Oferecemos uma ampla gama de tratamentos dermatológicos e estéticos, 
            utilizando as técnicas mais avançadas e tecnologias de última geração.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <TreatmentCard
              key={index}
              {...treatment}
            />
          ))}
        </div>
      </div>
    </section>
  );
}