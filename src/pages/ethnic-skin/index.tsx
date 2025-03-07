import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ChevronRight, Award, Star } from "lucide-react";
import { Link } from "react-router-dom";

const ethnicSkinTreatments = [
  {
    title: "Acne em Peles Étnicas",
    description: "Tratamento especializado para acne em peles melanodérmicas, evitando manchas e cicatrizes queloides.",
    icon: Star,
    href: "/ethnic-skin/acne"
  },
  {
    title: "Melasma",
    description: "Tratamento personalizado para manchas escuras na pele, comum em peles étnicas.",
    icon: Star,
    href: "/ethnic-skin/melasma"
  },
  {
    title: "Manchas e Hiperpigmentação",
    description: "Tratamentos seguros e eficazes para uniformização do tom da pele.",
    icon: Star,
    href: "/ethnic-skin/hyperpigmentation"
  },
  {
    title: "Cicatrizes e Queloides",
    description: "Protocolos específicos para prevenção e tratamento de cicatrizes.",
    icon: Star,
    href: "/ethnic-skin/scars"
  }
];

export function EthnicSkinPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center">
        <div className="absolute inset-0">
          <div className="relative h-full">
            <img
              src="https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5938-scaled.jpg"
              alt="Tratamentos para Peles Étnicas"
              className="absolute w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#6f0d44] via-[#6f0d44]/90 to-transparent" />
          </div>
        </div>

        <div className="relative container mx-auto p-0 h-full">
          <div className="flex flex-col justify-center h-full min-h-screen max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -left-4 top-0 w-1 h-32 bg-white/30" />
              <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 text-white mb-6">
                <span className="text-sm">Tratamento Especializado</span>
                <ChevronRight className="h-4 w-4" />
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 text-white tracking-tight">
                Pele
                <br />
                <span className="font-semibold">Étnica</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-2xl mb-8 text-white/90 font-light leading-relaxed"
            >
              Tratamentos especializados para peles negras e étnicas, com foco na saúde e beleza natural da sua pele.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-8"
            >
              <Link to="/contact/appointment">
                <Button size="lg" className="bg-white text-[#6f0d44] hover:bg-white/90 text-lg h-14 px-8">
                  Agende sua Avaliação
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="bg-gradient-to-b from-white to-[#fff5f8]">
        <div className="container mx-auto p-0 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-[#6f0d44] mb-12">
              Tratamentos Especializados
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Link
                to="/ethnic-skin/hyperpigmentation"
                className="group block bg-white/50 backdrop-blur-sm p-6 rounded-lg hover:bg-white/70 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-[#6f0d44] mb-4 group-hover:translate-x-2 transition-transform">
                  Hiperpigmentação
                  <ChevronRight className="inline-block ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 transition-all" />
                </h3>
                <p className="text-gray-600">
                  Tratamento especializado para manchas e descolorações em peles negras,
                  com foco na uniformização segura do tom da pele.
                </p>
              </Link>

              <Link
                to="/ethnic-skin/scars"
                className="group block bg-white/50 backdrop-blur-sm p-6 rounded-lg hover:bg-white/70 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-[#6f0d44] mb-4 group-hover:translate-x-2 transition-transform">
                  Cicatrizes
                  <ChevronRight className="inline-block ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 transition-all" />
                </h3>
                <p className="text-gray-600">
                  Tratamento avançado para cicatrizes em peles negras, com tecnologia
                  específica para evitar hiperpigmentação pós-inflamatória.
                </p>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}