import { Phone, Calendar, MapPin, Mail, Instagram } from "lucide-react";

export function MobileMenu() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 lg:hidden">
      <div className="grid grid-cols-5 gap-1 p-2">
        <a
          href="tel:+551130320408"
          className="flex flex-col items-center justify-center p-2 text-[#6f0d44] hover:text-[#6f0d44]/80"
        >
          <Phone className="h-5 w-5" />
          <span className="text-xs mt-1">Ligar</span>
        </a>
        <a
          href="/contact/appointment"
          className="flex flex-col items-center justify-center p-2 text-[#6f0d44] hover:text-[#6f0d44]/80"
        >
          <Calendar className="h-5 w-5" />
          <span className="text-xs mt-1">Agendar</span>
        </a>
        <a
          href="https://goo.gl/maps/1Z9Z9Z9Z9Z9Z9Z9Z9"
          className="flex flex-col items-center justify-center p-2 text-[#6f0d44] hover:text-[#6f0d44]/80"
        >
          <MapPin className="h-5 w-5" />
          <span className="text-xs mt-1">Mapa</span>
        </a>
        <a
          href="mailto:contato@lucianamaluf.com.br"
          className="flex flex-col items-center justify-center p-2 text-[#6f0d44] hover:text-[#6f0d44]/80"
        >
          <Mail className="h-5 w-5" />
          <span className="text-xs mt-1">Email</span>
        </a>
        <a
          href="https://instagram.com/dralucianamaluf"
          className="flex flex-col items-center justify-center p-2 text-[#6f0d44] hover:text-[#6f0d44]/80"
        >
          <Instagram className="h-5 w-5" />
          <span className="text-xs mt-1">Instagram</span>
        </a>
      </div>
    </div>
  );
}
