import * as React from 'react';
// import { render, screen } from '@testing-library/react';
import { render } from './test-utils';
import App from '../App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });
});
