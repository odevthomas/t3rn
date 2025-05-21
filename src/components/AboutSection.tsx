import { motion } from "framer-motion";
import { Check, Award, Clock, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-t3rn-black bg-grid">
      <div className="container px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block px-3 py-1 bg-emerald-500 text-white rounded-full text-sm font-medium mb-4 text-center">
              Sobre Nós
            </span>

            <h2 className="text-4xl md:text-5xl font-cashDisplay font-bold mb-6 text-gray-900 dark:text-gray-100 text-center lg:text-left">
              Transformando ideias em soluções digitais
            </h2>

            <div className="space-y-6 text-gray-600 dark:text-gray-300 text-center lg:text-left">
              <p className="text-lg">
                Somos a <span className="font-semibold">T3RN Desenvolvimento</span>,
                especialistas em criar soluções digitais que elevam negócios através
                da tecnologia e inovação.
              </p>

              <p className="text-lg">
                Nossa equipe combina expertise técnica e visão estratégica para desenvolver
                produtos digitais excepcionais, alinhados às necessidades do seu negócio
                e às expectativas do mercado.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {[
                  {
                    icon: <Award className="w-8 h-8 text-white dark:text-white" />,
                    title: "Excelência",
                    desc: "Comprometidos com os mais altos padrões"
                  },
                  {
                    icon: <Users className="w-8 h-8 text-white dark:text-white" />,
                    title: "Colaboração",
                    desc: "Trabalhamos juntos como extensão do seu time"
                  },
                  {
                    icon: <Clock className="w-8 h-8 text-white dark:text-white" />,
                    title: "Pontualidade",
                    desc: "Entregas no prazo, sem surpresas"
                  },
                  {
                    icon: <Check className="w-8 h-8 text-white dark:text-white" />,
                    title: "Qualidade",
                    desc: "Código limpo e soluções escaláveis"
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center p-5 rounded-xl bg-white dark:bg-black shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700"
                  >
                    <div className="p-3 rounded-full bg-emerald-100 dark:bg-emerald-600 mb-4">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">{item.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="T3RN Team Collaboration"
                className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-white text-xl font-bold mb-2">Nossa Missão</h3>
                  <p className="text-gray-200 text-sm max-w-md">
                    Capacitar empresas através de soluções digitais inovadoras que
                    impulsionam o crescimento e maximizam o valor do negócio.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="absolute -bottom-10 right-0 md:right-10 grid grid-cols-2 gap-3 max-w-xs mx-auto">
              {[
                { number: "5+", label: "Anos de experiência" },
                { number: "98%", label: "Clientes satisfeitos" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 rounded-xl bg-white dark:bg-black shadow-xl border border-gray-100 dark:border-gray-700"
                >
                  <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-300 mb-1">{stat.number}</div>
                  <div className="text-gray-500 dark:text-gray-400 text-xs">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-emerald-400 dark:border-emerald-700 rounded-full -z-10 hidden md:block"></div>
            <div className="absolute -top-6 right-10 w-12 h-12 border-2 border-emerald-400 dark:border-emerald-700 rounded-lg -z-10 hidden md:block"></div>
          </motion.div>
        </div>

        {/* CEO Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 text-center max-w-3xl mx-auto"
        >
          <div className="relative">
            <div className="text-8xl font-cashDisplay text-gray-200 dark:text-emerald-800 absolute -top-10 left-1/2 transform -translate-x-1/2">
              "
            </div>
            <blockquote className="relative z-10 text-xl md:text-2xl font-medium italic text-gray-700 dark:text-gray-300">
              Nossa missão é transformar complexidade em simplicidade, desafios em oportunidades,
              e ideias em soluções digitais impactantes que impulsionam o sucesso dos nossos clientes.
            </blockquote>
            <div className="mt-6">
              <div className="font-semibold text-gray-900 dark:text-gray-100">Thomas Nascimento</div>
              <div className="text-gray-500 dark:text-gray-400">T3RN, Desenvolvedor Full-Stack</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
  