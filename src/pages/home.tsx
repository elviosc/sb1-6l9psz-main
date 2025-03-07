import { Helmet } from "react-helmet-async";
import { Hero } from "@/components/hero";
import { TreatmentsList } from "@/components/treatments/treatments-list";
import { Workshop } from "@/components/workshop";
import { Materials } from "@/components/materials";
import { DoctorProfile } from "@/components/doctor-profile";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Helmet>
        <title>Dermatologista em São Paulo | Dra. Luciana Maluf - Tratamentos Estéticos</title>
        <meta
          name="description"
          content="Clínica de Dermatologia especializada em tratamentos estéticos e clínicos. Dra. Luciana Maluf - Dermatologista em São Paulo com mais de 20 anos de experiência."
        />
      </Helmet>
      <Hero />
      <DoctorProfile />
      <TreatmentsList />
      <Workshop />
      <Materials />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#6f0d44] mb-12 text-center">
            Tratamentos Especializados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-[#6f0d44]">Dermatologia Clínica</h3>
              <p className="text-gray-600 mb-4">
                Diagnóstico e tratamento de doenças da pele, cabelos e unhas.
              </p>
              <Link to="/treatments/clinical" className="text-[#6f0d44] font-medium hover:text-[#8b1155] inline-flex items-center">
                Saiba mais
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-[#6f0d44]">Tratamentos Estéticos</h3>
              <p className="text-gray-600 mb-4">
                Procedimentos avançados para rejuvenescimento e harmonização facial.
              </p>
              <Link to="/treatments/aesthetic" className="text-[#6f0d44] font-medium hover:text-[#8b1155] inline-flex items-center">
                Saiba mais
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-[#6f0d44]">Procedimentos a Laser</h3>
              <p className="text-gray-600 mb-4">
                Tecnologia de ponta para diversos tratamentos dermatológicos.
              </p>
              <Link to="/treatments/laser" className="text-[#6f0d44] font-medium hover:text-[#8b1155] inline-flex items-center">
                Saiba mais
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#6f0d44] mb-6">
              Dra. Luciana Maluf
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Com mais de 20 anos de experiência em dermatologia, a Dra. Luciana Maluf é especialista em tratamentos estéticos e clínicos, oferecendo o que há de mais moderno em procedimentos dermatológicos.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#6f0d44] text-[#6f0d44] rounded-md hover:bg-[#6f0d44] hover:text-white transition-colors duration-300"
            >
              Conheça mais sobre a Dra. Luciana
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
