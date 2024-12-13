import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Building2, Users, Clock, Award, MapPin, Phone, Mail, Calendar } from "lucide-react";
import { ClinicGallery } from "@/components/clinic/gallery";
import { ClinicMap } from "@/components/clinic/map";
import { ClinicHours } from "@/components/clinic/hours";
import { ClinicContact } from "@/components/clinic/contact";

export function ClinicPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 w-full h-full">
          <div className="relative w-full h-full">
            <img
              src="https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5938-scaled.jpg"
              alt="Clínica Dra. Luciana Maluf"
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
              Clínica de
              <br />
              <span className="font-semibold">Excelência</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Um espaço pensado para oferecer o que há de mais moderno em tratamentos 
              dermatológicos, aliando tecnologia e conforto.
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

      {/* Mission and Values */}
      <section className="py-24 bg-gradient-to-b from-white to-[#fff5f8]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#6f0d44] mb-6">
              Nossa Missão
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Proporcionar excelência em tratamentos dermatológicos, combinando tecnologia 
              de ponta, atendimento humanizado e resultados comprovados, sempre priorizando 
              o bem-estar e a satisfação dos nossos pacientes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Excelência",
                description: "Comprometimento com os mais altos padrões de qualidade em todos os procedimentos."
              },
              {
                title: "Inovação",
                description: "Constante atualização com as mais modernas tecnologias e técnicas do mercado."
              },
              {
                title: "Humanização",
                description: "Atendimento personalizado e acolhedor, focado nas necessidades individuais."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/50 backdrop-blur-sm p-6 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-[#6f0d44] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#6f0d44] mb-6">
              Nossos Diferenciais
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Building2,
                title: "Infraestrutura Moderna",
                description: "Ambiente acolhedor com tecnologia de ponta para seu conforto e segurança"
              },
              {
                icon: Users,
                title: "Equipe Especializada",
                description: "Profissionais altamente qualificados e em constante atualização"
              },
              {
                icon: Clock,
                title: "Atendimento Personalizado",
                description: "Tempo dedicado para entender suas necessidades e objetivos"
              },
              {
                icon: Award,
                title: "Excelência Reconhecida",
                description: "Referência em tratamentos dermatológicos e estéticos"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/50 backdrop-blur-sm p-6 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <feature.icon className="h-10 w-10 text-[#6f0d44] mb-4" />
                <h3 className="text-xl font-semibold text-[#6f0d44] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <ClinicGallery />

      {/* Location and Hours */}
      <section className="py-24 bg-gradient-to-b from-[#fff5f8] to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-6 w-6 text-[#6f0d44]" />
                <h2 className="text-2xl font-bold text-[#6f0d44]">Localização</h2>
              </div>
              <ClinicMap />
              <div className="mt-6 space-y-3">
                <p className="text-gray-600">
                  Rua Bandeira Paulista, 726 cj 222 - 22° andar
                  <br />
                  Itaim Bibi, São Paulo - SP
                  <br />
                  CEP: 04532-002
                </p>
              </div>
            </motion.div>

            {/* Hours and Contact */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <ClinicHours />
              <ClinicContact />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}