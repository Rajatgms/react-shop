import React from 'react';
import { Badge, Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const cart = useSelector(state => state.cart);
  const cartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  console.log('Navigation Re-rendered');
  return (
    <Navbar bg="info" expand>
      <Link to="/">
        <Navbar.Brand>
          <img
            src="images/grocery-cart.svg"
            width="30"
            height="30"
            alt="React Shop"
          /> React Shop</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/items" className="nav-link">Home</Link>
        </Nav>
        <Nav>
          <Link to="/cart">
            <Button variant="tertiary">
              <Badge variant="light">{cartItems}</Badge>
              <img
                src="images/cart.svg"
                width="30"
                height="30"
                alt="Cart"
              />
            </Button>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
