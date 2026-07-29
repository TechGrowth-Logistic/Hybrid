export default function Footer() {
  return (
    <footer className="w-full bg-primary text-surface-container-lowest flex justify-center">
      <div className="max-w-container-max px-6 md:px-margin-desktop pt-stack-lg pb-10">
        
        {/* Top Section - Grid Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter mb-16">
          
          {/* Column 1: Identity */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img 
                alt="Logo White" 
                className="h-8 w-auto invert brightness-0" 
                src="\Logo-Hybrid-Telecomunicaciones.png" 
                />              
            </div>
            <p className="font-body-md text-on-primary-container leading-relaxed mb-6">
              Líderes en diseño e implementación de infraestructura para telecomunicaciones. Con 10 años en el mercado, somos la opción integral para proyectos de expansión.
            </p>
            <div className="flex gap-4">
              <a className="text-on-primary-container hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
              <a className="text-on-primary-container hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
            </div>
          </div>          

          {/* Column 2: Services */}
          <div className="flex flex-col items-center">
            <h4 className="font-label-md text-white mb-6 tracking-wider">SERVICIOS</h4>
            <ul className="space-y-4">
              <li><a className="text-on-primary-container hover:text-secondary-fixed transition-colors" href="#">Fibra Óptica</a></li>
              <li><a className="text-on-primary-container hover:text-secondary-fixed transition-colors" href="#">Obra Civil</a></li>
              <li><a className="text-on-primary-container hover:text-secondary-fixed transition-colors" href="#">Ingeniería</a></li>
              <li><a className="text-on-primary-container hover:text-secondary-fixed transition-colors" href="#">Microondas</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-label-md text-white mb-6 tracking-wider">CONTACTO</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary-fixed text-[20px]">location_on</span>
                <span className="text-on-primary-container">Ciudad de México, CP 06700, MX</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary-fixed text-[20px]">call</span>
                <span className="text-on-primary-container">+52 (55) 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary-fixed text-[20px]">mail</span>
                <span className="text-on-primary-container">contacto@hybridtelecom.mx</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-body-md text-on-primary-container text-[14px]">
            © 2026 Hybrid Telecomunicaciones. Todos los derechos reservados.
          </p>
          <div className="flex gap-8">
            <a className="font-body-md text-on-primary-container text-[14px] hover:text-white transition-colors" href="#">Politicas de Privacidad</a>
            <a className="font-body-md text-on-primary-container text-[14px] hover:text-white transition-colors" href="#">Términos del servicio</a>
            <a className="font-body-md text-on-primary-container text-[14px] hover:text-white transition-colors" href="#">Relaciones con los operadores</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}