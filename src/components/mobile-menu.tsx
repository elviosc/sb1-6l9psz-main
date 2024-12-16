import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Phone, Calendar, MapPin, Mail, Instagram, Facebook } from "lucide-react";

export function MobileMenu() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-white/80 backdrop-blur-lg border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <a
              href="/contact/appointment"
              className="flex flex-col items-center gap-1 text-[#6f0d44]"
            >
              <Calendar className="w-5 h-5" />
              <span className="text-xs">Agendar</span>
            </a>

            <a
              href="tel:1137913905"
              className="flex flex-col items-center gap-1 text-[#6f0d44]"
            >
              <Phone className="w-5 h-5" />
              <span className="text-xs">Ligar</span>
            </a>

            <a
              href="https://www.google.com/maps/dir//Rua+Bandeira+Paulista,+726+-+Itaim+Bibi,+S%C3%A3o+Paulo+-+SP,+04532-002"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 text-[#6f0d44]"
            >
              <MapPin className="w-5 h-5" />
              <span className="text-xs">Como Chegar</span>
            </a>

            <a
              href="https://instagram.com/dralucianamaluf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 text-[#6f0d44]"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-xs">Instagram</span>
            </a>

            <a
              href="mailto:solange@lucianamaluf.com.br"
              className="flex flex-col items-center gap-1 text-[#6f0d44]"
            >
              <Mail className="w-5 h-5" />
              <span className="text-xs">Email</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
