import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Items from './Items';
import Cart from './Cart';
import Navigation from './Navigation';
import Loader from './Loader';
import Notify from './Notify';

const App = () => {
  console.log('App Re-rendered');
  return (
    <Router>
      <Container fluid className="p-0">
        <Navigation/>
        <Loader/>
        <Notify/>
        <Switch>
          <Route exact path="/items">
            <Items/>
          </Route>
          <Route exact path="/cart">
            <Cart/>
          </Route>
          <Redirect to="/items"/>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
