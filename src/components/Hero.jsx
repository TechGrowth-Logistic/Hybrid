export default function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/40 z-10"></div>
        <img 
          alt="Hero Background" 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBslfWQguYhykpa3F0uEsh63_Z5dTaNdhQBznPGhs2sRkhqKThd_mCyzlOWQg-P4qjeIkOqqKf7hl3FOFditW5A23MBPxEp51zKaDXrLUeIQt6wCzXmE4yfJDuMXSNT-FcUoqDzZ9Ix8rK6ANZa338Muis0OUKcgxv5ODqap7OCGJPdcGKN_x7gNChIs-vY3hzYRRmW1ykI4U8FZ9a_HsrQzgpnnqF9_G_jTws5vnyzn5xd3LDeD5BzcBgQu0HkpUeor2JHuZtVKQMo" 
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-container-max mx-auto px-6 md:px-margin-desktop w-full">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 bg-secondary text-white text-[12px] font-label-md tracking-widest mb-6 rounded-sm">
            PRECISION IN CONNECTIVITY
          </span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-8">
            Infraestructura de Redes con <span className="text-secondary-fixed">Excelencia Técnica</span>
          </h1>
          <p className="font-body-lg text-body-lg text-white/90 mb-10 max-w-xl">
            Operamos servicios de telecomunicaciones con un alto nivel de servicio, garantizando soluciones robustas de fibra óptica y obra civil para el futuro digital.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-primary px-10 py-4 rounded-sm font-bold hover:bg-secondary hover:text-white transition-colors">
              SABER MÁS
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-sm font-bold hover:bg-white/10 transition-colors">
              CONTACTAR
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}