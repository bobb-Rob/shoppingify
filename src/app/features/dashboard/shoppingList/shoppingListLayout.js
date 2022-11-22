/* eslint-disable */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux/es/exports';
import ShoppingListHolder from './shoppingListHolder';
import AddItemForm from '../items/AddItemForm/AddItem';
import ItemDetails from '../items/itemDetails';
import { UserContext } from '../../../DataProvider';

const ShoppingListLayout = ({ classNam }) => {
  const isDisplayed = useSelector((state) => state.shoppingList.isDisplayed);
  console.log(isDisplayed);
  const { cartBtnClicked } = useContext(UserContext);
  // data from context Api
  return (
    <section className={`Items ${cartBtnClicked && classNam } hidden md:block`}>
      {isDisplayed === 'shoppingList' && <ShoppingListHolder />}
      {isDisplayed === 'addItemForm' && <AddItemForm />}
      {isDisplayed === 'showDetails' && <ItemDetails />}
    </section>
  );
};

export default ShoppingListLayout;

ShoppingListLayout.defaultProps = {
  classNam: '',
};

ShoppingListLayout.propTypes = {
  classNam: propTypes.string,
};
