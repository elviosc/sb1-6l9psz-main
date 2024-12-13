import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const mythsAndFacts = [
  {
    myth: "O rosto fica paralisado e sem expressão",
    fact: "Com a técnica correta, o resultado é natural e preserva a expressividade",
    isTrue: false
  },
  {
    myth: "O efeito é permanente",
    fact: "O efeito dura de 4 a 6 meses, sendo necessária reaplicação",
    isTrue: false
  },
  {
    myth: "Previne o aparecimento de novas rugas",
    fact: "Sim, o tratamento tem efeito preventivo quando iniciado precocemente",
    isTrue: true
  },
  {
    myth: "Quanto mais aplicar, mais dependente fica",
    fact: "Não existe dependência, o efeito é sempre temporário",
    isTrue: false
  }
];

export function ToxinaMyths() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-[#6f0d44] mb-6">
            Mitos e Verdades
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça os fatos e desfaça os mitos sobre o tratamento com toxina botulínica.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {mythsAndFacts.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/50 backdrop-blur-sm p-6 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                {item.isTrue ? (
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-1" />
                ) : (
                  <XCircle className="w-6 h-6 text-red-500 mt-1" />
                )}
                <div>
                  <h3 className="text-lg font-semibold text-[#6f0d44] mb-2">
                    {item.myth}
                  </h3>
                  <p className="text-gray-600">{item.fact}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}