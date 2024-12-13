import { motion } from "framer-motion";

export function ClinicMap() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="aspect-video rounded-lg overflow-hidden"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.8649173472395!2d-46.67747492374385!3d-23.579444178886147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59f1069d11d1%3A0x3307f0c0697910ac!2sR.%20Bandeira%20Paulista%2C%20726%20-%20Itaim%20Bibi%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004532-002!5e0!3m2!1sen!2sbr!4v1709901234567!5m2!1sen!2sbr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização da Clínica"
      />
    </motion.div>
  );
}