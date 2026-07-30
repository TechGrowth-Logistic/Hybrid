import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full transition-colors duration-300 bg-slate-100 text-slate-600 border-t border-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800 pt-16 pb-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800">
        
        {/* COLUMNA 1: LOGO Y RESUMEN (5 cols) */}
        <div className="md:col-span-5 space-y-4">
          <Link to="/" className="inline-block">
            <img 
              src="/Logo-Hybrid-Telecomunicaciones.png" 
              alt="Hybrid Telecomunicaciones Logo" 
              className="h-10 w-auto"
            />
          </Link>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
            Líderes en diseño e implementación de infraestructura para telecomunicaciones. Más de 10 años en el mercado ofreciendo soluciones integrales para proyectos de expansión.
          </p>
          
          {/* RED SOCIAL FACEBOOK */}
          <div className="pt-2 flex items-center gap-3">
            <a 
              href="https://www.facebook.com/profile.php?id=61574125779623" 
              target="_blank" 
              rel="noreferrer"
              className="w-9 h-9 bg-slate-200 hover:bg-blue-600 text-slate-700 hover:text-white dark:bg-slate-800 dark:hover:bg-blue-600 dark:text-slate-300 dark:hover:text-white rounded-lg flex items-center justify-center transition-all duration-200"
              aria-label="Facebook Hybrid Telecomunicaciones"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* COLUMNA 2: NAVEGACIÓN DE SERVICIOS (4 cols) */}
        <div className="md:col-span-4 space-y-3">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Servicios Especializados</h4>
          <ul className="space-y-2 text-xs md:text-sm text-slate-600 dark:text-slate-400">
            <li><Link to="/obra-civil" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Obra Civil y Canalizaciones</Link></li>
            <li><Link to="/fibra-optica" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Fibra Óptica & Pruebas OTDR</Link></li>
            <li><Link to="/microondas" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Redes de Microondas</Link></li>
            <li><Link to="/somos-hybrid" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Sistema de Calidad ISO 9001</Link></li>
          </ul>
        </div>

        {/* COLUMNA 3: CONTACTO RÁPIDO (3 cols) */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Contacto</h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Islas Galápagos 28, Pueblo de San Juan de Aragón, CDMX.
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400">+52 (55) 1234 5678</p>
          <Link to="/contacto" className="inline-block text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline">
            Enviar correo directo →
          </Link>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 dark:text-slate-500 gap-4">
        <p>© {new Date().getFullYear()} Hybrid Telecomunicaciones. Todos los derechos reservados.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-slate-700 dark:hover:text-slate-400 transition-colors">Políticas de Privacidad</a>
          <a href="#" className="hover:text-slate-700 dark:hover:text-slate-400 transition-colors">Términos del Servicio</a>
        </div>
      </div>
    </footer>
  );
}