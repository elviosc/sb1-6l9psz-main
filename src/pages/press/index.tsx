import { motion } from "framer-motion";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const pressArticles = [
  {
    title: "Epilação a laser em peles étnicas: os benefícios dessa tecnologia",
    date: "2024-04-12T11:22:00",
    imageUrl: "https://lucianamaluf.com.br/wp-content/uploads/2024/04/saude75.png",
    articleUrl: "https://lucianamaluf.com.br/wp-content/uploads/2024/04/Saude-1585.pdf",
    publication: "Saúde",
    edition: "Abril 2024"
  },
  {
    title: "Journal of Dermatology & Cosmetology",
    date: "2023-09-11T14:57:00",
    imageUrl: "https://lucianamaluf.com.br/wp-content/uploads/2023/09/Journal-of-Dermatology-Cosmetology-Agosto-2023.jpg",
    articleUrl: "https://lucianamaluf.com.br/wp-content/uploads/2023/09/Trab-I.pdf",
    publication: "Journal of Dermatology & Cosmetology",
    edition: "Agosto 2023"
  },
  {
    title: "cosmetics-10-00105_230718_212455",
    date: "2023-07-21T19:06:00",
    imageUrl: "https://lucianamaluf.com.br/wp-content/uploads/2023/07/cosmetics.png",
    articleUrl: "https://lucianamaluf.com.br/wp-content/uploads/2023/07/cosmetics-10-00105_230718_212455.pdf",
    publication: "Cosmetics",
    edition: "Julho 2023"
  },
  {
    title: "Journal of Dermatology & Cosmetology",
    date: "2023-06-16T10:45:00",
    imageUrl: "https://lucianamaluf.com.br/wp-content/uploads/2023/06/artigo-MedCrave-Dra-Luciana-Maluf.jpg",
    articleUrl: "https://lucianamaluf.com.br/wp-content/uploads/2023/06/JDC-07-00235_230609_200657.pdf",
    publication: "Journal of Dermatology & Cosmetology",
    edition: "Junho 2023"
  },
  {
    title: "Portal & Revista Influence 29/11",
    date: "2020-12-09T14:39:00",
    imageUrl: "https://lucianamaluf.com.br/wp-content/uploads/2023/06/artigo-MedCrave-Dra-Luciana-Maluf.jpg",
    articleUrl: "https://lucianamaluf.com.br/wp-content/uploads/2020/12/29.11rj.pdf",
    publication: "Influence",
    edition: "Novembro 2020"
  },
  {
    title: "Revista semanal MAIS INFLUENTE digital 22/11",
    date: "2020-11-22T10:08:00",
    imageUrl: "https://lucianamaluf.com.br/wp-content/uploads/2020/11/Revista-semanal-MAIS-INFLUENTE-digital-Dra_Luciana_Maluf.jpg",
    articleUrl: "https://lucianamaluf.com.br/wp-content/uploads/2020/11/Revista-semanal-MAIS-INFLUENTE-digital-Dra_Luciana_Maluf.jpg",
    publication: "Mais Influente",
    edition: "Novembro 2020"
  },
  {
    title: "Artigo Revista Caras Dez/2019",
    date: "2020-01-23T15:34:00",
    imageUrl: "https://lucianamaluf.com.br/wp-content/uploads/2020/01/Cópia-de-Caras.png",
    articleUrl: "https://lucianamaluf.com.br/wp-content/uploads/2020/01/Cópia-de-Caras.pdf",
    publication: "Caras",
    edition: "Dezembro 2019"
  },
  {
    title: "Artigo Revista Caras Out/2019",
    date: "2020-01-23T15:33:00",
    imageUrl: "https://lucianamaluf.com.br/wp-content/uploads/2020/01/Caras.png",
    articleUrl: "https://lucianamaluf.com.br/wp-content/uploads/2020/01/Caras.pdf",
    publication: "Caras",
    edition: "Outubro 2019"
  },
  {
    title: "Artigo Revista Caras Mai/2019",
    date: "2019-05-15T14:30:00",
    imageUrl: "https://lucianamaluf.com.br/wp-content/uploads/2019/05/Tratada.png",
    publication: "Caras",
    edition: "Maio 2019"
  },
  {
    title: "Artigo Revista Caras Fev/2019",
    date: "2019-02-04T16:08:00",
    imageUrl: "https://lucianamaluf.com.br/wp-content/uploads/2019/02/WhatsApp-Image-2019-02-03-at-17.30.11.jpeg",
    articleUrl: "https://lucianamaluf.com.br/2019/02/jpg2pdf.pdf",
    publication: "Caras",
    edition: "Fevereiro 2019"
  },
  {
    title: "Artigo Revista Caras Jul/2018",
    date: "2018-07-30T19:03:00",
    imageUrl: "https://lucianamaluf.com.br/wp-content/uploads/2019/02/WhatsApp-Image-2019-02-03-at-17.30.11.jpeg",
    articleUrl: "https://lucianamaluf.com.br/2018/07/images-3.pdf",
    publication: "Caras",
    edition: "Julho 2018"
  },
  {
    title: "Artigo Revista Caras Jun/2018",
    date: "2018-06-11T21:07:00",
    imageUrl: "https://lucianamaluf.com.br/wp-content/uploads/2019/02/WhatsApp-Image-2019-02-03-at-17.30.11.jpeg",
    articleUrl: "https://lucianamaluf.com.br/2018/06/images.pdf",
    publication: "Caras",
    edition: "Junho 2018"
  },
  {
    title: "Artigo Revista Caras Jan/2018",
    date: "2018-02-06T03:04:00",
    imageUrl: "https://lucianamaluf.com.br/wp-content/uploads/2019/02/WhatsApp-Image-2019-02-03-at-17.30.11.jpeg",
    articleUrl: "https://lucianamaluf.com.br/2018/02/doc05725020180207114241-1-1.pdf",
    publication: "Caras",
    edition: "Janeiro 2018"
  },
  {
    title: "Artigo Revista Caras Dez/2017",
    date: "2017-12-14T17:41:00",
    imageUrl: "https://lucianamaluf.com.br/wp-content/uploads/2017/10/caras-set-dra-luciana-maluf-1.jpg",
    articleUrl: "https://lucianamaluf.com.br/2017/12/images.pdf",
    publication: "Caras",
    edition: "Dezembro 2017"
  },
  {
    title: "Artigo Revista Caras Set/2017",
    date: "2017-10-26T15:47:00",
    imageUrl: "https://lucianamaluf.com.br/wp-content/uploads/2017/10/caras-set-dra-luciana-maluf-1.jpg",
    articleUrl: "https://lucianamaluf.com.br/2017/10/ArtigoCaras-para-Aba-Imprensa.pdf",
    publication: "Caras",
    edition: "Setembro 2017"
  },
  {
    title: "Programa Amaury Jr. Ago/2017",
    date: "2017-08-28T18:18:00",
    videoUrl: "https://www.youtube.com/embed/6mgr8GjDKDs",
    publication: "Programa Amaury Jr.",
    edition: "Agosto 2017"
  },
  {
    title: "Artigo Revista Caras Jan/2017",
    date: "2017-03-04T02:06:00",
    imageUrl: "http://lucianamaluf.com.br/wp-content/uploads/2017/03/Aprenda-a-defender-sua-pele-das-extravagancias-e-exessos-do-verao-new.jpg",
    articleUrl: "http://lucianamaluf.com.br/wp-content/uploads/2017/03/Aprenda-a-defender-sua-pele-das-extravagancias-e-exessos-do-verao-new.jpg",
    publication: "Caras",
    edition: "Janeiro 2017"
  },
  {
    title: "Artigo Revista Manequim",
    date: "2017-02-28T21:27:00",
    imageUrl: "https://lucianamaluf.com.br/wp-content/uploads/2017/02/noticias-beleza-seis-sinais-de-deficiencia-de-vitamina-d-no-seu-organismo.jpg",
    articleUrl: "http://lucianamaluf.com.br/wp-content/uploads/2017/02/noticias-beleza-seis-sinais-de-deficiencia-de-vitamina-d-no-seu-organismo.jpg",
    publication: "Manequim",
    edition: "Fevereiro 2017"
  }
];

