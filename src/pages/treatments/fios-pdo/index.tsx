import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export function PDOThreadsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#fff5f8]">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src="/images/pdo-threads-hero.jpg"
            alt="Tratamento com Fios de PDO"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Fios de PDO
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Tratamento inovador para lifting e rejuvenescimento facial sem cirurgia
              </p>
              <Link to="/contact/appointment">
                <Button size="lg" className="bg-[#6f0d44] hover:bg-[#8b1155] text-white">
                  Agende sua Consulta
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-[#6f0d44] mb-6">
                O que são os Fios de PDO?
              </h2>
              <p className="text-gray-700 mb-8">
                Os fios de PDO (Polidioxanona) são fios absorvíveis utilizados em procedimentos estéticos para promover lifting e rejuvenescimento facial. São seguros, biocompatíveis e estimulam a produção natural de colágeno.
              </p>

              <h2 className="text-3xl font-bold text-[#6f0d44] mb-6">
                Benefícios do Tratamento
              </h2>
              <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                <li>Lifting facial sem cirurgia</li>
                <li>Melhora da flacidez da pele</li>
                <li>Estímulo natural de colágeno</li>
                <li>Resultados progressivos e duradouros</li>
                <li>Procedimento minimamente invasivo</li>
                <li>Recuperação rápida</li>
              </ul>

              <h2 className="text-3xl font-bold text-[#6f0d44] mb-6">
                Áreas de Tratamento
              </h2>
              <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                <li>Face (bochechas, mandíbula, queixo)</li>
                <li>Pescoço</li>
                <li>Sobrancelhas</li>
                <li>Região dos olhos</li>
                <li>Região nasolabial</li>
              </ul>

              <h2 className="text-3xl font-bold text-[#6f0d44] mb-6">
                O Procedimento
              </h2>
              <p className="text-gray-700 mb-8">
                O tratamento é realizado com anestesia local e tem duração média de 30 a 60 minutos. Os fios são inseridos através de micro-agulhas, causando mínimo desconforto. O resultado inicial é imediato, com melhora progressiva ao longo dos meses seguintes.
              </p>

              <div className="mt-12 text-center">
                <Link to="/contact/appointment">
                  <Button size="lg" className="bg-[#6f0d44] hover:bg-[#8b1155] text-white">
                    Agende sua Avaliação
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
