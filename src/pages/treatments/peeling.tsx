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
    question: "O que são os peelings?",
    answer: "Peelings são procedimentos que promovem a renovação celular através da aplicação de substâncias que removem as camadas superficiais da pele de forma controlada, estimulando a formação de novas células."
  },
  {
    question: "O procedimento é doloroso?",
    answer: "A sensação varia de acordo com o tipo de peeling, mas geralmente é bem tolerável. Pode haver uma leve ardência durante a aplicação, que é controlada pela médica. Utilizamos técnicas e produtos que minimizam o desconforto."
  },
  {
    question: "Quanto tempo duram os resultados?",
    answer: "Os resultados variam de acordo com o tipo de peeling e condição tratada. Geralmente, recomenda-se uma série de sessões para resultados otimizados, e a manutenção pode ser feita a cada 3-6 meses."
  },
  {
    question: "Posso voltar às atividades normais após o procedimento?",
    answer: "Depende do tipo de peeling realizado. Peelings superficiais permitem retorno imediato às atividades, enquanto os médios podem requerer alguns dias de recuperação social."
  },
  {
    question: "Quais cuidados devo ter após o procedimento?",
    answer: "É fundamental usar protetor solar diariamente, evitar exposição solar direta, manter a pele hidratada e seguir o protocolo de skincare recomendado pela médica para otimizar os resultados."
  }
];

const contraindications = [
  "Gestantes e lactantes",
  "Lesões ativas na pele",
  "Histórico de queloides",
  "Uso recente de isotretinoína",
  "Herpes ativa",
  "Doenças autoimunes em atividade"
];

export function PeelingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 w-full h-full">
          <div className="relative w-full h-full">
            <img
              src="https://lucianamaluf.com.br/wp-content/uploads/2024/11/peeling-hero.jpg"
              alt="Tratamento com Peelings"
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
              Peelings
              <br />
              <span className="font-semibold">Avançados</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Renovação e rejuvenescimento da pele com tecnologia e segurança para 
              resultados naturais e eficazes.
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
                  Os peelings representam uma das técnicas mais eficazes para renovação 
                  e rejuvenescimento da pele. Através de substâncias específicas, promovemos 
                  a esfoliação controlada das camadas da pele, estimulando a produção de 
                  colágeno e a renovação celular.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Cada tipo de peeling é escolhido de acordo com as necessidades específicas 
                  da sua pele e os objetivos do tratamento. A profundidade e intensidade 
                  são personalizadas para garantir os melhores resultados com máxima segurança.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-[#6f0d44] mb-2">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">Duração</span>
                  </div>
                  <p className="text-gray-600">30 a 60 minutos</p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-[#6f0d44] mb-2">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">Recuperação</span>
                  </div>
                  <p className="text-gray-600">2 a 7 dias</p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-[#6f0d44] mb-2">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">Resultados</span>
                  </div>
                  <p className="text-gray-600">Progressivos</p>
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
                  src="https://lucianamaluf.com.br/wp-content/uploads/2024/11/peeling-procedure.jpg"
                  alt="Procedimento de Peeling"
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
              "Renovação celular acelerada",
              "Melhora de manchas e melasma",
              "Controle da oleosidade e acne",
              "Uniformização do tom da pele",
              "Suavização de rugas finas",
              "Estímulo de colágeno"
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
                before: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/peeling-before.jpg",
                after: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/peeling-after.jpg"
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
