import Slider from 'react-slick';

const infoCard = [
  {
    title: 'Consultora de monitoreo y stakeholders',
    parragraph:
      'Su conocimiento, proactividad y comunicación clara fueron fundamentales para el éxito del proyecto de scraper. Además, su capacidad para resolver problemas de manera creativa nos permitió superar obstáculos y agregar detalles de calidad que no habíamos contemplado. Gracias al desarrollo que realizó Migue, hemos logrado una reducción del 30% en el tiempo de ingestiones a Clarity, permitiendo así una mejora significativa en la eficiencia operativa del área, contribuyendo directamente al cumplimiento del objetivo estratégico de la empresa y del área para el primer trimestre: Cumplimos con la optimización de procesos presupuestada',
  },
  {
    title: 'Liderazgo y Gestión de Equipos',
    parragraph:
      'Su conocimiento, proactividad y comunicación clara fueron fundamentales para el éxito del proyecto de scraper. Además, su capacidad para resolver problemas de manera creativa nos permitió superar obstáculos y agregar detalles de calidad que no habíamos contemplado. Gracias al desarrollo que realizó Migue, hemos logrado una reducción del 30% en el tiempo de ingestiones a Clarity, permitiendo así una mejora significativa en la eficiencia operativa del área, contribuyendo directamente al cumplimiento del objetivo estratégico de la empresa y del área para el primer trimestre: Cumplimos con la optimización de procesos presupuestada',
  },
];

export const Testimonios = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesPerRow: 1,
    variableWidth: true,
    centerMode: true,
  };
  return (
    <section className='testimonios'>
      <h2>Testimonios de consultores y expertos</h2>

      <div className='slider-container-testimonios'>
        <Slider {...settings}>
          {infoCard.map((item, i) => (
            <div key={i} className='testimonio-card'>
              <div className='person'>
                <h4>{item.title}</h4>
                <img src='' alt='' />
              </div>
              <p>{item.parragraph}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
