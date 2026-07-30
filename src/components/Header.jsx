import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full top-0 sticky z-50 transition-all duration-300 border-b ${
      isScrolled ? 'py-2 shadow-lg shadow-black/10 dark:shadow-black/40' : 'py-4'
    } bg-white border-slate-200 text-slate-800 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-100`}>
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-12">

        {/* Logo -> Redirige a Home */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <img
            alt="Hybrid Telecomunicaciones Logo"
            className="h-9 w-auto"
            src="/Logo-Hybrid-Telecomunicaciones.png"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          <Link
            className="text-sm font-medium text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors duration-200"
            to="/somos-hybrid"
          >
            Somos Hybrid
          </Link>
          <Link
            className="text-sm font-medium text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors duration-200"
            to="/ingenieria"
          >
            Ingeniería
          </Link>
          <Link
            className="text-sm font-medium text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors duration-200"
            to="/obra-civil"
          >
            Obra Civil
          </Link>
          <Link
            className="text-sm font-medium text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors duration-200"
            to="/microondas"
          >
            Microondas
          </Link>
          <Link
            className="text-sm font-medium text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors duration-200"
            to="/fibra-optica"
          >
            Fibra Óptica
          </Link>

          {/* Enlace Bolsa de Trabajo (Desktop) */}
          <Link
            className="text-sm font-medium text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors duration-200 flex items-center gap-1"
            to="/bolsa-de-trabajo"
          >
            <span className="material-symbols-outlined text-lg text-blue-600 dark:text-blue-400">work</span>
            Bolsa de Trabajo
          </Link>
        </div>

        {/* CTA, TOGGLE TEMA & MOBILE MENU */}
        <div className="flex items-center gap-3 md:gap-4">

          {/* BOTÓN MODO CLARO / MODO OSCURO */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-amber-400 dark:border-slate-700 transition-all active:scale-90 flex items-center justify-center cursor-pointer"
            aria-label="Cambiar tema"
            title={theme === 'dark' ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro'}
          >
            <span className="material-symbols-outlined text-xl">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          {/* Botón de Contacto */}
          <Link
            to="/contacto"
            className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all duration-200 shadow-md shadow-blue-600/20 active:scale-95"
          >
            Contáctanos
          </Link>

          {/* Botón menú móvil */}
          <button
            className="md:hidden text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white p-1"
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
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex flex-col gap-4">
          <Link
            className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
            to="/somos-hybrid"
            onClick={() => setMobileMenuOpen(false)}
          >
            Somos Hybrid
          </Link>
          <Link
            className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
            to="/ingenieria"
            onClick={() => setMobileMenuOpen(false)}
          >
            Ingeniería
          </Link>
          <Link
            className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
            to="/obra-civil"
            onClick={() => setMobileMenuOpen(false)}
          >
            Obra Civil
          </Link>
          <Link
            className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
            to="/microondas"
            onClick={() => setMobileMenuOpen(false)}
          >
            Microondas
          </Link>
          <Link
            className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
            to="/fibra-optica"
            onClick={() => setMobileMenuOpen(false)}
          >
            Fibra Óptica
          </Link>

          {/* Enlace Bolsa de Trabajo (Móvil) */}
          <Link
            className="text-sm font-medium text-blue-600 dark:text-blue-400 flex items-center gap-2 border-t border-slate-200 dark:border-slate-800 pt-3"
            to="/bolsa-de-trabajo"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="material-symbols-outlined text-lg">work</span>
            Bolsa de Trabajo
          </Link>
        </div>
      )}
    </header>
  );
}