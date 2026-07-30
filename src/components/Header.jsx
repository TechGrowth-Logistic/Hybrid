import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // 1. IMPORTAR LINK

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full top-0 sticky z-50 bg-slate-900 border-b border-slate-800 transition-all duration-300 ${isScrolled ? 'py-2 shadow-lg shadow-black/40' : 'py-4'}`}>
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Logo -> Usa <Link> hacia "/" */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <img 
            alt="Hybrid Telecomunicaciones Logo" 
            className="h-9 w-auto" 
            src="/Logo-Hybrid-Telecomunicaciones.png" 
          />          
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors duration-200" 
            to="/somos-hybrid"
          >
            Somos Hybrid
          </Link>
          <Link 
            className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors duration-200" 
            to="/obra-civil"
          >
            Obra Civil
          </Link>
          <Link 
            className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors duration-200" 
            to="/microondas"
          >
            Microondas
          </Link>
          <Link 
            className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors duration-200" 
            to="/fibra-optica"
          >
            Fibra Óptica
          </Link>
          <Link 
            className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors duration-200" 
            to="/contacto"
          >
            Contacto
          </Link>
        </div>

        {/* CTA & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <Link 
            to="/portal-cliente" 
            className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all duration-200 shadow-md shadow-blue-600/20 active:scale-95"
          >
            Portal Cliente
          </Link>

          {/* Botón menú móvil */}
          <button 
            className="md:hidden text-slate-300 hover:text-white p-1" 
            aria-label="Abrir Menú"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
        
      </nav>

      {/* Menú Desplegable para Móviles */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-4 flex flex-col gap-4">
          <Link 
            className="text-sm font-medium text-slate-300 hover:text-blue-400" 
            to="/somos-hybrid"
            onClick={() => setMobileMenuOpen(false)}
          >
            Somos Hybrid
          </Link>
          {/* Repite lo mismo para los demás enlaces móviles usando <Link to="..."> */}
        </div>
      )}
    </header>
  );
}