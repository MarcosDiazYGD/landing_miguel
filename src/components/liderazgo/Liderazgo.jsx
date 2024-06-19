import jeyssonAvatar from '../../assets/img/avatars/jey.jpg';
import marcosAvatar from '../../assets/img/avatars/marcos.jpg';
import jhonAvatar from '../../assets/img/avatars/jhon.jpg';

import jhonVideo from '../../assets/media/jhon.mp4';
import marcosVideo from '../../assets/media/marcos.mp4';

import UserPerfil from './UserPerfil';
import Slider from 'react-slick/lib/slider';

export const Liderazgo = () => {
  const team = [
    {
      avatar: marcosAvatar,
      name: 'Marcos Alape',
      description: `Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.`,
      video: marcosVideo,
    },

    {
      avatar: jeyssonAvatar,
      name: 'Jeysson Henriquez',
      description: `Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.`,
      video: jhonVideo,
    },

    {
      avatar: jhonAvatar,
      name: 'Jhonattan Gómez',
      description: `Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.`,
      video: jhonVideo,
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
