import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User } from 'lucide-react';

interface TestimonialsCarouselProps {
  autoPlay?: boolean;
}

export default function TestimonialsCarousel({ autoPlay = true }: TestimonialsCarouselProps) {
  const testimonials = [
    {
      name: "Ana Silva",
      company: "TechStart Ltda",
      text: "A T3RN transformou completamente nossa presença online. O e-commerce desenvolvido superou todas as expectativas, com aumento de 40% nas conversões desde o lançamento.",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      name: "Ricardo Mendes",
      company: "Innova Saúde",
      text: "Implementamos o sistema de gestão desenvolvido pela T3RN há 6 meses e já vemos resultados significativos. Interface intuitiva e suporte técnico excepcional.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Carla Oliveira",
      company: "Educação Digital",
      text: "Nossa plataforma de ensino online precisava de uma reformulação completa e a T3RN entendeu perfeitamente nossas necessidades. Entrega no prazo e com qualidade impecável.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Rafael Santos",
      company: "Construtech",
      text: "O aplicativo móvel desenvolvido pela T3RN revolucionou a maneira como gerenciamos nossos projetos em campo. Excelente trabalho do início ao fim.",
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  const goTo = (index: number) => {
    setCurrent(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(autoPlay), 5000);
  };

  useEffect(() => {
    setIsAutoPlaying(autoPlay);
  }, [autoPlay]);

  useEffect(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);

    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(next, 6000);
    }

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, current]);

  return (
    <section id="testimonials" className="min-h-screen py-24 relative overflow-hidden bg-white dark:bg-black">

      <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white dark:from-gray-950 dark:to-gray-900 -z-10"></div>

      <div className="container px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-800/20 text-green-400 text-sm mb-4 mx-auto">
            Depoimentos Recebidos 
          </span>

          <h2 className="text-4xl md:text-5xl font-bold font-cashDisplay mb-4 leading-tight">
          Relatos de Clientes Satisfeitos
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base">
            Conheça as experiências reais de empresas que transformaram suas ideias em soluções digitais com a T3RN Desenvolvimento.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-black-900/60 backdrop-blur-md border border-gray-900/20 rounded-2xl shadow-2xl p-10"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 flex flex-col items-center">
                  {testimonials[current].image ? (
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-100 shadow-lg mb-4">
                      <img src={testimonials[current].image} alt={testimonials[current].name} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center mb-4">
                      <User className="w-12 h-12 text-gray-400" />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold">{testimonials[current].name}</h3>
                  <p className="text-sm text-gray-400">{testimonials[current].company}</p>
                </div>

                <div className="md:w-2/3">
                  <div className="text-6xl text-green-500 mb-2">“</div>
                  <blockquote className="text-gray-200 text-lg italic mb-6">
                    {testimonials[current].text}
                  </blockquote>
                  <div className="flex items-center gap-1">
                    {Array(5).fill(0).map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button onClick={prev} className="p-2 bg-zinc-800 hover:bg-zinc-700 transition rounded-full shadow-md">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button onClick={next} className="p-2 bg-zinc-800 hover:bg-zinc-700 transition rounded-full shadow-md">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Indicadores */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  current === index ? 'bg-green-500 w-6' : 'bg-gray-600 w-2.5'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
