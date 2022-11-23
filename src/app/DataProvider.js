import React, { createContext, useState } from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';

export const UserContext = createContext();
export const AppState = createContext();

const DataProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [cartBtnClicked, setCartBtnClicked] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [isDisplayed, setIsDisplayed] = useState('shoppingList');
  const [itemDetails, setItemDetails] = useState({});

  const displayItemDetails = (item) => {
    setItemDetails(item);
    setIsDisplayed('showItemDetails');
  };

  const displayShoppingList = () => {
    setIsDisplayed('shoppingList');
  };

  const displayAddItemForm = () => {
    setIsDisplayed('addItemForm');
  };

  return (
    <AppState.Provider
      value={{
        isDisplayed,
        itemDetails,
        displayItemDetails,
        displayShoppingList,
        displayAddItemForm,
      }}
    >
      <UserContext.Provider
        value={{
          dispatch,
          cartBtnClicked,
          setCartBtnClicked,
          windowSize,
          setWindowSize,
        }}
      >
        {children}
      </UserContext.Provider>
    </AppState.Provider>
  );
};

export default DataProvider;

DataProvider.propTypes = {
  children: propTypes.node.isRequired,
};
