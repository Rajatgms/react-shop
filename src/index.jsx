import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';
import App from './components/App';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducers';
import { Provider } from 'react-redux';

const devToolMiddleware = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devToolMiddleware);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
