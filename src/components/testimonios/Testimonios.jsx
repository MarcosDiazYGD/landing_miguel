import carolinaAvatar from '../../assets/img/avatars/Carolina.jpeg';
import marianaAvatar from '../../assets/img/avatars/Mariana.jpeg';
import IanAvatar from '../../assets/img/avatars/Ian.jpeg';
import Slider from 'react-slick';
import UserPerfil from '../liderazgo/UserPerfil';

const infoCard = [
  {
    avatar: carolinaAvatar,
    name: 'Carolina Bueno Pineda',
    title: 'Consultora de monitoreo y stakeholders',
    parragraph:
      'Su conocimiento, proactividad y comunicación clara fueron fundamentales para el éxito del proyecto de scraper. Además, su capacidad para resolver problemas de manera creativa nos permitió superar obstáculos y agregar detalles de calidad que no habíamos contemplado. Gracias al desarrollo que realizó Migue, hemos logrado una reducción del 30% en el tiempo de ingestiones a Clarity, permitiendo así una mejora significativa en la eficiencia operativa del área, contribuyendo directamente al cumplimiento del objetivo estratégico de la empresa y del área para el primer trimestre: Cumplimos con la optimización de procesos presupuestada',
  },
  {
    avatar: IanAvatar,
    name: 'Ian David Colina Hernández',
    title: 'Experto Cuantitativo',
    parragraph:
      'El enfoque de Miguel a la innovación constante ha sido una herramienta muy útil para la nueva metodología ya que, nos permite tener un enfoque contemporáneo que compita con todas las metodologías recientes realizadas por otras empresas y nos permite estar un paso delante de ellas, además, de su atención constante y liderazgo con el equipo de Tech. El apoyo de Miguel ha beneficiado la NM debido a que nos ha permitido optimizar el tiempo de ejecución del mismo y, entender mejor el funcionamiento del código que hemos creado. Esto beneficia específicamente al equipo cuantitativo ya que, podemos tener un conocimiento más profundo de cuáles son las herramientas que mejor funcionan con la programación que hemos realizado, además, al tener el código optimizado, requerimos menos tiempo para poder correr el código del que necesitábamos inicialmente. Los cambios específicos son, primero, en la corrida del código, ya que, este tiene una duración menor a la inicial, y segundo, en la eficiencia, ya que, la explicación de Miguel sobre la forma de procesar el código internamente, nos ha podido facilitar el entendimiento sobre cuales son las mejores herramientas para obtener mejores resultados.',
  },
  {
    avatar: marianaAvatar,
    name: 'Mariana Barreto',
    title: 'Consultora de Innovación',
    parragraph:
      'En mi experiencia trabajando con Miguel lo considero una persona muy enfocada, pudo liderar transversalmente al equipo para mantenernos en línea con los tiempos de desarrollo y así poder cumplir con cada sprint. Resalto su organización y planeación, comunicación clara, su capacidad de delegar y asignar tareas al equipo con tiempos definidos de entrega y sobretodo su entendimiento profundo de la lógica de la plataforma y sus conocimientos de desarrollo para lograr cada función. La comunicación fue constante, con seguimientos semanales y reuniones adicionales para poder definir bien los requerimientos a desarrollar. Miguel estuvo conectado con el proyecto desde el inicio, haciendo preguntas importantes para atar cabos sueltos en el funcionamiento de la plataforma, sugiriendo vías u opciones para lograr los requerimientos teniendo en cuenta tanto las funcionalidades que esperábamos como la realidad de la planeación que debíamos cumplir. Ayudó al equipo a mantener un norte claro a lo largo del desarrollo del software.',
  },
];

export const Testimonios = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className='liderazgo'>
      <h2>Testimonios de consultores y expertos</h2>
      <Slider {...settings}>
        {infoCard.map((user, i) => (
          <div key={i}>
            <div className='container'>
              <div>
                <UserPerfil
                  avatar={user.avatar}
                  name={user.name}
                  description={user.title}
                />
              </div>

              <div>
                <p>{user.parragraph}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};
