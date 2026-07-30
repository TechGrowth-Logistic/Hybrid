import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Páginas (Componentes)
import Hero from './components/Hero'; 
import SomosHybrid from './components/SomosHybrid/SomosHybrid'; 
import FibraOptica from './components/FibraOptica/FibraOptica';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
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
          
          {/* Puedes agregar las demás rutas a medida que las crees */}
          <Route path="/fibra-optica" element={<FibraOptica />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;