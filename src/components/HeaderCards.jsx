import { Container, Row, Col } from 'react-bootstrap';
import { HeaderCard } from './HeaderCard';
import data from '../data/cardsData.json';
import search from '../assets/images/search.png';
import star from '../assets/images/star.png';
import docs from '../assets/images/docs.png';
import lorry from '../assets/images/lorry.png';

export const HeaderCards = () => {
  const images = { search, star, docs, lorry };

  return (
    <>
      <Container className='header-cards-wrapper'>
        <Row>
          {
            Object.values(data).map((item, index) => {
              return (
                <Col
                  key={index}
                  md="3"
                  sm="6"
                  xs="12"
                  className='mb-3'
                >
                  <Col
                    md="12"
                    className="h-100"
                  >
                    <HeaderCard
                      title={item.title}
                      body={item.body}
                      image={images[ item.image ]}
                    />
                  </Col>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </>
  );
};