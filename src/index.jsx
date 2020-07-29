import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';
import App from './components/App';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducers';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
