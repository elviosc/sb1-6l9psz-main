import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qual a idade ideal para começar o tratamento?",
    answer: "Não existe uma idade específica, mas geralmente o tratamento é iniciado quando as primeiras linhas de expressão começam a incomodar, o que pode variar de pessoa para pessoa. O importante é que seja realizado de forma preventiva."
  },
  {
    question: "O procedimento é doloroso?",
    answer: "O procedimento causa desconforto mínimo, sendo bem tolerado pela maioria dos pacientes. Utilizamos agulhas ultrafinas e técnicas que proporcionam maior conforto durante a aplicação."
  },
  {
    question: "Quanto tempo duram os resultados?",
    answer: "Os resultados costumam durar de 4 a 6 meses, podendo variar de acordo com cada pessoa, área tratada e quantidade de produto utilizado. Com o uso regular, algumas pessoas podem experimentar resultados mais duradouros."
  },
  {
    question: "Quando os resultados começam a aparecer?",
    answer: "Os primeiros resultados começam a aparecer entre 3 a 7 dias após a aplicação, com o efeito máximo sendo atingido em aproximadamente 15 dias."
  },
  {
    question: "Posso maquiar após o procedimento?",
    answer: "Recomenda-se evitar maquiagem nas primeiras 24 horas após o procedimento. Após esse período, você pode retomar sua rotina normal de maquiagem."
  }
];

export function ToxinaFAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-[#6f0d44] mb-8 text-center">
            Perguntas Frequentes
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-[#6f0d44] hover:text-[#8b1155]">
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