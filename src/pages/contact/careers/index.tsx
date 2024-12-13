import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Send, Briefcase } from "lucide-react";

export function CareersPage() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#fff5f8]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#6f0d44] mb-6">
            Trabalhe Conosco
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Faça parte da nossa equipe de profissionais qualificados
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 bg-white/50 backdrop-blur-sm p-8 rounded-lg"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo</Label>
                <Input id="name" placeholder="Digite seu nome" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="Digite seu e-mail" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input id="phone" placeholder="(11) 99999-9999" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="position">Área de Interesse</Label>
                <Input id="position" placeholder="Ex: Recepcionista" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Experiência Profissional</Label>
              <Textarea 
                id="experience" 
                placeholder="Descreva sua experiência profissional"
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cv">Currículo</Label>
              <div className="flex items-center gap-4">
                <Input id="cv" type="file" className="hidden" />
                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-dashed border-2"
                  onClick={() => document.getElementById('cv')?.click()}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Anexar Currículo (PDF, DOC)
                </Button>
              </div>
            </div>

            <Button 
              type="submit"
              className="bg-[#6f0d44] hover:bg-[#6f0d44]/90 w-full"
            >
              <Send className="w-4 h-4 mr-2" />
              Enviar Candidatura
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <h2 className="text-2xl font-bold text-[#6f0d44] mb-4">
              Por que trabalhar conosco?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                "Ambiente profissional e acolhedor",
                "Oportunidades de crescimento",
                "Equipe qualificada"
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-2 text-gray-600 bg-white/50 backdrop-blur-sm p-4 rounded-lg"
                >
                  <Briefcase className="w-4 h-4 text-[#6f0d44]" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}