/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';
import ShoppingListHolder from './shoppingList/shoppingListHolder';
import AddItemForm from './AddItemForm/AddItem';


const ItemSection = () => {
  const isDisplayed = useSelector((state) => state.isDisplayedReducer.isDisplayed);
  console.log(isDisplayed);
  return (
    <section className="Items ">
      {isDisplayed === 'shoppingList' && <ShoppingListHolder />} 
      {isDisplayed === 'addItemForm' && <AddItemForm />}      
    </section>
  );
};

export default ItemSection;
