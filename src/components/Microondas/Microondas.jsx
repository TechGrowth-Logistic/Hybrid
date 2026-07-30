import React from 'react';
import { Link } from 'react-router-dom';

export default function Microondas() {
  const serviciosMicroondas = [
    {
      title: "Instalación y Alineación de Antenas",
      desc: "Montaje, azimut y orientación de precisión para maximizar los niveles de potencia y estabilidad del enlace.",
      icon: "settings_input_antenna"
    },
    {
      title: "Mantenimiento Preventivo y Correctivo",
      desc: "Inspecciones periódicas de radios, conectores, sistemas de tierra y atención rápida a fallas de enlace.",
      icon: "published_with_changes"
    },
    {
      title: "Mantenimiento a Torres y Estructuras",
      desc: "Trabajo en alturas por personal certificado, revisión de verticalidad, apriete de tornillería y pintura anticorrosiva.",
      icon: "height"
    },
    {
      title: "Pruebas de BSR y Calidad de Señal",
      desc: "Medición de BER, nivel de recepción (RSSI), ancho de banda y diagnóstico integral del espectro.",
      icon: "signal_cellular_alt"
    }
  ];

  return (
    <div className="w-full transition-colors duration-300 bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 min-h-screen">
      
      {/* 1. HERO BANNER ALINEADO A LA DERECHA */}
      <section className="relative w-full h-[55vh] min-h-[480px] max-h-[650px] flex items-center justify-end overflow-hidden px-6 md:px-16 border-b border-slate-200 dark:border-slate-800">
        <img 
          src="/microondas-hero.jpg" 
          alt="Mantenimiento e Instalación de Microondas" 
          className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-70 dark:opacity-65 transition-all duration-300"
        />
        {/* Overlay con gradiente invertido hacia la derecha */}
        <div className="absolute inset-0 bg-gradient-to-l from-slate-950/90 via-slate-950/75 to-transparent z-10" />

        <div className="relative z-20 max-w-3xl space-y-4 ml-auto text-right flex flex-col items-end">
          <span className="text-xs md:text-sm font-semibold tracking-widest text-blue-400 uppercase bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20 backdrop-blur-sm">
            Enlaces Inalámbricos & Redes
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Redes de <span className="text-blue-500">Microondas</span>
          </h1>
          <p className="text-slate-200 text-sm md:text-base max-w-xl leading-relaxed">
            Instalación, alineación y mantenimiento especializado de enlaces de microondas para garantizar la máxima disponibilidad y continuidad operativa de su red.
          </p>
          <div className="pt-2">
            <Link 
              to="/contacto" 
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-lg shadow-blue-600/30 active:scale-95"
            >
              Solicitar Inspección Técnica
            </Link>
          </div>
        </div>
      </section>

      {/* 2. GRILLA DE SERVICIOS Y ALCANCE TÉCNICO */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto space-y-16">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Soluciones de Continuidad y Máxima Disponibilidad
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">
            Mantenemos sus enlaces inalámbricos funcionando bajo los parámetros óptimos de potencia y estabilidad con estrictos protocolos de trabajo seguro en alturas.
          </p>
        </div>

        {/* TARJETAS TÉCNICAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviciosMicroondas.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white border border-slate-200 shadow-sm dark:bg-slate-900/90 dark:border-slate-800 dark:shadow-none hover:border-blue-500/50 dark:hover:border-blue-500/50 p-6 rounded-2xl space-y-4 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 dark:bg-blue-600/20 dark:text-blue-400 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 3. BLOQUE DE TRABAJO SEGURO EN ALTURAS & CERTIFICACIÓN */}
        <div className="bg-gradient-to-br from-slate-100 to-blue-50/60 border border-slate-200/80 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/40 dark:border-slate-800 rounded-3xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center shadow-sm dark:shadow-none">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 border border-blue-200 text-blue-700 dark:bg-blue-500/20 dark:border-blue-400/30 dark:text-blue-300 rounded-full text-xs font-semibold">
              <span>Normativa y Seguridad en Torre</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
              Personal Certificado en Trabajo de Altura
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
              Realizamos ascensos y maniobras en torre cumpliendo rigurosamente con normas de seguridad laboral, uso de arnés de cuerpo completo, líneas de vida y EPP normado.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700 dark:text-slate-300 pt-2">
              <div className="flex items-center gap-2">
                <span className="text-blue-600 dark:text-blue-500 font-bold">✓</span> Certificación en Alturas (DC-3)
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600 dark:text-blue-500 font-bold">✓</span> Equipos de Medición de RF
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600 dark:text-blue-500 font-bold">✓</span> Riguroso Control de Calidad
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600 dark:text-blue-500 font-bold">✓</span> Guardias Operativas de Respuesta
              </div>
            </div>
          </div>

          {/* TARJETA DE ACCIÓN */}
          <div className="bg-white border border-slate-200 shadow-sm dark:bg-slate-950/80 dark:border-slate-800 dark:shadow-none p-8 rounded-2xl text-center space-y-6">
            <span className="material-symbols-outlined text-4xl text-blue-600 dark:text-blue-500">cell_tower</span>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white">
              ¿Necesitas evaluar o alinear un enlace de microondas?
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
              Contáctanos para agendar una visita técnica o mantenimiento a tus sitios de transmisión.
            </p>
            <Link 
              to="/contacto" 
              className="inline-block w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-blue-600/30 active:scale-95"
            >
              Agendar Diagnóstico Técnico
            </Link>
          </div>

        </div>

      </section>

    </div>
  );
}