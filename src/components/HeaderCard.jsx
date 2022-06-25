import { Card } from 'react-bootstrap';

export const HeaderCard = ({ title, body, image }) => {
  return (
    <>
      <Card
        body
        className="p-2 h-100"
      >
        {
          image &&
          <img
            className="card-icon mb-3"
            src={image}
            alt={title}
          />
        }
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card>
    </>
  );
};