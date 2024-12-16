import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

export function FiosPDOCare() {
  const preCare = [
    "Evitar anti-inflamatórios 7 dias antes",
    "Evitar bebidas alcoólicas 48h antes",
    "Informar uso de medicamentos",
    "Comparecer sem maquiagem",
  ];

  const postCare = [
    "Evitar exercícios físicos por 7 dias",
    "Não massagear a área tratada",
    "Dormir de barriga para cima por 7 dias",
    "Evitar exposição solar direta",
    "Seguir prescrição médica",
  ];

  const restrictions = [
    "Gestantes e lactantes",
    "Infecções ativas na área",
    "Doenças autoimunes não controladas",
    "Tendência a queloides",
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#fff5f8] to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-[#6f0d44] mb-6">
            Cuidados e Restrições
          </h2>
          <p className="text-lg text-gray-600">
            Para garantir os melhores resultados e sua segurança, é importante seguir
            algumas recomendações antes e após o procedimento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Pre Care */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/50 backdrop-blur-sm p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold text-[#6f0d44] mb-4">
              Cuidados Pré-Procedimento
            </h3>
            <ul className="space-y-3">
              {preCare.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#6f0d44] shrink-0 mt-0.5" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Post Care */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/50 backdrop-blur-sm p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold text-[#6f0d44] mb-4">
              Cuidados Pós-Procedimento
            </h3>
            <ul className="space-y-3">
              {postCare.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#6f0d44] shrink-0 mt-0.5" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Restrictions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/50 backdrop-blur-sm p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold text-[#6f0d44] mb-4">
              Contraindicações
            </h3>
            <ul className="space-y-3">
              {restrictions.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
