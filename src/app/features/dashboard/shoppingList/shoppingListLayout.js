/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';
import ShoppingListHolder from './shoppingListHolder';
import AddItemForm from '../items/AddItemForm/AddItem';
import ItemDetails from '../items/itemDetails';

const shoppingListLayout = () => {
  const isDisplayed = useSelector(
    (state) => state.shoppingList.isDisplayed
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
