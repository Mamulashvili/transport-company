import { Col, Container, Row } from 'react-bootstrap';
import order from '../assets/images/clipboard.png';
import delivery from '../assets/images/shipped.png';
import payment from '../assets/images/wallet.png';

export const Order = ({ t }) => {
  return (
    <div className="order-item-wrapper">
      <h3 className="mb-4 mt-3">შეუკვეთეთ მარტივად</h3>
      <Row>
        <Col>
          <OrderItem
            title={t("order")}
            desc={t("orderDesc")}
            image={order}
          />
        </Col>
        <Col>
          <OrderItem
            title={t("completeOrder")}
            desc={t("completeOrderDesc")}
            image={delivery}
          />
        </Col>
        <Col>
          <OrderItem
            title={t("payment")}
            desc={t("paymentDesc")}
            image={payment}
          />
        </Col>
      </Row>
    </div>
  );
};

const OrderItem = ({ title, desc, image }) => {
  return (
    <Container>
      <figure className="order-item">
        <img src={image} alt="Order" />
        <figcaption className='mt-2 fw-bold'>{title}</figcaption>
        <small>
          {desc}
        </small>
      </figure>
    </Container>
  );
};