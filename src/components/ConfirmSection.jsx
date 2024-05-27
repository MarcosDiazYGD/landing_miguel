import img from '../assets/img/team.svg';

function ConfirmSection() {
  return (
    <section className='Confirm section'>
      <p>
        He cumplido con todos estos objetivos en mi cargo actual y, tras siete
        meses en esta posición, incluidos tres meses de experiencia piloto como
        líder, me presento ante ustedes para exponer mi caso de ascenso al
        puesto de experto del área.
      </p>

      <img src={img} />
    </section>
  );
}

export default ConfirmSection;
