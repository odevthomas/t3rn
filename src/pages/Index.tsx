
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import WorkProcess from "@/components/WorkProcess";
import AIChat from "@/components/AIChat";
import InfoModal from "@/components/InfoModal";
import Notification from "@/components/Notification";
import LoadingSpinner from "@/components/LoadingSpinner";
import CustomerQuestionnaire from "@/components/CustomerQuestionnaire";

const Index = () => {
  // Loading state
  const [isLoading, setIsLoading] = useState(true);
  
  // Scroll progress indicator
  const { scrollYProgress } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollProgress(latest);
  });

  // Auto scroll detection (pause when user is scrolling manually)
  const [isScrolling, setIsScrolling] = useState(false);
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeout);
      
      timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 2000);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Simulate loading of resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    // Force dark theme
    document.documentElement.classList.add('dark');
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
      clearTimeout(timer);
    };
  }, []);

  // Animation variants for sections
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // If loading, show the spinner
  if (isLoading) {
    return <LoadingSpinner fullScreen />;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden bg-grid-pattern">
      <Helmet>
        <title>T3RN Desenvolvimento | Soluções Digitais Personalizadas</title>
        <meta name="description" content="Transformamos ideias em soluções digitais impactantes. Desenvolvimento web, aplicativos móveis e sistemas personalizados para seu negócio." />
        <meta name="keywords" content="desenvolvimento web, aplicativos móveis, sistemas personalizados, T3RN, desenvolvimento de software" />
        <meta property="og:title" content="T3RN Desenvolvimento | Soluções Digitais" />
        <meta property="og:description" content="Transformamos ideias em soluções digitais impactantes. Desenvolvimento web, aplicativos móveis e sistemas personalizados." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://t3rn.com.br" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="T3RN Desenvolvimento | Soluções Digitais" />
        <meta name="twitter:description" content="Transformamos ideias em soluções digitais impactantes. Desenvolvimento web, aplicativos e sistemas personalizados." />
        <link rel="canonical" href="https://t3rn.com.br" />
      </Helmet>
      
      <Navbar />
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gray-100 origin-left z-50"
        style={{ scaleX: scrollProgress }}
      />
      
      <main>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
        >
          <HeroSection />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
        >
          <WorkProcess />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
        >
          <ProjectsSection />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
        >
          <ServicesSection />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
        >
          <TestimonialsCarousel autoPlay={!isScrolling} />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
        >
          <CustomerQuestionnaire />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
        >
          <AboutSection />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
        >
          <ContactSection />
        </motion.div>
      </main>
      
      <Footer />
      
      {/* Interactive components */}
      <AIChat />
      <InfoModal />
      <Notification delay={5000} />
    </div>
  );
};

export default Index;
