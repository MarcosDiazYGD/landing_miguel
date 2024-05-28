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

                <div className='person-data'>
                  <p>Jhonattan Gomez</p>
                  <img
                    src='https://media.canva.com/v2/image-resize/format:PNG/height:158/quality:100/uri:s3%3A%2F%2Fmedia-private.canva.com%2F7bhN8%2FMAGAFd7bhN8%2F1%2Fp.png/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAAGIhXwvzSMGQ9I-8Zxkw3PQxfeC22W1BjxJ9aiwvck0l&exp=1716919120&osig=AAAAAAAAAAAAAAAAAAAAAD6hw_kkqpVpflst_Ex2cfCfCkKTOIkUPjqvvN-jL2w4&signer=media-rpc&x-canva-quality=thumbnail&x-canva-subsampling=T'
                    alt=''
                  />
                </div>
              </div>
              <p>{item.parragraph}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
