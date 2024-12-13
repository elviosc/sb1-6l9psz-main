import { motion } from "framer-motion";
import { Award, Users } from "lucide-react";

export function ProfileHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-[#6f0d44]">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat bg-center" />
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
              <Award className="h-5 w-5" />
              <span className="text-sm">Dermatologista CRM 123456</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-light tracking-tight">
              Dra. Luciana
              <br />
              <span className="font-semibold">Maluf</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl">
              Mais de 20 anos dedicados à dermatologia clínica e estética, 
              com especialização em tratamentos avançados e tecnologia de ponta.
            </p>
            <div className="flex items-center space-x-6 pt-4">
              <div>
                <div className="text-3xl font-light">20+</div>
                <div className="text-white/60 text-sm">Anos de Experiência</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div>
                <div className="text-3xl font-light">5k+</div>
                <div className="text-white/60 text-sm">Pacientes Atendidos</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-[#8b1155] rounded-full transform rotate-6" />
            <img
              src="https://lucianamaluf.com.br/wp-content/uploads/2024/11/IMG_5938-scaled.jpg"
              alt="Dra. Luciana Maluf"
              className="relative rounded-full shadow-2xl transform -rotate-6 transition-transform hover:rotate-0 duration-500"
            />
            <div className="absolute -right-8 -bottom-8 bg-white p-6 rounded-lg shadow-xl">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-[#6f0d44]" />
                <div className="text-[#6f0d44]">
                  <div className="font-semibold">Membro Titular</div>
                  <div className="text-sm">Sociedade Brasileira de Dermatologia</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}