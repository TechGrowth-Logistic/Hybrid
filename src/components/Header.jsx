import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full top-0 sticky z-50 bg-surface border-b border-primary/10 transition-all duration-300 ${isScrolled ? 'py-2 shadow-md' : 'py-4'}`}>
      <nav className="flex justify-between items-center max-w-container-max mx-auto px-6 md:px-margin-desktop">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            alt="Hybrid Telecomunicaciones Logo" 
            className="h-10 w-auto" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxs73NEduvvzHMicRN_nlVNHUS9byCfmVIlX9d_WVMbOYVvT1bMVbypf5MsQPujD1VIdXWpUwYpYrw0OTCyGxluAprmuspcH4_FMv0hrUWhMB2wKgw4oSnMoqLV708OIHI-OBrfpeE9o3Y_6SmyR7wLGhaWRct_UA4ax9kciZvbuK5okkSgMifrohz6_BTW-XiBaL_LrPPpaqn-Ldc6rAQjeOhZ6NY0uhMt8_Ge_oTvWpagA5SPx-SHQlNozF2iUzCP6AlfpchYMi6" 
          />
          <span className="font-headline-sm text-headline-sm font-bold text-primary hidden lg:block">
            Hybrid Telecomunicaciones
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a className="font-label-md text-label-md text-secondary border-b-2 border-secondary pb-1" href="#">Network Solutions</a>
          <a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors duration-200" href="#">Cloud Services</a>
          <a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors duration-200" href="#">Infrastructure</a>
          <a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors duration-200" href="#">Support</a>
          <a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors duration-200" href="#">About Us</a>
        </div>

        {/* CTA & Mobile Menu Icon */}
        <div className="flex items-center gap-4">
          <button className="bg-primary text-white px-6 py-2 rounded-sm font-label-md hover:bg-secondary active:scale-95 transition-all duration-200">
            Client Portal
          </button>
          <button className="md:hidden text-primary" aria-label="Menu">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
        
      </nav>
    </header>
  );
}