import React from 'react';
import { Alert, Button, Container, Table } from 'react-bootstrap';
import placeOrder from '../API/placeOrder';
import { arrayOf, func } from 'prop-types';
import itemShape from '../proptypes/itemShape';

const emptyCartMessage = 'Your cart is empty. Please add items from home page!!!';

const Cart = (props) => {
  const { cart, saveCart, startLoader, notifySuccess, notifyError } = props;
  const subTotal = cart.reduce((sum, cartItem) => {
    return sum + (cartItem.quantity * cartItem.price);
  }, 0);

  const handlePayment = () => {
    startLoader(true);
    placeOrder(false)
      .then(result => {
        saveCart([]);
        notifySuccess(result.message);
      })
      .catch(error => {
        notifyError(error.message);
      })
      .finally(() => startLoader(false));
  };

  console.log('Cart Re-rendered');
  return (
    <Container className="d-flex flex-column mt-5">
      {
        cart && cart.length > 0 ?
          <>
            <Table variant='light' className="dark text-center" size='sm'>
              <thead className='thead-light'>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
              </thead>
              <tbody>
              {
                cart.map(item => (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.quantity * item.price} $</td>
                  </tr>
                ))
              }
              <tr className='table-active'>
                <td>Sub Total</td>
                <td/>
                <td>{subTotal}$</td>
              </tr>
              <tr className='table-active'>
                <td>Shipping</td>
                <td/>
                <td>10$</td>
              </tr>
              <tr className='table-active'>
                <td>Tax(5%)</td>
                <td/>
                <td>{subTotal * 0.05}$</td>
              </tr>
              <tr className='table-info'>
                <td colSpan="2">Total Price</td>
                <td>{subTotal * 1.05 + 10}$</td>
              </tr>
              </tbody>
            </Table>
            <Button variant="primary" size="lg" block onClick={handlePayment}>
              Make Payment
            </Button>
          </> :
          <Alert variant='info' className="text-center">
            <Alert.Link href='/home'>{emptyCartMessage}</Alert.Link>
          </Alert>
      }
    </Container>
  );
};

Cart.propTypes = {
  cart: arrayOf(itemShape).isRequired,
  saveCart: func.isRequired,
  startLoader: func.isRequired,
  notifySuccess: func.isRequired,
  notifyError: func.isRequired,
};

export default Cart;
