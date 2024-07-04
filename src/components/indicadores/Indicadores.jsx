import IndicatorCard from './IndicatorCard';

export const Indicadores = () => {
  return (
    <section className='indicadores'>
      <h2>Indicadores como lider</h2>

      <div className='container'>
        <div>
          <IndicatorCard
            puntaje={'3.0'}
            text={'CUMPLIMIENTO CRONOGRAMA DE DESARROLLO'}
          />
        </div>

        <div>
          <IndicatorCard puntaje={'2.8'} text={'NPS'} />
          <IndicatorCard puntaje={'2.8'} text={'FEEDBACK'} />
        </div>
        <div>
          <IndicatorCard
            puntaje={'2.8'}
            text={'SOPORTES PROMEDIO DE SOFTWARES PROPIOS'}
          />
          <IndicatorCard puntaje={'3.0'} text={'CLIMA'} />
          <IndicatorCard puntaje={'2.8'} text={'ROTACIÓN'} />
        </div>
      </div>
    </section>
  );
};
