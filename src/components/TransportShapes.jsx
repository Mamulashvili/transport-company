import { Container } from 'react-bootstrap';
import carShapes from '../assets/images/cars.png';
import bikeShapes from '../assets/images/bikes.jpeg';

export const TransportShapes = () => {
  return (
    <Container className="mt-5 pt-5">
      <h3>ჩვენ გთავაზობთ სატრანსპორტო სერვისებს</h3>
      <p>ჩვენი სერვისი მოიცავს ყველანაირი ტიპის ავტომობილის გადაზიდვას</p>

      <figure className="mt-5">
        <img
          className="mw-100"
          src={carShapes}
          alt="Car body shapes"
        />
        <img
          className="w-50 mx-auto"
          src={bikeShapes}
          alt="Bike body shapes"
        />
      </figure>
    </Container>
  );
};