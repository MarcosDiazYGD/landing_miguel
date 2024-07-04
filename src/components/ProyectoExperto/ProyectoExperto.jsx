import Slider from 'react-slick';

export const ProyectoExperto = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='proyecto_experto'>
      <h2>
        PROYECTO DE <br /> EXPERTO
      </h2>
      <div className='container_slider_proyecto'>
        <Slider {...settings}>
          <div>
            <h2>Reducción de costos operativos mensuales</h2>
            <p>
              Presenté una propuesta estratégica para migrar nuestros backups de
              AWS S3 a Google Drive, con el objetivo de reducir costos
              operativos sin comprometer la seguridad y la accesibilidad de
              nuestros datos.
            </p>

            <span>Costo fijo mensual ahorrado 357 USD</span>

            <p>
              Evalué la capacidad de nuestra infraestructura en la nube para
              aprovecharla al máximo y presidir de recursos poco aprovechados,
              migrándolos a servidores existentes para ser más rentables como
              área
            </p>

            <span>Costo fijo mensual ahorrado 240 USD</span>

            <p>
              Después de obtener la aprobación para proceder con la migración,
              lideré el proceso de implementación, asegurándome de que se
              llevara a cabo de manera eficiente y sin interrupciones en
              nuestras operaciones diarias.{' '}
            </p>

            <span>Total ahorrado abril - junio 1.092,37 USD </span>
          </div>
          <div>
            <h2>Soporte y mantenimiento de infraestructura</h2>
            <p>
              Actualmente, estoy trabajando directamente con Jhonattan, a quien
              previamente he instruido y seguido de cerca en sus tareas
              recurrentes. Juntos, hemos creado un documento detallado que
              establece procedimientos específicos para la gestión efectiva de
              nuestra infraestructura, incluyendo DigitalOcean y otros
              proveedores de servicios en la nube. Planeo también documentar
              toda la estructura tecnológica para garantizar la máxima
              eficiencia y facilitar la incorporación de nuevo personal
              tecnológico a cualquier proyecto. Esta documentación exhaustiva
              permitirá una gestión más eficiente y una rápida adaptación a las
              tecnologías y procedimientos establecidos, asegurando la
              continuidad operativa y la calidad del soporte técnico.
            </p>
          </div>
          <div>
            <h2>Nueva Metodología y Llama-3 Meta</h2>
            <p>
              Utilizando mi conocimiento técnico y experiencia en eficiencia de
              código, optimizaré los modelos estadísticos y de transformación de
              texto utilizados por el equipo. Estas mejoras no solo aumentarán
              la velocidad del análisis cuantitativo, sino que también optimizan
              el uso de los recursos disponibles. Como parte de una iniciativa
              propuesta, estoy liderando la futura implementación del modelo LLM
              Llama-3 de Meta. Este proyecto tiene como objetivo fortalecer
              nuestra nueva metodología, proporcionando una solución robusta
              desde una plataforma integral.{' '}
            </p>
          </div>
          <div>
            <h2>
              Fomento de Estándares de Tecnología y Metodologías de Equipos de
              Alto Rendimiento
            </h2>
            <p>
              En mi rol de experto, quiero impulsar la adopción de estándares de
              tecnología y metodologías que sean coherentes y efectivas para los
              equipos tecnológicos de alto rendimiento. La implementación de
              estos estándares tiene múltiples propósitos: Afinar los
              requerimientos de talento: Al establecer y seguir estándares
              claros, podremos ser más precisos y eficientes en la contratación,
              retención y formación talento. Los nuevos miembros del equipo
              podrán integrarse más rápidamente y con menos dificultades, ya que
              se beneficiarán de un entorno de trabajo con procedimientos y
              expectativas bien definidos. Cohesión y Eficiencia del Equipo: La
              estandarización de tecnologías y metodologías facilita la
              colaboración y la cohesión dentro del equipo. Los miembros del
              equipo podrán trabajar de manera más sincronizada, compartiendo un
              entendimiento común de las herramientas y procesos, lo que resulta
              en una mayor productividad y eficacia. Adaptación a Nuevas
              Tecnologías: Con estándares bien definidos, estaremos mejor
              preparados para evaluar e integrar nuevas tecnologías de manera
              efectiva, asegurando que siempre utilicemos las herramientas más
              adecuadas para nuestras necesidades y objetivos.
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
};
