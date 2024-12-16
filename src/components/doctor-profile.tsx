import { ChevronRight } from "lucide-react";

export function DoctorProfile() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-[#fff5f8] py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-[#6f0d44] mb-2">
            Dra. Luciana Maluf
          </h2>
          <div className="w-24 h-1 bg-[#6f0d44]/30 mx-auto"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -left-4 top-0 w-1 h-32 bg-[#6f0d44]/30"></div>
            <h3 className="text-lg md:text-xl text-[#6f0d44]/70 mb-6">
              Dermatologista CRM 113.699 RQE:34.552
            </h3>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
              A Dra. Luciana Maluf é médica com experiência a mais de 20 anos,
              formada pela PUC de Campinas, com especialização em Dermatologia pela
              Faculdade de Medicina do ABC e em Clínica Médica Geral pela Santa
              Casa de Misericórdia de São Paulo. Especializada em Peles Étnicas
              nos Estados Unidos, divide seu tempo entre seus pacientes na clínica
              no Itaim Bibi onde dedica-se a oferecer o que há de mais avançado em
              procedimentos dermatológicos, sempre com foco em resultados naturais
              e duradouros, nos Congressos Nacionais e Internacionais e em
              Palestras onde ministra sobre Fios de PDO.
            </p>
            <a
              href="/profile"
              className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-10 rounded-md bg-[#6f0d44] hover:bg-[#6f0d44]/90 text-white text-base md:text-lg px-6 md:px-8 w-full sm:w-auto group"
            >
              Conheça mais
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-[#6f0d44] rounded-lg transform rotate-3"></div>
            <div className="relative">
              <img
                src="https://lucianamaluf.com.br/wp-content/uploads/2024/11/CCHI8115.jpg"
                alt="Dra. Luciana Maluf"
                className="relative rounded-lg shadow-xl transform -rotate-3 transition-transform hover:rotate-0 duration-500 w-full h-auto"
              />
            </div>
            <div className="absolute -right-4 md:-right-8 -bottom-4 md:-bottom-8 bg-white p-4 rounded-lg shadow-xl">
              <div className="text-[#6f0d44] font-semibold text-base md:text-lg">
                20+ Anos
              </div>
              <div className="text-[#6f0d44]/70 text-xs md:text-sm">
                de Experiência
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
