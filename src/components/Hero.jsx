import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-start overflow-hidden bg-slate-950 text-white px-6 md:px-16 py-20">
      
      {/* 1. VIDEO DE FONDO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        {/* Cambia la ruta por tu archivo de video dentro de /public */}
        Tu navegador no soporta videos en HTML5.
        <source src="/Video\Hybrid_Telecomunicaciones.mp4" type="video/mp4" />
      </video>

      {/* 2. OVERLAY / FILTRO AZUL CORPORATIVO (Gradiente para legibilidad) */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-blue-950/80 to-slate-900/65 z-10" />

      {/* 3. CONTENIDO PERSUASIVO SOBRE EL VIDEO (z-20) */}
      <div className="relative z-20 max-w-3xl space-y-6">
        
        {/* Etiqueta / Keyword de nicho */}
        <div className="inline-block px-3 py-1 bg-blue-600/30 border border-blue-400/40 rounded-full">
          <span className="text-xs md:text-sm font-semibold tracking-wider text-blue-300 uppercase">
            Obra Civil Telecom
          </span>
        </div>

        {/* H1: Enfocado en la Intención de Búsqueda de B2B */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Infraestructura y Redes de Telecomunicaciones a Gran Escala
        </h1>

        {/* Subtítulo Persuasivo */}
        <p className="text-base md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
          Construimos, desplegamos y mantenemos fibra óptica y obra civil con estricto apego normativo para operadores y contratistas líderes en México.
        </p>

        {/* CTAs de Alta Conversión */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a
            href="#contacto"
            className="inline-flex justify-center items-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-600/30 text-center"
          >
            Solicitar Levantamiento Técnico
          </a>
          {/* <a
            href="#servicios"
            className="inline-flex justify-center items-center px-8 py-4 bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-semibold border border-slate-600/80 rounded-lg backdrop-blur-sm transition-all text-center"
          >
            Ver Capacidad Operativa
          </a> */}
        </div>

        {/* Prueba Social Rápida B2B */}
        <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-slate-400 text-xs md:text-sm">
          <div>
            <span className="block font-bold text-lg text-white">+10 Años</span>
            Experiencia en Campo
          </div>
          <div>
            <span className="block font-bold text-lg text-white">ISO 9001</span>
            Cumplimiento Normativo
          </div>          
        </div>

      </div>
    </section>
  );
}