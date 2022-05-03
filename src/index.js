import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';

import { Provider } from 'react-redux';

import { createStore } from 'redux';

import allReducers from './reducers';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

