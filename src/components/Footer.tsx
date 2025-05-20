import { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Github, Facebook, Instagram, Linkedin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    {
      title: "Empresa",
      links: [
        { name: "Sobre nós", href: "#about" },
        { name: "Projetos", href: "#projects" },
        { name: "Serviços", href: "#services" },
        { name: "Carreira", href: "#" },
        { name: "Blog", href: "#" },
      ]
    },
    {
      title: "Recursos",
      links: [
        { name: "Documentação", href: "#" },
        { name: "Tutoriais", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Suporte", href: "#" },
        { name: "Política de Privacidade", href: "#" },
      ]
    },
    {
      title: "Serviços",
      links: [
        { name: "Desenvolvimento Web", href: "#services" },
        { name: "Aplicativos Móveis", href: "#services" },
        { name: "E-commerce", href: "#services" },
        { name: "Design UX/UI", href: "#services" },
        { name: "Consultoria", href: "#services" },
      ]
    }
  ];

  return (
    <footer className="relative bg-black text-white pb-8 overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      {/* Footer content */}
      <div className="relative z-10">
        {/* Main footer content */}
        <div className="container mx-auto max-w-7xl pt-16 px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Logo and company description */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center mb-6"
              >
                <div className="w-12 h-12 rounded-full bg-black  flex items-center justify-center mr-3">
                  {/* Logo image */}
                  <img src="/favicon.ico" alt="Logo" className="w-20 h-20 mr-2" /> {/* Substitua o favicon.ico por uma imagem de logo */}
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-400 mb-6"
              >
                Transformamos ideias em soluções digitais impactantes, com foco em alta performance, design inovador e experiências que convertem.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex space-x-3"
              >
                {[{ icon: Github, href: "#" }, { icon: Facebook, href: "#" }, { icon: Instagram, href: "#" }, { icon: Linkedin, href: "#" }].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.icon.name} link`}
                  >
                    <social.icon size={20} className="text-gray-300" />
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Quick links */}
            {footerLinks.map((group, groupIndex) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (groupIndex + 1) }}
              >
                <h3 className="text-lg font-semibold mb-6">{group.title}</h3>
                <ul className="space-y-3">
                  {group.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.href} className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                        {link.name}
                        {link.href.startsWith("http") && (
                          <ExternalLink className="ml-1" size={14} />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="lg:col-span-2"
            >
              <h3 className="text-lg font-semibold mb-6">Entre em contato</h3>
              <div className="mt-8 space-y-3">
                {[{ icon: Phone, text: "(19) 9904-2072", href: "tel:+551999042072" }, { icon: Mail, text: "contato@t3rn.com.br", href: "mailto:contato@t3rn.com.br" }, { icon: MapPin, text: "São Paulo, SP - Brasil", href: "https://maps.google.com/?q=São+Paulo+Brasil" }].map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <contact.icon className="w-5 h-5 mr-3 text-gray-500" />
                    <span>{contact.text}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Copyright and legal links */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} T3RN Desenvolvimento. Todos os direitos reservados.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Termos de Serviço</a>
                <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Política de Privacidade</a>
                <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Cookies</a>
                <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">LGPD</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
