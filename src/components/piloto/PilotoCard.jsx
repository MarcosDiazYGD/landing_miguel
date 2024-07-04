import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function PilotoCard() {
  const infoCard = [
    {
      title: 'Desarrollo de Habilidades Técnicas',
      list: [
        'Profundización en Nuevas Tecnologías: Durante este periodo, adquirí un dominio más profundo de tecnologías emergentes, lo que me permitió implementar soluciones más robustas y eficientes. Este conocimiento se reflejó en la optimización de procesos y en la mejora del rendimiento de nuestras aplicaciones.',
        'Innovación en Soluciones: Introduje nuevas metodologías y herramientas que facilitaron el desarrollo ágil y la entrega continua, mejorando significativamente la eficiencia y la calidad de nuestro trabajo.',
      ],
    },

    {
      title: 'Liderazgo y Gestión de Equipos',
      list: [
        'Coordinación y Guía del Equipo: Asumí la responsabilidad de liderar y coordinar las actividades del equipo, asegurando que todos los miembros estuvieran alineados con los objetivos del proyecto y mantuvieran un alto nivel de productividad.',
        'Resolución de Conflictos y Motivación: Implementé estrategias efectivas para la resolución de conflictos, fomentando un ambiente de trabajo colaborativo y motivando al equipo a alcanzar sus metas. Utilicé técnicas de coaching y mentoring para apoyar el desarrollo profesional de los miembros del equipo.',
      ],
    },

    {
      title: 'Mejora de Habilidades Blandas',
      list: [
        'Comunicación Efectiva: Mejoré significativamente mi capacidad para comunicarme de manera clara y persuasiva, tanto en reuniones internas como en presentaciones a stakeholders externos. Esto incluyó la habilidad de explicar conceptos técnicos complejos en términos comprensibles para todos los involucrados.',
        'Gestión del Tiempo y Resolución de Problemas: Refiné mis habilidades en la gestión del tiempo, priorizando tareas de manera efectiva y resolviendo problemas de forma rápida y eficiente, lo que contribuyó a mantener los proyectos en marcha y dentro de los plazos establecidos.',
      ],
    },
    {
      title: 'Nuevos Compromisos',
      list: [
        'Gestión de Recursos y Toma de Decisiones Estratégicas: Desarrollé habilidades avanzadas en la gestión de recursos, optimizando el uso del tiempo, el presupuesto y el personal. Además, mejoré mi capacidad para tomar decisiones estratégicas informadas, basadas en análisis de datos y evaluación de riesgos.',
        'Resolución de Problemas Complejos en Tiempo Real: Adquirí experiencia en la identificación y resolución de problemas complejos en tiempo real, lo que permitió mantener la continuidad operativa y asegurar la calidad del producto final.',
      ],
    },
  ];

  const settings = {
    dots: true,
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: 2,
    speed: 1000,
    centerPadding: '50px',
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 2,
          dots: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          dots: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          dots: true,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div className='slider-container'>
      <Slider {...settings}>
        {infoCard.map((item, i) => (
          <div key={i} className='piloto_card'>
            <h4>{item.title}</h4>

            <ul>
              {item.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default PilotoCard;
