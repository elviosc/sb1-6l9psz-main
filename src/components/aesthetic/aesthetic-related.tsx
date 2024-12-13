import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const relatedServices = [
  { title: "Cabelo", href: "/services/hair" },
  { title: "Corporal", href: "/services/body" },
  { title: "Depilação a Laser", href: "/services/laser-hair-removal" },
  { title: "Facial", href: "/services/facial" }
];

export function AestheticRelated() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-2xl font-bold text-[#6f0d44] mb-6">
        Serviços Relacionados
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {relatedServices.map((service, index) => (
          <Button
            key={index}
            variant="outline"
            className="border-[#6f0d44] text-[#6f0d44] hover:bg-[#6f0d44] hover:text-white"
            asChild
          >
            <a href={service.href}>{service.title}</a>
          </Button>
        ))}
      </div>
    </motion.div>
  );
}