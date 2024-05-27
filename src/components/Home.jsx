import banner from '../assets/img/aro_home.png';

function Home() {
  return (
    <section className='Home'>
      <img src={banner} className='banner' />

      <div className='sub-1'>
        <p>Miguel Moreno Villanueva</p>
        <div></div>
      </div>
      <h1 className='title'>
        Caso de ascenso a experto de desarrollo tecnológico
      </h1>

      <div className='sub-2'>
        <p className='sub-2'>Desarrollador Senior</p>
        <div></div>
      </div>
    </section>
  );
}

export default Home;
