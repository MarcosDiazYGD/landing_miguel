import jeyssonAvatar from '../../assets/img/avatars/jey.jpg';
import marcosAvatar from '../../assets/img/avatars/marcos.jpg';
import jhonAvatar from '../../assets/img/avatars/jhon.jpg';
import jhonVideo from '../../assets/media/jhon.mp4';
import jeyssonVideo from '../../assets/media/Jeysson.mp4';
import File404 from '../../assets/img/File404.avif';
import UserPerfil from './UserPerfil';
import Slider from 'react-slick/lib/slider';

export const Liderazgo = () => {
  const team = [
    {
      avatar: jeyssonAvatar,
      name: 'Jeysson Henriquez',
      description: `Desarrollador Front-End Senior.`,
      video: jeyssonVideo,
    },

    {
      avatar: jhonAvatar,
      name: 'Jhonattan Gómez',
      description: `Analista de Soporte.`,
      video: jhonVideo,
    },
    {
      avatar: marcosAvatar,
      name: 'Marcos Alape',
      description: `Desarrollador Front-End Junior.`,
      video: File404,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className='liderazgo'>
      <h2>Liderazgo y gestión de equipo</h2>
      <Slider {...settings}>
        {team.map((user, i) => (
          <div key={i}>
            <div className='container'>
              <div>
                <UserPerfil
                  avatar={user.avatar}
                  name={user.name}
                  description={user.description}
                />
              </div>

              <div>
                <video controls>
                  <source src={user.video} type='video/mp4' />
                </video>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};
