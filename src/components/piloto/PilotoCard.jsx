import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function PilotoCard() {
  const infoCard = [
    {
      title: 'Desarrollo de Habilidades Técnicas',
      list: [
        'Profundice en el dominio de nuevas tecnologías',
        'implementación de soluciones más eficientes',
      ],
    },

    {
      title: 'Liderazgo y Gestión de Equipos',
      list: [
        'Asumí la responsabilidad de guiar y coordinar las actividades del equipo.',
        'resolver conflictos, motivar al equipo',
      ],
    },

    {
      title: 'Mejora de Habilidades Blandas',
      list: [
        'Comunicación efectiva, la gestión del tiempo y la resolución de problemas.',
        'Aprendí a transmitir ideas de manera clara y persuasiva',
      ],
    },
    {
      title: 'Nuevos Compromisos',
      list: [
        'la gestión de recursos, toma de decisiones estratégicas y la resolución de problemas complejos en tiempo real.',
      ],
    },
  ];

  const settings = {
    dots: true,
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 1000,
    centerPadding: '50px',
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3,
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
          slidesToShow: 1,
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
