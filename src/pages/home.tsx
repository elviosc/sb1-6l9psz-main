import { Helmet } from "react-helmet-async";
import { HeroSection } from "@/components/hero-section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Dermatologista em São Paulo | Dra. Luciana Maluf - Tratamentos Estéticos</title>
        <meta
          name="description"
          content="Clínica de Dermatologia especializada em tratamentos estéticos e clínicos. Dra. Luciana Maluf - Dermatologista em São Paulo com mais de 20 anos de experiência."
        />
      </Helmet>

      <HeroSection 
        title="Dermatologia Especializada e Tratamentos Estéticos"
        subtitle="Dra. Luciana Maluf"
        description="Mais de 20 anos de experiência em dermatologia clínica e estética, oferecendo tratamentos personalizados e resultados excepcionais."
        image="https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5938-scaled.jpg"
        videoUrl="https://www.youtube.com/embed/m4coMkLV6kU"
      >
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link to="/contact/appointment">
              Agende sua Consulta
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link to="/treatments">
              Conheça os Tratamentos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </HeroSection>

      {/* Add other sections of your homepage here */}
    </>
  );
}
