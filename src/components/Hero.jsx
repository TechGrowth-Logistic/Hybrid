import React from 'react';
import { Link } from 'react-router-dom';
import ClientesCarousel from "./ClientesCarousel";

export default function Hero() {
  return (
    <>
      <section className="relative w-full min-h-[85vh] flex items-center justify-start overflow-hidden transition-colors duration-300 bg-slate-950 text-white px-6 md:px-16 py-20">

        {/* 1. VIDEO DE FONDO (Ruta corregida para web/Vite) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/Video/Hybrid_Telecomunicaciones.mp4" type="video/mp4" />
          Tu navegador no soporta videos en HTML5.
        </video>

        {/* 2. OVERLAY / FILTRO AZUL CORPORATIVO (Se ajusta dinámicamente según el tema) */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/90 via-blue-950/80 to-slate-900/65 dark:from-slate-950/95 dark:via-blue-950/85 dark:to-slate-900/80" />

        {/* 3. CONTENIDO PERSUASIVO SOBRE EL VIDEO (z-20) */}
        <div className="relative z-20 max-w-3xl space-y-6">

          {/* Etiqueta / Keyword de nicho */}
          <div className="inline-block px-3.5 py-1.5 bg-blue-600/30 border border-blue-400/40 rounded-full backdrop-blur-sm">
            <span className="text-xs md:text-sm font-semibold tracking-wider text-blue-300 uppercase">
              Obra Civil Telecom
            </span>
          </div>

          {/* H1: Enfocado en la Intención de Búsqueda de B2B */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Infraestructura y Redes de Telecomunicaciones a Gran Escala
          </h1>

          {/* Subtítulo Persuasivo */}
          <p className="text-base md:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl">
            Construimos, desplegamos y mantenemos fibra óptica y obra civil con estricto apego normativo para operadores y contratistas líderes en México.
          </p>

          {/* CTAs de Alta Conversión (Usa Link hacia la vista de contacto) */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              to="/contacto"
              className="inline-flex justify-center items-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/30 text-center text-sm md:text-base active:scale-95"
            >
              Solicitar Levantamiento Técnico
            </Link>
          </div>

          {/* Prueba Social Rápida B2B */}
          <div className="pt-6 border-t border-slate-700/60 grid grid-cols-2 sm:grid-cols-3 gap-6 text-slate-300 text-xs md:text-sm">
            <div>
              <span className="block font-bold text-xl text-white">+10 Años</span>
              Experiencia en Campo
            </div>
            <div>
              <span className="block font-bold text-xl text-white">ISO 9001</span>
              Cumplimiento Normativo
            </div>
          </div>

        </div>
      </section>     
      <ClientesCarousel />
    </>
  );
}