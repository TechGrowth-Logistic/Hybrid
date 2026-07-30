import React, { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    empresa: '',
    servicio: 'Obra Civil',
    mensaje: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes conectar EmailJS, Formspree o tu API backend
    console.log('Datos enviados:', formData);
    setSubmitted(true);
  };

  return (
    <div className="w-full transition-colors duration-300 bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 min-h-screen">
      
      {/* HERO BANNER DE CONTACTO */}
      <section className="relative w-full h-[45vh] min-h-[400px] max-h-[550px] flex items-center justify-start overflow-hidden px-6 md:px-16 border-b border-slate-200 dark:border-slate-800">
        <img 
          src="/contacto-hero.jpg" 
          alt="Contacto Hybrid Telecomunicaciones" 
          className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-75 dark:opacity-40 transition-all duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-transparent z-10" />

        <div className="relative z-20 max-w-3xl space-y-4">
          <span className="text-xs md:text-sm font-semibold tracking-widest text-blue-400 uppercase bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20 backdrop-blur-sm">
            Atención Comercial & Ingeniería
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ponte en <span className="text-blue-500">Contacto</span>
          </h1>
          <p className="text-slate-200 text-sm md:text-base max-w-xl leading-relaxed">
            Estamos listos para atender tus dudas, cotizaciones de obra civil, despliegue de fibra óptica o servicios de ingeniería en campo.
          </p>
        </div>
      </section>

      {/* FORMULARIO Y SECCIÓN DE INFORMACIÓN */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* COLUMNA IZQUIERDA: FORMULARIO (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 shadow-md dark:bg-slate-900 dark:border-slate-800 dark:shadow-xl p-8 md:p-10 rounded-3xl space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Solicita una Cotización o Asesoría Técnica
              </h2>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
                Completa tus datos y un especialista comercial se comunicará contigo a la brevedad.
              </p>
            </div>

            {submitted ? (
              <div className="bg-blue-50 border border-blue-200 text-slate-800 dark:bg-blue-600/20 dark:border-blue-500/40 dark:text-slate-100 p-6 rounded-2xl text-center space-y-3">
                <span className="material-symbols-outlined text-4xl text-blue-600 dark:text-blue-400">check_circle</span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">¡Mensaje Enviado con Éxito!</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Hemos recibido tu solicitud. Nuestro equipo revisará los detalles y te contactaremos en breve.
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
                      placeholder="Ej. Ing. Carlos Mendoza"
                      className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 text-slate-900 placeholder-slate-400 dark:bg-slate-950 dark:border-slate-800 dark:focus:border-blue-500 dark:text-white dark:placeholder-slate-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Correo Corporativo *</label>
                    <input 
                      type="email" 
                      name="correo"
                      required
                      value={formData.correo}
                      onChange={handleChange}
                      placeholder="carlos@empresa.com"
                      className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 text-slate-900 placeholder-slate-400 dark:bg-slate-950 dark:border-slate-800 dark:focus:border-blue-500 dark:text-white dark:placeholder-slate-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Teléfono / WhatsApp *</label>
                    <input 
                      type="tel" 
                      name="telefono"
                      required
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+52 55 1234 5678"
                      className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 text-slate-900 placeholder-slate-400 dark:bg-slate-950 dark:border-slate-800 dark:focus:border-blue-500 dark:text-white dark:placeholder-slate-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Empresa / Razón Social</label>
                    <input 
                      type="text" 
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      placeholder="Ej. Totalplay / Subcontratista"
                      className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 text-slate-900 placeholder-slate-400 dark:bg-slate-950 dark:border-slate-800 dark:focus:border-blue-500 dark:text-white dark:placeholder-slate-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Servicio de Interés</label>
                  <select 
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 text-slate-900 dark:bg-slate-950 dark:border-slate-800 dark:focus:border-blue-500 dark:text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors cursor-pointer"
                  >
                    <option value="Obra Civil">Obra Civil y Canalizaciones</option>
                    <option value="Fibra Optica">Tendido y Fusión de Fibra Óptica</option>
                    <option value="Microondas">Mantenimiento e Instalación de Microondas</option>
                    <option value="Levantamiento">Levantamiento en Campo / Survey</option>
                    <option value="Otro">Otro Proyecto / Consulta General</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Detalles del Proyecto / Alcance</label>
                  <textarea 
                    name="mensaje"
                    rows="4"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Describe brevemente la ubicación, tramo estimado (Km / Nodos) o requerimientos del sitio..."
                    className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 text-slate-900 placeholder-slate-400 dark:bg-slate-950 dark:border-slate-800 dark:focus:border-blue-500 dark:text-white dark:placeholder-slate-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-blue-600/30 text-sm active:scale-95 cursor-pointer"
                >
                  Enviar Solicitud
                </button>
              </form>
            )}
          </div>

          {/* COLUMNA DERECHA: INFORMACIÓN CORPORATIVA Y MAPA (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200/80 shadow-md dark:bg-slate-900 dark:border-slate-800 dark:shadow-none p-8 rounded-3xl space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Oficinas Centrales</h3>
              
              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-blue-600 dark:text-blue-500 text-2xl mt-0.5">location_on</span>
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white block mb-0.5">Dirección:</span>
                    <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                      Islas Galápagos 28, Pueblo de San Juan de Aragón, Gustavo A. Madero, CP 07950, Ciudad de México, CDMX.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-blue-600 dark:text-blue-500 text-2xl mt-0.5">schedule</span>
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white block mb-0.5">Horarios de Atención:</span>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">Abierto de 9:00 AM a 6:00 PM (Lunes a Viernes)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-blue-600 dark:text-blue-500 text-2xl mt-0.5">call</span>
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white block mb-0.5">Teléfonos:</span>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">+52 (55) 1234 5678 / Ventas e Ingeniería</p>
                  </div>
                </div>
              </div>
            </div>

            {/* TARJETA DE RED SOCIAL FACEBOOK */}
            <div className="bg-gradient-to-br from-blue-50 to-slate-100 border border-blue-200 dark:from-blue-950/60 dark:to-slate-900 dark:border-blue-500/30 p-6 rounded-3xl flex items-center justify-between shadow-sm dark:shadow-none">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Redes Oficiales</span>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">Síguenos en Facebook</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">Noticias y fotos de nuestros frentes de obra.</p>
              </div>
              <a 
                href="https://www.facebook.com/profile.php?id=61574125779623" 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl flex items-center justify-center transition-all shadow-md shadow-blue-600/30 active:scale-90"
                aria-label="Facebook Oficial"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}