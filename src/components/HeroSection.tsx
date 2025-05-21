import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen py-24 relative overflow-hidden bg-white dark:bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white dark:from-gray-950 dark:to-gray-900 -z-10"></div>

      <div className="container px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-800/20 text-green-400 text-sm mb-4 mx-auto">

              <span className="bg-green-300 w-2 h-2 rounded-full mr-2 animate-pulse"></span>
              Soluções Web Premiadas
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cashDisplay tracking-tight font-bold text-gray-900 dark:text-white mb-6">
              Transforme sua <span className="text-gradient">presença digital</span> com tecnologia de ponta
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              Desenvolvemos soluções digitais que convertem visitantes em clientes,
              com design moderno e performance excepcional.
            </p>

            {/* Key Benefits */}
            <div className="space-y-3 mb-10">
              {[
                "Sites otimizados para conversão",
                "Suporte técnico 24/7",
                "Integração com WhatsApp e sistemas"
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.9 + i * 0.1 }}
                  className="flex items-center text-gray-700 dark:text-gray-300"
                >
                  <CheckCircle className="w-5 h-5 mr-2 text-green-600 dark:text-green-400" />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-green-800 from-green-600 to-green-500 text-white font-medium rounded-lg hover:shadow-xl flex items-center gap-2 transition-all hover:gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Solicitar orçamento</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="#projects"
                className="px-6 py-3 bg-green-800/20 dark:bg-green-800/20 text-gray-900 dark:text-white font-medium rounded-lg hover:shadow-md flex items-center gap-2 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Play className="w-4 h-4" />
                <span>Ver demonstração</span>
              </motion.a>
            </div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="mt-12 flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${20 + i}.jpg`}
                    alt={`Client ${i}`}
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900 object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-900 dark:text-white">4.9/5</span> de 200+ clientes
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Product Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Device Frame */}
            <div className="relative mx-auto w-[320px] h-[650px] bg-gray-900 rounded-[40px] border-[10px] border-gray-800 shadow-xl overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gray-800 rounded-b-xl z-10"></div>

              {/* Screen Content */}
              <div className="h-full w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
                {/* App UI */}
                <div className="p-5">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                        <span className="text-white font-bold">T3</span>
                      </div>
                      <span className="ml-2 font-medium text-gray-800 dark:text-white">T3RN</span>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 dark:text-gray-300">
                          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Preview */}
                  <div className="mb-5">
                    <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-3">Seus Projetos</h2>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-gray-800 dark:text-white">Progresso</span>
                        <span className="text-xs text-gray-500">85%</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden mb-4">
                        <div className="h-full bg-gray-800 dark:bg-gray-400 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="block text-xs text-gray-500">Lançamento</span>
                          <span className="block text-sm font-medium text-gray-800 dark:text-white">15 Junho</span>
                        </div>
                        <div className="flex -space-x-2">
                          {[1, 2, 3].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-800 flex items-center justify-center text-xs font-medium">
                              {i}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Statistics */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {[{ label: "Tráfego", value: "1.4k", change: "+12%" }, { label: "Conversões", value: "512", change: "+8%" }].map((stat, i) => (
                      <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm">
                        <span className="text-xs text-gray-500">{stat.label}</span>
                        <div className="flex items-end justify-between">
                          <span className="text-xl font-bold text-gray-800 dark:text-white">{stat.value}</span>
                          <span className="text-xs text-green-500">{stat.change}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Recent Activity */}
                  <div>
                    <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-3">Atividade Recente</h2>
                    <div className="space-y-3">
                      {[
                        { title: "Novo cliente", desc: "Cadastro finalizado", time: "3min" },
                        { title: "Venda concluída", desc: "Plano Premium", time: "1h" },
                        { title: "Suporte", desc: "Ticket respondido", time: "2h" }
                      ].map((item, i) => (
                        <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-sm flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-800 dark:text-white">{item.title}</p>
                            <p className="text-xs text-gray-500">{item.desc}</p>
                          </div>
                          <span className="text-xs text-gray-400">{item.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-16 w-40 h-40 bg-gradient-to-r from-green-600 to-green-500 rounded-full opacity-70 blur-3xl"></div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-r from-green-600 to-green-500 rounded-full opacity-70 blur-3xl"></div>
          </motion.div>
        </div>

        {/* Trusted by logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">CONFIAM EM NOSSO TRABALHO</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {[
              "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_logo.svg/2560px-Microsoft_logo.svg.png"
            ].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Client ${index + 1}`}
                className="h-8 md:h-10 object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
