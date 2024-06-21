import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function IndicatorCard() {
  return (
    <div className='indicador'>
      <div>
        <FontAwesomeIcon icon={faChartSimple} />
      </div>
      <div>
        <p>3.0</p>
      </div>
      <div>
        <p>CUMPLIMIENTO CRONOGRAMA DE DESARROLLO</p>
      </div>
    </div>
  );
}

export default IndicatorCard;
