import React from 'react';
import { Button, ButtonGroup, Card } from 'react-bootstrap';
import { arrayOf, func } from 'prop-types';
import itemShape from '../proptypes/itemShape';

const Item = (props) => {
  const { item, cart, updateCart } = props;
  const addItem = (item) => {
    const itemExist = cart.find(cartItem => cartItem.name === item.name);
    if (itemExist) {
      itemExist.quantity++;
      updateCart([...cart]);
    } else {
      updateCart([...cart, { ...item, quantity: 1 }]);
    }
  };
  const removeItem = (item) => {
    const itemExist = cart.find(cartItem => cartItem.name === item.name);
    if (itemExist && itemExist.quantity > 1) {
      itemExist.quantity--;
      updateCart([...cart]);
    } else {
      updateCart(cart.filter(cartItem => cartItem.name !== item.name));
    }
  };
  return (
    <Card className="my-3 mx-0" bg="light">
      <Card.Img src={`images/${item.name.toLowerCase()}.svg`} className="mx-auto w-25 pt-3"/>
      <Card.Body className="text-center">
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>Price - {item.price}$</Card.Text>
      </Card.Body>
      <Card.Footer>
        <ButtonGroup className="d-flex justify-content-around" aria-label="Number of items selector">
          <Button variant="primary" onClick={() => addItem(item)}>+</Button>
          <Button variant="primary" onClick={() => removeItem(item)}>-</Button>
        </ButtonGroup>
      </Card.Footer>
    </Card>
  );
};

Item.propTypes = {
  item: itemShape.isRequired,
  cart: arrayOf(itemShape).isRequired,
  updateCart: func.isRequired,
};

export default Item;
