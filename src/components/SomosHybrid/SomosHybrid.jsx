import React from 'react';

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

  const clientes = ["Telcel", "Huawei", "FiberHome"];

  return (
    <section id="somos-hybrid" className="w-full bg-slate-900 text-slate-100 py-20 px-6 md:px-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* HEADER DE SECCIÓN */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs md:text-sm font-semibold tracking-widest text-blue-400 uppercase">
            Sobre Nosotros
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Somos <span className="text-blue-500">#TeamHybrid</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            Desde 2011 ofrecemos soluciones integrales en redes e infraestructura de telecomunicaciones. Contamos con la capacidad operativa para solventar proyectos de alta exigencia para operadores globales.
          </p>
        </div>

        {/* METRICAS DE CAPACIDAD (KPIs) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-slate-800/60 border border-slate-700/60 p-8 rounded-2xl space-y-2 backdrop-blur-sm">
              <span className="text-4xl md:text-5xl font-black text-blue-400 block">{stat.value}</span>
              <h3 className="text-lg font-bold text-white">{stat.label}</h3>
              <p className="text-sm text-slate-400">{stat.subtext}</p>
            </div>
          ))}
        </div>

        {/* PROPUESTA DE VALOR E ISO 9001 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-slate-800/80 to-blue-950/40 border border-slate-700/80 p-8 md:p-12 rounded-3xl">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-xs font-semibold">
              <span>Certificación Oficial</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Sistema de Gestión de Calidad ISO 9001:2015
            </h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Proveemos soluciones en redes e infraestructura garantizando la mejora continua de nuestras operaciones. Nuestro compromiso no compromete la eficiencia ni la seguridad en campo.
            </p>
            <div className="pt-2">
              <span className="text-sm font-semibold text-slate-200 block mb-2">Filosofía Corporativa:</span>
              <p className="text-slate-400 text-sm italic">
                "Realizar servicios integrales en forma eficiente y confiable, asumiendo los compromisos del cliente como propios."
              </p>
            </div>
          </div>

          {/* TARJETAS DE VALORES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {valores.map((item, idx) => (
              <div key={idx} className="bg-slate-900/80 border border-slate-800 p-5 rounded-xl space-y-1">
                <h4 className="text-blue-400 font-bold text-base flex items-center gap-2">
                  <span className="text-xs">★</span> {item.title}
                </h4>
                <p className="text-xs text-slate-400 leading-normal">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CLIENTES / RESPALDO COMERCIAL */}
        <div className="space-y-6 text-center border-t border-slate-800/80 pt-12">
          <p className="text-xs md:text-sm font-semibold text-slate-400 tracking-wider uppercase">
            Empresas y Aliados que Confían en Nuestra Infraestructura
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80 grayscale hover:grayscale-0 transition-all duration-300">
            {clientes.map((cliente, idx) => (
              <span key={idx} className="text-xl md:text-2xl font-black text-slate-300 tracking-widest uppercase">
                {cliente}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}