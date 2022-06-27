import { Col, Container, Row } from 'react-bootstrap';
import { HeaderCard } from './HeaderCard';
import data from '../data/cargo.json';

export const Cargo = () => {
  return (
    <Container>
      <h3 className="my-5">ტვირთების ტრანსპორტირება</h3>
      <Row>
        {
          Object.values(data).map((item, index) => {
            return (
              <Col key={index}>
                <HeaderCard
                  title={item.title}
                  body={item.body}
                  list={item.list}
                />
              </Col>
            );
          })
        }
      </Row>
    </Container>
  );
};