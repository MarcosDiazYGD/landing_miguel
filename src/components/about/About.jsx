import img from '../../assets/img/about.svg';
import FlexElement from './FlexElement';
function About() {
  return (
    <section className='About'>
      <h2>¿Quién soy yo?</h2>

      <FlexElement
        img={img}
        string={
          'Hace un año, me uní a la empresa como Desarrollador Back-end Junior. Desde mi incorporación, no solo me he enfocado en cumplir mis responsabilidades, sino que también he buscado activamente oportunidades para enfrentar desafíos mayores y contribuir significativamente tanto al equipo como a la empresa en su conjunto.'
        }
      />

      <FlexElement
        img={img}
        string={
          'Tres meses después de mi llegada, presenté mi solicitud para ascender a la posición de Desarrollador Back-end Senior. En esta nueva función, me comprometí a liderar múltiples proyectos back-end, asegurar entregas exitosas y optimizar nuestras estructuras de código. Además, prometí adoptar prácticas ágiles para mejorar la eficiencia del equipo y asumir la responsabilidad de los despliegues futuros.'
        }
        reverse={true}
      />
    </section>
  );
}

export default About;
