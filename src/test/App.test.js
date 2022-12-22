
import * as React from 'react';
// import { render, screen } from '@testing-library/react';
import { render, screen } from './test-utils';
import App from '../App';

// const { render, screen } = require('@testing-library/react');


describe('App', () => {
    it('renders without crashing', () => {
        render(<App />);

        screen.debug();
    });
});
