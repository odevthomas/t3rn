import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

interface LoadingSpinnerProps {
  fullScreen?: boolean;
}

const LoadingSpinner = ({ fullScreen = false }: LoadingSpinnerProps) => {
  const [letterIndex, setLetterIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [percentage, setPercentage] = useState(0);
  const companyName = "T3RN ";

  useEffect(() => {
    if (fullScreen) {
      // Typing effect for company name
      const typingInterval = setInterval(() => {
        setLetterIndex((prev) => {
          if (prev >= companyName.length) {
            // Reset after a brief pause when complete
            setTimeout(() => setLetterIndex(0), 1000);
            return prev;
          }
          return prev + 1;
        });
      }, 120); // Speed up the typing effect

      // Blinking cursor effect
      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);

      // Percentage counting effect
      const percentageInterval = setInterval(() => {
        setPercentage((prev) => {
          if (prev >= 100) {
            clearInterval(percentageInterval); // Stop counting at 100%
            return 100;
          }
          return prev + 1;
        });
      }, 40); // Speed of the counting animation

      return () => {
        clearInterval(typingInterval);
        clearInterval(cursorInterval);
        clearInterval(percentageInterval);
      };
    }
  }, [fullScreen]);

  useEffect(() => {
    if (fullScreen) {
      // GSAP animation for background grid lines
      gsap.to(".grid-line", {
        opacity: 0.3,
        duration: 2,
        repeat: -1,
        yoyo: true,
      });
    }
  }, [fullScreen]);

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        {/* Quadriculado */}
        <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 gap-1 opacity-20">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="grid-line w-1 h-1 bg-white"
              style={{ animationDelay: `${Math.random() * 2}s` }}
            ></div>
          ))}
        </div>

        <div className="flex flex-col items-center text-center z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-white"
          >
            <div className="font-bold text-5xl md:text-6xl font-mono relative">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {companyName.substring(0, letterIndex)}
              </motion.span>
              <span
                style={{
                  opacity: showCursor ? 1 : 0,
                }}
                className="absolute right-0 top-0 text-xl"
              >
                |
              </span>
            </div>
            <p className="mt-4 text-lg md:text-xl text-gray-200">
              {percentage}% Completo
            </p>
            <p className="mt-4 text-sm text-gray-400">
              Estamos preparando algo incrível para você!<br />
              <span className="font-semibold">Aguarde enquanto trazemos a melhor experiência.</span>
            </p>
          </motion.div>

         
        </div>
      </div>
    );
  }

  // Regular spinner for non-fullscreen usage
  return (
    <div className="loading-spinner mx-auto">
      <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
