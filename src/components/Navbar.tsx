import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isSolid = isScrolled || pathname !== "/";

  const navLinks = [
    { name: "Inicio", to: "/" },
    { name: "Organización", to: "/ministerios" },
    { name: "Eventos", to: "/eventos" },
    { name: "¿Dónde te encuentras?", to: "/crecimiento" },
    { name: "Recursos", to: "/recursos" },
    { name: "Conecta", to: "/conecta" },
    { name: "Anuncios", to: "/anuncios" }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSolid
        ? "bg-white/95 backdrop-blur-md shadow-md"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(90deg, #1F6FD8, #0E3465)' }}>
              {/* Reemplazamos el span por la imagen del logo */}
              <img
                src="img/logo.webp" // Ruta a tu logo
                alt="LogoCFN Coacalco"
                className="w-full h-full object-cover" // Asegúrate de que cubra el espacio
              />
            </div>
            <div className="hidden md:block">
              <div className={`transition-colors ${isSolid ? 'text-gray-900' : 'text-white'}`}>
                <span className="block leading-tight">Centro Familiar Para las Naciones</span>
                <span className="block text-sm opacity-80">Coacalco</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) => {
                  const base = isSolid
                    ? "text-gray-700 hover:text-[#1F6FD8]"
                    : "text-white hover:text-white/80";
                  const active = isActive
                    ? isSolid
                      ? "text-[#1F6FD8] font-semibold"
                      : "text-white font-semibold"
                    : "";
                  return `transition-colors ${base} ${active}`;
                }}
              >
                {link.name}
              </NavLink>
            ))}
            {/* <button className="px-6 py-2.5 text-white rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105" style={{ background: 'linear-gradient(90deg, #1F6FD8, #0E3465)' }}>
              Donar
            </button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            className={`lg:hidden p-3 rounded-xl transition-colors ${isSolid ? 'text-gray-900' : 'text-white'
              }`}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            id="mobile-menu"
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl z-50"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-3 text-lg text-gray-700 hover:text-[#1F6FD8] transition-colors ${
                      isActive ? "text-[#1F6FD8] font-semibold" : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              {/* <button className="w-full px-6 py-3 text-white rounded-full hover:shadow-lg transition-all" style={{ background: 'linear-gradient(90deg, #1F6FD8, #0E3465)' }}>
                Donar
              </button> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}