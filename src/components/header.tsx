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

const articles = [
  { title: "Blog", href: "/articles/blog" },
  { title: "Vídeos", href: "/articles/videos" },
  { title: "Imprensa", href: "/articles/press" },
];

const contact = [
  { title: "Agendar Consulta", href: "/contact/appointment" },
  { title: "Localização", href: "/contact/location" },
  { title: "Trabalhe Conosco", href: "/contact/careers" },
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
                    <ul className="grid w-[400px] gap-3 p-4">
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
                      <li>
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
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[600px] md:grid-cols-3">
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
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
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
                    Peles Brasileiras
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
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
                    Imprensa
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 w-[725px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[#6f0d44]/50 to-[#6f0d44] p-6 no-underline outline-none focus:shadow-md"
                            href="/press"
                          >
                            <div className="mt-4 mb-2 text-lg font-medium text-white">
                              Imprensa
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              Confira as principais aparições e menções na mídia.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          href="/press"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#6f0d44]/5 hover:text-[#6f0d44] duration-300"
                        >
                          <div className="text-sm font-medium text-[#6f0d44]">
                            Notícias e Artigos
                          </div>
                        </NavigationMenuLink>
                      </li>
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
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-[#6f0d44] hover:bg-[#6f0d44] hover:text-white focus:bg-[#6f0d44] focus:text-white active:bg-[#6f0d44] active:text-white transition-colors duration-300">
                    Contato
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 w-[725px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[#6f0d44]/50 to-[#6f0d44] p-6 no-underline outline-none focus:shadow-md"
                            href="/contact"
                          >
                            <div className="mt-4 mb-2 text-lg font-medium text-white">
                              Contato
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              Entre em contato conosco.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          href="/contact"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#6f0d44]/5 hover:text-[#6f0d44] duration-300"
                        >
                          <div className="text-sm font-medium text-[#6f0d44]">
                            Informações de Contato
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
                      <li>
                        <NavigationMenuLink
                          href="/contact/careers"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#6f0d44]/5 hover:text-[#6f0d44] duration-300"
                        >
                          <div className="text-sm font-medium text-[#6f0d44]">
                            Trabalhe Conosco
                          </div>
                        </NavigationMenuLink>
                      </li>
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