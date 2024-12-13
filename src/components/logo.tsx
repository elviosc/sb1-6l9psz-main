import { motion } from "framer-motion";

export function Logo() {
  return (
    <motion.a
      href="/"
      className="flex items-center"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <img
        src="https://lucianamaluf.com.br/wp-content/uploads/2022/06/Logomarca_horizontal-ok.png"
        alt="Dra. Luciana Maluf"
        className="h-8 md:h-10 w-auto"
      />
    </motion.a>
  );
}