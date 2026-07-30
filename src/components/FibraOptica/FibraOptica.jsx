import React from 'react';

export default function FibraOptica() {
  const serviciosTecnicos = [
    {
      title: "Tendido Aéreo y Subterráneo",
      desc: "Despliegue de cable de fibra óptica (ADSS, Armado) en postes y canalizaciones subterráneas con tensión normada.",
      icon: "cable"
    },
    {
      title: "Empalme por Fusión",
      desc: "Fusionado de alta precisión en cajas de empalme (Cierre de Empalme / ODF) con mínimos niveles de atenuación.",
      icon: "precision_manufacturing"
    },
    {
      title: "Pruebas y Certificación OTDR",
      desc: "Medición con Reflectómetro Óptico en el Dominio del Tiempo y entregables de reporte de pérdidas en dB.",
      icon: "analytics"
    },
    {
      title: "Mantenimiento Preventivo y Correctivo",
      desc: "Atención a cortes de fibra, canalizaciones dañadas y guardia operativa 24/7 para garantizar SLA.",
      icon: "build"
    }
  ];

  return (
    <div className="w-full bg-slate-950 text-slate-100 min-h-screen">
      
      {/* 1. HERO DE SECCIÓN (Banner con Imagen Real de Tendido) */}
      <section className="relative w-full h-[45vh] md:h-[55vh] flex items-center justify-start overflow-hidden px-6 md:px-16 border-b border-slate-800">
        <img 
          src="fibraOptica/DSC_2242.png" 
          alt="Tendido de Fibra Óptica" 
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-75 object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10" />

        <div className="relative z-20 max-w-3xl space-y-4">
          <span className="text-xs md:text-sm font-semibold tracking-widest text-blue-400 uppercase">
            Especialización Planta Externa & Externa
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Redes de <span className="text-blue-500">Fibra Óptica</span>
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-xl leading-relaxed">
            Instalación, despliegue y certificación de enlaces de fibra óptica de alto rendimiento para proyectos masivos, corporativos e industriales.
          </p>
        </div>
      </section>

      {/* 2. ALCANCE TÉCNICO Y CAPACIDAD DE DESPLIEGUE */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto space-y-16">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Soluciones Integrales para Operadores de Red
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            Trabajamos bajo estándares internacionales de ingeniería, garantizando continuidad de señal, bajas pérdidas en fusión y riguroso apego a normas de seguridad vial y EPP.
          </p>
        </div>

        {/* GRILLA DE SERVICIOS TÉCNICOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviciosTecnicos.map((item, idx) => (
            <div 
              key={idx}
              className="bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 p-6 rounded-2xl space-y-4 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 3. BLOQUE DE EQUIPAMIENTO Y CERTIFICACIÓN */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Herramientas y Medición de Última Generación
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Disponemos de fusionadoras con alineación por núcleo y equipos OTDR debidamente calibrados. Entregamos carpetas técnicas completas con diagramas multifilares y reportes de reflectometría para la entrega recepción formal de sitios.
            </p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-3">
                <span className="text-blue-500 font-bold">✓</span> Fusionadoras por núcleo de baja pérdida (&lt; 0.02 dB)
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500 font-bold">✓</span> Pruebas bidireccionales en 1310nm y 1550nm
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500 font-bold">✓</span> Personal capacitado en normas NOM e IFT
              </li>
            </ul>
          </div>

          {/* CTA CARD DENTRO DEL BLOQUE */}
          <div className="bg-gradient-to-br from-blue-900/40 to-slate-900 p-8 rounded-2xl border border-blue-500/30 text-center space-y-6">
            <h4 className="text-xl font-bold text-white">
              ¿Requieres un presupuesto para un tramo o proyecto de fibra óptica?
            </h4>
            <p className="text-xs text-slate-300">
              Evaluamos tu proyecto de planta externa o levantamiento técnico con respuesta rápida.
            </p>
            <a 
              href="/contacto" 
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3 rounded-lg text-sm transition-all shadow-lg shadow-blue-600/30"
            >
              Contactar al Equipo de Ingeniería
            </a>
          </div>
        </div>

      </section>

    </div>
  );
}