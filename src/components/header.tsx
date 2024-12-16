import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { motion } from "framer-motion";

const navigation = {
  treatments: [
    { name: "Toxina Botulínica", href: "/treatments/toxina-botulinica" },
    { name: "Fios de PDO", href: "/treatments/fios-pdo" },
    { name: "Peelings", href: "/treatments/peelings" },
    { name: "Bioestimuladores", href: "/treatments/bioestimuladores" },
    { name: "Preenchimento", href: "/treatments/preenchimento" },
    { name: "Skinbooster", href: "/treatments/skinbooster" },
    { name: "Microagulhamento", href: "/treatments/microagulhamento" },
    { name: "Laser", href: "/treatments/laser" },
  ],
  about: [
    { name: "Sobre", href: "/about" },
    { name: "Imprensa", href: "/press" },
    { name: "Portfolio", href: "/portfolio" },
  ],
  contact: [
    { name: "Agendar Consulta", href: "/contact/appointment" },
    { name: "Carreiras", href: "/contact/careers" },
  ],
};

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#6f0d44]/95 backdrop-blur-md border-b border-[#6f0d44]/10">
      <div className="container mx-auto px-4">
        <div className="h-16 md:h-20 flex items-center justify-between">
          <motion.a
            href="/"
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src="https://lucianamaluf.com.br/wp-content/uploads/2022/06/Logomarca_horizontal-ok.png"
              alt="Dra. Luciana Maluf"
              className="h-12 md:h-14 w-auto"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-[#6f0d44] hover:bg-[#6f0d44] hover:text-white focus:bg-[#6f0d44] focus:text-white active:bg-[#6f0d44] active:text-white transition-colors duration-300">
                    Tratamentos
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {navigation.treatments.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#6f0d44]/5 hover:text-[#6f0d44] duration-300"
                          >
                            <div className="text-sm font-medium text-[#6f0d44]">
                              {item.name}
                            </div>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-[#6f0d44] hover:bg-[#6f0d44] hover:text-white focus:bg-[#6f0d44] focus:text-white active:bg-[#6f0d44] active:text-white transition-colors duration-300">
                    Sobre
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {navigation.about.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#6f0d44]/5 hover:text-[#6f0d44] duration-300"
                          >
                            <div className="text-sm font-medium text-[#6f0d44]">
                              {item.name}
                            </div>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-[#6f0d44] hover:bg-[#6f0d44] hover:text-white focus:bg-[#6f0d44] focus:text-white active:bg-[#6f0d44] active:text-white transition-colors duration-300">
                    Contato
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {navigation.contact.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#6f0d44]/5 hover:text-[#6f0d44] duration-300"
                          >
                            <div className="text-sm font-medium text-[#6f0d44]">
                              {item.name}
                            </div>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <Button
            className="hidden lg:flex bg-[#6f0d44] text-white hover:bg-[#8b1155] transition-colors duration-300"
            asChild
          >
            <a href="/contact/appointment">
              Agende sua Consulta
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}