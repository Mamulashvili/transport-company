import { Container } from 'react-bootstrap';

export const Footer = () => {
  return (
    <footer className="bg-dark p-4 mt-5">
      <Container className='d-flex justify-content-between'>
        <p>
          კომპანიის სახელი
        </p>
        <p>
          +49 555 555 555
        </p>
      </Container>
    </footer>
  );
};