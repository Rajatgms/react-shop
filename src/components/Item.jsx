import React from 'react';
import { Button, ButtonGroup, Card } from 'react-bootstrap';
import itemShape from '../proptypes/itemShape';
import { useDispatch } from 'react-redux';
import { addCart, removeCart } from '../slice/cartSlice';

const Item = (props) => {
  const { item } = props;
  const dispatch = useDispatch();

  const handleAddItem = () => dispatch(addCart(item));
  const handleRemoveItem = () => dispatch(removeCart(item));

  console.log('Item Re-rendered');
  return (
    <Card className="my-3 mx-0" bg="light">
      <Card.Img src={`images/${item.name.toLowerCase()}.svg`} className="mx-auto w-25 pt-3"/>
      <Card.Body className="text-center">
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>Price - {item.price}$</Card.Text>
      </Card.Body>
      <Card.Footer>
        <ButtonGroup className="d-flex justify-content-around" aria-label="Number of items selector">
          <Button variant="primary" onClick={handleAddItem}>+</Button>
          <Button variant="primary" onClick={handleRemoveItem}>-</Button>
        </ButtonGroup>
      </Card.Footer>
    </Card>
  );
};

Item.propTypes = {
  item: itemShape.isRequired,
};

export default Item;
