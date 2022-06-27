import { Card } from 'react-bootstrap';

export const TransportCard = ({ title, models, image }) => {
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={image}
        className="transport-card-img"
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <ul>
          {
            models.map((model, index) => <li key={index}>{model}</li>)
          }
        </ul>
      </Card.Body>
    </Card>
  );
};