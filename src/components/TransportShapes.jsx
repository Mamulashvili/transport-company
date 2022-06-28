import carShapes from '../assets/images/cars.png';
import bikeShapes from '../assets/images/bikes.jpeg';

export const TransportShapes = ({ t }) => {
  return (
    <div className="mt-5 pt-5">
      <h3>{t("offeredServices")}</h3>
      <p className="text-primary">{t("offeredServicesDetails")}</p>

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