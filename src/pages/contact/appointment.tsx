import { motion } from "framer-motion";
import { Clock, MapPin, Phone } from "lucide-react";
import { FormEvent, useState } from "react";

export function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    treatment: "",
    message: ""
  });

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }
    return value;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const message = 
`🏥 *NOVA SOLICITAÇÃO DE CONSULTA*

👤 *Informações do Paciente*
━━━━━━━━━━━━━━━━━━━━━
📝 *Nome:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Telefone:* ${formData.phone}
💉 *Procedimento:* ${formData.treatment}

💬 *Mensagem:*
${formData.message || "Não informada"}

━━━━━━━━━━━━━━━━━━━━━
Enviado através do site`;

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp number
    const whatsappNumber = "5511976614826";
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === "phone") {
      setFormData(prev => ({
        ...prev,
        [name]: formatPhoneNumber(value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#fff5f8]">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[#6f0d44] mb-4">Agende sua Consulta</h1>
          <p className="text-gray-600 mb-6">
            Preencha o formulário abaixo para solicitar um agendamento.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-light mb-8 text-[#6f0d44]">
            Agende sua Consulta
          </h1>

          {/* Business Hours Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-[#6f0d44]" />
              <h2 className="text-xl font-medium text-[#6f0d44]">
                Horário de Atendimento
              </h2>
            </div>
            <div className="space-y-2 text-gray-600">
              <p className="flex justify-between items-center">
                <span className="font-medium">Segunda à Sexta</span>
                <span>09:00 - 18:00</span>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 mb-12">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#6f0d44] focus:border-[#6f0d44] transition-colors duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#6f0d44] focus:border-[#6f0d44] transition-colors duration-300"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#6f0d44] focus:border-[#6f0d44] transition-colors duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="treatment" className="block text-sm font-medium text-gray-700 mb-1">
                  Tratamento de Interesse
                </label>
                <select
                  id="treatment"
                  name="treatment"
                  value={formData.treatment}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#6f0d44] focus:border-[#6f0d44] transition-colors duration-300"
                  required
                >
                  <option value="">Selecione um tratamento</option>
                  <option value="Toxina Botulínica">Toxina Botulínica</option>
                  <option value="Fios de PDO">Fios de PDO</option>
                  <option value="Peeling">Peeling</option>
                  <option value="Bioestimuladores">Bioestimuladores</option>
                  <option value="Preenchimento">Preenchimento</option>
                  <option value="Skinbooster">Skinbooster</option>
                  <option value="Laser e Tecnologias">Laser e Tecnologias</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#6f0d44] focus:border-[#6f0d44] transition-colors duration-300"
                placeholder="Conte-nos mais sobre sua consulta..."
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-8 py-3 bg-[#6f0d44] text-white rounded-full hover:bg-[#9b1b47] transition-colors duration-300"
              >
                Solicitar Agendamento
              </button>
            </div>
          </form>

          {/* Location Card */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-[#6f0d44]" />
              <h2 className="text-xl font-medium text-[#6f0d44]">
                Como Chegar
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <p className="text-gray-600">
                    Rua Bandeira Paulista, 726 - Itaim Bibi, São Paulo - SP, 04532-002
                  </p>
                </div>
                <a
                  href="tel:1137913905"
                  className="flex items-center gap-2 text-[#6f0d44] hover:text-[#9b1b47] transition-colors duration-300 whitespace-nowrap"
                >
                  <Phone className="w-4 h-4" />
                  <span>(11) 3791-3905</span>
                </a>
              </div>
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.6675811169287!2d-46.67763492374385!3d-23.58269447879461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5744e0b3ad1d%3A0x3e9f3a76e1ebfb69!2sR.%20Bandeira%20Paulista%2C%20726%20-%20Itaim%20Bibi%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004532-002!5e0!3m2!1spt-BR!2sbr!4v1702840849433!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <a
                href="https://www.google.com/maps/dir//Rua+Bandeira+Paulista,+726+-+Itaim+Bibi,+S%C3%A3o+Paulo+-+SP,+04532-002"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#6f0d44] hover:text-[#9b1b47] transition-colors duration-300"
              >
                <MapPin className="w-4 h-4" />
                <span>Ver rotas no Google Maps</span>
              </a>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 text-gray-600">
            <p className="text-sm">
              * Após o envio do formulário, você será redirecionado para o WhatsApp para confirmar sua solicitação.
            </p>
            <p className="text-sm mt-2">
              * Em caso de urgência, entre em contato pelo telefone: (11) 9 7661-4826
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AppointmentPage;
