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
