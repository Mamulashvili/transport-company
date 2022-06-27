import carShapes from '../assets/images/cars.png';
import bikeShapes from '../assets/images/bikes.jpeg';

export const TransportShapes = () => {
  return (
    <div className="mt-5 pt-5">
      <h3>ჩვენ გთავაზობთ სატრანსპორტო სერვისებს</h3>
      <p className="text-primary">ჩვენი სერვისი მოიცავს ყველანაირი ტიპის ავტომობილის გადაზიდვას</p>

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
    </div>
  );
};