import imgGroup from '../../assets/img/group.svg';
import imgMeta from '../../assets/img/tecnologias/meta.png';

function MisionExperto() {
  return (
    <section className='MisionExperto'>
      <div className='texts'>
        <h2>MISIÓN DE EXPERTO</h2>

        <p>
          Liderar y contribuir en los diseños, desarrollos, innovaciones,
          implementaciones y mantenimientos de la lógica que conforman el domain
          knowledge y la funcionalidad de los software de la compañía, y
          garantizar la correcta Arquitectura, Rendimiento, Escalabilidad y
          Gestión de Recursos tecnológicos
        </p>
      </div>

      <div className='banner'>
        <img src={imgGroup} />
      </div>

      <div className='logos'>
<img src={imgMeta}  />
<img src={imgMeta}  />
<img src={imgMeta}  />
<img src={imgMeta}  />
      </div>
    </section>
  );
}

export default MisionExperto;
