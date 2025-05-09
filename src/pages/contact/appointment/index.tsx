import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent, useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function AppointmentPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    procedure: "",
    message: ""
  });

  const formatPhoneNumber = (value: string) => {
    // Remove tudo exceto números
    const numbers = value.replace(/\D/g, "");
    
    // Aplica a máscara (11) 99999-9999
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }
    return value;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Validações básicas
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.procedure.trim()) {
      toast({
        title: "Erro no formulário",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.email.includes("@")) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um email válido.",
        variant: "destructive"
      });
      return;
    }

    // Format the message for WhatsApp
    const message = 
`🏥 *NOVA SOLICITAÇÃO DE CONSULTA*

👤 *Informações do Paciente*
━━━━━━━━━━━━━━━━━━━━━
📝 *Nome:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Telefone:* ${formData.phone}
💉 *Procedimento:* ${formData.procedure}

💬 *Mensagem:*
${formData.message || "Não informada"}

━━━━━━━━━━━━━━━━━━━━━
Enviado através do site`;

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp number
    const whatsappNumber = "5511976614826";
    
    // Show success message
    toast({
      title: "Solicitação enviada!",
      description: "Você será redirecionado para o WhatsApp para confirmar o envio.",
    });
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    
    // Apply phone formatting if it's the phone field
    if (id === "phone") {
      setFormData(prev => ({
        ...prev,
        [id]: formatPhoneNumber(value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [id]: value
      }));
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#6f0d44] mb-8 text-center">
          Agende sua Consulta
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <form 
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo*</Label>
                <Input 
                  id="name" 
                  placeholder="Digite seu nome" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="focus:ring-[#6f0d44] focus:border-[#6f0d44]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail*</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="seu@email.com" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="focus:ring-[#6f0d44] focus:border-[#6f0d44]"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone*</Label>
                <Input 
                  id="phone" 
                  placeholder="(11) 99999-9999" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  maxLength={15}
                  className="focus:ring-[#6f0d44] focus:border-[#6f0d44]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="procedure">Procedimento de Interesse*</Label>
                <Input 
                  id="procedure" 
                  placeholder="Ex: Toxina Botulínica" 
                  value={formData.procedure}
                  onChange={handleInputChange}
                  required
                  className="focus:ring-[#6f0d44] focus:border-[#6f0d44]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Mensagem (Opcional)</Label>
              <Textarea 
                id="message" 
                placeholder="Digite sua mensagem ou dúvidas"
                className="min-h-[100px] focus:ring-[#6f0d44] focus:border-[#6f0d44]"
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col space-y-4">
              <button
                type="submit"
                className="w-full bg-[#6f0d44] text-white py-3 px-6 rounded-lg hover:bg-[#6f0d44]/90 transition-colors duration-300"
              >
                Solicitar Agendamento
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}