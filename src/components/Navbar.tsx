import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Menu navigation items
  const navItems = [
    { name: "Início", href: "/" },
    { name: "Projetos", href: "/#projects" },
    { name: "Serviços", href: "/#services" },
    { name: "Depoimentos", href: "/#testimonials" },
    { name: "Diferenciais", href: "/diferenciais" },
    { name: "Orçamento", href: "/orcamento" },
    { name: "Suporte", href: "/suporte" },
    { name: "Contato", href: "/#contact" },
  ];

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6 lg:px-10 ${scrolled
          ? "bg-black bg-opacity-90 backdrop-blur-sm border-b border-white-750 shadow-lg"
          : "bg-transparent"
        }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-cashDisplay text-xl text-white flex items-center"
          >
            <img src="/favicon.ico" alt="Logo" className="w-12 h-12 mr-2" />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <div className="bg-black border border-white-750 rounded-full px-1 py-1 flex items-center">
            {navItems.slice(0, 6).map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                {item.href.startsWith("/") && !item.href.includes("#") ? (
                  <Link
                    to={item.href}
                    className="px-4 py-2 text-sm text-white hover:text-gray-200 transition-all duration-300 ease-in-out rounded-full hover:bg-black focus:outline-none"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="px-4 py-2 text-sm text-white hover:text-gray-200 transition-all duration-300 ease-in-out rounded-full hover:bg-black focus:outline-none"
                  >
                    {item.name}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 right-0 bg-black border-t border-white-750 shadow-2xl"
        >
          <div className="container mx-auto py-4 px-6 flex flex-col space-y-3">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.href.startsWith("/") && !item.href.includes("#") ? (
                  <Link
                    to={item.href}
                    className="py-3 px-4 text-white hover:text-gray-200 hover:bg-black rounded-lg transition-all duration-300 ease-in-out block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="py-3 px-4 text-white hover:text-gray-200 hover:bg-black rounded-lg transition-all duration-300 ease-in-out block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
