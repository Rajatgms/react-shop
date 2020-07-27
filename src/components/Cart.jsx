import React, { useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import placeOrder from '../API/placeOrder';
import Notification from './Notification';
import Loader from './Loader';

const emptyCartMessage = 'Your cart is empty. Please add items from home page!!!';

const Cart = (props) => {
  const { cart, setCart } = props;
  const [payment, setPayment] = useState(null);
  const [loader, setLoader] = useState(false);
  const subTotal = cart.reduce((sum, cartItem) => {
    return sum + (cartItem.quantity * cartItem.price);
  }, 0);

  const handlePayment = () => {
    setLoader(true);
    placeOrder(true)
      .then(result => {
        setCart([]);
        setPayment(result);
      })
      .catch(error => setPayment(error))
      .finally(() => setLoader(false));
  };

  return (
    <>
      {
        loader ?
          <Loader/> :
          <Container className="d-flex flex-column mt-5">
            {
              payment && payment.status &&
              <Notification variant={payment.status} message={payment.message}/>
            }
            {
              cart && cart.length > 0 ?
                <>
                  <Table variant='light' className="dark" size='sm' className='text-center'>
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
                      <td></td>
                      <td>{subTotal}$</td>
                    </tr>
                    <tr className='table-active'>
                      <td>Shipping</td>
                      <td></td>
                      <td>10$</td>
                    </tr>
                    <tr className='table-active'>
                      <td>Tax(5%)</td>
                      <td></td>
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
                <>
                  {
                    payment === null &&
                    <Notification variant='info' href='/home' message={emptyCartMessage}/>
                  }
                </>
            }
          </Container>
      }
    </>
  );
};

export default Cart;
