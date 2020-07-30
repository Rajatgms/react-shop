import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import ItemsContainer from '../containers/ItemsContainer';
import CartContainer from '../containers/CartContainer';
import NavigationContainer from '../containers/NavigationContainer';
import LoaderContainer from '../containers/LoaderContainer';
import NotifyContainer from '../containers/NotifyContainer';

const App = () => {
  console.log('App Re-rendered');
  return (
    <Router>
      <Container fluid className="p-0">
        <NavigationContainer/>
        <LoaderContainer/>
        <NotifyContainer/>
        <Switch>
          <Route exact path="/items">
            <ItemsContainer/>
          </Route>
          <Route exact path="/cart">
            <CartContainer/>
          </Route>
          <Redirect to="/items"/>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
