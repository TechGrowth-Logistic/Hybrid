import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// Páginas (Componentes)
import Hero from './components/Hero';
import SomosHybrid from './components/SomosHybrid/SomosHybrid';
import FibraOptica from './components/FibraOptica/FibraOptica';
import ObraCivil from './components/ObraCivil/ObraCivil';
import Microondas from './components/Microondas/Microondas';
import Contacto from './components/Contacto/Contacto';
import Ingenieria from './components/Ingenieria/Ingenieria';
import BolsaDeTrabajo from './components/BolsaDeTrabajo/BolsaDeTrabajo';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <ScrollToTop />
      <Header />

      {/* Contenedor Principal (Flexible para empujar el Footer al fondo) */}
      <main className="flex-grow">
        <Routes>
          {/* Ruta Principal: Landing (Muestra el Video Hero y otros componentes de portada) */}
          <Route path="/" element={
            <>
              <Hero />
              {/* Aquí irían otros componentes del Home como <ServiciosLanding /> */}
            </>
          } />

          {/* Ruta: Somos Hybrid */}
          <Route path="/somos-hybrid" element={<SomosHybrid />} />
          <Route path="/ingenieria" element={<Ingenieria />} />
          <Route path="/fibra-optica" element={<FibraOptica />} />
          <Route path="/obra-civil" element={<ObraCivil />} />
          <Route path="/microondas" element={<Microondas />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/bolsa-de-trabajo" element={<BolsaDeTrabajo />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;