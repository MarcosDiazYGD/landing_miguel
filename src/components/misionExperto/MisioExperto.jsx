import imgGroup from '../../assets/img/group.svg';
import imgSena from '../../assets/img/Sena.png';
import imgJaveriana from '../../assets/img/Javeriana.png';
import imgAgustiniana from '../../assets/img/Agustiniana.png';
import imgMinTic from '../../assets/img/MinTic.png';
import imgCCPL from '../../assets/img/CCPL.png';

function MisionExperto() {
  return (
    <section className='MisionExperto'>
      <div className='texts'>
        <h2>
          MISIÓN <br /> EXPERTO
        </h2>

        <p>
          Liderar y contribuir en los diseños, desarrollos, innovaciones,
          implementaciones y mantenimientos de la lógica que conforman el domain
          knowledge y la funcionalidad de los software de la compañía, y
          garantizar la correcta Arquitectura, Rendimiento, Escalabilidad y
          Gestión de Recursos tecnológicos.
        </p>
      </div>

      <div className='banner'>
        <img src={imgGroup} />
      </div>

      <div className='logos'>
        <img src={imgSena} />
        <img src={imgJaveriana} />
        <img src={imgAgustiniana} />
        <img src={imgMinTic} />
        <img src={imgCCPL} />
      </div>
    </section>
  );
}

export default MisionExperto;
