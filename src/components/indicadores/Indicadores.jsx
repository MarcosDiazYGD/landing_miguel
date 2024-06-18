export const Indicadores = () => {
  return (
    <section className='indicadores'>
      <h2 style={{ color: 'black' }}>Indicadores como lider</h2>
      <div className='cards_indicadores'>
        <div className='row'>
          <div className='card_indicador'>
            <span>3.0</span>
            <p>CUMPLIMIENTO CRONOGRAMA DE DESARROLLO</p>
          </div>
        </div>
        <div className='row'>
          <div className='card_indicador'>
            <span>2.8</span>
            <p>NPS</p>
          </div>
          <div className='card_indicador'>
            <span>2.8</span>
            <p>FEEDBACK</p>
          </div>
        </div>
        <div className='row'>
          <div className='card_indicador'>
            <span>2.8</span>
            <p>SOPORTES PROMEDIO DE SOFTWARES PROPIOS</p>
          </div>
          <div className='card_indicador'>
            <span>3.0</span>
            <p>CLIMA</p>
          </div>
          <div className='card_indicador'>
            <span>3.0</span>
            <p>ROTACIÓN</p>
          </div>
        </div>
      </div>
    </section>
  );
};
