export const Propuestas = () => {
  return (
    <section className='propuestas'>
      <div className='propuestas-titulo'>
        <h2>PROPUESTAS Y DECISIONES ESTRATÉGICAS</h2>
        <img src='https://video-public.canva.com/VAFKHIeV6E8/v/07ba2e6363.gif' />
      </div>

      <div className='container-propuestas'>
        <div className='propuestas-card'>
          <p>
            Presenté una propuesta estratégica para migrar nuestros backups de
            AWS S3 a Google Drive, con el objetivo de reducir costos operativos
            sin comprometer la seguridad y la accesibilidad de nuestros datos. .
            Después de obtener la aprobación para proceder con la migración,
            lideré el proceso de implementación, asegurándome de que se llevara
            a cabo de manera eficiente y sin interrupciones en nuestras
            operaciones diarias. <br /> <span>– Migración AWS a Drive</span>
          </p>
        </div>
        <div className='propuestas-card'>
          <p>
            Optimización del Soporte y Mantenimiento de Infraestructura,
            trabajando directamente con Jhonattan al que previamente había
            instruido y seguido de cerca en sus tareas recurrentes. Juntos,
            creamos un documento detallado que establecía procedimientos
            específicos para la gestión efectiva de nuestra infraestructura,
            incluyendo DigitalOcean y otros proveedores de servicios en la nube.{' '}
            <br />
            <span>- Soporte y mantenimiento de infraestructura</span>
          </p>
        </div>
        <div className='propuestas-card'>
          <p>
            Con mi conocimiento técnico y experiencia en eficiencia de código,
            he logrado hacer más eficientes los modelos estadísticos y de
            transformación de texto utilizados por el equipo. Esto no solo
            mejora la velocidad del análisis cuantitativo, sino que también
            permite un mejor aprovechamiento de los recursos. Además, como
            proyecto sugerido por mí, lideraré la implementación del modelo LLM
            Llama-2 Meta, con el objetivo de contribuir significativamente a la
            nueva metodología. <br />{' '}
            <span>- Nueva Metodología y Llama-2 Meta</span>
          </p>
        </div>
      </div>
    </section>
  );
};
