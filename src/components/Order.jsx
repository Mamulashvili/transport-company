import { Col, Container, Row } from 'react-bootstrap';
import order from '../assets/images/clipboard.png';
import delivery from '../assets/images/shipped.png';
import payment from '../assets/images/wallet.png';

export const Order = () => {
  return (
    <div className="order-item-wrapper">
      <h3 className="mb-4 mt-3">შეუკვეთეთ მარტივად</h3>
      <Row>
        <Col>
          <OrderItem
            title="შეკვეთა"
            desc="დაგვირეკეთ ნომერზე 555 555 555 და ჩვენ დაგეხმარებით შეკვეთაში"
            image={order}
          />
        </Col>
        <Col>
          <OrderItem
            title="ჩაბარება"
            desc="ტვირთების აღების შემდეგ თქვენს შეკვეთას სასურველ მისამართზე დროულად მოგაწვდით"
            image={delivery}
          />
        </Col>
        <Col>
          <OrderItem
            title="გადახდა"
            desc="მას შემდეგ, რაც ჩაიბარებთ ტვირთს, გადაიხდით ნაღდი ან უნაღდო ანგარიშსწორებით. ჩვენი ფასები მისაღებია და შეღავათიანი."
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