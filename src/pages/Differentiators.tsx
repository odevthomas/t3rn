
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Info, Star, Award, Rocket } from "lucide-react";

const Differentiators = () => {
  // Diferencial tech stack
  const techStack = [
    { name: "React", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
    { name: "Node.js", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
    { name: "TypeScript", logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
    { name: "MongoDB", logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
    { name: "Firebase", logo: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg" },
    { name: "AWS", logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg" }
  ];
  
  // Diferencial metrics
  const metrics = [
    { value: "+50", label: "Projetos Entregues", icon: <Award className="w-6 h-6" /> },
    { value: "99%", label: "Satisfação dos Clientes", icon: <Star className="w-6 h-6" /> },
    { value: "+10", label: "Anos de Experiência", icon: <Info className="w-6 h-6" /> },
    { value: "24/7", label: "Suporte Técnico", icon: <Rocket className="w-6 h-6" /> }
  ];
  
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden bg-grid-pattern">
      <Helmet>
        <title>Por que escolher a T3RN | Nossos Diferenciais</title>
        <meta name="description" content="Conheça os diferenciais que fazem da T3RN Desenvolvimento a escolha certa para seu projeto digital. Tecnologia de ponta, equipe especializada e resultados comprovados." />
      </Helmet>
      
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="py-24">
          <div className="container px-4 mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm mb-4">
                <span>Nossos Diferenciais</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Por que a <span className="text-gradient-gray">T3RN</span> é diferente?
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Combinamos expertise técnica, processos eficientes e uma abordagem centrada no cliente para 
                entregar soluções digitais que não apenas atendem, mas superam expectativas.
              </p>
            </motion.div>
            
            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-black border border-gray-800 rounded-2xl p-6 text-center"
                >
                  <div className="bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    {metric.icon}
                  </div>
                  <div className="text-3xl font-bold mb-1">{metric.value}</div>
                  <div className="text-gray-400 text-sm">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Key Differentiators */}
        <section className="py-16 bg-gray-950">
          <div className="container px-4 mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">
                Pilares do nosso diferencial
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Confira o que nos diferencia no mercado de desenvolvimento de software e por que somos a escolha certa para seu próximo projeto.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: <Award className="w-10 h-10" />,
                  title: "Excelência Técnica",
                  description: "Nossa equipe é formada por desenvolvedores seniores com mais de 10 anos de experiência em projetos complexos.",
                  points: [
                    "Código limpo e bem documentado",
                    "Arquitetura escalável e robusta",
                    "Práticas de segurança avançadas",
                    "Performance otimizada em todos os dispositivos"
                  ]
                },
                {
                  icon: <Rocket className="w-10 h-10" />,
                  title: "Metodologia Ágil+",
                  description: "Desenvolvemos nossa própria metodologia que combina os melhores aspectos do ágil com processos de garantia de qualidade.",
                  points: [
                    "Sprints curtos com entregas contínuas",
                    "Comunicação transparente e constante",
                    "Adaptação rápida a mudanças",
                    "Testes automatizados em todo o processo"
                  ]
                },
                {
                  icon: <Star className="w-10 h-10" />,
                  title: "Foco no Resultado do Cliente",
                  description: "Não apenas entregamos código, mas soluções que geram valor real para o negócio do cliente.",
                  points: [
                    "KPIs claramente definidos",
                    "Foco em conversão e experiência do usuário",
                    "Análise de dados para tomada de decisões",
                    "Parceria estratégica de longo prazo"
                  ]
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-black rounded-2xl p-8 border border-gray-800 h-full flex flex-col"
                >
                  <div className="bg-gray-800 p-4 rounded-xl inline-block mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 mb-6 flex-grow">{item.description}</p>
                  
                  <ul className="space-y-3 text-sm">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Tech Stack */}
        <section className="py-20">
          <div className="container px-4 mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">
                Stack Tecnológico de Ponta
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Utilizamos as tecnologias mais modernas e robustas do mercado para garantir que seu projeto
                seja não apenas atual, mas preparado para o futuro.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mb-16">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-black border border-gray-800 rounded-xl p-6 flex flex-col items-center hover:border-gray-700 transition-colors"
                >
                  <img src={tech.logo} alt={tech.name} className="h-12 mb-4 object-contain" />
                  <span className="text-sm text-gray-300">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Advantage */}
        <section className="py-20 bg-gray-950">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm mb-4">
                  <span>Processo exclusivo</span>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-white">
                  O processo que entrega <span className="text-gradient-gray">resultados consistentes</span>
                </h2>
                <p className="text-gray-300 mb-8">
                  Nossa abordagem metodológica foi aprimorada ao longo de anos de experiência, garantindo
                  que cada projeto seja entregue com qualidade, dentro do prazo e do orçamento.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      number: "01",
                      title: "Descoberta e Planejamento",
                      desc: "Entendemos profundamente seu negócio e objetivos para criar um plano estratégico."
                    },
                    {
                      number: "02",
                      title: "Design e Prototipagem",
                      desc: "Criamos protótipos interativos que permitem visualizar a solução antes do desenvolvimento."
                    },
                    {
                      number: "03",
                      title: "Desenvolvimento Iterativo",
                      desc: "Construímos em ciclos curtos, garantindo feedback constante e ajustes rápidos."
                    },
                    {
                      number: "04",
                      title: "Testes Rigorosos",
                      desc: "Cada funcionalidade passa por testes automatizados e manuais para garantir qualidade."
                    },
                    {
                      number: "05",
                      title: "Acompanhamento Contínuo",
                      desc: "Suporte técnico e estratégico contínuo após o lançamento para garantir o sucesso."
                    }
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex"
                    >
                      <div className="bg-black w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0 border border-gray-800">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="font-medium text-white mb-1">{step.title}</h3>
                        <p className="text-sm text-gray-400">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-1 border border-gray-800 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop" 
                    alt="Equipe trabalhando"
                    className="rounded-xl object-cover w-full h-[500px]"
                  />
                  
                  {/* Overlay stats */}
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-gray-800">
                    <div className="text-xs text-gray-400 mb-1">Taxa de Sucesso</div>
                    <div className="text-xl font-bold">98.5%</div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-gray-800">
                    <div className="text-xs text-gray-400 mb-1">Projetos no Prazo</div>
                    <div className="text-xl font-bold">97%</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl p-4 border border-gray-800 shadow-xl w-64">
                  <div className="flex items-center mb-2">
                    <div className="h-2 w-2 bg-green-400 rounded-full mr-2"></div>
                    <div className="text-sm font-medium">Resultados</div>
                  </div>
                  <div className="text-xs text-gray-400">
                    Aumento médio de 35% na conversão dos projetos entregues nos últimos 12 meses.
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-20">
          <div className="container px-4 mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">
                O que nossos clientes dizem
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Nosso principal diferencial é a satisfação de nossos clientes. Confira o que eles têm a dizer sobre trabalhar conosco.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote: "A equipe da T3RN não apenas entregou nosso projeto no prazo, mas também trouxe insights valiosos que melhoraram significativamente o resultado final.",
                  author: "Ana Silva",
                  role: "CEO, TechStart",
                  avatar: "https://randomuser.me/api/portraits/women/44.jpg"
                },
                {
                  quote: "O nível de compromisso com a qualidade e a forma como estruturam o processo de desenvolvimento nos deu total confiança desde o primeiro dia.",
                  author: "Carlos Mendes",
                  role: "CTO, InnovaSoft",
                  avatar: "https://randomuser.me/api/portraits/men/32.jpg"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-black rounded-2xl p-8 border border-gray-800"
                >
                  <div className="flex items-center mb-6">
                    <img 
                      src={item.avatar}
                      alt={item.author}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <div className="font-medium">{item.author}</div>
                      <div className="text-sm text-gray-400">{item.role}</div>
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-300 italic mb-4">"{item.quote}"</blockquote>
                  
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map(star => (
                      <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-20 bg-gray-950">
          <div className="container px-4 mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 border border-gray-800 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white max-w-2xl mx-auto">
                Pronto para experimentar nosso diferencial em seu projeto?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Entre em contato hoje mesmo para uma consulta gratuita e descubra como podemos 
                transformar sua ideia em uma solução digital de sucesso.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/orcamento" 
                  className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Solicitar orçamento gratuito
                </a>
                <a 
                  href="/suporte" 
                  className="px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Falar com um especialista
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Differentiators;
