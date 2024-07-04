import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function IndicatorCard({ puntaje, text }) {
  return (
    <div className='indicador'>
      <div>
        <FontAwesomeIcon icon={faChartSimple} />
      </div>
      <div>
        <p>{puntaje}</p>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default IndicatorCard;
