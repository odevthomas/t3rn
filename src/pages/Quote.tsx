
import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileSearch, Search, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Quote = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Orçamento solicitado",
      description: "Entraremos em contato em até 24 horas úteis.",
      variant: "default",
    });
    // Here you would normally send the data to your API
    console.log("Form submitted:", formData);
    setStep(3); // Move to success step
  };

  const goToStep = (newStep: number) => {
    if (newStep === 2) {
      // Validate step 1 fields
      if (!formData.name || !formData.email || !formData.phone) {
        toast({
          title: "Campos obrigatórios",
          description: "Preencha todos os campos antes de continuar.",
          variant: "destructive",
        });
        return;
      }
    }
    setStep(newStep);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden bg-grid-pattern">
      <Helmet>
        <title>Orçamento Sem Compromisso | T3RN Desenvolvimento</title>
        <meta name="description" content="Solicite um orçamento detalhado para seu projeto digital sem nenhum compromisso. Desenvolvimento web, aplicativos e sistemas sob medida." />
      </Helmet>
      
      <Navbar />
      
      <main className="py-24">
        <section className="container px-4 mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-black text-gray-300 text-sm mb-4">
              <span>Orçamento Sem Compromisso</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Receba uma proposta <span className="text-gradient-gray">personalizada</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Entenda quanto custará seu projeto digital e como podemos ajudar sua 
              empresa a alcançar seus objetivos online.
            </p>
          </motion.div>
          
          <div className="bg-black rounded-2xl border border-gray-800 overflow-hidden">
            {/* Progress Steps */}
            <div className="bg-black p-4">
              <div className="flex items-center justify-center">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center">
                    <div 
                      className={`
                        w-10 h-10 rounded-full flex items-center justify-center font-medium
                        ${step === s ? 'bg-white text-black' : 
                          step > s ? 'bg-green-500 text-white' : 'bg-gray-700 text-gray-300'}
                      `}
                    >
                      {step > s ? <CheckCircle className="w-5 h-5" /> : s}
                    </div>
                    {s < 3 && (
                      <div 
                        className={`w-20 h-1 ${step > s ? 'bg-green-500' : 'bg-gray-700'}`}
                      ></div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2 px-1 text-sm text-gray-400">
                <span className={step >= 1 ? 'text-white' : ''}>Seus Dados</span>
                <span className={step >= 2 ? 'text-white' : ''}>Detalhes do Projeto</span>
                <span className={step >= 3 ? 'text-white' : ''}>Confirmação</span>
              </div>
            </div>
            
            <div className="p-8">
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold">Informações de Contato</h2>
                  <p className="text-gray-400">
                    Precisamos de alguns dados básicos para entrar em contato e apresentar a proposta.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                      />
                    </div>
                  </div>
                  
                  <div className="pt-4 flex justify-end">
                    <button
                      onClick={() => goToStep(2)}
                      className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Continuar
                    </button>
                  </div>
                </motion.div>
              )}
              
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold">Detalhes do Projeto</h2>
                  <p className="text-gray-400">
                    Quanto mais detalhes você fornecer, mais preciso será nosso orçamento.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-1">
                        Tipo de Projeto *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                      >
                        <option value="">Selecione uma opção</option>
                        <option value="website">Website</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="system">Sistema Web</option>
                        <option value="app">Aplicativo Móvel</option>
                        <option value="ai">Solução com IA</option>
                        <option value="other">Outro</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-1">
                        Orçamento Estimado
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                      >
                        <option value="">Selecione uma opção</option>
                        <option value="under5k">Até R$ 5.000</option>
                        <option value="5k-10k">R$ 5.000 - R$ 10.000</option>
                        <option value="10k-20k">R$ 10.000 - R$ 20.000</option>
                        <option value="over20k">Acima de R$ 20.000</option>
                        <option value="notsure">Não tenho certeza</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-1">
                        Prazo Desejado
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                      >
                        <option value="">Selecione uma opção</option>
                        <option value="urgent">Urgente (menos de 1 mês)</option>
                        <option value="1-2months">1-2 meses</option>
                        <option value="3-6months">3-6 meses</option>
                        <option value="flexible">Flexível</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
                      Descrição do Projeto *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={5}
                      required
                      placeholder="Descreva seu projeto, objetivos, funcionalidades desejadas e quaisquer requisitos específicos..."
                      className="w-full p-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                    />
                  </div>
                  
                  <div className="pt-4 flex justify-between">
                    <button
                      onClick={() => goToStep(1)}
                      className="px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      Voltar
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Solicitar Orçamento
                    </button>
                  </div>
                </motion.div>
              )}
              
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6"
                  >
                    <FileSearch className="w-10 h-10 text-green-400" />
                  </motion.div>
                  
                  <h2 className="text-2xl font-bold mb-3">Orçamento Solicitado!</h2>
                  <p className="text-gray-400 max-w-md mx-auto mb-8">
                    Recebemos sua solicitação e nossa equipe já está trabalhando na sua proposta.
                    Entraremos em contato em até 24 horas úteis.
                  </p>
                  
                  <div className="bg-black p-6 rounded-lg max-w-md mx-auto">
                    <h3 className="text-lg font-medium mb-4">Próximos passos:</h3>
                    <div className="space-y-3 text-left">
                      <div className="flex items-start">
                        <div className="mt-1 mr-3 text-green-400">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                        <p className="text-sm text-gray-300">
                          Nossa equipe analisará sua solicitação
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="mt-1 mr-3 text-green-400">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                        <p className="text-sm text-gray-300">
                          Entraremos em contato para agendar uma reunião de descoberta
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="mt-1 mr-3 text-green-400">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                        <p className="text-sm text-gray-300">
                          Você receberá uma proposta detalhada por e-mail
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <a 
                      href="/"
                      className="px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      Voltar para a página inicial
                    </a>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
          
          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Orçamento Detalhado",
                  description: "Receba um orçamento completo com todas as etapas, prazos e custos do seu projeto."
                },
                {
                  title: "Sem Compromisso",
                  description: "Você não é obrigado a fechar o projeto após receber nossa proposta. Sem taxas ocultas."
                },
                {
                  title: "Consultoria Gratuita",
                  description: "Nossa reunião de descoberta é totalmente gratuita e ajuda a alinhar expectativas."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-black border border-gray-800 rounded-xl p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-black w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-lg">✓</span>
                    </div>
                    <h3 className="text-lg font-medium">{item.title}</h3>
                  </div>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Quote;
