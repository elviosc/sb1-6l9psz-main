import { motion } from "framer-motion";
import { DrawerMenu } from "./drawer-menu";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const treatments = [
  [
    { title: "Bioestimuladores", href: "/treatments/bioestimuladores" },
    { title: "Fios de PDO", href: "/treatments/fios-pdo" },
    { title: "Laser e Tecnologias", href: "/treatments/laser" },
  ],
  [
    { title: "Harmonização Facial", href: "/treatments/harmonizacao-facial" },
    { title: "Preenchimento", href: "/treatments/preenchimento" },
    { title: "Skinbooster", href: "/treatments/skinbooster" },
  ],
  [
    { title: "Toxina Botulínica", href: "/treatments/toxina-botulinica" },
    { title: "Peeling", href: "/treatments/peeling" },
  ]
];

const ethnicSkin = [
  { title: "Melasma", href: "/ethnic-skin/melasma" },
  { title: "Acne em Peles Negras", href: "/ethnic-skin/acne" },
  { title: "Manchas e Hiperpigmentação", href: "/ethnic-skin/hyperpigmentation" },
  { title: "Cicatrizes e Queloides", href: "/ethnic-skin/scars" }
];

const brazilianSkin = [
  { title: "Pele Morena", href: "/brazilian-skin/morena" },
  { title: "Pele Miscigenada", href: "/brazilian-skin/miscigenada" },
  { title: "Fotoenvelhecimento", href: "/brazilian-skin/fotoenvelhecimento" },
  { title: "Manchas Solares", href: "/brazilian-skin/manchas-solares" }
];

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
                    Sobre
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] grid-cols-2 gap-3 p-4">
                      <li>
                        <NavigationMenuLink
                          href="/profile"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#6f0d44]/5 hover:text-[#6f0d44] duration-300"
                        >
                          <div className="text-sm font-medium text-[#6f0d44]">
                            Perfil Profissional
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                            Conheça a trajetória e especialização da Dra. Luciana Maluf
                          </p>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          href="/clinic"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#6f0d44]/5 hover:text-[#6f0d44] duration-300"
                        >
                          <div className="text-sm font-medium text-[#6f0d44]">
                            A Clínica
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                            Conheça nossa estrutura e equipe especializada
                          </p>
                        </NavigationMenuLink>
                      </li>
                      <li className="col-span-2">
                        <NavigationMenuLink
                          href="/courses"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#6f0d44]/5 hover:text-[#6f0d44] duration-300"
                        >
                          <div className="text-sm font-medium text-[#6f0d44]">
                            Cursos
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                            Cursos e capacitações para profissionais da área
                          </p>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-[#6f0d44] hover:bg-[#6f0d44] hover:text-white focus:bg-[#6f0d44] focus:text-white active:bg-[#6f0d44] active:text-white transition-colors duration-300">
                    Tratamentos
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[600px] grid-cols-3 gap-3 p-4">
                      <div>
                        {treatments[0].map((item) => (
                          <li key={item.href}>
                            <NavigationMenuLink
                              href={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#6f0d44]/5 hover:text-[#6f0d44] duration-300"
                            >
                              <div className="text-sm font-medium text-[#6f0d44]">
                                {item.title}
                              </div>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </div>
                      <div>
                        {treatments[1].map((item) => (
                          <li key={item.href}>
                            <NavigationMenuLink
                              href={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#6f0d44]/5 hover:text-[#6f0d44] duration-300"
                            >
                              <div className="text-sm font-medium text-[#6f0d44]">
                                {item.title}
                              </div>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </div>
                      <div>
                        {treatments[2].map((item) => (
                          <li key={item.href}>
                            <NavigationMenuLink
                              href={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#6f0d44]/5 hover:text-[#6f0d44] duration-300"
                            >
                              <div className="text-sm font-medium text-[#6f0d44]">
                                {item.title}
                              </div>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </div>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-[#6f0d44] hover:bg-[#6f0d44] hover:text-white focus:bg-[#6f0d44] focus:text-white active:bg-[#6f0d44] active:text-white transition-colors duration-300">
                    Peles Étnicas
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] grid-cols-2 gap-3 p-4">
                      {ethnicSkin.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#6f0d44]/5 hover:text-[#6f0d44] duration-300"
                          >
                            <div className="text-sm font-medium text-[#6f0d44]">
                              {item.title}
                            </div>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-[#6f0d44] hover:bg-[#6f0d44] hover:text-white focus:bg-[#6f0d44] focus:text-white active:bg-[#6f0d44] active:text-white transition-colors duration-300">
                    Pele Brasileira
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] grid-cols-2 gap-3 p-4">
                      {brazilianSkin.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#6f0d44]/5 hover:text-[#6f0d44] duration-300"
                          >
                            <div className="text-sm font-medium text-[#6f0d44]">
                              {item.title}
                            </div>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-[#6f0d44] hover:bg-[#6f0d44] hover:text-white focus:bg-[#6f0d44] focus:text-white active:bg-[#6f0d44] active:text-white transition-colors duration-300">
                    Artigos
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[600px] grid-cols-[1fr_1fr] gap-3 p-4">
                      <li>
                        <NavigationMenuLink
                          href="/articles/blog/all"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#6f0d44]/5 hover:text-[#6f0d44] duration-300"
                        >
                          <div className="text-sm font-medium text-[#6f0d44]">
                            Blog
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                            Artigos e dicas sobre saúde e beleza
                          </p>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          href="/press"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#6f0d44]/5 hover:text-[#6f0d44] duration-300"
                        >
                          <div className="text-sm font-medium text-[#6f0d44]">
                            Imprensa
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                            Confira as principais aparições e menções na mídia
                          </p>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-[#6f0d44] hover:bg-[#6f0d44] hover:text-white focus:bg-[#6f0d44] focus:text-white active:bg-[#6f0d44] active:text-white transition-colors duration-300">
                    Contato
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] grid-cols-2 gap-3 p-4">
                      <li>
                        <NavigationMenuLink
                          href="/contact/appointment"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#6f0d44]/5 hover:text-[#6f0d44] duration-300"
                        >
                          <div className="text-sm font-medium text-[#6f0d44]">
                            Agendar Consulta
                          </div>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          href="/contact/location"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#6f0d44]/5 hover:text-[#6f0d44] duration-300"
                        >
                          <div className="text-sm font-medium text-[#6f0d44]">
                            Como Chegar
                          </div>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              className="hidden lg:flex bg-white text-[#6f0d44] hover:bg-white/90 transition-colors duration-300"
              asChild
            >
              <a href="/contact/appointment">
                Agende sua Consulta
              </a>
            </Button>
            <div className="lg:hidden">
              <DrawerMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}