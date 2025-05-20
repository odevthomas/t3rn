
import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FileText, MessageSquare, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Support = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulates form submission
    setTimeout(() => {
      setSubmitted(true);
      toast({
        title: "Solicitação enviada",
        description: "Nossa equipe entrará em contato em breve.",
        variant: "default",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden bg-grid-pattern">
      <Helmet>
        <title>Suporte Técnico | T3RN Desenvolvimento</title>
        <meta name="description" content="Entre em contato com nosso time de suporte para resolver qualquer problema ou dúvida sobre nossos produtos e serviços." />
      </Helmet>
      
      <Navbar />
      
      <main className="py-24">
        <section className="container px-4 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-black text-gray-300 text-sm mb-4">
              <span>Suporte Técnico</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Como podemos <span className="text-gradient-gray">ajudar você?</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Nossa equipe de suporte técnico está disponível para resolver qualquer problema 
              e garantir que sua experiência com nossos produtos seja sempre excelente.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: <Phone className="w-10 h-10" />,
                title: "Suporte por Telefone",
                description: "Fale diretamente com um especialista para resolver problemas urgentes.",
                action: "(19) 9904-2072",
                actionLabel: "Ligar agora"
              },
              {
                icon: <MessageSquare className="w-10 h-10" />,
                title: "Chat ao Vivo",
                description: "Receba assistência em tempo real através do nosso chat integrado.",
                action: "#chat",
                actionLabel: "Iniciar chat"
              },
              {
                icon: <FileText className="w-10 h-10" />,
                title: "Base de Conhecimento",
                description: "Encontre tutoriais e respostas para as perguntas mais frequentes.",
                action: "#docs",
                actionLabel: "Consultar documentação"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-black border-gray-800 text-white h-full">
                  <CardHeader>
                    <div className="bg-black p-3 rounded-lg inline-block mb-2">
                      {item.icon}
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-6">{item.description}</p>
                    <a 
                      href={item.action}
                      className="text-white font-medium hover:underline flex items-center"
                    >
                      {item.actionLabel}
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black rounded-2xl p-8 md:p-12 border border-gray-800"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Envie sua solicitação</h2>
                <p className="text-gray-300 mb-6">
                  Descreva detalhadamente o problema que está enfrentando e nossa equipe 
                  responderá o mais breve possível.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-black w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white">1</span>
                    </div>
                    <p className="text-gray-300">Descreva seu problema em detalhes</p>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-black w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white">2</span>
                    </div>
                    <p className="text-gray-300">Adicione capturas de tela se possível</p>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-black w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white">3</span>
                    </div>
                    <p className="text-gray-300">Receba assistência personalizada</p>
                  </div>
                </div>
              </div>
              
              <div>
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full p-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
                        E-mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full p-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                      />
                    </div>
                    <div>
                      <label htmlFor="issue" className="block text-sm font-medium text-gray-200 mb-1">
                        Tipo de Problema
                      </label>
                      <select
                        id="issue"
                        className="w-full p-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                      >
                        <option value="technical">Problema técnico</option>
                        <option value="billing">Faturamento</option>
                        <option value="account">Conta</option>
                        <option value="other">Outro</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">
                        Descrição do Problema
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        required
                        className="w-full p-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 px-6 bg-gray-100 text-gray-900 rounded-lg font-medium hover:bg-white transition-colors"
                    >
                      Enviar Solicitação
                    </button>
                  </form>
                ) : (
                  <div className="bg-black p-8 rounded-lg text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="bg-green-500/20 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4"
                    >
                      <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <h3 className="text-xl font-medium mb-2">Solicitação enviada!</h3>
                    <p className="text-gray-400 mb-4">
                      Nossa equipe entrará em contato em até 24 horas úteis.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-white hover:underline"
                    >
                      Enviar nova solicitação
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Support;
