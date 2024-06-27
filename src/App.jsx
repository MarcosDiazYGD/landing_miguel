import { Testimonios } from './components/testimonios/Testimonios';
import { Indicadores } from './components/indicadores/Indicadores';
import { Funciones } from './components/funciones/Funciones';
import { Liderazgo } from './components/liderazgo/Liderazgo';
import { Propuestas } from './components/propuestas/Propuestas';
import { KPI } from "./components/KPI'S/KPI";
import Tecnologias from './components/tecnologias/Tecnologias';
import ConfirmSection from './components/ConfirmSection';
import Logros from './components/logros/Logros';
import Navbar from './components/Navbar';
import Piloto from './components/piloto/Piloto';
import About from './components/about/About';
import Home from './components/Home';
import './App.css';
import { PlanCarrera } from './components/PlanCarrera/PlanCarrera';
import MisionExperto from './components/misionExperto/MisioExperto.jsx';
import FadeInSection from './hooks/fadeInsection.jsx';

function App() {
  return (
    <>
      <Navbar />
      <FadeInSection>

      <Home />
</FadeInSection>
      <FadeInSection>
        <About />
      </FadeInSection>
      <FadeInSection>
        <ConfirmSection />
      </FadeInSection>
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
      <FadeInSection>
        <KPI />
      </FadeInSection>
      <FadeInSection>
        <Indicadores />
      </FadeInSection>
      <Tecnologias />
      <PlanCarrera />
      <FadeInSection>
        <Funciones />
      </FadeInSection>
      <FadeInSection>
        <MisionExperto />
      </FadeInSection>
    </>
  );
}

export default App;
