import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, User } from "lucide-react";
import { useState } from "react";

export function DockMenu() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest > 100);
  });

  const menuItems = [
    { icon: User, label: "Sobre", href: "#sobre" },
    { icon: Phone, label: "Contato", href: "#contato" },
    { icon: Calendar, label: "Agende", href: "#agendar" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-50 flex justify-center items-center w-full pb-8 mb-4"
    >
      <div className="bg-white/80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg mx-auto">
        <div className="flex items-center gap-4">
          {menuItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="text-[#6f0d44] hover:bg-[#6f0d44] hover:text-white transition-colors duration-300"
              onClick={() => {
                const element = document.querySelector(item.href);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <item.icon className="w-4 h-4 mr-2" />
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}