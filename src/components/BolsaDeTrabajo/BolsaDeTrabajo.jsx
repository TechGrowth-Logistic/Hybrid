import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BolsaDeTrabajo() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    areaInteres: 'Planta Externa / Fibra Óptica',
    experiencia: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Postulación previa recibida:', formData);
    setSubmitted(true);
  };

  const areasTalento = [
    {
      title: "Planta Externa & Fibra Óptica",
      desc: "Técnicos empalmadores, linieros y cuadrillas de tendido aéreo y subterráneo.",
      icon: "cable"
    },
    {
      title: "Obra Civil & Maquinaria",
      desc: "Supervisores de sitio, operadores de maquinaria pesada/Hiab y personal de zanjado.",
      icon: "construction"
    },
    {
      title: "Radioenlaces & Microondas",
      desc: "Riggers/torreros certificados en trabajo en alturas (DC-3) y alineación de antenas.",
      icon: "cell_tower"
    },
    {
      title: "Ingeniería & Gabinete",
      desc: "Ingenieros de proyecto, proyectistas AutoCAD/GIS y coordinadores de campo.",
      icon: "engineering"
    }
  ];

  return (
    <div className="w-full transition-colors duration-300 bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 min-h-screen">
      
      {/* 1. HERO BANNER DE BOLSA DE TRABAJO */}
      <section className="relative w-full h-[50vh] min-h-[420px] max-h-[580px] flex items-center justify-start overflow-hidden px-6 md:px-16 border-b border-slate-200 dark:border-slate-800">
        
        {/* IMAGEN DE FONDO */}
        <img 
          src="/bolsa-trabajo-hero.jpg" 
          alt="Bolsa de Trabajo Hybrid Telecomunicaciones" 
          className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-75 dark:opacity-45 transition-all duration-300"
        />
        
        {/* OVERLAY DE LECTURA */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-transparent z-10" />

        {/* CONTENIDO PRINCIPAL */}
        <div className="relative z-20 max-w-3xl space-y-4">
          <span className="text-xs md:text-sm font-semibold tracking-widest text-blue-400 uppercase bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20 backdrop-blur-sm inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Unidad de Talento & Capital Humano
          </span>
          
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Únete a <span className="text-blue-500">#TeamHybrid</span>
          </h1>
          
          <p className="text-slate-200 text-sm md:text-base max-w-xl leading-relaxed">
            Construimos el futuro de las telecomunicaciones en México. Buscamos profesionales apasionados por la excelencia técnica, la calidad y la seguridad en campo.
          </p>
        </div>

      </section>

      {/* 2. ANUNCIO PRINCIPAL: PRÓXIMAMENTE VACANTES */}
      <section className="py-16 px-6 md:px-16 max-w-7xl mx-auto space-y-16">
        
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 md:p-12 rounded-3xl shadow-xl space-y-6 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
          
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto text-white backdrop-blur-sm">
            <span className="material-symbols-outlined text-3xl">work_history</span>
          </div>

          <div className="space-y-3 relative z-10">
            <span className="text-xs font-bold tracking-widest uppercase bg-white/20 px-3 py-1 rounded-full text-blue-100">
              Convocatoria 2026
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">
              ¡Próximamente publicaremos nuestras nuevas vacantes!
            </h2>
            <p className="text-blue-100 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Estamos en proceso de apertura de nuevos frentes de obra e ingeniería. Registra tus datos con anticipación para integrar tu expediente a nuestra base de talento prioritario.
            </p>
          </div>
        </div>

        {/* 3. ÁREAS DONDE OPERAMOS PERMAMENEMENTE */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
              Perfiles que Evaluamos Constantemente
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm">
              Si cuentas con experiencia en alguno de estos rubros, nos interesa conocer tu perfil profesional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {areasTalento.map((area, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200 shadow-sm dark:bg-slate-900 dark:border-slate-800 dark:shadow-none p-6 rounded-2xl space-y-3 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 bg-blue-100 text-blue-600 dark:bg-blue-600/20 dark:text-blue-400 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">{area.icon}</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">{area.title}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. FORMULARIO DE REGISTRO PREVIO DE TALENTO */}
        <div className="max-w-3xl mx-auto bg-white border border-slate-200/80 shadow-md dark:bg-slate-900 dark:border-slate-800 dark:shadow-xl p-8 md:p-10 rounded-3xl space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
              Registro Anticipado de Aspirantes
            </h3>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
              Déjanos tus datos de contacto y área de especialización para comunicarnos contigo en cuanto se active la plaza.
            </p>
          </div>

          {submitted ? (
            <div className="bg-blue-50 border border-blue-200 text-slate-800 dark:bg-blue-600/20 dark:border-blue-500/40 dark:text-slate-100 p-6 rounded-2xl text-center space-y-3">
              <span className="material-symbols-outlined text-4xl text-blue-600 dark:text-blue-400">verified</span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">¡Expediente Registrado!</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Gracias por tu interés en formar parte de Hybrid Telecomunicaciones. Tu información ha quedado registrada en nuestro banco de talento.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Nombre Completo *</label>
                  <input 
                    type="text" 
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Ej. Juan Pérez López"
                    className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 text-slate-900 placeholder-slate-400 dark:bg-slate-950 dark:border-slate-800 dark:focus:border-blue-500 dark:text-white dark:placeholder-slate-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Correo Electrónico *</label>
                  <input 
                    type="email" 
                    name="correo"
                    required
                    value={formData.correo}
                    onChange={handleChange}
                    placeholder="juan.perez@email.com"
                    className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 text-slate-900 placeholder-slate-400 dark:bg-slate-950 dark:border-slate-800 dark:focus:border-blue-500 dark:text-white dark:placeholder-slate-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Teléfono / Celular *</label>
                  <input 
                    type="tel" 
                    name="telefono"
                    required
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="+52 55 9876 5432"
                    className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 text-slate-900 placeholder-slate-400 dark:bg-slate-950 dark:border-slate-800 dark:focus:border-blue-500 dark:text-white dark:placeholder-slate-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Área de Interés</label>
                  <select 
                    name="areaInteres"
                    value={formData.areaInteres}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 text-slate-900 dark:bg-slate-950 dark:border-slate-800 dark:focus:border-blue-500 dark:text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors cursor-pointer"
                  >
                    <option value="Planta Externa / Fibra Óptica">Planta Externa / Fibra Óptica</option>
                    <option value="Obra Civil / Maquinaria">Obra Civil / Maquinaria</option>
                    <option value="Microondas / Rigging">Microondas / Rigging / Alturas</option>
                    <option value="Ingeniería / Proyectos">Ingeniería / Proyectos / Gabinete</option>
                    <option value="Administración / Logística">Administración / Logística</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Resumen de Experiencia / Certificaciones</label>
                <textarea 
                  name="experiencia"
                  rows="3"
                  value={formData.experiencia}
                  onChange={handleChange}
                  placeholder="Menciona años de experiencia, certifaciones (DC-3, OTDR, Rigging) o proyectos donde has participado..."
                  className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 text-slate-900 placeholder-slate-400 dark:bg-slate-950 dark:border-slate-800 dark:focus:border-blue-500 dark:text-white dark:placeholder-slate-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-blue-600/30 text-sm active:scale-95 cursor-pointer"
              >
                Enviar Información de Perfil
              </button>
            </form>
          )}
        </div>

      </section>

    </div>
  );
}