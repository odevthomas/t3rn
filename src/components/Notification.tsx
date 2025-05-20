
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Bell, X, ArrowRight, Clock } from 'lucide-react';

interface NotificationProps {
  delay?: number;
}

export default function Notification({ delay = 3000 }: NotificationProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Display notification after delay
    const timer = setTimeout(() => {
      setIsVisible(true);
      
      // Hide after 8 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 8000);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  const handleWhatsAppClick = () => {
    setIsVisible(false);
    window.open("https://wa.me/551999042072", "_blank");
  };
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-24 right-4 z-40 max-w-sm w-full bg-white dark:bg-black rounded-xl shadow-elegant overflow-hidden border border-gray-200 dark:border-gray-700"
        >
          {/* Progress bar */}
          <motion.div 
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 8, ease: "linear" }}
            className="h-1 bg-black dark:bg-gray-200"
          />
          
          <div className="p-4">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                <div className="p-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                  <Bell className="w-4 h-4 text-gray-900 dark:text-gray-200" />
                </div>
                <h4 className="font-medium text-gray-900 dark:text-white">Fale conosco</h4>
              </div>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              Precisa de um orçamento personalizado para seu projeto? 
              Entre em contato agora pelo WhatsApp!
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                <Clock className="w-3 h-3 mr-1" />
                <span>Resposta em até 2 horas</span>
              </div>
              <button 
                onClick={handleWhatsAppClick}
                className="flex items-center gap-1 text-sm bg-black dark:bg-gray-100 text-white dark:text-gray-900 px-3 py-1.5 rounded-lg hover:bg-black dark:hover:bg-gray-200 transition-colors"
              >
                <span>Falar agora</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
