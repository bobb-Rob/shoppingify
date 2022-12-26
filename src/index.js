import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';
import DataProvider from './app/DataProvider';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <DataProvider>
      <App />
    </DataProvider>
  </Provider>,
  // </React.StrictMode>
);
