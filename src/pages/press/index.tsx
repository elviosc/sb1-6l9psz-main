import { ExternalLink } from "lucide-react";
import { useState } from "react";

interface PressItem {
  title: string;
  source: string;
  date: string;
  image: string;
  link: string;
}

const pressItems: PressItem[] = [
  {
    title: "Inovações em Dermatologia",
    source: "Revista Saúde",
    date: "2024",
    image: "/images/press/press1.jpg",
    link: "#"
  },
  {
    title: "Tratamentos para Pele Brasileira",
    source: "Portal Beleza",
    date: "2023",
    image: "/images/press/press2.jpg",
    link: "#"
  }
];

export default function PressPage() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (title: string) => {
    setImageErrors(prev => ({ ...prev, [title]: true }));
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-[#6f0d44] mb-12">Imprensa</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pressItems.map((item) => (
          <a
            key={item.title}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-video relative overflow-hidden bg-gray-100">
              {!imageErrors[item.title] ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  onError={() => handleImageError(item.title)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <span>Imagem não disponível</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#6f0d44] mb-2 group-hover:text-[#8b1155] transition-colors">
                {item.title}
              </h3>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>{item.source}</span>
                <span>{item.date}</span>
              </div>
              <div className="mt-4 flex items-center text-[#6f0d44] font-medium">
                <span>Ver matéria</span>
                <ExternalLink className="ml-2 h-4 w-4" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
