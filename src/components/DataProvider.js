import React, { createContext } from 'react';
import { useDispatch } from 'react-redux';
// import { registerUser } from '../redux/RSidebarReducers/user/userSlice';

export const UserContext = createContext();

const DataProvider = ({children}) => {
  const dispatch = useDispatch();
  return (
    <UserContext.Provider value={{
      dispatch,
    }}>
      {children}
    </UserContext.Provider>
  );
};

export default DataProvider;
