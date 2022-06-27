import { Card } from 'react-bootstrap';

export const HeaderCard = ({ title, body, image, list }) => {
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
        <Card.Title className={list ? 'text-primary' : ''}>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        {
          list && (
            <ul className="card-ul">
              {list.map((item, index) => <li key={index}><small>{item}</small></li>)}
            </ul>
          )
        }
      </Card>
    </>
  );
};