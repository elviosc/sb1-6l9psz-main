import { ExternalLink } from "lucide-react";

interface PressItem {
  id: number;
  title: string;
  outlet: string;
  date: string;
  image: string;
  link: string;
  description: string;
}

const pressItems: PressItem[] = [
  {
    id: 1,
    title: "Workshop: Técnicas Avançadas em Harmonização Facial",
    outlet: "Curso Presencial",
    date: "13 Dezembro 2024",
    image: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/CCHI8115.jpg",
    link: "https://lucianamaluf.com.br/curso/",
    description: "Workshop exclusivo sobre técnicas avançadas em harmonização facial com a Dra. Luciana Maluf.",
  },
  {
    id: 2,
    title: "A importância dos cuidados com peles étnicas",
    outlet: "Revista Saúde & Bem-estar",
    date: "Dezembro 2023",
    image: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/CCHI8115.jpg",
    link: "#",
    description: "Entrevista especial sobre os desafios e cuidados específicos para peles étnicas.",
  },
  {
    id: 3,
    title: "Inovações em Fios de PDO",
    outlet: "Congresso Brasileiro de Dermatologia",
    date: "Novembro 2023",
    image: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/CCHI8115.jpg",
    link: "#",
    description: "Palestra sobre as últimas inovações em tratamentos com fios de PDO.",
  },
  {
    id: 4,
    title: "Harmonização Facial Natural",
    outlet: "Portal Beleza & Saúde",
    date: "Outubro 2023",
    image: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/CCHI8115.jpg",
    link: "#",
    description: "Artigo sobre a importância de manter a naturalidade nos procedimentos estéticos.",
  },
  {
    id: 5,
    title: "Dermatologia para Peles Brasileiras",
    outlet: "Programa Saúde em Dia",
    date: "Setembro 2023",
    image: "https://lucianamaluf.com.br/wp-content/uploads/2024/11/CCHI8115.jpg",
    link: "#",
    description: "Participação especial sobre os cuidados específicos para a pele brasileira.",
  },
];

export function PressGrid() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#fff5f8]">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pressItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-[#6f0d44]">{item.outlet}</span>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-[#6f0d44] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center text-[#6f0d44]">
                  <span className="text-sm font-medium">Saiba mais</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
