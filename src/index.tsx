/* eslint-disable prettier/prettier */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

const newLocal = document.getElementById('root');
const root = ReactDOM.createRoot(newLocal);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
