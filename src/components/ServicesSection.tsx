import { useRef } from "react";
import { motion } from "framer-motion";
import { Globe, Code, MessageSquare, Brain, ArrowRight, CheckCircle, Settings, Rocket, Star, ArrowLeft } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function ServicesSection() {
  const services = [
    {
      icon: <Globe className="w-10 h-10 text-green-500" />, // Cor verde
      title: "Sites Profissionais",
      description: "Sites responsivos e otimizados para buscadores, com design moderno e foco em conversão.",
      features: [
        "Design personalizado e exclusivo",
        "Responsivo para todos os dispositivos",
        "Otimização para mecanismos de busca (SEO)",
        "Integração com Google Analytics",
        "Painel administrativo intuitivo"
      ],
      price: "a partir de R$ 3.800",
      popular: false
    },
    {
      icon: <Code className="w-10 h-10 text-green-500" />, // Cor verde
      title: "Sistemas Web",
      description: "Sistemas personalizados para automatizar processos e aumentar a eficiência do seu negócio.",
      features: [
        "Análise de requisitos detalhada",
        "Desenvolvimento sob medida",
        "Integração com sistemas existentes",
        "Painel administrativo completo",
        "Treinamento da equipe incluído"
      ],
      price: "a partir de R$ 8.900",
      popular: true
    },
    {
      icon: <MessageSquare className="w-10 h-10 text-green-500" />, // Cor verde
      title: "Automação WhatsApp",
      description: "Soluções de atendimento automatizado via WhatsApp integradas aos seus sistemas.",
      features: [
        "Chatbot personalizado",
        "Atendimento automático 24/7",
        "Respostas inteligentes com IA",
        "Integração com CRM e ERP",
        "Relatórios de desempenho"
      ],
      price: "a partir de R$ 2.500",
      popular: false
    },
    {
      icon: <Brain className="w-10 h-10 text-green-500" />, // Cor verde
      title: "Soluções com IA",
      description: "Desenvolvimento de soluções com inteligência artificial para otimizar processos.",
      features: [
        "Análise de dados avançada",
        "Automação de tarefas repetitivas",
        "Chatbots inteligentes",
        "Reconhecimento de padrões",
        "Tomada de decisão assistida"
      ],
      price: "a partir de R$ 12.000",
      popular: false
    },
    {
      icon: <Settings className="w-10 h-10 text-green-500" />, // Cor verde
      title: "DevOps e Infraestrutura",
      description: "Implementação e gerenciamento de infraestrutura em nuvem para alta disponibilidade.",
      features: [
        "Arquitetura de nuvem otimizada",
        "CI/CD para entrega contínua",
        "Monitoramento e alertas",
        "Backup e recuperação de desastres",
        "Segurança avançada"
      ],
      price: "a partir de R$ 4.500",
      popular: false
    },
    {
      icon: <Rocket className="w-10 h-10 text-green-500" />, // Cor verde
      title: "Marketing Digital",
      description: "Estratégias de marketing digital para impulsionar sua presença online e gerar leads qualificados.",
      features: [
        "SEO avançado",
        "Campanhas de mídias sociais",
        "Marketing de conteúdo",
        "E-mail marketing",
        "Análise de performance"
      ],
      price: "a partir de R$ 2.900",
      popular: false
    },
    {
      icon: <Star className="w-10 h-10 text-green-500" />, // Cor verde
      title: "UX/UI Design",
      description: "Design de interfaces focado em experiência do usuário para maximizar conversões e engajamento.",
      features: [
        "Pesquisa de usuário",
        "Wireframes e protótipos",
        "Testes de usabilidade",
        "Design system completo",
        "Microinterações e animações"
      ],
      price: "a partir de R$ 6.500",
      popular: false
    }
  ];

  const featuredService = services.find(service => service.popular);
  const regularServices = services.filter(service => !service.popular);

  return (
    <section id="services" className="py-24 bg-black">
      <div className="container px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-800/20 text-green-400 text-sm mb-4 mx-auto">
            <span>Serviços Exclusivos</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Soluções digitais que geram resultados 
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Oferecemos serviços completos em desenvolvimento digital, criados especificamente
            para impulsionar seu negócio e maximizar seu ROI.
          </p>
        </motion.div>

        {/* Featured Service */}
        {featuredService && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-black rounded-2xl overflow-hidden shadow-elegant border border-gray-800">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-800/20 text-green-400 text-sm mb-4 mx-auto">
                    Mais Procurado
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                    {featuredService.title}
                  </h3>
                  <p className="text-lg text-gray-300 mb-6">
                    {featuredService.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="font-medium text-white mb-4">Por que escolher este serviço:</h4>
                    <ul className="space-y-3">
                      {featuredService.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" /> {/* Cor verde */}
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="text-2xl font-bold text-white">
                      {featuredService.price}
                    </div>
                    <a
                      href="/orcamento"
                      className="px-6 py-3 bg-green-800 text-white font-medium rounded-lg hover:shadow-lg flex items-center gap-2 transition-all" // Cor verde para o botão
                    >
                      <span>Solicitar proposta</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop"
                    alt={featuredService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent flex items-center justify-center">
                    <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-6 max-w-xs mx-8 shadow-lg border border-gray-800">
                      <h4 className="font-bold text-white mb-2">Por que escolher nosso {featuredService.title.toLowerCase()}?</h4>
                      <p className="text-sm text-gray-300">
                        Nossa equipe especializada já desenvolveu mais de 50 sistemas personalizados com 100% de satisfação dos clientes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Services Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white">Nossos serviços</h3>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>Deslize para ver mais</span>
              <div className="flex items-center gap-2">
                <button className="carousel-prev p-2 rounded-full bg-black border border-gray-800 hover:bg-black transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button className="carousel-next p-2 rounded-full bg-black border border-gray-800 hover:bg-black transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {regularServices.map((service, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full bg-black p-6 rounded-2xl border border-gray-800 shadow-elegant hover:shadow-lg transition-shadow">
                    <div className="mb-6 p-4 bg-black rounded-xl inline-block">
                      {service.icon}
                    </div>

                    <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                    <p className="text-gray-400 mb-6 line-clamp-3">{service.description}</p>

                    <div className="mb-6">
                      <h4 className="font-medium text-sm text-gray-300 mb-3">Por que escolher:</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" /> {/* Cor verde */}
                            <span className="text-gray-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto">
                      <div className="text-lg font-semibold text-white mb-4">
                        {service.price}
                      </div>
                      <a
                        href="/orcamento"
                        className="inline-flex items-center gap-2 text-green-500 hover:underline" // Cor verde no link
                      >
                        <span>Saiba mais</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
              <CarouselPrevious className="relative left-0 right-auto transform-none translate-y-0 mr-2" />
              <CarouselNext className="relative right-0 transform-none translate-y-0" />
            </div>
          </Carousel>
        </motion.div>
   

        {/* Why Choose Our Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-black rounded-2xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Por que escolher nossos serviços?
              </h3>

              <div className="space-y-6 ">
                {[
                  {
                    title: "Desenvolvimento Focado em Resultados",
                    description: "Construímos soluções que não apenas funcionam bem, mas também geram retorno sobre o investimento."
                  },
                  {
                    title: "Tecnologia de Ponta",
                    description: "Utilizamos as mais recentes tecnologias e frameworks para garantir performance e segurança."
                  },
                  {
                    title: "Equipe de Especialistas",
                    description: "Nossos desenvolvedores são altamente qualificados, com anos de experiência em projetos complexos."
                  },
                  {
                    title: "Suporte Contínuo",
                    description: "Oferecemos suporte técnico dedicado mesmo após a entrega do projeto, garantindo tranquilidade."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex">
                    <div className="bg-green-800 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4 flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href="/diferenciais"
                  className="px-6 py-3 bg-black text-white hover:bg-gray-850 transition-colors font-medium rounded-lg flex items-center gap-2 w-fit"
                >
                  <span>Ver nossos diferenciais</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-black rounded-2xl overflow-hidden border border-gray-800">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Atendimento Personalizado
                </h3>
                <p className="text-gray-300 mb-6">
                  Nossa equipe está pronta para entender suas necessidades específicas e criar uma solução digital sob medida para o seu negócio.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-white">Reunião de descoberta gratuita</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-white">Orçamento detalhado sem compromisso</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-white">Atendimento personalizado do início ao fim</span>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href="/orcamento"
                    className="px-6 py-3 bg-white text-black hover:bg-gray-100 transition-colors font-medium rounded-lg"
                  >
                    Solicitar orçamento
                  </a>
                  <a
                    href="/suporte"
                    className="px-6 py-3 bg-black text-white hover:bg-gray-850 transition-colors font-medium rounded-lg"
                  >
                    Falar com especialista
                  </a>
                </div>
              </div>

              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-black from-transparent to-black z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop"
                  alt="Equipe de atendimento"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technology Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-black p-8 md:p-12 rounded-2xl border border-gray-800"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                Tecnologias de <span className="text-gradient-gray">última geração</span>
              </h3>
              <p className="text-gray-300 max-w-lg">
                Utilizamos as tecnologias mais avançadas do mercado para criar soluções
                escaláveis, seguras e de alto desempenho.
              </p>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-5 gap-6">
              {[
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
                "https://cdn.worldvectorlogo.com/logos/typescript.svg",
                "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
                "https://cdn.worldvectorlogo.com/logos/firebase-1.svg"
              ].map((tech, index) => (
                <div key={index} className="flex items-center justify-center">
                  <img src={tech} alt={`Tech ${index}`} className="h-12 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>  
    </section>
  );
}