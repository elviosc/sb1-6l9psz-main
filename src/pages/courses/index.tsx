import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Course {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  link: string;
  tag: string;
}

const courses: Course[] = [
  {
    title: "Transforme a Textura e Firmeza da sua Pele de Forma Natural",
    description: "Descubra técnicas avançadas para rejuvenescimento natural da pele. Aprenda com a Dra. Luciana Maluf métodos inovadores que transformarão sua prática clínica.",
    image: "https://lucianamaluf.com.br/wp-content/uploads/2024/06/296349832_488680383262139_4217249725975445217_n-1.png",
    link: "https://lucianamaluf.com.br/lp1/",
    tag: "Curso Exclusivo"
  },
  {
    title: "Thread's Treasure",
    subtitle: "A vida como ela é - A prática na sua clínica",
    description: "Curso Hands On – OnLine: Aprenda na prática as técnicas mais avançadas de aplicação de fios. Uma experiência única de aprendizado com casos reais.",
    image: "https://lucianamaluf.com.br/wp-content/uploads/2021/05/image00001-min-2.jpeg",
    link: "https://lucianamaluf.com.br/threadstreasure-curso-hands-on-online/#CTA",
    tag: "Hands On Online"
  },
  {
    title: "Workshop Avançado de Fios de PDO e Associações",
    description: "Eleve seu conhecimento a um novo patamar com técnicas avançadas de PDO. Workshop exclusivo com protocolos únicos desenvolvidos pela Dra. Luciana Maluf.",
    image: "https://lucianamaluf.com.br/wp-content/uploads/2022/07/IMG_5915-scaled.jpg",
    link: "https://lucianamaluf.com.br/curso/",
    tag: "Workshop Premium"
  }
];

export function CoursesPage() {
  return (
    <div className="py-24 bg-gradient-to-b from-white to-[#fff5f8]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#6f0d44] mb-4">
            Cursos Exclusivos
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Aprimore suas habilidades com a expertise da Dra. Luciana Maluf
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-4 py-2 bg-[#6f0d44] text-white text-sm font-semibold rounded-full shadow-lg">
                    {course.tag}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#6f0d44] mb-3 line-clamp-2">
                  {course.title}
                </h3>
                {course.subtitle && (
                  <h4 className="text-lg font-medium text-[#6f0d44]/80 mb-3">
                    {course.subtitle}
                  </h4>
                )}
                <p className="text-gray-600 mb-8 line-clamp-3">
                  {course.description}
                </p>
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-[#6f0d44] hover:bg-[#8B1155] text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                    Saiba Mais
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
