import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const preCare = [
  "Evitar anti-inflamatórios por 7 dias",
  "Não ingerir bebidas alcoólicas 24h antes",
  "Informar uso de medicamentos",
  "Evitar procedimentos na área 15 dias antes"
];

const postCare = [
  "Não deitar por 4 horas após aplicação",
  "Evitar exercícios físicos por 24h",
  "Não massagear a região",
  "Usar protetor solar diariamente"
];

export function ToxinaCare() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#fff5f8] to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-[#6f0d44] mb-6">
            Cuidados com o Tratamento
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Para garantir os melhores resultados, alguns cuidados são essenciais 
            antes e após o procedimento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/50 backdrop-blur-sm p-8 rounded-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="h-6 w-6 text-[#6f0d44]" />
              <h3 className="text-2xl font-bold text-[#6f0d44]">
                Cuidados Pré-Procedimento
              </h3>
            </div>
            <div className="space-y-4">
              {preCare.map((care, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6f0d44] mt-1" />
                  <span className="text-gray-600">{care}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/50 backdrop-blur-sm p-8 rounded-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="h-6 w-6 text-[#6f0d44]" />
              <h3 className="text-2xl font-bold text-[#6f0d44]">
                Cuidados Pós-Procedimento
              </h3>
            </div>
            <div className="space-y-4">
              {postCare.map((care, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6f0d44] mt-1" />
                  <span className="text-gray-600">{care}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}