import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <>
      {/* Desktop Version */}
      <motion.a
        href="whatsapp://send?phone=+5511976614826&text=Bem-vindo%28a%29+a+Cl%C3%ADnica+de+Dermatologia+Dra.+Luciana+Maluf"
        className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BA5C] text-white rounded-full shadow-lg z-50 hidden md:flex items-center gap-3 pr-4 pl-4 py-3 group"
        aria-label="Contato via WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <MessageCircle className="w-6 h-6" />
        </motion.div>
        <span className="text-sm font-medium whitespace-nowrap">
          Agende por WhatsApp
        </span>
      </motion.a>

      {/* Mobile Version */}
      <motion.a
        href="whatsapp://send?phone=+5511976614826&text=Bem-vindo%28a%29+a+Cl%C3%ADnica+de+Dermatologia+Dra.+Luciana+Maluf"
        className="fixed bottom-[70px] right-4 bg-[#25D366] hover:bg-[#20BA5C] text-white rounded-full shadow-lg z-50 md:hidden flex items-center justify-center w-12 h-12"
        aria-label="Contato via WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <MessageCircle className="w-5 h-5" />
        </motion.div>
      </motion.a>
    </>
  );
}