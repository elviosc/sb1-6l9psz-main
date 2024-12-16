import { useState } from "react";

export function CareersForm() {
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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 mb-2">Nome Completo</label>
          <input
            type="text"
            placeholder="Digite seu nome"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#6D0B46] placeholder-gray-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">E-mail</label>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#6D0B46] placeholder-gray-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Telefone</label>
          <input
            type="tel"
            placeholder="(11) 99999-9999"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#6D0B46] placeholder-gray-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Área de Interesse</label>
          <input
            type="text"
            placeholder="Ex: Recepcionista"
            value={formData.area}
            onChange={(e) => setFormData({ ...formData, area: e.target.value })}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#6D0B46] placeholder-gray-400"
          />
        </div>
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Experiência Profissional</label>
        <textarea
          placeholder="Descreva sua experiência profissional"
          value={formData.experience}
          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#6D0B46] placeholder-gray-400 h-32 resize-none"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Currículo</label>
        <label className="flex items-center justify-center w-full h-24 px-4 transition border border-gray-200 border-dashed rounded-lg cursor-pointer hover:border-[#6D0B46]/50">
          <div className="flex items-center gap-2">
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

      <button
        type="submit"
        className="w-full bg-[#6D0B46] text-white py-3 rounded-lg font-medium hover:bg-[#6D0B46]/90 transition-colors flex items-center justify-center gap-2"
      >
        <span>Enviar Candidatura</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </form>
  );
}

export default CareersForm;