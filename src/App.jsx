import './App.css';
import About from './components/about/About';
import ConfirmSection from './components/ConfirmSection';
import Home from './components/Home';
import { Liderazgo } from './components/liderazgo/Liderazgo';
import Logros from './components/logros/Logros';
import Piloto from './components/piloto/Piloto';
import { Propuestas } from './components/propuestas/Propuestas';
import { Testimonios } from './components/testimonios/Testimonios';

function App() {
  return (
    <>
      <Home />
      <About />
      <ConfirmSection />
      <Piloto />
      <Logros />
      <Propuestas />
      <Liderazgo />
      <Testimonios />
    </>
  );
}

export default App;
