import { useState, useEffect } from 'react';

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
        
        {/* Logo -> Redirecciona al Home */}
        <a href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <img 
            alt="Hybrid Telecomunicaciones Logo" 
            className="h-9 w-auto" 
            src="/Logo-Hybrid-Telecomunicaciones.png" 
          />          
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {/* Si es Single Page Landing, usa enlaces tipo anchor #id. Si usas rutas, cambia a /somos-hybrid */}
          <a 
            className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors duration-200" 
            href="#somos-hybrid"
          >
            Somos Hybrid
          </a>
          <a 
            className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors duration-200" 
            href="#obra-civil"
          >
            Obra Civil
          </a>
          <a 
            className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors duration-200" 
            href="#microondas"
          >
            Microondas
          </a>
          <a 
            className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors duration-200" 
            href="#fibra-optica"
          >
            Fibra Óptica
          </a>
          <a 
            className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors duration-200" 
            href="#contacto"
          >
            Contacto
          </a>
        </div>

        {/* CTA & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <a 
            href="#contacto" 
            className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all duration-200 shadow-md shadow-blue-600/20 active:scale-95"
          >
            Portal Cliente
          </a>

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
          <a 
            className="text-sm font-medium text-slate-300 hover:text-blue-400" 
            href="#somos-hybrid"
            onClick={() => setMobileMenuOpen(false)}
          >
            Somos Hybrid
          </a>
          <a 
            className="text-sm font-medium text-slate-300 hover:text-blue-400" 
            href="#obra-civil"
            onClick={() => setMobileMenuOpen(false)}
          >
            Obra Civil
          </a>
          <a 
            className="text-sm font-medium text-slate-300 hover:text-blue-400" 
            href="#microondas"
            onClick={() => setMobileMenuOpen(false)}
          >
            Microondas
          </a>
          <a 
            className="text-sm font-medium text-slate-300 hover:text-blue-400" 
            href="#fibra-optica"
            onClick={() => setMobileMenuOpen(false)}
          >
            Fibra Óptica
          </a>
          <a 
            className="text-sm font-medium text-slate-300 hover:text-blue-400" 
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contacto
          </a>
        </div>
      )}
    </header>
  );
}