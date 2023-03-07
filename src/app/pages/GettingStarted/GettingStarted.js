import React from 'react';
import categories from './categories';
import WelcomePage from './Welcome';

const GettingStarted = () => (
  <div>
    <WelcomePage username="robertson" categories={categories} />
  </div>
);

export default GettingStarted;
