import HeroBg from '../assets/images/h1_hero.jpg.webp';
import { Button } from 'react-bootstrap';

export const Header = () => {
  return (
    <>
      <header
        style={{ backgroundImage: `url(${HeroBg})` }}>
        <div>
          <h1 className="fw-bold">
            ავტომობილებისა და <br />
            ტვირთების ტრანსპორტირება
          </h1>
          <p className="mt-4">
            უსაფრთხო გადაზიდვა, <br />
            ექსპორტი და იმპორტი
          </p>
          <Button
            href="#"
            variant='primary px-5'>
            კონტაქტი
          </Button>
        </div>
      </header>
    </>
  );
};