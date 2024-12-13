import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const conditions = [
  "Celulite, Flacidez, Gordura localizada",
  "Cicatrizes",
  "Cicatrizes de Acne",
  "Estrias",
  "Flacidez Facial",
  "Foliculites / Pelos",
  "Manchas e Melasma",
  "Olheiras",
  "Rugas",
  "Vasos"
];

export function AestheticConditions() {
  return (
    <div className="mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-[#6f0d44] text-center mb-8"
      >
        Tratamentos
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {conditions.map((condition, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-white/50 backdrop-blur-sm border-none hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-[#6f0d44]" />
                  <CardTitle className="text-[#6f0d44]">{condition}</CardTitle>
                </div>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}