import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
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

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  const goTo = (index: number) => {
    setCurrent(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(autoPlay), 5000);
  };

  useEffect(() => {
    setIsAutoPlaying(autoPlay);
  }, [autoPlay]);

  useEffect(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }

    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(next, 5000);
    }

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, current]);

  return (
    <section id="testimonials" className="py-24 bg-black">
      <div className="container px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-green-600 to-green-500 text-white text-sm mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-cashDisplay font-bold text-white mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Conheça as experiências reais de empresas que transformaram suas ideias em soluções digitais de sucesso com a T3RN Desenvolvimento.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial */}
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black border border-gray-600 rounded-2xl shadow-lg p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex flex-col items-center">
                {testimonials[current].image ? (
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-600 mb-4">
                    <img
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mb-4">
                    <User className="w-12 h-12 text-gray-400" />
                  </div>
                )}
                
                <h3 className="font-semibold text-lg text-white text-center">
                  {testimonials[current].name}
                </h3>
                <p className="text-gray-400 text-sm text-center">
                  {testimonials[current].company}
                </p>
              </div>

              <div className="md:w-2/3">
                <div className="text-5xl font-cashDisplay text-white mb-2">"</div>
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

            {/* Navigation buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={prev}
                className="p-2 rounded-full bg-gray-700 text-white hover:bg-gray-800 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                className="p-2 rounded-full bg-gray-700 text-white hover:bg-gray-800 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${current === index
                    ? 'bg-gray-400 w-6'
                    : 'bg-gray-600 dark:bg-gray-700'
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
