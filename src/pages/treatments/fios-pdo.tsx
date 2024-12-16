import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Clock, ArrowRight } from "lucide-react";
import { FiosPDOHero } from "@/components/treatments/fios-pdo/hero";
import { FiosPDOAreas } from "@/components/treatments/fios-pdo/areas";
import { FiosPDOCare } from "@/components/treatments/fios-pdo/care";
import { FiosPDOFAQ } from "@/components/treatments/fios-pdo/faq";

export function FiosPDOPage() {
  return (
    <>
      <FiosPDOHero />

      {/* What is it and How it Works */}
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
                O que são os Fios de PDO?
              </h2>
              <div className="prose prose-lg">
                <p className="text-gray-600 leading-relaxed">
                  Os fios de PDO (Polidioxanona) são fios absorvíveis biocompatíveis, 
                  utilizados para promover lifting e rejuvenescimento facial. São os 
                  mesmos fios utilizados em cirurgias cardíacas, garantindo total 
                  segurança e eficácia comprovada.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Além do efeito lifting imediato, os fios estimulam a produção natural 
                  de colágeno, melhorando progressivamente a qualidade, firmeza e 
                  elasticidade da pele.
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
                  <p className="text-gray-600">3 a 7 dias</p>
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
                  src="https://lucianamaluf.com.br/wp-content/uploads/2024/04/Fios-de-PDO-Polidioxanona-–-o-que-sao-e-como-funcionam.jpg"
                  alt="Tratamento com Fios de PDO"
                  className="relative rounded-lg shadow-xl transform -rotate-3 transition-transform hover:rotate-0 duration-500 w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Areas */}
      <FiosPDOAreas />

      {/* Pre and Post Care */}
      <FiosPDOCare />

      {/* FAQ */}
      <FiosPDOFAQ />

      {/* Schedule */}
      <section className="py-24 bg-gradient-to-b from-[#fff5f8] to-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-[#6f0d44] mb-6">
              Agende sua Consulta
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Converse com nossa equipe e descubra como os fios de PDO podem 
              transformar sua pele de forma natural e duradoura.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#6f0d44] hover:bg-[#6f0d44]/90"
            >
              <a
                href="https://wa.me/5511976065351?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20para%20tratamento%20com%20fios%20de%20PDO"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar Agora
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export const FiosPDO = FiosPDOPage;
export default FiosPDOPage;