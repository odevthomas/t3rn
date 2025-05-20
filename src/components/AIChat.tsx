
import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{text: string, isUser: boolean}>>([
    { text: "Olá! Como posso ajudar você hoje?", isUser: false }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // FAQ responses
  const faqResponses: Record<string, string> = {
    "preço": "Nossos preços variam de acordo com as necessidades específicas do seu projeto. Oferecemos orçamentos personalizados após entender completamente seus requisitos. Entre em contato conosco para uma consulta gratuita!",
    "orçamento": "Fazemos orçamentos personalizados baseados nas necessidades do seu projeto. O processo inclui uma reunião de descoberta gratuita, análise de requisitos e apresentação detalhada do orçamento com cronograma.",
    "prazo": "Nossos prazos de entrega são definidos de acordo com a complexidade do projeto. Geralmente, projetos simples levam de 2 a 4 semanas, enquanto projetos mais complexos podem levar de 2 a 6 meses. Sempre estabelecemos cronogramas realistas com margens de segurança.",
    "tecnologia": "Trabalhamos com diversas tecnologias modernas como React, Angular, Vue.js para frontend; Node.js, Python, PHP para backend; React Native e Flutter para aplicativos móveis; e WordPress para sites institucionais e blogs.",
    "serviço": "Oferecemos desenvolvimento de sites, aplicativos móveis, sistemas personalizados, e-commerce, consultoria em tecnologia, UX/UI design, manutenção e suporte técnico contínuo.",
    "contato": "Você pode entrar em contato conosco pelo WhatsApp (19) 99042-0272, pelo email contato@t3rn.com.br, ou preenchendo o formulário em nossa seção de contato.",
    "processo": "Nosso processo de trabalho inclui: 1) Descoberta e briefing; 2) Planejamento e orçamento; 3) Design e aprovação; 4) Desenvolvimento; 5) Testes e ajustes; 6) Lançamento; 7) Suporte contínuo.",
    "portfólio": "Nosso portfólio inclui diversos projetos em vários setores como e-commerce, educação, saúde e serviços. Você pode ver alguns exemplos na seção de Projetos do nosso site.",
    "equipe": "Nossa equipe é composta por profissionais experientes em desenvolvimento web, mobile, design UX/UI, e especialistas em várias tecnologias modernas.",
    "pagamento": "Oferecemos diversas opções de pagamento, incluindo parcelamento em cartão de crédito, transferência bancária, PIX e boleto. Para projetos maiores, trabalhamos com cronograma de pagamentos conforme entregas."
  };
  
  // Auto-scroll to bottom when new messages appear
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = { text: input, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    // Find response based on keywords
    setTimeout(() => {
      let responseFound = false;
      const inputLower = input.toLowerCase();
      
      // Check for keywords in the FAQ
      for (const [keyword, response] of Object.entries(faqResponses)) {
        if (inputLower.includes(keyword)) {
          setMessages(prev => [
            ...prev, 
            { text: response, isUser: false }
          ]);
          responseFound = true;
          break;
        }
      }
      
      // Default response if no keyword matched
      if (!responseFound) {
        setMessages(prev => [
          ...prev,
          { text: "Agradeço sua mensagem! Para responder de forma mais precisa, recomendo entrar em contato diretamente pelo WhatsApp (19) 99042-0272 ou pelo formulário de contato. Nossa equipe terá prazer em atendê-lo.", isUser: false }
        ]);
      }
      
      setInput('');
      setIsLoading(false);
    }, 1000);
  };
  
  const toggleChat = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-black dark:bg-gray-100 text-white dark:text-gray-900 rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>
      
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 w-full max-w-sm bg-white dark:bg-gray-800 rounded-2xl shadow-2xl z-40 overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            {/* Header */}
            <div className="bg-gray-100 dark:bg-gray-700 p-4 border-b border-gray-200 dark:border-gray-600">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-black dark:bg-gray-100 rounded-full flex items-center justify-center text-white dark:text-gray-900 mr-3">
                  <span className="font-bold">T3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">Assistente T3RN</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Online | Resposta em instantes</p>
                </div>
              </div>
            </div>
            
            {/* Messages */}
            <div className="p-4 h-80 overflow-y-auto">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div 
                    key={index} 
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] p-3 rounded-xl ${
                        message.isUser 
                          ? 'bg-black text-white dark:bg-gray-100 dark:text-gray-900 rounded-br-none' 
                          : 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-gray-100 rounded-bl-none'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-gray-100 p-3 rounded-xl rounded-bl-none max-w-[80%]">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>
            
            {/* Input */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 p-2 bg-gray-100 dark:bg-gray-700 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-900 dark:text-gray-100"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  className="p-2 bg-black dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!input.trim() || isLoading}
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              
              {/* Quick questions */}
              <div className="mt-2 flex flex-wrap gap-2">
                {["Orçamento", "Prazos", "Serviços", "Contato"].map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => {
                      setInput(`Como funciona o processo de ${question.toLowerCase()}?`);
                      setTimeout(() => handleSubmit(), 100);
                    }}
                    className="text-xs px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    disabled={isLoading}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
