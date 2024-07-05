import { PlanCarrera } from './components/PlanCarrera/PlanCarrera';
import { Testimonios } from './components/testimonios/Testimonios';
import { Indicadores } from './components/indicadores/Indicadores';
import { Funciones } from './components/funciones/Funciones';
import { Liderazgo } from './components/liderazgo/Liderazgo';
import { Propuestas } from './components/propuestas/Propuestas';
import { KPI } from "./components/KPI'S/KPI";
import Tecnologias from './components/tecnologias/Tecnologias';
import Logros from './components/logros/Logros';
import Navbar from './components/Navbar';
import Piloto from './components/piloto/Piloto';
import About from './components/about/About';
import Home from './components/Home';
import './App.css';
import MisionExperto from './components/misionExperto/MisioExperto.jsx';
import FadeInSection from './hooks/fadeInsection.jsx';
import PlanMejoramiento from './components/planMejoramiento/PlanMejoramiento.jsx';
import { ProyectoExperto } from './components/ProyectoExperto/ProyectoExperto.jsx';
import Gracias from './components/gracias/Gracias.jsx';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [showMobileWarning, setShowMobileWarning] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 800) setShowMobileWarning(true);
  }, []);

  return (
    <>
      {!showMobileWarning ? (
        <>
          <Navbar />
          <FadeInSection>
            <Home />
          </FadeInSection>
          <FadeInSection>
            <About />
          </FadeInSection>
          <FadeInSection></FadeInSection>
          <FadeInSection>
            <Piloto />
          </FadeInSection>
          <FadeInSection>
            <Logros />
          </FadeInSection>
          <FadeInSection>
            <Propuestas />
          </FadeInSection>
          <FadeInSection>
            <Liderazgo />
          </FadeInSection>
          <FadeInSection>
            <Testimonios />
          </FadeInSection>
          <div className='gradient_kpi_indicadores'>
            <FadeInSection>
              <KPI />
            </FadeInSection>
            <FadeInSection>
              <Indicadores />
            </FadeInSection>
          </div>
          <Tecnologias />
          <PlanCarrera />
          <FadeInSection>
            <Funciones />
          </FadeInSection>
          <FadeInSection>
            <MisionExperto />
          </FadeInSection>
          <FadeInSection>
            <PlanMejoramiento />
          </FadeInSection>
          <FadeInSection>
            <ProyectoExperto />
          </FadeInSection>
          <FadeInSection>
            <Gracias />
          </FadeInSection>
        </>
      ) : (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            textAlign: 'center',
            fontSize: '30px',
          }}
        >
          <p>No se puede acceder al sitio web desde telefono celular.</p>
        </div>
      )}
    </>
  );
}

export default App;
