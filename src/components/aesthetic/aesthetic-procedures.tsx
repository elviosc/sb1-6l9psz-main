import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const procedures = [
  "Fios de sustentação de PDO (polidioxanona)",
  "Injetáveis com toxina botulínica",
  "Preenchedores com Ácido Hialurônico, Juvederm, Restylane, Esthelis",
  "Ácido Poli Lático (Sculptra®)",
  "Hidroxiapatita de cálcio (Radiesse®)",
  "Lasers fracionados ablativos e não ablativos",
  "Luz Intensa Pulsada e radiofrequência",
  "Microagulhamento",
  "Peelings: Jessner, Ácido Salicílico, Ácido Retinoico e Ácido Tricloroacético",
  "Criolipólise"
];

export function AestheticProcedures() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold text-[#6f0d44] text-center mb-8">
        Procedimentos
      </h2>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {procedures.map((procedure, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-[#6f0d44] hover:text-[#8b1155]">
                {procedure}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Procedimento realizado com tecnologia de ponta e protocolo personalizado 
                para cada paciente, garantindo resultados seguros e eficazes.
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.div>
  );
}