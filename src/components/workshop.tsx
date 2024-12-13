import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Workshop() {
  return (
    <section className="relative py-32 min-h-[800px] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <iframe
            className="absolute w-full h-full object-cover"
            src="https://www.youtube.com/embed/m4coMkLV6kU?controls=0&autoplay=1&mute=1&start=5&end=70&loop=1&playlist=m4coMkLV6kU&playsinline=1&rel=0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ 
              pointerEvents: 'none',
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              objectFit: 'cover'
            }}
          />
          <div className="absolute inset-0 bg-[#8b1155]/90 backdrop-blur-sm" />
        </div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-white/10 border-none backdrop-blur-md text-white">
            <CardHeader className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <CardTitle className="text-5xl font-bold mb-4">
                  Workshop Avançado de
                  <br />
                  Fios de PDO High-Tech
                </CardTitle>
                <CardDescription className="text-white/80 text-lg">
                  Uma experiência única de aprendizado com uma das maiores especialistas da área.
                </CardDescription>
              </motion.div>
            </CardHeader>
            <CardContent className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                <p className="text-white/90 max-w-2xl mx-auto">
                  O Workshop de Fios de PDO é uma oportunidade única de aprender como realizar o procedimento com segurança e habilidade. Temos a teoria, prática, trocas de experiências e muito mais!
                </p>
                <Button 
                  size="lg"
                  variant="secondary"
                  className="bg-white text-[#8b1155] hover:bg-white/90"
                  asChild
                >
                  <a 
                    href="https://lucianamaluf.com.br/curso/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    INSCREVA-SE AGORA
                  </a>
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}