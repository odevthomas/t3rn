import { motion } from "framer-motion";
import { ClipboardList, Code, Zap, CheckCircle } from "lucide-react";

export default function WorkProcess() {
  const steps = [
    {
      icon: <ClipboardList className="w-8 h-8" />,
      title: "Descoberta",
      description: "Entendemos seu negócio e definimos objetivos claros para seu projeto digital."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Desenvolvimento",
      description: "Criamos soluções personalizadas com as tecnologias mais eficientes."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Implementação",
      description: "Testamos exaustivamente e implementamos com foco em performance."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Suporte",
      description: "Oferecemos 90 dias de suporte gratuito após a entrega do projeto."
    }
  ];

  return (
    <section id="process" className="py-24 bg-white dark:bg-black">
      <div className="container px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-green-600 to-green-500 text-white text-sm mb-4">
            <span>Metodologia Comprovada</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Como transformamos sua ideia em <span className="text-gradient-green">realidade</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Nossa metodologia foi desenvolvida para garantir transparência, eficiência e
            resultados excepcionais em cada projeto.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-green-200 dark:bg-green-700 -translate-y-1/2 hidden lg:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="bg-white dark:bg-[#00001] p-8 rounded-2xl border border-gray-100 dark:border-[#00001] shadow-elegant h-full flex flex-col items-center text-center hover:shadow-lg transition-all">
                  {/* Step number */}
                  <div className="absolute -top-5 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 text-white bg-green-600 p-4 rounded-xl">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-black">{step.title}</h3>
                  <p className="text-black dark:text-black">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 px-4 max-w-3xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <span className="block text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">15-90</span>
              <span className="text-gray-600 dark:text-gray-300">dias para entrega</span>
            </div>

            <div className="h-px w-full md:h-20 md:w-px bg-gray-200 dark:bg-gray-700"></div>

            <div className="text-center">
              <span className="block text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">100%</span>
              <span className="text-gray-600 dark:text-gray-300">entregas no prazo</span>
            </div>

            <div className="h-px w-full md:h-20 md:w-px bg-gray-200 dark:bg-gray-700"></div>

            <div className="text-center">
              <span className="block text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">90</span>
              <span className="text-gray-600 dark:text-gray-300">dias de garantia</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
