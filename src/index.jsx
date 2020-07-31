import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';
import App from './components/App';
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers/rootReducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const devToolMiddleware = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, compose(applyMiddleware(thunk), devToolMiddleware));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
