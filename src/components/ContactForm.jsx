import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollAnimations';

const clientTypes = [
  'Condomínio',
  'Construtora / Incorporadora',
  'Home Gym de Alto Padrão',
  'Hotel / Resort',
  'Academia Profissional',
  'Empresa / Corporativo',
  'Outro',
];

const InputField = ({ label, required, children }) => (
  <div className="flex flex-col gap-2">
    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
      {label} {required && <span className="text-primary">*</span>}
    </label>
    {children}
  </div>
);

const inputClass =
  'w-full bg-[#1a1a1a] border border-white/[0.08] text-white placeholder-gray-600 px-4 py-3.5 text-sm rounded-sm outline-none transition-all duration-200 focus:border-primary/60 focus:ring-1 focus:ring-primary/20 hover:border-white/20';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    clientType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      // Phone mask: (XX) XXXXX-XXXX
      const digits = value.replace(/\D/g, '').slice(0, 11);
      let masked = digits;
      if (digits.length > 2) masked = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
      if (digits.length > 7) masked = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
      setForm((prev) => ({ ...prev, phone: masked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission
    await new Promise((res) => setTimeout(res, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="relative bg-black text-white py-24 md:py-32 overflow-hidden" id="contact">
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,90,0,1) 0%, transparent 70%)' }}
      />

      <div className="container-default relative z-10">
        {/* Section header */}
        <ScrollReveal className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary" />
            <span className="text-primary uppercase text-xs font-bold tracking-[0.3em] font-display">Fale conosco</span>
            <div className="w-8 h-[2px] bg-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-light uppercase tracking-wide">
            Formulário de{' '}
            <span className="font-black text-primary not-italic">Contato</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm md:text-base max-w-md mx-auto">
            Preencha o formulário e entraremos em contato em até{' '}
            <strong className="text-gray-200">2 horas!</strong>
          </p>
        </ScrollReveal>

        {/* Card */}
        <ScrollReveal delay={0.1} duration={0.7}>
          <div className="max-w-2xl mx-auto bg-[#141414] border border-white/[0.06] rounded-2xl p-8 md:p-10 shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-5"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 size={36} className="text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-black uppercase">Mensagem enviada!</h3>
                  <p className="text-gray-400 max-w-xs">
                    Obrigado pelo contato! Nossa equipe responderá em breve — fique de olho no seu e-mail.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', company: '', clientType: '', message: '' }); }}
                    className="mt-2 text-primary text-sm underline underline-offset-4"
                  >
                    Enviar outra mensagem
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col gap-5"
                >
                  {/* Row 1: Nome + Telefone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <InputField label="Nome Completo" required>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Seu nome completo"
                        className={inputClass}
                        required
                      />
                    </InputField>
                    <InputField label="Telefone" required>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(00) 00000-0000"
                        className={inputClass}
                        required
                      />
                    </InputField>
                  </div>

                  {/* E-mail */}
                  <InputField label="E-mail" required>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className={inputClass}
                      required
                    />
                  </InputField>

                  {/* Empresa */}
                  <InputField label="Nome da Empresa">
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Digite o nome da sua empresa"
                      className={inputClass}
                    />
                  </InputField>

                  {/* Tipo de Cliente */}
                  <InputField label="Tipo de Cliente">
                    <select
                      name="clientType"
                      value={form.clientType}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer`}
                    >
                      <option value="" disabled>Selecione uma opção</option>
                      {clientTypes.map((type) => (
                        <option key={type} value={type} className="bg-[#1a1a1a]">
                          {type}
                        </option>
                      ))}
                    </select>
                  </InputField>

                  {/* Mensagem */}
                  <InputField label="Mensagem">
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Conte-nos mais sobre o que precisa..."
                      className={`${inputClass} resize-none`}
                    />
                  </InputField>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.01, y: loading ? 0 : -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="group mt-2 w-full bg-primary hover:bg-[#e65100] text-white font-display font-bold text-base uppercase tracking-widest py-4 px-8 flex items-center justify-center gap-3 transition-colors duration-300 rounded-sm disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5 duration-300" />
                        Enviar Mensagem
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-xs text-gray-600">
                    Seus dados são tratados com total sigilo. Nada de spam.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactForm;
