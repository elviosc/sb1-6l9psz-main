import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export interface TreatmentCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  index: number;
}

export function TreatmentCard({ title, description, image, href, index }: TreatmentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <Link to={href} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#6f0d44]/90 via-[#6f0d44]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
        </div>
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 className="text-2xl font-bold text-[#6f0d44] mb-2 group-hover:text-[#ffc2dd] transition-colors">
            {title}
          </h3>
          <p className="text-[#6f0d44]/90 text-sm leading-relaxed line-clamp-2 group-hover:text-[#6f0d44]">
            {description}
          </p>
          <div className="mt-4 flex items-center text-[#6f0d44]/90 text-sm font-medium group-hover:text-[#ffc2dd] transition-colors">
            <span>Saiba mais</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}