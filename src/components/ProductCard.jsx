import { useState } from 'react';
import { Image, Button, Card, Container } from 'react-bootstrap';
import { useAppDispatch } from '../hooks/hooks';
import { addToCart } from '../store/productSlice';

function ProductCard({ product }) {
  const { id, title, price, description, image } = product;
  const [isExpanded, setIsExpanded] = useState(false);
  const dispatch = useAppDispatch();

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const MAX_TITLE_LENGTH = 50;
  const MAX_DESCRIPTION_LENGTH = 100;

  return (
    <Card style={{ width: '18rem' }} key={id}>
      <Image src={image} fluid rounded style={{ height: "300px" }} />
      <Card.Body>
        <Card.Title>
          {title.length <= MAX_TITLE_LENGTH
            ? title
            : title.slice(0, MAX_TITLE_LENGTH - 3) + "..."
          }
        </Card.Title>
        <Card.Text>
          {isExpanded || description.length <= MAX_DESCRIPTION_LENGTH
            ? description
            : description.slice(0, MAX_DESCRIPTION_LENGTH - 3) + '...'
          }
          <br />
          {description.length > MAX_DESCRIPTION_LENGTH && (
            <Card.Link onClick={toggleDescription}>
              {isExpanded ? 'Read Less' : 'Read More'}
            </Card.Link>
          )}
        </Card.Text>
        <Button variant="primary" onClick={() => dispatch(addToCart(product))}>{price} €</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
