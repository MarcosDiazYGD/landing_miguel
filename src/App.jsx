import './App.css';
import About from './components/about/About';
import ConfirmSection from './components/ConfirmSection';
import { Funciones } from './components/funciones/Funciones';
import Home from './components/Home';
import { Indicadores } from './components/indicadores/Indicadores';
import { KPI } from "./components/KPI'S/KPI";
import { Liderazgo } from './components/liderazgo/Liderazgo';
import Logros from './components/logros/Logros';
import Navbar from './components/Navbar';
import Piloto from './components/piloto/Piloto';
import { Propuestas } from './components/propuestas/Propuestas';
import Tecnologias from './components/tecnologias/Tecnologias';
import { Testimonios } from './components/testimonios/Testimonios';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <ConfirmSection />
      <Piloto />
      <Logros />
      <Propuestas />
      <Liderazgo />
      <Testimonios />
      <KPI />
      <Indicadores />
      <Tecnologias />
      <Funciones />
    </>
  );
}

export default App;
