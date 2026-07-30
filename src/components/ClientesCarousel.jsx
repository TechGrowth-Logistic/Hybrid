import React, { useState, useEffect } from 'react';

const CLIENTES = [
  { name: 'Huawei', logo: '/clients/huawei.png' },
  { name: 'FiberHome', logo: '/clients/fiberhome.png' },
  { name: 'Totalplay', logo: '/clients/totalplay.png' },
  { name: 'Megacable', logo: '/clients/megacable.png' },
  { name: 'NEC', logo: '/clients/nec.png' },
  { name: 'Telmex', logo: '/clients/telmex.png' },
  { name: 'Telcel', logo: '/clients/telcel.png' },
  { name: 'CAPUFE', logo: '/clients/capufe.png' },
];

export default function ClientesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambio automático cada 3.5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % CLIENTES.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  // Función para obtener los 3 logos visibles según el índice actual
  const getVisibleClients = () => {
    const total = CLIENTES.length;
    return [
      CLIENTES[currentIndex % total],
      CLIENTES[(currentIndex + 1) % total],
      CLIENTES[(currentIndex + 2) % total],
    ];
  };

  return (
    <section className="w-full transition-colors duration-300 bg-slate-100 border-y border-slate-200 dark:bg-slate-900 dark:border-slate-800 py-16 px-6 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* TÍTULO DE SECCIÓN */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Nuestros clientes
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm">
            Empresas y operadores que confían en nuestra infraestructura
          </p>
        </div>

        {/* CARRUSEL DE LOGOS (Muestra 1 en móvil, 3 en desktop) */}
        <div className="flex justify-center items-center gap-8 md:gap-16 min-h-[100px] transition-all duration-500 ease-in-out">
          
          {/* Vista Móvil: Solo 1 logo activo */}
          <div className="block md:hidden text-center p-4">
            <img 
              src={CLIENTES[currentIndex].logo} 
              alt={CLIENTES[currentIndex].name}
              className="h-14 w-auto mx-auto object-contain grayscale dark:brightness-0 dark:invert opacity-80 hover:opacity-100 hover:grayscale-0 transition-all" 
            />
          </div>

          {/* Vista Desktop: 3 logos a la vez */}
          <div className="hidden md:flex justify-between items-center w-full max-w-4xl gap-8">
            {getVisibleClients().map((cliente, idx) => (
              <div 
                key={`${cliente.name}-${idx}`} 
                className="flex-1 flex justify-center items-center p-2 bg-white border border-slate-200/80 rounded-2xl h-28 hover:border-blue-500/40 hover:shadow-md dark:bg-slate-800/40 dark:border-slate-800/80 dark:hover:bg-slate-800/80 transition-all duration-300 group overflow-hidden"
              >
                <img 
                  src={cliente.logo} 
                  alt={cliente.name} 
                  className="w-full h-full object-contain grayscale group-hover:grayscale-0 dark:brightness-0 dark:invert opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 p-2"
                />
              </div>
            ))}
          </div>

        </div>

        {/* INDICADORES / PUNTOS (PAGINACIÓN) */}
        <div className="flex justify-center items-center gap-2 pt-4">
          {CLIENTES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir al cliente ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex 
                  ? 'w-8 bg-blue-600 dark:bg-blue-500' 
                  : 'w-2.5 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}