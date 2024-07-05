export const Propuestas = () => {
  return (
    <section className='propuestas'>
      <div className='propuestas-titulo'>
        <h2>Liderazgos</h2>
        <img src='https://video-public.canva.com/VAFKHIeV6E8/v/07ba2e6363.gif' />
      </div>

      <div className='container-propuestas'>
        <div className='propuestas-card'>
          <p>
            Desde el inicio de mi participación en Verne 3.0, asumí el rol de
            desarrollador back-end. Con la llegada de Rafael, las
            responsabilidades fueron redistribuidas y, a partir de diciembre de
            2023, tomé el liderazgo del proyecto. Bajo mi dirección, el
            cronograma se cumplió con éxito, demostrando mi capacidad para
            gestionar tanto a clientes internos como a mi equipo de trabajo.
            Durante este tiempo, adquirí valiosa experiencia en la coordinación
            de tareas, resolución de problemas y aseguramiento de la calidad del
            producto final.
          </p>
          <span>Verne 3.0</span>
        </div>
        <div className='propuestas-card'>
          <p>
            En colaboración con el área de monitoreo, planifiqué y dirigí el
            desarrollo e implementación de una plataforma que mejoró
            significativamente la ingestión de artículos digitales. El objetivo
            principal fue optimizar los tiempos de ingestión del equipo, y el
            cronograma se cumplió con éxito. Como resultado, logramos reducir
            los tiempos de carga en un 30%. Además, estamos planificando una
            segunda fase del proyecto para el tercer trimestre (Q3), con el
            objetivo de potenciar y robustecer aún más la solución para el área
            de monitoreo. Esta próxima fase se enfocará en la incorporación de
            nuevas funcionalidades y mejoras que garantizarán una plataforma más
            eficiente y escalable.
          </p>
          <span>Scraper</span>
        </div>
        <div className='propuestas-card'>
          <p>
            Con mi conocimiento técnico y experiencia en eficiencia de código,
            he logrado hacer más eficientes los modelos estadísticos y de
            transformación de texto utilizados por el equipo. Esto no solo
            mejora la velocidad del análisis cuantitativo, sino que también
            permite un mejor aprovechamiento de los recursos. Además, como
            proyecto sugerido por mí, lideraré la implementación del modelo LLM
            Llama-3 Meta, con el objetivo de contribuir significativamente a la
            nueva metodología.
          </p>
          <span>Nueva Metodología y Llama-3 Meta</span>
        </div>
      </div>
    </section>
  );
};
