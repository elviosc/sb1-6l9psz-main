import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Clock, CheckCircle2 } from "lucide-react";

interface TreatmentDetailProps {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  duration: string;
  recovery: string;
  results: string;
  image: string;
  beforeAfterImages?: { before: string; after: string }[];
}

export function TreatmentDetail({
  title,
  subtitle,
  description,
  benefits,
  duration,
  recovery,
  results,
  image,
  beforeAfterImages,
}: TreatmentDetailProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#fff5f8]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#6f0d44] mb-4">{title}</h1>
          <p className="text-lg md:text-xl text-gray-600">{subtitle}</p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#6f0d44] rounded-lg transform rotate-3" />
              <img
                src={image}
                alt={title}
                className="relative rounded-lg shadow-xl transform -rotate-3 transition-transform hover:rotate-0 duration-500 w-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="prose prose-lg">
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#6f0d44]">Benefícios</h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-[#6f0d44] mt-1 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
                <div className="flex items-center gap-2 text-[#6f0d44] mb-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">Duração</span>
                </div>
                <p className="text-gray-600">{duration}</p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
                <div className="flex items-center gap-2 text-[#6f0d44] mb-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">Recuperação</span>
                </div>
                <p className="text-gray-600">{recovery}</p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
                <div className="flex items-center gap-2 text-[#6f0d44] mb-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">Resultados</span>
                </div>
                <p className="text-gray-600">{results}</p>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-[#6f0d44] hover:bg-[#6f0d44]/90 w-full sm:w-auto"
            >
              Agende sua Consulta
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>

        {/* Before/After Section */}
        {beforeAfterImages && beforeAfterImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-[#6f0d44] text-center">
              Antes e Depois
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {beforeAfterImages.map((images, index) => (
                <div key={index} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="block text-sm text-[#6f0d44] mb-2">Antes</span>
                      <img
                        src={images.before}
                        alt="Antes do tratamento"
                        className="rounded-lg w-full"
                      />
                    </div>
                    <div>
                      <span className="block text-sm text-[#6f0d44] mb-2">Depois</span>
                      <img
                        src={images.after}
                        alt="Depois do tratamento"
                        className="rounded-lg w-full"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}