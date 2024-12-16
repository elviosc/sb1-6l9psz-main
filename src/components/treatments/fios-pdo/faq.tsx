import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FiosPDOFAQ() {
  const faqs = [
    {
      question: "O que são os fios de PDO?",
      answer:
        "Os fios de PDO (Polidioxanona) são fios absorvíveis utilizados para lifting e rejuvenescimento facial. São os mesmos fios usados em cirurgias cardíacas, garantindo total segurança e biocompatibilidade.",
    },
    {
      question: "O procedimento é doloroso?",
      answer:
        "O procedimento é realizado com anestesia local, o que minimiza bastante o desconforto. Durante a aplicação, você poderá sentir uma leve pressão ou desconforto, mas nada significativo.",
    },
    {
      question: "Quanto tempo duram os resultados?",
      answer:
        "Os resultados dos fios de PDO podem durar de 12 a 18 meses, dependendo do tipo de fio utilizado, área tratada e resposta individual de cada paciente.",
    },
    {
      question: "Quando posso voltar às atividades normais?",
      answer:
        "A maioria dos pacientes pode retornar às atividades normais em 24-48 horas. No entanto, exercícios físicos intensos devem ser evitados por 7 dias.",
    },
    {
      question: "Os fios podem ser notados sob a pele?",
      answer:
        "Não, os fios são muito finos e são posicionados em camadas profundas da pele. Além disso, são absorvidos naturalmente pelo organismo ao longo do tempo.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-[#6f0d44] mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-600">
            Tire suas dúvidas sobre o tratamento com fios de PDO
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/50 backdrop-blur-sm rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-[#6f0d44] hover:text-[#6f0d44]/80">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
