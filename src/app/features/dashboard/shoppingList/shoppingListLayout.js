/* eslint-disable */
import React, { useContext } from 'react';
import propTypes from 'prop-types';
import ShoppingListHolder from './shoppingListHolder';
import AddItemForm from '../items/AddItemForm/AddItem';
import ItemDetails from '../items/itemDetails';
import { UserContext, AppState } from '../../../DataProvider';
import Auth from '../../sessions/Auth';

const ShoppingListLayout = ({ classNam }) => {
  const { cartBtnClicked } = useContext(UserContext);
  const { isDisplayed } = useContext(AppState);
  
  return (
    <section className={`Items ${cartBtnClicked && classNam } hidden md:block`}>
      {isDisplayed === 'shoppingList' && <ShoppingListHolder />}
      {isDisplayed === 'addItemForm' && <AddItemForm />}
      {isDisplayed === 'showItemDetails' && <ItemDetails />}
      {isDisplayed === 'showAuthPage' && <Auth />}
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
