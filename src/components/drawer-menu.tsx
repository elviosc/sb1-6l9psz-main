import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  ScrollArea,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const menuItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Sobre",
    items: [
      {
        title: "Perfil",
        href: "/profile",
        description: "Conheça a trajetória e especialização da Dra. Luciana Maluf",
      },
      {
        title: "Clínica",
        href: "/clinic",
        description: "Conheça nossa estrutura e equipe especializada",
      },
      {
        title: "Cursos",
        href: "/courses",
        description: "Cursos e capacitações para profissionais da área",
      },
    ],
  },
  {
    title: "Tratamentos",
    items: [
      {
        title: "Harmonização Facial",
        href: "/treatments/facial-harmonization",
      },
      {
        title: "Toxina Botulínica",
        href: "/treatments/botulinum-toxin",
      },
      {
        title: "Preenchimento",
        href: "/treatments/filling",
      },
      {
        title: "Bioestimuladores",
        href: "/treatments/biostimulators",
      },
      {
        title: "Skinbooster",
        href: "/treatments/skinbooster",
      },
      {
        title: "Fios de PDO",
        href: "/treatments/pdo-threads",
      },
    ],
  },
  {
    title: "Artigos",
    items: [
      {
        title: "Blog",
        href: "/articles/blog/all",
      },
      {
        title: "Imprensa",
        href: "/press",
      },
    ],
  },
  {
    title: "Contato",
    href: "/contact",
  },
];

export function DrawerMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-white hover:bg-white/20 hover:text-white"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white overflow-y-auto">
        <SheetHeader>
          <SheetTitle>
            <img
              src="https://lucianamaluf.com.br/wp-content/uploads/2022/06/Logomarca_horizontal-ok.png"
              alt="Dra. Luciana Maluf"
              className="h-12 w-auto"
            />
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-8">
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.title} className="space-y-4">
                {item.href ? (
                  <Link
                    to={item.href}
                    className="block text-lg font-medium text-[#6f0d44] hover:text-[#6f0d44]/80"
                  >
                    {item.title}
                  </Link>
                ) : (
                  <div className="space-y-2">
                    <h2 className="text-lg font-medium text-[#6f0d44]">
                      {item.title}
                    </h2>
                    <ul className="ml-4 space-y-2">
                      {item.items?.map((subItem) => (
                        <li key={subItem.title}>
                          <Link
                            to={subItem.href}
                            className="block text-gray-600 hover:text-[#6f0d44]"
                          >
                            {subItem.title}
                            {subItem.description && (
                              <p className="mt-0.5 text-sm text-gray-500">
                                {subItem.description}
                              </p>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
