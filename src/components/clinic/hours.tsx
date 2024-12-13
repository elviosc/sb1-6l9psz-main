import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const hours = [
  { day: "Segunda a Sexta", time: "09:00 - 18:00" }
];

export function ClinicHours() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Clock className="h-6 w-6 text-[#6f0d44]" />
        <h2 className="text-2xl font-bold text-[#6f0d44]">Horário de Funcionamento</h2>
      </div>
      <div className="space-y-4">
        {hours.map((schedule, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex justify-between items-center py-3 border-b border-[#6f0d44]/10"
          >
            <span className="text-gray-600 font-medium">{schedule.day}</span>
            <span className="text-[#6f0d44]">{schedule.time}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}