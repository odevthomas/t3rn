import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Check, ArrowRight } from 'lucide-react';

export default function InfoModal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show modal after 15 seconds
    const timer = setTimeout(() => {
      // Check if user hasn't seen it before
      if (!localStorage.getItem('infoModalSeen')) {
        setIsVisible(true);
      }
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('infoModalSeen', 'true');
  };

  const handleWhatsAppClick = () => {
    handleClose();
    window.open("https://wa.me/551999042072", "_blank");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden"
          >
            <div className="max-w-md w-full bg-white dark:bg-black rounded-2xl shadow-2xl">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-1 rounded-full bg-gray-100 dark:bg-gray-850 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                aria-label="Fechar"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Hero image */}
              <div className="h-40 bg-gradient-to-r from-gray-900 to-gray-700 flex items-center justify-center">
                <div className="font-cashDisplay text-3xl text-white">
                  T3RN<span className="text-gray-300">Dev</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Atendimento Personalizado
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Nossa equipe está pronta para entender suas necessidades específicas e
                  criar uma solução digital sob medida para o seu negócio.
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    "Reunião de descoberta gratuita",
                    "Orçamento detalhado sem compromisso",
                    "Prazos de entrega realistas",
                    "Suporte contínuo pós-lançamento"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-gray-900 dark:text-white mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleWhatsAppClick}
                    className="flex-1 px-5 py-3 bg-black dark:bg-gray-100 text-white dark:text-gray-900 font-medium rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <span>Falar com consultor</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleClose}
                    className="flex-1 px-5 py-3 bg-gray-100 dark:bg-gray-850 text-gray-900 dark:text-white font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    Agora não
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
