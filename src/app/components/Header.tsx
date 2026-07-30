import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
const logoImg = "./images/logo.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(true); // Logo não existe, sempre usar fallback

  const navItems = [
    { label: "Eventos", href: "#cursos-eventos" },
    { label: "Apoio", href: "#apoio-acolhimento" },
    { label: "Campanhas", href: "#campanhas" },
    { label: "Vídeos", href: "#videos" },
    { label: "História", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-[#E0E0E0] shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#inicio")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src={logoImg}
              alt="Logo Sementes de Humildade"
              className="h-14 w-14 rounded-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                (e.currentTarget.nextElementSibling as HTMLElement).style.display = "flex";
              }}
            />
            <div className="h-14 w-14 rounded-full bg-[#4CAF50] items-center justify-center hidden">
              <span className="text-white font-['Montserrat'] font-bold text-2xl">SH</span>
            </div>
            <span className="text-[#212121] font-['Montserrat'] hidden sm:block">
              Sementes de Humildade
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-[#212121] font-['Inter'] hover:text-[#4CAF50] transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#reunioes")}
              className="bg-[#4CAF50] text-white px-6 py-2 rounded-full font-['Inter'] font-medium hover:bg-[#2E7D32] transition-colors"
            >
              Nossas Reuniões
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[#212121]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 text-[#212121] font-['Inter'] hover:text-[#4CAF50] transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#reunioes")}
              className="block w-full bg-[#4CAF50] text-white px-6 py-3 rounded-full font-['Inter'] font-medium hover:bg-[#2E7D32] transition-colors mt-4"
            >
              Nossas Reuniões
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}