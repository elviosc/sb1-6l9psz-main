import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Clock, CheckCircle2, ArrowRight } from "lucide-react";

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
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] overflow-hidden">
        <div className="absolute inset-0">
          <div className="relative h-full">
            <img
              src={image}
              alt={title}
              className="absolute w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#6f0d44] via-[#6f0d44]/90 to-transparent" />
          </div>
        </div>

        <div className="relative container mx-auto px-4 h-full">
          <div className="flex flex-col justify-center h-full min-h-[85vh] max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 text-white">
                <span className="text-sm">Tratamento Premium</span>
                <ArrowRight className="h-4 w-4" />
              </div>
              
              <h1 className="text-6xl md:text-8xl font-light text-white tracking-tight">
                {title.split(' ')[0]}
                <br />
                <span className="font-semibold">{title.split(' ').slice(1).join(' ')}</span>
              </h1>

              <p className="text-xl text-white/90 max-w-xl leading-relaxed">
                {subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Button
                  size="lg"
                  className="bg-white text-[#6f0d44] hover:bg-white/90 text-lg h-14 px-8"
                  asChild
                >
                  <a href="/contact/appointment">
                    Agende sua Consulta
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 text-lg h-14 px-8"
                  asChild
                >
                  <a href="#saiba-mais">
                    Saiba Mais
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                  <div className="text-2xl font-light text-white mb-1">{duration}</div>
                  <div className="text-white/80 text-sm">Duração da Sessão</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                  <div className="text-2xl font-light text-white mb-1">{recovery}</div>
                  <div className="text-white/80 text-sm">Tempo de Recuperação</div>
                </div>
                <div className="hidden sm:block bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                  <div className="text-2xl font-light text-white mb-1">{results}</div>
                  <div className="text-white/80 text-sm">Duração do Resultado</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex justify-center p-2">
            <motion.div
              className="w-1 h-3 bg-white/50 rounded-full"
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* Treatment Details */}
      <section id="saiba-mais" className="py-24 bg-gradient-to-b from-white to-[#fff5f8]">
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
                Sobre o Tratamento
              </h2>
              <div className="prose prose-lg">
                <p className="text-gray-600 leading-relaxed">{description}</p>
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-[#6f0d44]">Benefícios</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#6f0d44] flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {beforeAfterImages && beforeAfterImages.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-24"
            >
              <h3 className="text-3xl font-bold text-[#6f0d44] text-center mb-12">
                Antes e Depois
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {beforeAfterImages.map((images, index) => (
                  <div key={index} className="space-y-4">
                    <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                      <img
                        src={images.before}
                        alt="Antes do tratamento"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                        Antes
                      </div>
                    </div>
                    <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                      <img
                        src={images.after}
                        alt="Depois do tratamento"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                        Depois
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}