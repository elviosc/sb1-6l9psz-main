import { motion } from "framer-motion";
import { Clock } from "lucide-react";

interface TreatmentTimelineProps {
  duration: string;
  recovery: string;
  results: string;
}

export function TreatmentTimeline({ duration, recovery, results }: TreatmentTimelineProps) {
  const timelineItems = [
    { title: "Duração do Procedimento", value: duration },
    { title: "Tempo de Recuperação", value: recovery },
    { title: "Duração dos Resultados", value: results },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#fff5f8] to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#6f0d44] mb-4">
            Linha do Tempo do Tratamento
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-[#6f0d44]/20" />

            {/* Timeline Items */}
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                } mb-12`}
              >
                <div
                  className={`w-1/2 flex ${
                    index % 2 === 0 ? "justify-end pr-8" : "justify-start pl-8"
                  }`}
                >
                  <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
                    <div className="flex items-center gap-3 text-[#6f0d44] mb-2">
                      <Clock className="w-5 h-5" />
                      <h3 className="font-medium">{item.title}</h3>
                    </div>
                    <p className="text-gray-600">{item.value}</p>
                  </div>
                </div>
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#6f0d44] rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}