export default function PressPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#fff5f8]">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full bg-gradient-to-r from-[#6f0d44] to-[#9b1b47] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("/pattern.svg")', backgroundSize: '30px' }} />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-light mb-6 text-white">
              Imprensa
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Acompanhe as principais aparições da Dra. Luciana Maluf na mídia, artigos publicados e contribuições para o campo da dermatologia.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#articles"
                className="inline-flex items-center px-6 py-3 rounded-full bg-white text-[#6f0d44] hover:bg-[#fff5f8] transition-colors duration-300"
              >
                Ver Artigos
              </a>
              <a
                href="#press"
                className="inline-flex items-center px-6 py-3 rounded-full bg-transparent border border-white text-white hover:bg-white/10 transition-colors duration-300"
              >
                Clipping de Imprensa
              </a>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute right-0 bottom-0 w-96 h-96 translate-x-1/4 translate-y-1/4 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute left-0 top-0 w-72 h-72 -translate-x-1/4 -translate-y-1/4 bg-white/10 rounded-full blur-3xl"
        />
      </section>

      {/* Articles Grid */}
      <div id="articles" className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-light mb-12 text-[#6f0d44]">
            Artigos
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pressArticles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <a
                  href={article.articleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative h-48 overflow-hidden">
                    {article.videoUrl ? (
                      <iframe
                        src={article.videoUrl}
                        frameBorder="0"
                        className="absolute inset-0 w-full h-full"
                        allowFullScreen
                        title={article.title}
                      />
                    ) : (
                      <img
                        src={article.imageUrl}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-[#6f0d44] mb-2">
                      {article.title}
                    </h3>
                    <div className="flex flex-col gap-2">
                      <p className="text-sm text-gray-600">
                        {article.publication} - {article.edition}
                      </p>
                      <p className="text-sm text-gray-500">
                        Publicado em{" "}
                        {format(new Date(article.date), "dd/MM/yyyy 'às' HH:mm", {
                          locale: ptBR,
                        })}
                      </p>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
