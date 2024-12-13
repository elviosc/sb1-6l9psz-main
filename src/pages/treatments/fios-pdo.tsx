import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Clock, AlertCircle, CheckCircle2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O que são Fios de PDO?",
    answer: "Fios de PDO (Polidioxanona) são fios absorvíveis utilizados para lifting facial não cirúrgico. São os mesmos fios usados em cirurgias cardíacas, garantindo total segurança e biocompatibilidade."
  },
  {
    question: "O procedimento é doloroso?",
    answer: "O procedimento é realizado com anestesia local, minimizando qualquer desconforto. A maioria dos pacientes relata apenas uma leve sensibilidade nos primeiros dias."
  },
  {
    question: "Quanto tempo duram os resultados?",
    answer: "Os resultados podem durar de 12 a 18 meses, dependendo do tipo de fio utilizado e da resposta individual de cada paciente. O estímulo de colágeno continua mesmo após a absorção dos fios."
  },
  {
    question: "Posso voltar às atividades normais após o procedimento?",
    answer: "Recomenda-se evitar exercícios físicos intensos por 7 dias e dormir de barriga para cima nos primeiros dias. Atividades leves podem ser retomadas após 24-48 horas."
  },
  {
    question: "Quais cuidados devo ter após o procedimento?",
    answer: "É importante evitar massagens na área, manter a pele hidratada, usar protetor solar e seguir todas as recomendações pós-procedimento fornecidas pela médica."
  }
];

const contraindications = [
  "Gestantes e lactantes",
  "Pessoas com tendência a queloides",
  "Doenças autoimunes em atividade",
  "Infecções ativas na área a ser tratada",
  "Uso de anticoagulantes",
  "Distúrbios de coagulação"
];

export function FiosPDOPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 w-full h-full">
          <div className="relative w-full h-full">
            <img
              src="https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5938-scaled.jpg"
              alt="Tratamento com Fios de PDO"
              className="absolute w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#6f0d44]/95 to-[#6f0d44]/80" />
          </div>
        </div>

        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-light mb-6 text-white tracking-tight">
              Fios de PDO
              <br />
              <span className="font-semibold">High-Tech</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Lifting não cirúrgico com tecnologia de última geração para resultados 
              naturais e duradouros.
            </p>
            <Button
              size="lg"
              className="bg-white text-[#6f0d44] hover:bg-white/90 text-base md:text-lg px-8"
            >
              Agende sua Consulta
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Procedure Information */}
      <section className="py-24 bg-gradient-to-b from-white to-[#fff5f8]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-[#6f0d44]">
                O Procedimento
              </h2>
              <div className="prose prose-lg">
                <p className="text-gray-600 leading-relaxed">
                  Os Fios de PDO representam um dos mais avançados tratamentos para lifting 
                  facial não cirúrgico. Esta tecnologia inovadora utiliza fios absorvíveis 
                  que, além do efeito tensor imediato, estimulam a produção natural de 
                  colágeno, proporcionando resultados progressivos e duradouros.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  O procedimento é minimamente invasivo, realizado com anestesia local, 
                  permitindo rápida recuperação e retorno às atividades. Os fios são 
                  estrategicamente posicionados para criar vetores de sustentação, 
                  promovendo lifting e rejuvenescimento natural.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-[#6f0d44] mb-2">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">Duração</span>
                  </div>
                  <p className="text-gray-600">60 a 90 minutos</p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-[#6f0d44] mb-2">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">Recuperação</span>
                  </div>
                  <p className="text-gray-600">3 a 5 dias</p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-[#6f0d44] mb-2">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">Resultados</span>
                  </div>
                  <p className="text-gray-600">12 a 18 meses</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#6f0d44] rounded-lg transform rotate-3" />
                <img
                  src="https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5927-scaled.jpg"
                  alt="Procedimento com Fios de PDO"
                  className="relative rounded-lg shadow-xl transform -rotate-3 transition-transform hover:rotate-0 duration-500 w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-[#6f0d44] mb-6">
              Benefícios do Tratamento
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Efeito lifting imediato e natural",
              "Estímulo contínuo de colágeno",
              "Melhora do contorno facial",
              "Tratamento minimamente invasivo",
              "Recuperação rápida",
              "Resultados progressivos e duradouros"
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-white/50 backdrop-blur-sm rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <CheckCircle2 className="w-6 h-6 text-[#6f0d44] mt-1 flex-shrink-0" />
                <span className="text-gray-600">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="py-24 bg-gradient-to-b from-[#fff5f8] to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-[#6f0d44] mb-6">
              Resultados Reais
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                before: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5915-scaled.jpg",
                after: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5927-scaled.jpg"
              }
            ].map((images, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="block text-sm text-[#6f0d44] mb-2">Antes</span>
                    <img
                      src={images.before}
                      alt="Antes do tratamento"
                      className="rounded-lg w-full aspect-square object-cover"
                    />
                  </div>
                  <div>
                    <span className="block text-sm text-[#6f0d44] mb-2">Depois</span>
                    <img
                      src={images.after}
                      alt="Depois do tratamento"
                      className="rounded-lg w-full aspect-square object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contraindications */}
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
              Contraindicações
            </h2>
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg space-y-4">
              {contraindications.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#6f0d44] mt-1 flex-shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gradient-to-b from-[#fff5f8] to-white">
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
    </>
  );
}