import { Container } from 'react-bootstrap';
import { BRAND_NAME, PHONE_NUMBER } from "../constants/brand";

export const Footer = () => {
  return (
    <footer className="bg-dark p-4 mt-5">
      <Container className='d-flex justify-content-between'>
        <p>{BRAND_NAME}</p>
        <p>{PHONE_NUMBER}</p>
      </Container>
    </footer>
  );
};