import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const KPI = () => {
  return (
    <section className="kpi_section">
      <h2>Resultadso de mis KPI actuales</h2>

      <section className="cards_kpi">
        <div className="card_kpi">
          <div>
            <FontAwesomeIcon icon={faChartSimple} />
          </div>
          <span>3.0</span>
          <p>CUMPLIMIENTO DEL CRONOGRAMA</p>
        </div>
        <div className="card_kpi">
          <div>
            <FontAwesomeIcon icon={faChartSimple} />
          </div>

          <span>3.0</span>
          <p>CUMPLIMIENTO DE LOS DESARROLLOS</p>
        </div>
        <div className="card_kpi">
          <div>
            <FontAwesomeIcon icon={faChartSimple} />
          </div>
          <span>2.9</span>
          <p>SOPORTES PROMEDIO DE SOFTWARE PROPIOS</p>
        </div>
      </section>
    </section>
  );
};
