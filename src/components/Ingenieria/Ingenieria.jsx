import React from 'react';
import { Link } from 'react-router-dom';

export default function Ingenieria() {
  const serviciosIngenieria = [
    {
      title: "Diseño Ejecutivo y Ruteo",
      desc: "Levantamiento de rutas, memoria de cálculo, diagramas unifilares y carpetas técnicas de ingeniería ejecutiva.",
      icon: "architecture",
      badge: "Gabinete"
    },
    {
      title: "Site Survey y Levantamiento en Campo",
      desc: "Inspección de sitios técnicos, viabilidad de canalización, estudio de línea de vista (LOS) y análisis de terreno.",
      icon: "pin_drop",
      badge: "Campo"
    },
    {
      title: "Optimización e Integración de Red",
      desc: "Auditoría de enlaces existentes, balanceo de potencia, reconfiguración de nodos y resolución de atenuaciones.",
      icon: "tune",
      badge: "Redes"
    },
    {
      title: "Gestión de Permisos y Normativa",
      desc: "Tramitación de permisos ante ayuntamientos, CFE, SCT y cumplimiento de normas IFT para despliegue de infraestructura.",
      icon: "policy",
      badge: "Normativa"
    }
  ];

  return (
    <div className="w-full transition-colors duration-300 bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 min-h-screen">
      
      {/* 1. HERO BANNER DE INGENIERÍA */}
      <section className="relative w-full h-[55vh] min-h-[480px] max-h-[650px] flex items-center justify-start overflow-hidden px-6 md:px-16 border-b border-slate-200 dark:border-slate-800">
        
        {/* IMAGEN DE FONDO */}
        <img 
          src="/ingenieria-hero.jpg" 
          alt="Ingeniería y Diseño de Telecomunicaciones" 
          className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-75 dark:opacity-60 transition-all duration-300"
        />
        
        {/* OVERLAY PARA DAR LECTURA SOBRE LA FOTO */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-transparent z-10" />

        {/* CONTENIDO PERSUASIVO SOBRE LA IMAGEN */}
        <div className="relative z-20 max-w-3xl space-y-4">
          <span className="text-xs md:text-sm font-semibold tracking-widest text-blue-400 uppercase bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20 backdrop-blur-sm">
            Diseño, Planeación & Gabinete
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ingeniería de <span className="text-blue-500">Telecomunicaciones</span>
          </h1>
          <p className="text-slate-200 text-sm md:text-base max-w-xl leading-relaxed">
            El núcleo técnico que garantiza el diseño, implementación y operación eficiente de soluciones de comunicación confiables y de alto desempeño.
          </p>
          <div className="pt-2">
            <Link 
              to="/contacto" 
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-lg shadow-blue-600/30 active:scale-95"
            >
              Solicitar Estudio / Survey
            </Link>
          </div>
        </div>

      </section>

      {/* 2. GRILLA DE SERVICIOS DE INGENIERÍA */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto space-y-16">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Planeación Estratégica y Soluciones a la Medida
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">
            Ofrecemos servicios integrales de análisis, diseño e integración para asegurar la máxima escalabilidad, seguridad y continuidad operativa de su proyecto.
          </p>
        </div>

        {/* TARJETAS TÉCNICAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviciosIngenieria.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white border border-slate-200 shadow-sm dark:bg-slate-900/90 dark:border-slate-800 dark:shadow-none hover:border-blue-500/50 dark:hover:border-blue-500/50 p-6 rounded-2xl space-y-4 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 dark:bg-blue-600/20 dark:text-blue-400 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 3. BLOQUE DE METODOLOGÍA Y ENTREGABLES */}
        <div className="bg-gradient-to-br from-slate-100 to-blue-50/60 border border-slate-200/80 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/40 dark:border-slate-800 rounded-3xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center shadow-sm dark:shadow-none">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 border border-blue-200 text-blue-700 dark:bg-blue-500/20 dark:border-blue-400/30 dark:text-blue-300 rounded-full text-xs font-semibold">
              <span>Metodología de Proyectos</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
              Entregables Técnicos y Carpetas de Proyecto (As-Built)
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
              Nuestro equipo de ingenieros capacitados aplica las mejores prácticas de la industria para generar documentación precisa antes, durante y al finalizar cada proyecto.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700 dark:text-slate-300 pt-2">
              <div className="flex items-center gap-2">
                <span className="text-blue-600 dark:text-blue-500 font-bold">✓</span> Planos AutoCAD / GIS
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600 dark:text-blue-500 font-bold">✓</span> Memorias de Cálculo
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600 dark:text-blue-500 font-bold">✓</span> Diagramas Multifilares
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600 dark:text-blue-500 font-bold">✓</span> Dictamen de Viabilidad
              </div>
            </div>
          </div>

          {/* TARJETA DE ACCIÓN */}
          <div className="bg-white border border-slate-200 shadow-sm dark:bg-slate-950/80 dark:border-slate-800 dark:shadow-none p-8 rounded-2xl text-center space-y-6">
            <span className="material-symbols-outlined text-4xl text-blue-600 dark:text-blue-500">engineering</span>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white">
              ¿Requieres el diseño ejecutivo de un proyecto?
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
              Escríbenos para evaluar tu requerimiento y agendar un levantamiento técnico con nuestros ingenieros.
            </p>
            <Link 
              to="/contacto" 
              className="inline-block w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-blue-600/30 active:scale-95"
            >
              Consultar Departamento de Ingeniería
            </Link>
          </div>

        </div>

      </section>

    </div>
  );
}