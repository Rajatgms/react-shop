import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';
import App from './components/App';
import rootReducer from './slice/rootReducers';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: rootReducer
});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
