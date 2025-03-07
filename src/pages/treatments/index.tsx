import { motion } from "framer-motion";
import { TreatmentCard } from "@/components/treatments/treatment-card";
import { PageHero } from "@/components/ui/page-hero";

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

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        title="Tratamentos"
        subtitle="Especializados"
        description="Conheça nossa ampla gama de tratamentos dermatológicos e estéticos, desenvolvidos com as mais avançadas tecnologias e técnicas do mercado."
        image="https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5927-scaled.jpg"
      />

      <div className="bg-gradient-to-b from-white via-[#fff5f8] to-white">
        <div className="container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {treatments.map((treatment) => (
              <TreatmentCard
                key={treatment.href}
                title={treatment.title}
                description={treatment.description}
                image={treatment.image}
                href={treatment.href}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}