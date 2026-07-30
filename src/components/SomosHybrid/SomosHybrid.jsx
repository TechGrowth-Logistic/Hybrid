import React from 'react';
import ClientesCarousel from '../ClientesCarousel';

export default function SomosHybrid() {
  // Datos clave extraídos para mantener la UI limpia y mantenible
  const stats = [
    { label: "Año de Fundación", value: "2011", subtext: "15 años construyendo infraestructura" },
    { label: "Equipo Especializado", value: "+200", subtext: "Técnicos y operativos en campo" },
    { label: "Calidad Certificada", value: "ISO 9001", subtext: "Gestión de calidad internacional" },
  ];

  const valores = [
    { title: "Integridad", desc: "Transparencia y honestidad en cada proyecto ejecutivo y entregable." },
    { title: "Responsabilidad", desc: "Apego riguroso a tiempos de entrega y normativas de seguridad vial y EPP." },
    { title: "Compromiso", desc: "Asumimos los retos del cliente como propios en campo y gabinete." },
    { title: "Perseverancia", desc: "Capacidad de respuesta ante complejidades técnicas de terreno e infraestructura." }
  ];

  return (
    <section 
      id="somos-hybrid" 
      className="w-full transition-colors duration-300 bg-slate-50 text-slate-800 border-t border-slate-200 dark:bg-slate-950 dark:text-slate-100 dark:border-slate-800 py-20 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* HEADER DE SECCIÓN */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs md:text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            Sobre Nosotros
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Somos <span className="text-blue-600 dark:text-blue-500">#TeamHybrid</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
            Desde 2011 ofrecemos soluciones integrales en redes e infraestructura de telecomunicaciones. Contamos con la capacidad operativa para solventar proyectos de alta exigencia para operadores globales.
          </p>
        </div>

        {/* METRICAS DE CAPACIDAD (KPIs) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-slate-200 shadow-sm dark:bg-slate-900/60 dark:border-slate-800 dark:shadow-none p-8 rounded-2xl space-y-2 backdrop-blur-sm transition-all"
            >
              <span className="text-4xl md:text-5xl font-black text-blue-600 dark:text-blue-400 block">
                {stat.value}
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {stat.label}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* PROPUESTA DE VALOR E ISO 9001 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-slate-100 to-blue-50/60 border border-slate-200/80 dark:from-slate-900/80 dark:to-blue-950/40 dark:border-slate-800 p-8 md:p-12 rounded-3xl shadow-sm dark:shadow-none">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 border border-blue-200 text-blue-700 dark:bg-blue-500/20 dark:border-blue-400/30 dark:text-blue-300 rounded-full text-xs font-semibold">
              <span>Certificación Oficial</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
              Sistema de Gestión de Calidad ISO 9001:2015
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
              Proveemos soluciones en redes e infraestructura garantizando la mejora continua de nuestras operaciones. Nuestro compromiso no compromete la eficiencia ni la seguridad en campo.
            </p>
            <div className="pt-2">
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 block mb-2">
                Filosofía Corporativa:
              </span>
              <p className="text-slate-500 dark:text-slate-400 text-sm italic">
                "Realizar servicios integrales en forma eficiente y confiable, asumiendo los compromisos del cliente como propios."
              </p>
            </div>
          </div>

          {/* TARJETAS DE VALORES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {valores.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200/80 dark:bg-slate-900/90 dark:border-slate-800 p-5 rounded-xl space-y-1 shadow-xs dark:shadow-none"
              >
                <h4 className="text-blue-600 dark:text-blue-400 font-bold text-base flex items-center gap-2">
                  <span className="text-xs">★</span> {item.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
       
        <ClientesCarousel />        

      </div>
    </section>
  );
}