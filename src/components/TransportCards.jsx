import { Row, Col } from 'react-bootstrap';
import { TransportCard } from './TransportCard';
import bmw_merc from '../assets/images/bmwmerc.jpeg';
import skoda_reno from '../assets/images/skodareno.jpeg';
import toyota_ford from '../assets/images/toyford.jpeg';
import kia_hiund from '../assets/images/kiahiund.jpeg';
import data from '../data/TransportCars.json';

export const TransportCards = ({ t, language }) => {
  const carImages = {
    bmw_merc,
    skoda_reno,
    toyota_ford,
    kia_hiund
  };

  return (
    <div className="mt-5 pt-5">
      <h3>{t("carsFromGermany")}</h3>
      <p className="mb-4 text-primary">{t("importCars")}</p>
      <Row>
        {
          Object.values(data).map(({ title, models, image }, index) => {
            return (
              <Col
                key={index}
                md="3"
                sm="6"
                xs="12"
                className='mb-3 car-card'
              >
                <Col
                  md="12"
                  className="h-100 card-holder"
                >
                  <TransportCard
                    title={title}
                    models={models}
                    image={carImages[ image ]}
                  />
                </Col>
              </Col>
            );
          })
        }
      </Row>
    </div>
  );
};