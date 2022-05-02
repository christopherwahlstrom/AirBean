import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const container = document.getElementById('root');
const root = createRoot(container);

const store = createStore(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

