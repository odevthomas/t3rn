
import { motion } from "framer-motion";
import { CreditCard, Landmark, QrCode, CalendarClock, Shield, Clock } from "lucide-react";
import { useState } from "react";

export default function PaymentMethods() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("credit");

  // Simulate Cora payment initiation
  const handleCoraPayment = () => {
    setIsProcessing(true);
    // Simulation of API call to Cora
    setTimeout(() => {
      setIsProcessing(false);
      alert("Pagamento via Cora seria iniciado em ambiente de produção!");
    }, 1500);
  };

  const paymentMethods = [
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Cartão de Crédito",
      description: "Parcele em até 12x sem juros nos principais cartões.",
      value: "credit"
    },
    {
      icon: <QrCode className="w-6 h-6" />,
      title: "PIX",
      description: "Pagamento instantâneo com 10% de desconto à vista.",
      value: "pix"
    },
    {
      icon: <Landmark className="w-6 h-6" />,
      title: "Transferência",
      description: "Transferência bancária com 8% de desconto.",
      value: "transfer"
    },
    {
      icon: <CalendarClock className="w-6 h-6" />,
      title: "Parcelamento",
      description: "Financiamento direto em até 24x.",
      value: "installment"
    }
  ];

  const deliveryInfo = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Entregas no Prazo",
      description: "Sites em 15 dias, sistemas em 45 dias e projetos complexos em até 90 dias.",
      detail: "Cronograma detalhado com marcos de entrega claros e definidos no início do projeto."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Garantia Completa",
      description: "90 dias de garantia para todos os projetos com suporte técnico especializado.",
      detail: "Contrato com SLA definido e tempo de resposta máximo de 4 horas em dias úteis."
    }
  ];

  return (
    <section className="py-24 bg-black bg-grid-pattern">
      <div className="container px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Payment Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-black text-gray-300 text-sm mb-4">
              <span>Flexibilidade para você</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-white">
              Formas de <span className="text-gradient-gray">pagamento</span>
            </h2>
            <p className="text-lg text-gray-300 mb-10">
              Oferecemos diversas opções para facilitar seu investimento, com transparência e segurança.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {paymentMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-black p-6 rounded-xl shadow-elegant flex items-start gap-4 cursor-pointer border-2 ${
                    selectedMethod === method.value ? "border-purple-500" : "border-transparent"
                  }`}
                  onClick={() => setSelectedMethod(method.value)}
                >
                  <div className="p-3 bg-gray-850 rounded-lg text-white">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-white">{method.title}</h3>
                    <p className="text-sm text-gray-300">{method.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Cora Payment Integration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-10 cora-payment-container"
            >
              <div className="cora-payment-header">
                <img src="https://api.iconify.design/simple-icons:cora.svg?color=white" alt="Cora Bank" />
                <h3 className="text-white text-lg font-medium">Pagamento via Cora Bank</h3>
              </div>
              
              <p className="text-gray-300 mb-6">
                Processe pagamentos de forma segura e rápida via Cora Bank, com taxas reduzidas e compensação em até 1 dia útil.
              </p>
              
              <div className="flex flex-wrap mb-6 gap-4">
                <div className="bg-gray-850 px-4 py-2 rounded-md flex items-center">
                  <img src="https://api.iconify.design/ic:baseline-credit-card.svg?color=white" alt="Cartão" className="payment-method-icon" />
                  <span className="text-white">Cartões</span>
                </div>
                <div className="bg-gray-850 px-4 py-2 rounded-md flex items-center">
                  <img src="https://api.iconify.design/mdi:qrcode.svg?color=white" alt="PIX" className="payment-method-icon" />
                  <span className="text-white">PIX</span>
                </div>
                <div className="bg-gray-850 px-4 py-2 rounded-md flex items-center">
                  <img src="https://api.iconify.design/mdi:bank.svg?color=white" alt="Boleto" className="payment-method-icon" />
                  <span className="text-white">Boleto</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-grow">
                  <input 
                    type="text" 
                    placeholder="Insira o valor" 
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md text-white" 
                  />
                </div>
                <button 
                  className="cora-button flex items-center justify-center"
                  onClick={handleCoraPayment}
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processando...
                    </>
                  ) : "Gerar Pagamento"}
                </button>
              </div>
              
              <div className="mt-6 text-xs text-gray-400">
                *Em ambiente de produção, você seria redirecionado para finalizar o pagamento no ambiente seguro do Cora Bank.
              </div>
            </motion.div>
            
            {/* Payment Logos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <p className="text-sm text-gray-400 mb-4">Aceitamos as principais bandeiras:</p>
              <div className="flex flex-wrap justify-start items-center gap-6">
                {[
                  "https://cdn.worldvectorlogo.com/logos/visa-logo-800x286.svg",
                  "https://cdn.worldvectorlogo.com/logos/mastercard-2.svg",
                  "https://logospng.org/download/american-express/logo-american-express-1024.png",
                  "https://cdn.worldvectorlogo.com/logos/pix-4.svg",
                  "https://logodownload.org/wp-content/uploads/2017/04/bradesco-logo-1.png"
                ].map((logo, index) => (
                  <img 
                    key={index}
                    src={logo}
                    alt={`Payment method ${index + 1}`}
                    className="h-8 object-contain"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Delivery Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-black text-gray-300 text-sm mb-4">
              <span>Compromisso com você</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-white">
              Prazos e <span className="text-gradient-gray">entregas</span>
            </h2>
            <p className="text-lg text-gray-300 mb-10">
              Cumprimos rigorosamente nossos cronogramas e mantemos você informado em cada etapa.
            </p>
            
            <div className="space-y-6">
              {deliveryInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-black rounded-xl shadow-elegant overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gray-850 rounded-lg text-white">
                        {item.icon}
                      </div>
                      <h3 className="font-semibold text-xl text-white">{item.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    <p className="text-sm text-gray-400 italic">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Process Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-10 bg-black p-6 rounded-xl shadow-elegant"
            >
              <h3 className="font-semibold text-xl mb-6 text-white">Ciclo de projeto</h3>
              
              <div className="space-y-6">
                {[
                  { step: 1, title: "Descoberta e Planejamento", duration: "1-2 semanas" },
                  { step: 2, title: "Desenvolvimento", duration: "2-8 semanas" },
                  { step: 3, title: "Testes e Revisões", duration: "1-2 semanas" },
                  { step: 4, title: "Lançamento", duration: "1 semana" }
                ].map((phase, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-850 flex items-center justify-center text-white font-bold">
                      {phase.step}
                    </div>
                    <div className="flex-grow border-b border-gray-700 pb-4">
                      <div className="flex justify-between">
                        <span className="font-medium text-white">{phase.title}</span>
                        <span className="text-sm text-gray-400">{phase.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Cora Bank Integration Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-10 bg-black rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <img src="https://api.iconify.design/simple-icons:cora.svg?color=white" alt="Cora Bank" className="h-6 w-6" />
                <h3 className="text-xl font-semibold text-white">Integração Cora Bank</h3>
              </div>
              
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Taxas reduzidas para pequenos negócios</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Compensação em até 1 dia útil</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Integração com sistemas contábeis</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Emissão automática de notas fiscais</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Painel administrativo completo para gestão financeira</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
