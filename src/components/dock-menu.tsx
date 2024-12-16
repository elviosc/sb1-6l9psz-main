import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Phone, Calendar, MapPin, Mail, Instagram, Facebook } from "lucide-react";
import { useState } from "react";

export function DockMenu() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest > 100);
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-50 hidden md:flex justify-center pb-4"
    >
      <div className="bg-white/80 backdrop-blur-lg rounded-full shadow-lg p-2 mx-4 md:mx-auto">
        <div className="flex items-center gap-2 md:gap-4 px-2 md:px-4">
          <a
            href="/contact/appointment"
            className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-2 rounded-full text-[#6f0d44] hover:bg-[#6f0d44] hover:text-white transition-colors duration-300"
            title="Agendar Consulta"
          >
            <Calendar className="w-5 h-5" />
            <span className="text-sm font-medium hidden md:inline">Agendar</span>
          </a>

          <a
            href="tel:1137913905"
            className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-2 rounded-full text-[#6f0d44] hover:bg-[#6f0d44] hover:text-white transition-colors duration-300"
            title="Ligar"
          >
            <Phone className="w-5 h-5" />
            <span className="text-sm font-medium hidden md:inline">Ligar</span>
          </a>

          <a
            href="https://www.google.com/maps/dir//Rua+Bandeira+Paulista,+726+-+Itaim+Bibi,+S%C3%A3o+Paulo+-+SP,+04532-002"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-2 rounded-full text-[#6f0d44] hover:bg-[#6f0d44] hover:text-white transition-colors duration-300"
            title="Como Chegar"
          >
            <MapPin className="w-5 h-5" />
            <span className="text-sm font-medium hidden md:inline">Como Chegar</span>
          </a>

          <div className="w-px h-6 bg-gray-300 hidden md:block"></div>

          <div className="flex items-center gap-1 md:gap-2">
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
              href="mailto:solange@lucianamaluf.com.br"
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