
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link, Wallet, CreditCard } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Payment = () => {
  const { toast } = useToast();
  const linkRef = useRef<HTMLInputElement>(null);
  const [amount, setAmount] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [clientName, setClientName] = useState<string>("");
  const [clientEmail, setClientEmail] = useState<string>("");
  const [generatedLink, setGeneratedLink] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);
  
  const handleGenerateLink = () => {
    if (!amount || !description || !clientName) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }
    
    setIsGenerating(true);
    
    // This would normally connect to your backend to create a real payment link
    setTimeout(() => {
      const paymentId = `pay_${Math.random().toString(36).substr(2, 9)}`;
      const baseUrl = window.location.origin;
      const link = `${baseUrl}/pagamento/${paymentId}?amount=${amount}&desc=${encodeURIComponent(description)}&client=${encodeURIComponent(clientName)}`;
      
      setGeneratedLink(link);
      setIsGenerating(false);
      
      toast({
        title: "Link gerado com sucesso",
        description: "Copie e envie para o cliente realizar o pagamento.",
        variant: "default",
      });
    }, 1500);
  };
  
  const copyToClipboard = () => {
    if (linkRef.current) {
      linkRef.current.select();
      document.execCommand('copy');
      toast({
        title: "Link copiado!",
        description: "O link de pagamento foi copiado para a área de transferência.",
        variant: "default",
      });
    }
  };
  
  const resetForm = () => {
    setAmount("");
    setDescription("");
    setClientName("");
    setClientEmail("");
    setGeneratedLink("");
  };
  
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden bg-grid-pattern">
      <Helmet>
        <title>Gerar Link de Pagamento | T3RN Desenvolvimento</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <Navbar />
      
      <main className="py-24">
        <section className="container px-4 mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-black text-gray-300 text-sm mb-4">
              <span>Área Administrativa</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Gerador de <span className="text-gradient-gray">Links de Pagamento</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Crie links de pagamento personalizados para enviar aos clientes.
              Ferramentas simples para recebimentos rápidos.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="bg-black border-gray-800 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Link className="w-5 h-5 mr-2" />
                    Gerar Link de Pagamento
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Preencha os dados abaixo para gerar um link personalizado
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label htmlFor="amount" className="block text-sm font-medium text-gray-300 mb-1">
                        Valor (R$) *
                      </label>
                      <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        min="0"
                        step="0.01"
                        required
                        placeholder="0,00"
                        className="w-full p-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
                        Descrição do Pagamento *
                      </label>
                      <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        placeholder="Ex: Desenvolvimento de website"
                        className="w-full p-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="clientName" className="block text-sm font-medium text-gray-300 mb-1">
                        Nome do Cliente *
                      </label>
                      <input
                        type="text"
                        id="clientName"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        required
                        placeholder="Nome do cliente"
                        className="w-full p-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="clientEmail" className="block text-sm font-medium text-gray-300 mb-1">
                        E-mail do Cliente (opcional)
                      </label>
                      <input
                        type="email"
                        id="clientEmail"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        placeholder="email@cliente.com"
                        className="w-full p-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                      />
                    </div>
                    
                    <div className="flex space-x-3">
                      <button
                        onClick={handleGenerateLink}
                        disabled={isGenerating}
                        className="flex-1 py-3 px-4 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                      >
                        {isGenerating ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Gerando...
                          </>
                        ) : (
                          <>Gerar Link</>
                        )}
                      </button>
                      <button
                        onClick={resetForm}
                        className="py-3 px-4 bg-black text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        Limpar
                      </button>
                    </div>
                  </div>
                  
                  {generatedLink && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 p-4 bg-black rounded-lg border border-gray-700"
                    >
                      <p className="text-sm font-medium text-gray-300 mb-2">Link de pagamento gerado:</p>
                      <div className="flex">
                        <input
                          ref={linkRef}
                          type="text"
                          value={generatedLink}
                          readOnly
                          className="flex-1 p-2 bg-gray-700 border border-gray-600 rounded-l-lg text-white focus:outline-none"
                        />
                        <button
                          onClick={copyToClipboard}
                          className="px-4 py-2 bg-gray-600 text-white rounded-r-lg hover:bg-gray-500 transition-colors"
                        >
                          Copiar
                        </button>
                      </div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="bg-black border-gray-800 text-white mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Métodos de Pagamento
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center p-2 bg-black rounded-lg">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">P</span>
                    </div>
                    <span>Pix</span>
                  </div>
                  <div className="flex items-center p-2 bg-black rounded-lg">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 font-bold">B</span>
                    </div>
                    <span>Boleto Bancário</span>
                  </div>
                  <div className="flex items-center p-2 bg-black rounded-lg">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 font-bold">C</span>
                    </div>
                    <span>Cartão de Crédito</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-black border-gray-800 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Wallet className="w-5 h-5 mr-2" />
                    Dicas
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-300 space-y-3">
                  <p>
                    • O link gerado pode ser enviado por WhatsApp, e-mail ou qualquer outro canal.
                  </p>
                  <p>
                    • O cliente será redirecionado para uma página segura de pagamento.
                  </p>
                  <p>
                    • Você receberá uma notificação quando o pagamento for concluído.
                  </p>
                  <p>
                    • Links expiram após 15 dias se não utilizados.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mt-10 bg-black border border-gray-800 rounded-xl p-6">
            <h2 className="text-lg font-medium mb-4">Links Recentes</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Data</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Cliente</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Descrição</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Valor</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {[
                    { date: "2025-05-18", client: "Empresa ABC", desc: "Desenvolvimento de Website", amount: "R$ 5.800,00", status: "Pago" },
                    { date: "2025-05-17", client: "João Silva", desc: "Aplicativo Mobile", amount: "R$ 12.000,00", status: "Pendente" },
                    { date: "2025-05-15", client: "Tech Solutions", desc: "Consultoria de SEO", amount: "R$ 1.500,00", status: "Pago" },
                  ].map((item, i) => (
                    <tr key={i}>
                      <td className="px-4 py-3 text-sm text-gray-300">{item.date}</td>
                      <td className="px-4 py-3 text-sm text-gray-300">{item.client}</td>
                      <td className="px-4 py-3 text-sm text-gray-300">{item.desc}</td>
                      <td className="px-4 py-3 text-sm text-gray-300">{item.amount}</td>
                      <td className="px-4 py-3 text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          item.status === "Pago" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
                        }`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Payment;
