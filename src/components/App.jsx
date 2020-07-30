import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import fetchMarketItems from '../API/fetchMarketItems';
import Navigation from './Navigation';
import Items from './Items';
import Cart from './Cart';
import Loader from './Loader';
import Notify from './Notify';

const App = () => {
  const [cart, setCart] = useState(() => {
    const localCart = localStorage.getItem('cart');
    return localCart ? JSON.parse(localCart) : [];
  });
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(false);
  const [notify, setNotify] = useState(null);

  useEffect(() => {
    setLoader(true);
    fetchMarketItems().then((result) => {
      setItems(result);
      setLoader(false);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addItem = (item) => {
    const itemExist = cart.find(cartItem => cartItem.name === item.name);
    if (itemExist) {
      itemExist.quantity++;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };
  const removeItem = (item) => {
    const itemExist = cart.find(cartItem => cartItem.name === item.name);
    if (itemExist && itemExist.quantity > 1) {
      itemExist.quantity--;
      setCart([...cart]);
    } else {
      setCart(cart.filter(cartItem => cartItem.name !== item.name));
    }
  };

  console.log('App Re-rendered');
  return (
    <Router>
      <Container fluid className="p-0">
        <Navigation cart={cart}/>
        {loader && <Loader/>}
        {notify && <Notify variant={notify.variant} message={notify.message}/>}
        <Switch>
          <Route exact path="/items">
            <Items items={items} addItem={addItem} removeItem={removeItem}/>
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart} setCart={setCart} setLoader={setLoader} setNotify={setNotify}/>
          </Route>
          <Redirect to="/items"/>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
