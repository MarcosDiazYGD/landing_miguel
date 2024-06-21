import IndicatorCard from './IndicatorCard';

export const Indicadores = () => {
  return (
    <section className='indicadores'>
      <h2>Indicadores como lider</h2>

      <div className='container'>
        <div>
          <IndicatorCard />
        </div>

        <div>
          <IndicatorCard />
          <IndicatorCard />
        </div>
        <div>
          <IndicatorCard />
          <IndicatorCard />
          <IndicatorCard />
        </div>
      </div>
    </section>
  );
};
