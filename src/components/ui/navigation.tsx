import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface NavigationItem {
  title: string;
  href?: string;
  subItems?: NavigationItem[];
}

const navigationItems: NavigationItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Sobre",
    subItems: [
      {
        title: "Perfil",
        href: "/profile",
      },
      {
        title: "Clínica",
        href: "/clinic",
      },
      {
        title: "Tratamentos",
        href: "/treatments",
      },
    ],
  },
  {
    title: "Artigos",
    subItems: [
      {
        title: "Blog",
        href: "/articles/blog/all",
      },
      {
        title: "Imprensa",
        href: "/articles/press",
      },
    ],
  },
  {
    title: "Contato",
    href: "/contact",
  },
];

export function Navigation() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav>
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.title}>
                {item.href ? (
                  <Link
                    to={item.href}
                    className="block px-3 py-2 rounded-md text-[#6f0d44] hover:bg-[#6f0d44]/5"
                  >
                    {item.title}
                  </Link>
                ) : (
                  <div className="px-3 py-2 text-[#6f0d44] font-medium">
                    {item.title}
                    {item.subItems && (
                      <ul className="mt-1 ml-4 space-y-1">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.title}>
                            <Link
                              to={subItem.href || "#"}
                              className="block px-3 py-2 rounded-md text-[#6f0d44] hover:bg-[#6f0d44]/5"
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
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