/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';
import ShoppingListHolder from './shoppingList/shoppingListHolder';
import AddItemForm from './AddItemForm/AddItem';
import ItemDetails from './itemDetails/itemDetails';

const shoppingListLayout = () => {
  const isDisplayed = useSelector(
    (state) => state.RSidebarReducers.isDisplayed
  );
  console.log(isDisplayed);
  return (
    <section className="Items ">
      {isDisplayed === 'shoppingList' && <ShoppingListHolder />}
      {isDisplayed === 'addItemForm' && <AddItemForm />}
      {isDisplayed === 'showDetails' && <ItemDetails />}
    </section>
  );
};

export default shoppingListLayout;
