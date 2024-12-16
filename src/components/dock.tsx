import { motion } from "framer-motion";
import { Phone, Calendar, MapPin, Mail, Instagram, Facebook, WhatsApp } from "lucide-react";

export function Dock() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="bg-white/80 backdrop-blur-lg rounded-full px-6 py-3 shadow-lg border border-gray-200">
        <div className="flex items-center gap-4">
          <a
            href="/contact/appointment"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-[#6f0d44] hover:bg-[#6f0d44] hover:text-white transition-colors duration-300"
            title="Agendar Consulta"
          >
            <Calendar className="w-5 h-5" />
            <span className="text-sm font-medium">Agendar</span>
          </a>

          <a
            href="tel:+551199999999"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-[#6f0d44] hover:bg-[#6f0d44] hover:text-white transition-colors duration-300"
            title="Ligar"
          >
            <Phone className="w-5 h-5" />
            <span className="text-sm font-medium">Ligar</span>
          </a>

          <a
            href="/contact/location"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-[#6f0d44] hover:bg-[#6f0d44] hover:text-white transition-colors duration-300"
            title="Como Chegar"
          >
            <MapPin className="w-5 h-5" />
            <span className="text-sm font-medium">Como Chegar</span>
          </a>

          <div className="w-px h-6 bg-gray-300"></div>

          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-[#6f0d44] hover:bg-[#6f0d44] hover:text-white transition-colors duration-300"
              title="WhatsApp"
            >
              <WhatsApp className="w-5 h-5" />
            </a>

            <a
              href="https://instagram.com/dralucianamaluf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-[#6f0d44] hover:bg-[#6f0d44] hover:text-white transition-colors duration-300"
              title="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              href="https://facebook.com/dralucianamaluf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-[#6f0d44] hover:bg-[#6f0d44] hover:text-white transition-colors duration-300"
              title="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>

            <a
              href="mailto:contato@dralucianamaluf.com.br"
              className="p-2 rounded-full text-[#6f0d44] hover:bg-[#6f0d44] hover:text-white transition-colors duration-300"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Dock;
