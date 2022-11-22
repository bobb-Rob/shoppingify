import React, { createContext, useState } from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';

export const UserContext = createContext();

const DataProvider = ({ children }) => {
  const [cartBtnClicked, setCartBtnClicked] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const dispatch = useDispatch();
  return (
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
  );
};

export default DataProvider;

DataProvider.propTypes = {
  children: propTypes.node.isRequired,
};
