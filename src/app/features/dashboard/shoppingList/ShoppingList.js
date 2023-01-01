import React from 'react';
import ShopListHeader from './shoppingListcomponents/ShopListHeader';
import ShopListItem from './shoppingListcomponents/ShopListItem';

const ShoppingList = () => (
  <div className="shopping-list border mt-5">
    <ShopListHeader />
    <ShopListItem />
  </div>
);

export default ShoppingList;
