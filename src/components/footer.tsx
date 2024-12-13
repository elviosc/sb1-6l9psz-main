import { Facebook, Instagram, Linkedin, Youtube, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { 
    icon: Facebook, 
    href: "https://www.facebook.com/clinicadermatologialucianamaluf", 
    label: "Facebook" 
  },
  { 
    icon: Instagram, 
    href: "https://instagram.com/dralucianamaluf", 
    label: "Instagram" 
  },
  { 
    icon: Linkedin, 
    href: "http://www.linkedin.com/in/luciana-maluf-aa11563a", 
    label: "LinkedIn" 
  },
  { 
    icon: Youtube, 
    href: "https://www.youtube.com/channel/UCXR5XvpAX3qz-Jtt12gHNfQ?sub_confirmation=1", 
    label: "Youtube" 
  },
  { 
    icon: MessageCircle, 
    href: "https://api.whatsapp.com/send?phone=5511976614826&text=Atendimento%20falar%20com%20Solange", 
    label: "WhatsApp" 
  },
  { 
    icon: MapPin, 
    href: "https://maps.app.goo.gl/mLzFG7fWxFBszxX17", 
    label: "Localização" 
  }
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-[#fff5f3] py-12 md:py-16 pb-28 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Contact Information */}
          <div className="md:col-span-5 space-y-6">
            <img 
              src="https://lucianamaluf.com.br/wp-content/uploads/2021/09/logo_footer_lucianamaluf.png"
              alt="Dra. Luciana Maluf" 
              className="h-10 md:h-12 mb-6" 
            />
            <div className="space-y-4">
              <p className="text-[#6f0d44] font-medium text-base md:text-lg">Clínica de Dermatologia</p>
              <div className="space-y-2 text-gray-600 text-sm md:text-base">
                <p>Rua Bandeira Paulista, 726 cj 222 - 22° andar</p>
                <p>Itaim Bibi, São Paulo - SP</p>
                <p>CEP: 04532-002</p>
                <p className="font-medium">Tel.: (11) 3791-3905 / (11) 97661-4826</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-[#6f0d44]/10 text-[#6f0d44]"
                  asChild
                >
                  <a 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4 md:h-5 md:w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h3 className="font-semibold text-[#6f0d44] mb-4 text-base md:text-lg">Tratamentos</h3>
            <ul className="space-y-3 text-sm md:text-base text-gray-600">
              <li>
                <a href="/treatments/bioestimuladores" className="hover:text-[#6f0d44] transition-colors">
                  • Bioestimuladores de Colágeno
                </a>
              </li>
              <li>
                <a href="/treatments/fios-pdo" className="hover:text-[#6f0d44] transition-colors">
                  • Fios de PDO
                </a>
              </li>
              <li>
                <a href="/treatments/harmonizacao-facial" className="hover:text-[#6f0d44] transition-colors">
                  • Harmonização Facial
                </a>
              </li>
              <li>
                <a href="/treatments/laser" className="hover:text-[#6f0d44] transition-colors">
                  • Tratamentos a Laser
                </a>
              </li>
              <li>
                <a href="/treatments/peeling" className="hover:text-[#6f0d44] transition-colors">
                  • Peeling
                </a>
              </li>
              <li>
                <a href="/treatments/preenchimento" className="hover:text-[#6f0d44] transition-colors">
                  • Preenchimento com Ácido Hialurônico
                </a>
              </li>
              <li>
                <a href="/treatments/toxina-botulinica" className="hover:text-[#6f0d44] transition-colors">
                  • Toxina Botulínica
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="md:col-span-3">
            <h3 className="font-semibold text-[#6f0d44] mb-4 text-base md:text-lg">Links Úteis</h3>
            <ul className="space-y-3 text-sm md:text-base text-gray-600">
              <li>
                <a href="/contact/appointment" className="hover:text-[#6f0d44] transition-colors">
                  • Agendamento
                </a>
              </li>
              <li>
                <a href="/articles/blog" className="hover:text-[#6f0d44] transition-colors">
                  • Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#6f0d44] transition-colors">
                  • Contato
                </a>
              </li>
              <li>
                <a href="/press" className="hover:text-[#6f0d44] transition-colors">
                  • Imprensa
                </a>
              </li>
              <li>
                <a href="/contact/location" className="hover:text-[#6f0d44] transition-colors">
                  • Localização
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#6f0d44]/10 mt-8 md:mt-12 pt-8 text-center text-xs md:text-sm text-gray-600">
          <p>Copyright Dra. Luciana Maluf • 2014 • {new Date().getFullYear()} / Designed by <a href="https://elvio.com.br" target="_blank" rel="noopener noreferrer" className="text-[#6f0d44] hover:text-[#8b1155]">elvio</a></p>
        </div>
      </div>
    </footer>
  );
}