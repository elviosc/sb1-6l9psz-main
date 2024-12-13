import { motion } from "framer-motion";
import { Phone, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ClinicContact() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Phone className="h-6 w-6 text-[#6f0d44]" />
        <h2 className="text-2xl font-bold text-[#6f0d44]">Contato e Agendamento</h2>
      </div>
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <Phone className="h-5 w-5 text-[#6f0d44]" />
          <div>
            <p className="text-gray-600">Telefone:</p>
            <p className="text-[#6f0d44] font-medium">(11) 3791-3905</p>
            <p className="text-[#6f0d44] font-medium">(11) 97661-4826</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-3"
        >
          <Mail className="h-5 w-5 text-[#6f0d44]" />
          <div>
            <p className="text-gray-600">Email:</p>
            <p className="text-[#6f0d44] font-medium">contato@lucianamaluf.com.br</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-4"
        >
          <Button
            size="lg"
            className="w-full bg-[#6f0d44] hover:bg-[#6f0d44]/90"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Agende sua Consulta
          </Button>
        </motion.div>
      </div>
    </div>
  );
}