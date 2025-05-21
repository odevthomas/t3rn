import { motion } from "framer-motion";
import { ExternalLink, CheckCircle } from "lucide-react";
import DeviceMockupCarousel from "./DeviceMockupCarousel";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  results: string[];
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Completo",
      description: "Plataforma de comércio eletrônico com gestão de produtos, integrações de pagamento e relatórios avançados.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      tags: ["react", "node", "mongodb"],
      link: "#",
      results: [
        "Aumento de 180% nas vendas online",
        "Redução de 40% nos custos operacionais",
        "Taxa de conversão de 4.8%"
      ]
    },
    {
      id: 2,
      title: "Sistema de Gestão",
      description: "ERP completo para pequenas e médias empresas com módulos de finanças, estoque, vendas e RH.",
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&auto=format&fit=crop",
      tags: ["react", "typescript", "postgresql"],
      link: "#",
      results: [
        "Economia de 25 horas semanais em processos",
        "Controle financeiro com 99.9% de precisão",
        "ROI positivo em apenas 3 meses"
      ]
    },
    {
      id: 3,
      title: "App de Delivery",
      description: "Aplicativo mobile para restaurantes com sistema de pedidos, pagamentos e rastreamento em tempo real.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop",
      tags: ["react-native", "firebase", "stripe"],
      link: "#",
      results: [
        "300+ downloads no primeiro mês",
        "Aumento de 65% no ticket médio",
        "Redução de 80% em erros de pedidos"
      ]
    },
    {
      id: 4,
      title: "Portal de Conteúdo",
      description: "Plataforma de cursos online com sistema de assinaturas e certificados digitais.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop",
      tags: ["vue", "laravel", "mysql"],
      link: "#",
      results: [
        "12.000+ alunos registrados",
        "Taxa de retenção de 78%",
        "Crescimento de 200% em 6 meses"
      ]
    }
  ];

  const mockupImages = projects.map(project => ({
    id: project.id,
    url: project.image,
    title: project.title
  }));

  return (
    <section id="projects" className="py-10 bg-black text-white text-center">
      <div className="container px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-800/20 text-green-400 text-sm mb-4 mx-auto">
            <span>Casos de Sucesso Comprovados</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projetos que <span className="text-green-500">transformam</span> negócios
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Conheça algumas soluções que desenvolvemos para nossos clientes e os resultados impressionantes que alcançamos juntos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <DeviceMockupCarousel images={mockupImages} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
              viewport={{ once: true }}
              className="bg-black border rounded-2xl overflow-hidden shadow-lg group"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-full p-6 flex justify-between items-center">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <a
                      href={project.link}
                      className="p-2 rounded-full bg-green-600 hover:bg-green-500 transition-colors"
                      aria-label="Ver projeto online"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 text-left">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-medium text-sm text-green-400 mb-2">Resultados alcançados:</h4>
                  <ul className="space-y-2">
                    {project.results.map((result, i) => (
                      <li key={i} className="flex items-start text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map(tag => (
                    <span
                      key={`${project.id}-${tag}`}
                      className="text-xs px-2 py-1 rounded-full bg-green-800/20 text-green-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center text-green-400 font-medium hover:underline"
                >
                  <span>Quero um projeto similar</span>
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
