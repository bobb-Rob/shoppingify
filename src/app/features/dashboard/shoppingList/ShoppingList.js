import React from 'react';
import CountChange from './shoppingListcomponents/CountChange';
import ShopListHeader from './shoppingListcomponents/ShopListHeader';

const ShoppingList = () => (
  <div className="shopping-list border mt-5">
    <ShopListHeader />
    <CountChange />
  </div>
);

export default ShoppingList;
