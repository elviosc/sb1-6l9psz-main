import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

export function LocationPage() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#fff5f8]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#6f0d44] mb-6">
            Localização
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Encontre nossa clínica no coração do Itaim Bibi
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg space-y-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-[#6f0d44] mt-1" />
                  <div>
                    <h3 className="font-medium text-[#6f0d44] mb-1">Endereço</h3>
                    <p className="text-gray-600">
                      Rua Bandeira Paulista, 726 cj 222 - 22° andar
                      <br />
                      Itaim Bibi, São Paulo - SP
                      <br />
                      CEP: 04532-002
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-6 h-6 text-[#6f0d44] mt-1" />
                  <div>
                    <h3 className="font-medium text-[#6f0d44] mb-1">Telefones</h3>
                    <p className="text-gray-600">
                      (11) 3791-3905
                      <br />
                      (11) 97661-4826
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-6 h-6 text-[#6f0d44] mt-1" />
                  <div>
                    <h3 className="font-medium text-[#6f0d44] mb-1">E-mail</h3>
                    <p className="text-gray-600">contato@lucianamaluf.com.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-[#6f0d44] mt-1" />
                  <div>
                    <h3 className="font-medium text-[#6f0d44] mb-1">Horário de Funcionamento</h3>
                    <p className="text-gray-600">
                      Segunda a Sexta: 09:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>

              <Button
                className="w-full bg-[#6f0d44] hover:bg-[#6f0d44]/90"
                asChild
              >
                <a 
                  href="https://www.google.com/maps/dir//Rua+Bandeira+Paulista,+726+-+Itaim+Bibi,+São+Paulo+-+SP,+04532-002"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Como Chegar
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-square rounded-lg overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.8649173472395!2d-46.67747492374385!3d-23.579444178886147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59f1069d11d1%3A0x3307f0c0697910ac!2sR.%20Bandeira%20Paulista%2C%20726%20-%20Itaim%20Bibi%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004532-002!5e0!3m2!1sen!2sbr!4v1709901234567!5m2!1sen!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Clínica"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}