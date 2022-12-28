import React from 'react';
import { render } from '@testing-library/react';
import {DataProvider } from '../app/DataProvider';
import { Provider } from 'react-redux';
import store from '../app/store';

const AllTheProviders = ({children}) => {
  return (
    <Provider store={store}>
      <DataProvider>
        {children}
      </DataProvider>
    </Provider>
  )
}

const customRender = (ui, options) =>
  render(ui, {wrapper: AllTheProviders, ...options});

// re-export everything
export * from '@testing-library/react';

// override render method
export {customRender as render}