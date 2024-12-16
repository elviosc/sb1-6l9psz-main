import { useState } from "react";

export function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    area: "",
    experience: "",
    resume: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#6D0B46] mb-4">Trabalhe Conosco</h1>
        <p className="text-gray-600">Faça parte da nossa equipe de profissionais qualificados</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-gray-700">Nome Completo</label>
            <input
              type="text"
              placeholder="Digite seu nome"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#6D0B46]/20 focus:border-[#6D0B46] text-gray-600 placeholder-gray-400"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-gray-700">E-mail</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#6D0B46]/20 focus:border-[#6D0B46] text-gray-600 placeholder-gray-400"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-gray-700">Telefone</label>
            <input
              type="tel"
              placeholder="(11) 99999-9999"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#6D0B46]/20 focus:border-[#6D0B46] text-gray-600 placeholder-gray-400"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-gray-700">Área de Interesse</label>
            <input
              type="text"
              placeholder="Ex: Recepcionista"
              value={formData.area}
              onChange={(e) => setFormData({ ...formData, area: e.target.value })}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#6D0B46]/20 focus:border-[#6D0B46] text-gray-600 placeholder-gray-400"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-gray-700">Experiência Profissional</label>
          <textarea
            placeholder="Descreva sua experiência profissional"
            value={formData.experience}
            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#6D0B46]/20 focus:border-[#6D0B46] text-gray-600 placeholder-gray-400 h-32"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-gray-700">Currículo</label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-24 border border-gray-200 border-dashed rounded-lg cursor-pointer hover:bg-gray-50">
              <div className="flex items-center space-x-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16L12 8" stroke="#6D0B46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11L12 8L15 11" stroke="#6D0B46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[#6D0B46]">Anexar Currículo (PDF, DOC)</span>
              </div>
              <input
                type="file"
                className="hidden"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#6D0B46] text-white py-3 rounded-lg font-medium hover:bg-[#6D0B46]/90 transition-colors flex items-center justify-center space-x-2"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Enviar Candidatura</span>
        </button>
      </form>
    </div>
  );
}

export default CareersPage;
